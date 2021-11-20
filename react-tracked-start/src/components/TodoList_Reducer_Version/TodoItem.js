import React from 'react';
import { useDispatch, useTrackedState } from "../../store/tr";
import {useFlasher} from "../../util";


const renderHighlight = (title, query) => {
    if (!query) return title;
    const index = title.indexOf(query);
    if (index === -1) return title;
    return (
        <>
            {title.slice(0, index)}
            <b>{query}</b>
            {title.slice(index + query.length)}
        </>
    );
};

const TodoItem = ({ id, completed, title }) => {
    const dispatch =  useDispatch();
    const state = useTrackedState();
    const deleteTodo = () => {
        dispatch({
            type: 'DELETE_TODO',
            id,
        });
    }
    return (
        <li ref={useFlasher()}>
            <input
               type="checkbox"
               checked={!!completed}
               onChange={() => {
                   dispatch({
                       type: 'TOGGLE_TODO',
                       id,
                   });
               }}
            />
            <span style={{textDecoration : completed ? 'line-through' : 'none'}}>
                {completed ? title : renderHighlight(title, state.query)}
            </span>
            <button onClick={deleteTodo}>delete</button>
        </li>
    );
};

export default React.memo(TodoItem);
