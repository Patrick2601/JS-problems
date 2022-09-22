let str = "i am a strings";

let s = str.split("");
console.log(s);
for (let i = 0; i < s.length; i++) {
  let c = 0;
  for (let j = 0; y < s.length; j++) {
    if (s[i] === s[j] && i !== j) {
      c++;
    }
  }
  if (c === 0) {
    console.log(s[i]);
  }
}
