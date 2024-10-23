class HashTable {
  table: any[];
  constructor(length = 53) {
    this.table = new Array(length);
  }
  hash(key: any) {
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * 31 + value) % this.table.length;
    }
    return total;
  }

  set(key: any, value: any) {
    const index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    this.table[index].push([key, value]);
  }

  get(key: any) {
    const index = this.hash(key);

    if (!this.table[index]) {
      return;
    }
    const bucket = this.table[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i];
      }
    }
  }
}

const ht = new HashTable();

ht.set("some", "thing");
ht.set("some", "else");
ht.set("else", "any");
console.log(ht.get("somes"));
// console.log(ht.hash("abc"));
