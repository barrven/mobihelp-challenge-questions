
// array of objects (people)
const peopleList = [
    { name: "Jack Johnson", age: 25, fScore: 55, sex: "M" },
    { name: "Amy Shumer", age: 21, fScore: 67, sex: "F" },
    { name: "Jamal Kennedy", age: 36, fScore: 42, sex: "M" },
    { name: "Peter Parker", age: 19, fScore: 100, sex: "M" },
    { name: "Alice Kumenko", age: 42, fScore: 20, sex: "F" },
];

let output = document.getElementById('output');

// output an array of objects that match some criteria
peopleList.forEach(person => {
    // criteria to match: age range, fitness score
    if(person.fScore > 50 && person.age > 20){
        output.innerHTML += `<div>${person.name}</div>`
    }
});