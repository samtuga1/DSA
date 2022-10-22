/*
GIVEN 2 ARRAYS, CREATE A FUNCTION THAT LETS A USER KNOW(RETURN TRUE OR FALSE)
WHETHER THESE 2 ARRAYS CONTAIN A COMMON NUMBER
*/

// QUESTIONS TO ASK
//1. MUST THE NUMBERS BE OF THE SAME TYPE?
//2. HOW LARGE ARE THE ARRAYS

const checkTwoArrays = (array1, array2) => {
    // for (var i = 0; i< array1.length; i++) {               //
    //     for (var j = 0; j< array2.length; j++){            //
    //         if(array1[i] === array2[j]){                   //
    //             return true;                               // AVOID NESTED FOR LOOPS AS IT IS O(n^2)
    //         }                                              // IN THIS CASE IT'S O(n1 * n2)         
    //     }                                                  // WHICH IS TIME CONSUMING
    // }                                                      //  
    // return false;                                          //

    let array1Obj = {}; //O(1)

    for(let i = 0; i< array1.length; i++) { // O(n1)
        if(!array1Obj[array1[i]]) {
            let item = array1[i];
            array1Obj[item] = true;
        }
    }
    for (let i = 0; i < array2.length; i++) { // O(n2)
        if(array1Obj[array2[i]]) {
            return true;
        }
    }
    return false;
}

const ans = checkTwoArrays([1,2,3,4,5], [6,7,0,0,0]);

//TOTAL OF O(n1 + n2) WHICH IS BETTER THAN O(n1 * n2)