let arr=['aa','','bbb',' ','cccc']

const remove=(a)=>{
 return a.filter(ele=>{
   return ele !=='' && ele!== ' '
 })

}
console.log(remove(arr))