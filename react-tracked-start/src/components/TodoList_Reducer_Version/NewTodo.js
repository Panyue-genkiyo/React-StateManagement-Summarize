import React, { useState } from 'react';
import { useDispatch } from "../../store/tr";
import { useFlasher } from "../../util";

const NewTodo = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch({type: 'ADD_TODO', title: text});
        setText('');
    }

    return (
        <li ref={useFlasher()}>
            <input
                type={'text'}
                placeholder={'please enter title'}
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addTodo}>add this todo</button>
        </li>
    );
};

export default React.memo(NewTodo);
