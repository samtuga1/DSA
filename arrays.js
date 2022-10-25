const strings = ["a", "b", "c", "d", "e"];

strings[0]; //O(1)

strings.push("g"); //O(1)

strings.pop(); //O(1)

strings.unshift("1"); //O(n)

strings.splice(1, 2, "2"); //O(n)

console.log(strings);


// OPTIONAL CLASSES

// class Player {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   printName() {
//     console.log(this.name);
//   }
// }

// let player1 = new Player('Samuel', 'Player1');

// player1.printName();