import React from 'react';

import { useTodoList } from '../../hooks/useTodoList';
import { useQuery } from '../../hooks/useQuery';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';

const TodoList = () => {
    const { getQuery, setQuery } = useQuery();
    const todos = useTodoList();
    return (
        <div>
            <ul>
                {todos.map(({ id, title, completed }) => (
                    <TodoItem key={id} id={id} title={title} completed={completed} />
                ))}
                <NewTodo />
            </ul>
            <div>
                Highlight Query for incomplete items:
                <input value={getQuery()} onChange={(e) => setQuery(e.target.value)} />
            </div>
        </div>
    );
};

export default TodoList;
