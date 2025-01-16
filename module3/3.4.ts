{
    // Type guard using instance of

    class Animal {
        constructor(public name:string, public species: string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            return `I am making sound`;
        }
    }
    class Dog extends Animal {
        constructor(public name:string, public species: string){
            super(name, species)
        }
        makeBark(){
            return `I am barking`;
        }
    }
    class Cat extends Animal {
        constructor(public name:string, public species: string){
            super(name, species)
        }
        makeMeaw(){
            return `I am mewaing`;
        }
    }
    // smart way
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal)=>{
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)){
            animal.makeMeaw();
        }
        else{
            animal.makeSound();
        }
    }

    const dog = new Dog('Dog Bhai', 'Cat');
    const cat = new Cat('Cat Bhai', 'Cat');

    getAnimal(dog)
    getAnimal(cat)
    















}