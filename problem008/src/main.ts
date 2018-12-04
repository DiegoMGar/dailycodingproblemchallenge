/**
 * @author Diego Maroto
 * @version 20181204
 */

class Solution {
    constructor(public tree: BinaryNode) { }
    check(): any {
        return this.tree.countUnival();
    }
}
class BinaryNode {
    constructor(public value: number, public left: BinaryNode | undefined, public right: BinaryNode | undefined) { }
    isLeaf(): boolean {
        return this.left === undefined && this.right === undefined;
    }
    isUnival(value: number = this.value): boolean {
        let result: boolean = value == this.value;
        if (this.left !== undefined) {
            result = result && this.left.isUnival(value);
        }
        if (this.right !== undefined) {
            result = result && this.right.isUnival(value);
        }
        return result;
    }
    countUnival(): number {
        let count = 0;
        if (this.left !== undefined) {
            count += (this.left.isUnival() ? 1 : 0) + this.left.countUnival();
        }
        if (this.right !== undefined) {
            count += (this.right.isUnival() ? 1 : 0) + this.right.countUnival();
        }
        return count;
    }
}

const INPUT: BinaryNode = new BinaryNode(0,
    new BinaryNode(1, undefined, undefined),
    new BinaryNode(0,
        new BinaryNode(1,
            new BinaryNode(1, undefined, undefined),
            new BinaryNode(1, undefined, undefined)),
        new BinaryNode(0, undefined, undefined)));
const MUST_RETURN = 5;
//console.log(INPUT);

console.log('Expected: ');
console.log(MUST_RETURN);

console.log('Solution check: ');
const solution = new Solution(INPUT);
console.log(solution.check());

console.log('Checking another tree:')

const INPUT_test2: BinaryNode = new BinaryNode(0,
    new BinaryNode(1, undefined, undefined),
    new BinaryNode(0,
        new BinaryNode(1,
            new BinaryNode(1, undefined, undefined),
            new BinaryNode(1, undefined, undefined)),
        new BinaryNode(0,
            new BinaryNode(0, undefined, undefined),
            new BinaryNode(0, undefined, undefined))));
const MUST_RETURNG_test2 = 7
//console.log(INPUT_test2);

console.log('Expected test 2: ');
console.log(MUST_RETURNG_test2);

console.log('Solution test 2 check: ');
const solution_test2 = new Solution(INPUT_test2);
console.log(solution_test2.check());