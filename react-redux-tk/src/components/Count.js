import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from '../reducer/count'

const Count = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>plus one</button>
            <button onClick={() => dispatch(decrement())}>decrease one</button>
            <button onClick={() => dispatch(incrementByAmount(3))}>plus by 3</button>
        </div>
    );
};

export default Count;
