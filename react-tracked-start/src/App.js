import React from 'react';
import {SharedProvider} from "./store";
import {PersonProvider} from './store/person';
// import { TodoProviderReducer } from "./store/tr";
import { TodoStateImmerProvider } from './store/tui'
import Count from "./components/Count";
import Text from "./components/Text";
import EditPerson from "./components/EditPerson";
import ShowPerson from "./components/ShowPerson";
// import TodoList from "./components/TodoList_Reducer_Version/TodoList";
import TodoList from './components/TodoList_UseStateImmer_Version/TodoList'

function App() {

  return (
      <>
          <SharedProvider>
              <Count/>
              <hr/>
              <Text/>
          </SharedProvider>
          <hr/>
          <PersonProvider>
              <EditPerson/>
              <ShowPerson/>
          </PersonProvider>
          <hr/>
          {/*<TodoProviderReducer>*/}
          {/*    <TodoList/>*/}
          {/*</TodoProviderReducer>*/}
          <TodoStateImmerProvider>
              <TodoList/>
          </TodoStateImmerProvider>
      </>
  )
}

export default App;
