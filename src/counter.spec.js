import {increaseCount, reducer} from "./counter";

describe('reducer', () => {
    it('should return a state', () => {
        const result=reducer({count:0});
        expect(result.count).not.toBeUndefined();
    })

    it('should add amount', () => {
        const result=reducer({count:1}, increaseCount(2));
        expect(result.count).toBe(3);
    });
});