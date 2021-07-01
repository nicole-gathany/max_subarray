var maxSubArray = function(nums) {
    //an array of integers, positive and negative
    //return largest sum of continuous integers within the array
    let prev = 0;
    let maxSum = -200;
      for(let i=0; i<nums.length; i++){
        prev = Math.max(prev+nums[i], nums[i]);
        maxSum = Math.max(prev, maxSum);
    }
    return maxSum;
};

console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));
//i=0, nums[0] is 5
//prev = Math.max(0+5, 5);
//0+5=5
//prev is 5

//maxSum = Math.max(5, -200);
//maxSum 5

//i=1, nums[1] is 4
//prev = Math.max(4+5, 5)
//prev is 9

//maxSum = Math.max(5, 9);
//maxSum 9

//i=2, nums[2] is -1
//prev = Math.max(9+-1, -1);
//prev is 8

//maxSum = Math.max(8, 9)
//maxSum is 9;

//i=3, nums[3] is 7 
//prev = Math.max(8+7, 7)
//prev = Math.max(15, 7)
//prev is 15

//maxSum = Math.max(15, 9)
//maxSum is 15

//i=4, nums[4] is 8
//prev = Math.max(15+8, 8);
//prev is 15+8 = 23
//prev is 23

//maxSum = Math.max(23, 15);

//maxSum is 23

//i=5, 5==array.length

//return maxSum which is 23




//Example [1]
//return 1;

//Example 
//nums = [5,4,-1,7,8]
//5+4=9
//9+-1=8
//8+7=15
//15+8=23

//Example 1
//[-2,1,-3,4,-1,2,1,-5,4]

//-2+1= -1
//-1+-3=-4
//-4+4=0
//break
//4+-1= 3
//1--2=3
//3-1=2
//2--3=5


// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105