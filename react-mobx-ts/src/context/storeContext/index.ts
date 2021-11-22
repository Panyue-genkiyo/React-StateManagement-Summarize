import { createContext } from "react";
import CounterStore from "../../store/counterStore";
import TodoStore from "../../store/todoStore";

const storeContext = createContext({
  counterStore: CounterStore(),
  todoStore: TodoStore()
});

export default storeContext;