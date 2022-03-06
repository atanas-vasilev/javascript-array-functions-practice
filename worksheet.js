const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map(char => char.name)
// console.log(names)
//2. Get array of all heights
const heights = characters.map(char => char.height)
// console.log(heights)
//3. Get array of objects with just name and height properties
const arrNameHeight = characters.map(char => ({name:char.name, height:char.height}))
// console.table(arrNameHeight)
//4. Get array of all first names
const firstNames = characters.map(char => char.name.substr(0, char.name.indexOf(' ')));
// console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((total, char) => char.mass+total,0);
console.log(totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((total, char) => char.height+total,0);
console.log(totalHeight);
//3. Get total number of characters by eye color
const charsEyeColor = characters.reduce((acc, currentCharacter) =>{
    if(!(currentCharacter.eye_color in acc)){
        acc[currentCharacter.eye_color] = 1;
    } else{
        acc[currentCharacter.eye_color]++;
    }
    return acc;
},{})
console.table(charsEyeColor);
//4. Get total number of characters in all the character names
const totalCharsInNames = characters.reduce((total, currentCharacter) => total += currentCharacter.name.length,0);
console.log(totalCharsInNames);



//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
