let str1 = "abfgh";
let str2 = "abhgf";
let s1 = str1.split("").sort().join("");
let s2 = str2.split("").sort().join("");
if (s1.length === s2.length) {
  if (s1 === s2) {
    console.log("Strings are Anagrams");
  } else {
    console.log("Not anagrams");
  }
} else {
  console.log("Not anagrams");
}
