import React, { useState } from 'react';

import { useAddTodo } from '../../hooks/useAddTodo';
import { useFlasher } from '../../util';

const NewTodo = () => {
    const addTodo = useAddTodo();
    const [text, setText] = useState('');
    return (
        <li ref={useFlasher()}>
            <input
                value={text}
                placeholder="Enter title..."
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    addTodo(text);
                    setText('');
                }}
            >
                Add
            </button>
        </li>
    );
};

export default React.memo(NewTodo);
