//hook
import { useCallback } from 'react';
import { useSetDraft } from "../store/tui";

let nextId = 100;
export const useAddTodo = () => {
    const setDraft = useSetDraft();
    return useCallback((title) => {
        setDraft((draft) => {
            draft.todos.push({
                id: nextId++,
                title,
            });
        });
    }, [setDraft])
}
