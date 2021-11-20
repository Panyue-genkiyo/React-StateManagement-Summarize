import React from 'react';
import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import { useDispatch, useTrackedState } from "../../store/tr";

const TodoList = () => {

    const dispatch = useDispatch();
    const state = useTrackedState();
    const setQuery = (e) => {
        dispatch({ type: 'SET_QUERY',  query: e.target.value });
    }

    return (
        <div>
           <ul>
               {state.todos.map(({id, title, completed}) => (
                   <TodoItem key={id} id={id} title={title} completed={completed} />
               ))}
               <NewTodo/>
           </ul>
            <div>
                Highlight Query for incomplete items:
                <input value={state.query} onChange={setQuery} />
            </div>
        </div>
    );
};

export default TodoList;
