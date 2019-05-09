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
    });
});