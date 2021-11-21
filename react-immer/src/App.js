import React from 'react';
import PersonList from "./components/PersonList";
import User from "./components/User";
import { UserProvider } from "./store";
const App = () => {
    return (
        <div>
            <PersonList/>
            <UserProvider>
                <User/>
            </UserProvider>
        </div>
    );
};

export default App;
