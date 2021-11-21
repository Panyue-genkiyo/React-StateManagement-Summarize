import React, {memo, useState, useRef, useEffect} from 'react';
import {
    addTodo,
    removeTodo,
    toggleTodo,
    toggleAll,
    clearCompleted,
    completeTodo,
    edit,
    updateTodo
} from '../reducer/todos';
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    return (
        <div>
            <header>
                <h1>Todo App</h1>
                <button onClick={() => dispatch(clearCompleted())}>clear all completed todos</button>
                <button onClick={() => dispatch(toggleAll())}>toggle all todo</button>
            </header>
            <main>
                <ul>
                    {todos.map(t => <TodoItem key={t.id} id={t.id} title={t.title} isEdit={t.isEdit} completed={t.completed} />)}
                </ul>
                <NewTodo/>
            </main>
        </div>
    );
};


const TodoItem =  memo(({ id, completed, title, isEdit}) => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const [updateTitle, setUpdateTitle] = useState(title);

    const onToggle = () => dispatch(toggleTodo(id));
    const onRemove = () => dispatch(removeTodo(id));
    const onComplete = () => dispatch(completeTodo(id));
    const handleChange = (e) => setUpdateTitle(e.target.value);
    const onEdit = (id,state) => dispatch(edit({ id, isEdit: state}));
    const handleEdit = (e) => {
       if(e.key === 'Enter' && updateTitle.trim().length > 0)  {
           console.log(1);
           dispatch(updateTodo({ id, title: updateTitle }));
       }
    }
    const handleBlur = () => {
        if(updateTitle.trim().length > 0) {
            dispatch(updateTodo({ id, title: updateTitle }));
        }else{
            alert('title should not be nothing');
            setUpdateTitle(title);
            dispatch(edit({ id, isEdit: false }));
        }
    }

    useEffect(() => {
        if(isEdit) {
            inputRef.current.focus();
        }
    }, [isEdit]);

    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} onChange={onToggle}/>
                {!isEdit && <span style={{ textDecoration: completed ? 'line-through' : 'none', color: completed ? '#999' : '#111'}}>{title}</span>}
                { isEdit && (
                   <input ref={inputRef} value={updateTitle} type='text' onKeyDown={handleEdit} onChange={handleChange} onBlur={handleBlur}/>
                )}
            </label>
            <button onClick={onRemove}>Remove</button>
            {!completed && <button onClick={onComplete}>Complete</button>}
            {(!completed && !isEdit) && <button onClick={() => onEdit(id, true)}>Edit</button>}
        </li>
    );
});

const NewTodo = () => {
   const [text, setText] = useState('');
   const dispatch = useDispatch();
   const onSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length > 0) {
            dispatch(addTodo({
                id: Date.now(),
                title: text,
                completed: false,
                isEdit: false
            }));
            setText('');
        }
    };
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="What needs to be done?" value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoList;
