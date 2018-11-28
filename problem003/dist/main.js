"use strict";
/**
 * @author Diego Maroto
 * @version 20181127
 */
class SolutionNode {
    constructor(val, left = undefined, right = undefined) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    serialize(node) {
        if (node === undefined) {
            return '()';
        }
        return `(${node.val},${this.serialize(node.left)},${this.serialize(node.right)})`;
    }
    deserialize(serialized) {
        console.log(serialized);
        const re = /\(([a-z.]+),(\(\)),(\(\))\)/i;
        console.log(re.exec(serialized));
        return '';
        while (re.exec(serialized) !== null) {
            serialized = serialized.replace(re, '');
            console.log(serialized);
        }
        return serialized;
    }
}
const INPUT = new SolutionNode('root', new SolutionNode('left', new SolutionNode('left.left')), new SolutionNode('right'));
const MUST_RETURN = 'left.left';
console.log(JSON.stringify(INPUT));
const serialized = INPUT.serialize(INPUT);
const deserialized = INPUT.deserialize(serialized);
console.log(deserialized);
console.log('Expected: ' + MUST_RETURN);
if (deserialized.left && deserialized.left.left) {
    console.log('Deserialized: ' + deserialized.left.left.val);
}
else {
    throw new Error('Wrong Solution');
}
