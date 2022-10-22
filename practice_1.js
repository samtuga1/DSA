/*
GIVEN 2 ARRAYS, CREATE A FUNCTION THAT LETS A USER KNOW(RETURN TRUE OR FALSE)
WHETHER THESE 2 ARRAYS CONTAIN A COMMON NUMBER
*/

// QUESTIONS TO ASK
//1. MUST THE NUMBERS BE OF THE SAME TYPE?

const checkTwoArrays = ({array1, array2}) => {
    for (var i = 0; i< array1.length; i++) {
        for (var j = 0; j< array2.length; j++) {
            if(array1[i] === array2[j]){
                return true;
            }
        }
    }
    return false;
}

const ans = checkTwoArrays({array1: [1,2,3,4,5], array2: [6,7,2,2,0]});

console.log(ans);