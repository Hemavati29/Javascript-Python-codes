
//swap number without temp variable

let a=10,b=40;
console.log("before:",a,b);
a=a+b;  //10+40=50 a=50
b=a-b;  //50-40=10  b=10
a=a-b; //50-10 =40  a=40

console.log("after:- ",a,b)



//swap number with temp variable

let x=2,y=5;

let temp=0;

temp=x;
x=y;
y=temp

console.log("After",x,y)