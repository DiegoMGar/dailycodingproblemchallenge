/**
 * @author Diego Maroto
 * @version 20181127
 */

class SolutionNode {
    constructor(public val: string,
        public left: SolutionNode | undefined = undefined,
        public right: SolutionNode | undefined = undefined) { }
    serialize(node: SolutionNode | undefined): string {
        if(node === undefined){
            return '()';
        }
        return `(${node.val},${this.serialize(node.left)},${this.serialize(node.right)})`;
    }
    deserialize(serialized: string): any { // TODO: NOT RESOLVED
        console.log(serialized)
        const re = /\(([a-z.]+),(\(\)),(\(\))\)/i;
        while(re.exec(serialized) !== null){
            serialized = serialized.replace(re, '')
            console.log(serialized)
        }
        return serialized;
    }
}

const INPUT = new SolutionNode('root', new SolutionNode('left', new SolutionNode('left.left')), new SolutionNode('right'));
const MUST_RETURN = 'left.left';
console.log(JSON.stringify(INPUT));
const serialized: string = INPUT.serialize(INPUT);
const deserialized: SolutionNode = INPUT.deserialize(serialized);
console.log(deserialized);

console.log('Expected: ' + MUST_RETURN);
if (deserialized.left && deserialized.left.left) {
    console.log('Deserialized: ' + deserialized.left.left.val);
} else {
    throw new Error('Wrong Solution');
}

