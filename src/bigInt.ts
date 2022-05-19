let number = Number.MAX_SAFE_INTEGER;

let n1 = number + 1;
let n2 = number + 2;

console.log(n1 === n2);

let bnumber = BigInt(Number.MAX_SAFE_INTEGER);
let b1 = bnumber + BigInt(1);
let b2 = bnumber + BigInt(2);
console.log(b1 === b2);


export {};