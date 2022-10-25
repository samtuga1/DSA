// MERGE TWO SORTED ARRAYS

function mergeTwoSorted(array1, array2) {
    const mergedArray = []; //INITIALIZE AN EMPTY MERGER ARRAY
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

    if (array1.length === 0) {
        return array2;
    }
     if(array2.length === 0) {
        return array1;
     }

    while(array1Item || array2Item) { //EITHER OF THE FIRST ITEMS IN ARRAY1 OR ARRAY2 IF NOT UNDEFINED
        if (array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = array1[i]
            i++;
        }
        else { 
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }
    }
    console.log(mergedArray);
    return mergedArray;
}

mergeTwoSorted([1,3,6,7], [1,2,8,9,10,82]);

// TIME COMPLEXITY = O(n)
// SPACE COMPLEXITY = O(1)