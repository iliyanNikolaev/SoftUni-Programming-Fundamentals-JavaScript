function cats(input) {

    class Cat {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const element of input) {
        let elementArr = element.split(' ');

        let name = elementArr[0];
        let age = elementArr[1];

        let currentCat = new Cat(name, age);
        currentCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);