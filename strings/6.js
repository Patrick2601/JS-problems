let arr = ["aa", "hi", "fff", "r"];
minLen = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (minLen.length > arr[i].length) {
    minLen = arr[i];
  }
}

console.log(minLen);