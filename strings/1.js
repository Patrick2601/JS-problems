let str = "arrays";

let s = str.split("");
console.log(s);
let c = 0;
for (let x = 0; x < s.length; x++) {
  let c = 0;
  for (let y = 0; y < s.length; y++) {
    if (s[x] === s[y]) {
      if (x !== y) {
        c++;
      }
    }
  }
  if (c === 0) {
    console.log(s[x]);
  }
}
