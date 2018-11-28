/**
 * @author Diego Maroto
 * @version 20181127
 */

class SolutionNode {
    constructor(public val: string,
        public left: SolutionNode | undefined = undefined,
        public right: SolutionNode | undefined = undefined) { }
    serialize(node: SolutionNode): string {
        return '';
    }
    deserialize(serialized: string): SolutionNode {
        return this;
    }
}

const INPUT = new SolutionNode('root', new SolutionNode('left', new SolutionNode('left.left')), new SolutionNode('right'));
const MUST_RETURN = 'left.left';

const serialized: string = INPUT.serialize(INPUT);
const deserialized: SolutionNode = INPUT.deserialize(serialized);

console.log('Expected: ' + MUST_RETURN);
if (deserialized.left)
    if (deserialized.left.left)
        console.log('Deserialized: ' + deserialized.left.left.val);
