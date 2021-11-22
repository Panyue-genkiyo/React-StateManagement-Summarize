import React, {useEffect} from 'react';
import useStore from "../../hooks/useStore";
import {reaction, runInAction} from "mobx";
import {observer} from "mobx-react-lite";

const Count = () => {
    const { counterStore } = useStore();
    //安全的
    useEffect(() => {
        console.log(1);
        reaction(() => counterStore.count, () => {
            if(counterStore.count < 0){
                console.log('count less than 0, back to 0');
                runInAction(() => {
                    counterStore.count = 0;
                });
            }
        })
    }, [counterStore])

    return (
        <div>
            <p> count: { counterStore.count } </p>
            <button onClick={() => counterStore.increment()}>plus one</button>
            <button onClick={() => counterStore.decrement()}>decrement one</button>
        </div>
    )
};

export default observer(Count);