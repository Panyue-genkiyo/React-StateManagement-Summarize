import { useCallback } from 'react';

import { useSetDraft } from '../store/tui';

export const useToggleTodo = () => {
    const setDraft = useSetDraft();
    return useCallback(
        (id) => {
            setDraft((draft) => {
                const todo = draft.todos.find((todo) => todo.id === id);
                if (todo) todo.completed = !todo.completed;
            });
        },
        [setDraft],
    );
};
