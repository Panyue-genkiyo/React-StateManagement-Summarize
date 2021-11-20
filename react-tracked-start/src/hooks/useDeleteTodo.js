//删除todo
import { useCallback } from 'react';

import { useSetDraft } from '../store/tui'

export const useDeleteTodo = () => {
    const setDraft = useSetDraft();
    return useCallback((id) => {
        setDraft(draft => {
            const index = draft.todos.findIndex(todo => todo.id === id);
            //从该位置删除一个todo
            if(index >= 0) draft.todos.splice(index, 1);
        });
    }, [setDraft])
}
