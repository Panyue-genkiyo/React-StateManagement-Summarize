import {action, makeAutoObservable} from "mobx";
import { Todo } from '../../types/todo'

class TodoST{
    todos: Todo[] = [
        {id: 1, text: 'react state management', completed: false},
        {id: 2, text: 'vue js', completed: true}
    ];

    constructor() {
        makeAutoObservable(this, {
            toggleTodo:action.bound,
            addTodo:action.bound,
            removeTodo:action.bound
        });
    }

    toggleTodo(id: number) {
        this.todos = this.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
    }

    removeTodo(id:number):void {
        this.todos = this.todos.filter(t => t.id !== id);
    }

    addTodo(todo: Todo):void{
        this.todos.push(todo);
    }

    get completeAmount(){
        return this.todos.filter(t => t.completed).length;
    }

    get inCompleteAmount(){
        return this.todos.filter((t => !t.completed)).length;
    }

}

export default function TodoStore(){
    return new TodoST();
}

export type TodoS = ReturnType<typeof TodoStore>

