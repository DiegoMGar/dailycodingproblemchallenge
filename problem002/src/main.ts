/**
 * @author Diego Maroto
 * @version 20181127
 */

const INPUT = [1, 2, 3, 4, 5];
const MUST_RETURN = [120, 60, 40, 30, 24];
class Solution {
    private reduce: number
    constructor(public nums: number[]) {
        this.reduce = nums.reduce((prev, current) => current * prev, 1)
    }
    check() { return this.nums.map((x: number): number => this.reduce * (x ** -1)) }
}

const solution = new Solution(INPUT);
console.log("Expected: ");
console.log(MUST_RETURN);
console.log("Solution: ")
console.log(solution.check());
