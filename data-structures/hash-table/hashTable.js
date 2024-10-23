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
}
const ht = new HashTable();
console.log(ht.hash("some"));
ht.set("some", "thing");
ht.set("some", "else");
ht.set("else", "else");
console.log(ht.table);
// console.log(ht.hash("abc"));
