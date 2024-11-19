// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant auxiliary space, excluding the space needed to store the output

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:

// Input: nums = [1,1,2]
// Output: [1]
// Example 3:

// Input: nums = [1]
// Output: []
 

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// // Each element in nums appears once or twice

//find duplicate elements of an array
let inputArray= [4,4,8,6,4,2,2,9,3,3];
let outputArray=[];
let newArray=[];

for (let i = 0; i < inputArray.length; i++) {
if(inputArray[i]==inputArray[i+1])
{
    outputArray.push(inputArray[i])
}
}
console.log(outputArray)
// console.log(newArray)