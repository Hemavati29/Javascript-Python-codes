const str="nayan";

let revstr='';

for (let index = str.length-1; index >=0; index--) {
    revstr=revstr+str[index];
    
}
if(str===revstr){
    console.log("Palindromne");

}else{
    console.log("Not pali");

}

console.log(revstr);

