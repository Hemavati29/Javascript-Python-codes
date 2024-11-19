const inputArray=[8,5,9,7,6,2,4,8,9,6,5];

let outputArray=[];

for (let i = 0; i < inputArray.length; i++) {
   if(!outputArray.includes(inputArray[i])){
    outputArray.push(inputArray[i]);
   }
}
console.log(outputArray)