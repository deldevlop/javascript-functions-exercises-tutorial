// Your code goes here
const rapid = (myString) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newName = "";
    for (let letters of myString.toLowerCase()) {
        if (vowels.includes(letters) == false) {
            newName += letters;
        }
    }
    return newName.toUpperCase();
}

// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
