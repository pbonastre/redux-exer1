import {increaseCount, reducer, store} from "./counter";

describe('reducer', () => {
    it('it should return a state even when no state is provided', () =>{
        const result=reducer();
        expect(result.count).not.toBeUndefined();
    })

    it('should return a state', () => {
        const result=reducer({count:0});
        expect(result.count).not.toBeUndefined();
    })

    it('should add amount', () => {
        const result=reducer({count:1}, increaseCount(2));
        expect(result.count).toBe(3);
    });


    //Added when we use redux, adding it with npm redux and then importing and exporting is counter.
    describe ('store',() =>{
        it('should return the default state', () => {
            const state = store.getState();
            expect(state.count).toEqual(0);
        });
        
        it('should dispatch actions and update the state', () => {
            const action1=increaseCount();
            const action3=increaseCount(3);
            store.dispatch(action1);
            expect(store.getState().count).toEqual(1);
            store.dispatch(action3);
            expect(store.getState().count).toEqual(4);
        })

        it('should call the suscribers when the state data change', ()=>{
            const listener=jest.fn();
            store.subscribe(listener);
            const action=increaseCount();
            store.dispatch(action);
            expect(listener).toHaveBeenCalled();
        });

        it('should not call the unsuscribed listeners when the state data change', ()=>{
            const listener=jest.fn();
            const unsubscribe = store.subscribe(listener);
            const action=increaseCount();
            unsubscribe();
            store.dispatch(action);
            expect(listener).not.toHaveBeenCalled();
        });

    });
});