/**
 * @author Diego Maroto
 * @version 20181127
 */

class Solution {
    constructor(private input: number[]) { }
    check() {
        return this.input.reduce((prev: number, current: number): number => {
            if(prev === undefined){
                return current;
            }
            return prev;
        })
    }
}

const INPUT = [3, 4, -1, 1];
const MUST_RETURN = 2;
console.log(INPUT);
console.log("Expected: ")
console.log(MUST_RETURN)
const solution = new Solution(INPUT);
console.log(solution.check())