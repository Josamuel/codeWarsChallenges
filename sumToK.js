// Given a list of numbers, return whether any two sums to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.


function sumsToK(numArr, k) {
    let sumsToK = false;
    numArr.forEach((num, i) => {
         for(i; i < numArr.length; i++){
             if ((num + numArr[i]) === k) {
                 sumsToK = true;
             }
         }
    });
    return sumsToK;
 }
 
 console.log('should be true', sumsToK([40, 20, 31, 3, 5, 6], 34));
 console.log('should be true', sumsToK([4, 5, 31, 3, 6], 11));
 console.log('should be true', sumsToK([4, 5, 31, 3, 0, 20, 9], 20));
 console.log('should be false', sumsToK([4, 5, 31, 3, 6], 50));
 console.log('should be false', sumsToK([4, 5, 31, 19, 63], 4));
 console.log('should be false', sumsToK([12, 13, 14, ], 4));
