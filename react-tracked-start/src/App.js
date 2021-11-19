import React from 'react';
import {SharedProvider} from "./store";
import {PersonProvider} from './store/person';
import Count from "./components/Count";
import Text from "./components/Text";
import EditPerson from "./components/EditPerson";
import ShowPerson from "./components/ShowPerson";

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
      </>
  )
}

export default App;
