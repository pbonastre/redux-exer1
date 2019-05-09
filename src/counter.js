import { createStore } from "redux";

export const increaseCount = function (amount=1){
    return {
        type: 'INCREASE_COUNT',
        payload: amount
    }
} ;

const DEFAULT_STATE = {
    count: 0
};

//las funciones reductoras siempre tienen un estado inicial y una accion.
export function reducer (state=DEFAULT_STATE, action={}){
    switch(action.type){
        case 'INCREASE_COUNT':
            return{
                ...state, // this will copy all properties previous state
                count: state.count + action.payload
                }
    }
    return state;
};

export const store = createStore(reducer);
