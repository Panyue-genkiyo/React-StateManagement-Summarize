//定义全局store，采用context api
import React, {useState} from 'react';
// import React,{ useState, useContext, createContext } from 'react'
import { createContainer } from 'react-tracked';

//全局context的问题就是上下文的一个细微状态发生改变，其他没用到该状态的组件也会更新，会造成无缘无故的大规模重新渲染
//使用react-tracked来解决该问题 基于代理
const useMyState = () => useState({
    text:'py,welcome to js world',
    count:0
});

// const MyContext = createContext(null);

// export const useSharedState = () => {
//     const value = useContext(MyContext);
//     if(!value) {
//         throw new Error('useSharedState must be used within a SharedStateProvider');
//     }
//     return value;
// }

// export const SharedProvider = ({ children }) => {
//     return <MyContext.Provider value={useMyState()}>
//         {children}
//    </MyContext.Provider>
// }

export const {Provider: SharedProvider, useTracked: useSharedState} = createContainer(useMyState);
