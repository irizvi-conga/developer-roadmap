import { MoreVertical, Play, Trash2 } from 'lucide-react';
import { useRef, useState } from 'react';
import { useOutsideClick } from '../../hooks/use-outside-click';
import { useKeydown } from '../../hooks/use-keydown';
import { useToast } from '../../hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../stores/query-client';
import { httpDelete } from '../../lib/query-http';

type AIQuizActionsType = {
  quizSlug: string;
  onDeleted?: () => void;
};

export function AIQuizActions(props: AIQuizActionsType) {
  const { quizSlug, onDeleted } = props;

  const toast = useToast();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const { mutate: deleteQuiz, isPending: isDeleting } = useMutation(
    {
      mutationFn: async () => {
        return httpDelete(`/v1-delete-ai-quiz/${quizSlug}`);
      },
      onSuccess: () => {
        toast.success('Quiz deleted');
        queryClient.invalidateQueries({
          predicate: (query) => query.queryKey?.[0] === 'user-ai-quizzes',
        });
        onDeleted?.();
      },
      onError: (error) => {
        toast.error(error?.message || 'Failed to delete quiz');
      },
    },
    queryClient,
  );

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
  });

  useKeydown('Escape', () => {
    setIsOpen(false);
  });

  return (
    <div className="relative h-full" ref={dropdownRef}>
      <button
        className="h-full text-gray-400 hover:text-gray-700"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
      >
        <MoreVertical size={16} />
      </button>

      {isOpen && (
        <div className="absolute top-8 right-0 z-10 w-48 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg">
          <a
            href={`/ai/quiz/${quizSlug}`}
            className="flex w-full items-center gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
          >
            <Play className="h-3.5 w-3.5" />
            Take Quiz
          </a>
          {!isConfirming && (
            <button
              className="flex w-full items-center gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70"
              onClick={() => setIsConfirming(true)}
              disabled={isDeleting}
            >
              {!isDeleting ? (
                <>
                  <Trash2 className="h-3.5 w-3.5" />
                  Delete Quiz
                </>
              ) : (
                'Deleting...'
              )}
            </button>
          )}

          {isConfirming && (
            <span className="flex w-full items-center justify-between gap-1.5 p-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-black disabled:cursor-not-allowed disabled:opacity-70">
              Are you sure?
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsConfirming(false);
                    deleteQuiz();
                  }}
                  disabled={isDeleting}
                  className="text-red-500 underline hover:text-red-800"
                >
                  Yes
                </button>
                <button
                  onClick={() => setIsConfirming(false)}
                  className="text-red-500 underline hover:text-red-800"
                >
                  No
                </button>
              </div>
            </span>
          )}
        </div>
      )}
    </div>
  );
}
