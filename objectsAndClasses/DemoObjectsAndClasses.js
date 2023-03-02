// basic syntax

let personalInformation = {
    firstName: 'Iliyan',
    lastName: 'Nikolaev',
    age: 25,
    eyeColor: 'blue'
}


console.log(personalInformation); // {firstName: 'Iliyan', lastName: 'Nikolaev', age: 25, eyeColor: 'blue'}

console.log(personalInformation.firstName); // Iliyan
console.log(`Hello my name is ${personalInformation.firstName} ${personalInformation.lastName}`); // Hello my name is Iliyan Nikolaev


//add new property in the object
personalInformation.weight = 67;

console.log(personalInformation); // {firstName: 'Iliyan', lastName: 'Nikolaev', age: 25, eyeColor: 'blue', weight: 67}


//delete property
delete personalInformation.weight;

console.log(personalInformation); // {firstName: 'Iliyan', lastName: 'Nikolaev', age: 25, eyeColor: 'blue'}


//using bracket syntax
console.log(personalInformation['firstName']); // Iliyan

//Convert Object to JSON
let infoJSON = JSON.stringify(personalInformation);

console.log(infoJSON); // {"firstName":"Iliyan","lastName":"Nikolaev","age":25,"eyeColor":"blue"}
console.log(personalInformation) // {firstName: 'Iliyan', lastName: 'Nikolaev', age: 25, eyeColor: 'blue'}


//Convert JSON to Object
let convertedJSON = JSON.parse(infoJSON);

console.log(convertedJSON); // {firstName: 'Iliyan', lastName: 'Nikolaev', age: 25, eyeColor: 'blue'}


//class syntax
class Animal {
    constructor(animalName, animalType) {
        this.name = animalName;
        this.type = animalType;
    }
    
    sayHello() {
        console.log(`Hello, I'am ${this.name}`);
    }
}

let dog = new Animal('Charlie', 'Dog');

console.log(dog); // Animal {name: 'Charlie', type: 'Dog'}

let cat = new Animal('Siso', 'Cat');

console.log(cat); // Animal {name: 'Siso', type: 'Cat'}

let parrot = new Animal('Lyusi', 'Parrot');

console.log(parrot) // Animal {name: 'Lyusi', type: 'Parrot'}


dog.sayHello(); // Hello, I'am Charlie
cat.sayHello(); // Hello, I'am Siso
parrot.sayHello(); // Hello, I'am Lyusi







