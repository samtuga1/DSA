const strings = ['a', 'b', 'c', 'd', 'e']

strings[0] //O(1)

strings.push('g'); //O(1)

strings.unshift('1') //O(n)

strings.splice(1,2,'2') //O(n)

console.log(strings);