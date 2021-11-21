import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todolist',
    initialState: [
        { id: Date.now(), title: 'hello', completed: false, isEdit: false},
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        removeTodo: (state, action) => {
            let todoIndex = state.findIndex(todo => todo.id === action.payload);
            state.splice(todoIndex, 1);
        },
        toggleTodo: (state, action) => {
            let todo = state.find(todo => todo.id === action.payload);
            todo.completed = !todo.completed;
            return state;
        },
        toggleAll: (state) => {
            state.forEach(todo => {
                todo.completed = !todo.completed;
            });
        },
        clearCompleted: (state) => {
            return state.filter(todo => !todo.completed);
        },
        completeTodo: ( state, action ) => {
            let todo = state.filter(todo => todo.id === action.payload);
            todo[0].completed = true;
            return state;
        },
        updateTodo: (state, action) => {
            console.log(action.payload);
            let todo = state.find(todo => todo.id === action.payload.id);
            todo.title = action.payload.title;
            todo.isEdit = false;
            return state;
        },
        edit: (state, action) => {
            let todo = state.find(todo => todo.id === action.payload.id);
            todo.isEdit = action.payload.isEdit;
            return state;
        },
    },
});



export const { addTodo, removeTodo, completeTodo, clearCompleted, toggleAll, toggleTodo, updateTodo, edit } = todoSlice.actions;
export default todoSlice.reducer;
