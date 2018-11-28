"use strict";
/**
 * @author Diego Maroto
 * @version 20181127
 */
class CustomNode {
    constructor(val, left = undefined, right = undefined) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
const INPUT = new CustomNode('root', new CustomNode('left', new CustomNode('left.left')), new CustomNode('right'));
//assert deserialize(serialize(node)).left.left.val == 'left.left'
if (INPUT.left)
    if (INPUT.left.left)
        console.log(INPUT.left.left.val);
// const MUST_RETURN = [120, 60, 40, 30, 24];
// class Solution {
//     private reduce: number
//     constructor(public nums: number[]) {
//         this.reduce = nums.reduce((prev, current) => current * prev, 1)
//     }
//     check() { return this.nums.map((x: number): number => this.reduce * (x ** -1)) }
// }
// const solution = new Solution(INPUT);
// console.log("Expected: ");
// console.log(MUST_RETURN);
// console.log("Solution: ")
// console.log(solution.check());
