import { configureStore } from "@reduxjs/toolkit";
import countReducer from '../reducer/count';
import todoReducer from '../reducer/todos';

//暴露store
export default configureStore({
  reducer: {
    // reducer
    counter: countReducer,
    todos: todoReducer
  },
});


