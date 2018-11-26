/**
 * @author Diego Maroto
 * @version 20181126
 */

const INPUT = [10, 15, 3, 7]
const OBJECTIVE = 17

interface Mapa {
    [index: number]: number
}

class Solution {
    private _mapa: Mapa
    constructor(private nums: number[]) {
        this._mapa = {}
        for (let x in nums) {
            this._mapa[nums[x]] = nums[x]
        }
    }
    check() {
        return this.nums.find((x: number): boolean => {
            const minus = OBJECTIVE - x
            if (!this._mapa[x] || !this._mapa[minus])
                return false
            return minus === this._mapa[minus]
        }) !== undefined
    }
    get mapa() { return this._mapa }
    set mapa(mapa) { this._mapa = mapa }
}

const solution = new Solution(INPUT)
console.log(solution.check())