"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bigNumsArr = [];
let i = 1;
while (true) {
    bigNumsArr.push(i);
    i++;
    if (i === 42949673) {
        break;
    }
}
exports.default = bigNumsArr;
