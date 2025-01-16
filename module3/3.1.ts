{
    //  

    class Animal {
        constructor(public name:string, public sound: string){
            this.name = name;
            this.sound = sound;
        }

        makeSound(){
            return `The ${this.name} says ${this.sound}`
        }
    }

    const dog = new Animal('Dog', 'Ghew Ghew');
    const cat = new Animal('Cat', 'Meaw');
    const dogMakeSound = dog.makeSound();
    const catMakeSound = cat.makeSound();
    

}