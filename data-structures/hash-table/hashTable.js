"use strict";
class HashTable {
    constructor(length = 53) {
        this.table = new Array(length);
    }
    hash(key) {
        let total = 0;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * 31 + value) % this.table.length;
        }
        return total;
    }
    set(key, value) {
        const index = this.hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        this.table[index].push([key, value]);
    }
    get(key) {
        const index = this.hash(key);
        if (!this.table[index]) {
            return;
        }
        const bucket = this.table[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
    }
    values() {
        const result = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    if (!result.includes(this.table[i][j][1])) {
                        result.push(this.table[i][j][1]);
                    }
                }
            }
        }
        return result;
    }
    keys() {
        const result = [];
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    if (!result.includes(this.table[i][j][0]))
                        result.push(this.table[i][j][0]);
                }
            }
        }
        return result;
    }
}
const ht = new HashTable();
ht.set("some", "thing");
ht.set("some", "thing");
ht.set("some", "any");
ht.set("some", "some");
ht.set("two", "any");
ht.set("three", "more");
// console.log(ht.keys());
const test = { id: 1 };
let map = new Map();
map.set("key", "value");
map.set(1, "number key");
map.set(test, "object key");
console.log(map.get(test)); // Output: 'value'
