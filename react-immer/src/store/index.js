import {useCallback, useReducer, useState} from "react";
import { createContainer } from 'react-tracked';
import {produce} from "immer";

const initState = {
    theme: {
        darken: false,
    },
    user: {
        name: 'py',
        age: 18,
        isOffline: false,
        message: {
            text: 'hello',
            isRead: true
        },
        friends:[
            {id: 1, name: 'Jack', age: 12, isOffline: true},
            {id: 2, name: 'Sally', age: 16, isOffline: true}
        ]
    },
}


const reducer = (state, action) => produce(state ,draftState => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            draftState.theme.darken = !draftState.theme.darken;
            break;
        case 'CHANGE_USER_STATE':
            draftState.user.isOffline = !draftState.user.isOffline;
            break;
        case 'CHANGE_FRIENDS_STATE_BY_ID':
            let friend = draftState.user.friends.find(friend => friend.id === action.id);
            friend.isOffline = !friend.isOffline;
            break;
        default:
            break;
    }
})


const useValue = () => useReducer(reducer, initState)


const {
    Provider: UserProvider,
    useTrackedState: useStore,
    useUpdate: useDispatch
} = createContainer(useValue)


export { UserProvider, useStore, useDispatch};
