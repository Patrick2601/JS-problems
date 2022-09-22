let arr = [2, 3, 5, 7, 2, 7, 0, 2,2,8, 9, 7, 7, 72,2,2,2,2,];
let maxFreq = 0
let hash = new Map();

for (let i = 0; i < arr.length; i++) {
  hash.set(arr[i], hash.get(arr[i]) === undefined ? 1 : hash.get(arr[i]) + 1);
}
console.log(hash);

for (let i = 0; i < arr.length; i++) {
  if (hash.get(arr[i]) > maxFreq) {
    maxFreq = hash.get(arr[i]);
  }
 
}
console.log(maxFreq);
key=hash.keys()
console.log(key);

for(let k of key){
    if(maxFreq===hash.get(k)){
        console.log(k)
    }

}


