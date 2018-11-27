/**
 * @author Diego Maroto
 * @version 20181126
 */

const INPUT = [10, 7, 15, 3, 7]
const OBJECTIVE = 17

interface Mapa {
    [index: number]: boolean
}

class Solution {
    private _mapa: Mapa
    constructor(private nums: number[]) {
        this._mapa = {}
    }
    check() {
        return this.nums.find((x: number): boolean => {
            const minus = OBJECTIVE - x
            if (this._mapa[minus] === undefined) {
                this._mapa[x] = true;
                return false;
            }
            return true;
        }) !== undefined
    }
    get mapa() { return this._mapa }
    set mapa(mapa) { this._mapa = mapa }
}

const solution = new Solution(INPUT)
console.log(solution.check())