import React, {useEffect, memo, useState} from 'react';
import useStore from "../../hooks/useStore";
import { observer } from "mobx-react-lite";
import {TodoS} from "../../types/todo";


const TodoList = () => {
    const { todoStore } = useStore();
    useEffect(() => {
        console.log('todolist mounted!!!');
    });
    return (
        <div>
            <h1>Todo List</h1>
            <p>
                <span>完成:{todoStore.completeAmount}</span>
                <br/>
                <span>未完成:{todoStore.inCompleteAmount}</span>
            </p>
            <TodoView todoStore={todoStore}/>
            <NewTodo addNewTodo={todoStore.addTodo}/>
        </div>
    );
};

const TodoView: React.FC<{todoStore: TodoS}> = observer(({ todoStore }) => {
    const { todos, toggleTodo, removeTodo } = todoStore;
    return (
       <ul>
           {todos.map(t => (
               <li key={t.id}>
                   <label>
                       <input type="checkbox" checked={t.completed} onChange={() => toggleTodo(t.id)}/>
                   </label>
                   <span>{t.text}</span>
                   <button onClick={() => removeTodo(t.id)}>删除</button>
               </li>
           ))}
       </ul>
    );
});

const NewTodo: React.FC = memo(({ addNewTodo }) => {

    const [text, setText] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 0){
            addNewTodo({
                id:+Date.now(),
                text,
                completed: false
            });
            setText('');
        }
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="What needs to be done?" value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </>
    )
});

export default observer(TodoList);