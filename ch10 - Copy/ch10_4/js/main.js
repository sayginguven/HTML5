 let farm = ["horse", "sheep", "goat", "not sheep", "donkey"];
 let pets = ["cat", "dog", "fish"];
 let rodents = ["hamster", "geniepig", "rabbit", "squirrel"];
//contat function
//let allAnimals = farm.concat(pets,rodents);

//es6 syntax
let allAnimals = [...farm,...pets, ...rodents]; 
console.log(allAnimals);  // 0: "horse", 1: "sheep", 2: "goat", 3: "sheep", 4: "donkey", 5: "cat", 6: "dog", 7: "fish", 8: "hamster", 9: "geniepig", 10: "rabbit", 11: "squirrel"
