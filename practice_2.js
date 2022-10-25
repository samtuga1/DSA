// CREATE A FUNCTION THAT REVERSES A STRING

const stringMap = {};

function reverse(string) {
    // Turn string into an array
    const stringList = string.split('');
    // Reverse the List
    const reversedList = stringList.reverse();
    // Join the list of strings together
    console.log(reversedList.join(''));
}

reverse('Samuel is my name');