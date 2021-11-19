import React, {useEffect} from 'react';
import { useSharedState } from "../store";

const Count = () => {
    const [globalState, setGlobalState] = useSharedState();

    const increment = () => {
        setGlobalState((prev) => ({
            ...prev,
            count: prev.count + 1
        }));
    }

    //副作用钩子
    useEffect(() => {
        console.log('Count Component Render!');
    });

    return (
        <div>
            {globalState.count}
            <button onClick={increment}>click to plus one</button>
        </div>
    );
};

export default Count;
