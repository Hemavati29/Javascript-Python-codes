let num=123;

let numlength=num.toString().length

let output=0;

for (let index = 0; index <= numlength-1; index++) {
    let temp=num%10;
    output=output*10+temp;
    num=parseInt(num/10);

console.log(num,output,temp);
    
}

console.log(output);