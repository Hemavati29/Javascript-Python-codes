// using for loop 

//  let number=3;

//     let fact=1;
    
//     for(let i=1;i<=number;i++){
//     fact=fact*i;
//     }

// console.log("factorial is:- ",fact);


// using recursion

function fact(num){
    if(num===1)
    {
        return 1;
    }else{
        return fact(num-1)*num;
    }
}
console.log(fact(4));
