export const increaseCount = function (amount=1){
    return {
        type: 'INCREASE_COUNT',
        payload: amount
    }
} ;

const DEFAULT_STATE = {
    count: 0
};

export function reducer (state=DEFAULT_STATE, action={}){
    return state;
};
