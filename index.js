//1.Create the function "backToFront" which gets a string and symbols count. And it should return a string..//                      
 function backToFront(str) {
    let backToFront = "";
    for (let i = str.length - 1; i >= 0; i--) {
      backToFront += str[i];
    }
    return backToFront;
  }
  console.log(backToFront('hello', 1));
  console.log(backToFront('abc', 3))
  console.log(backToFront('world', 2));
  console.log(backToFront('worlld', 20));

  //2.//Create the function "removeDuplicate" to remove all duplicated values from array; do not use a set.//
function removeDuplicate(arr) {
  let s = new Set(arr);
  let it = s.values();
  return Array.from(it);
}
console.log(removeDuplicate ([1,2,3,2,3,1,1]));
console.log(removeDuplicate (['a', 1, '2', 'b', 1, '2', 'b']));