{
    // Inheritance in OOP

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string){
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number){
            return `${this.name} will sleep ${numOfHours} hr.`
        }
    }

    class Student extends Person{
        constructor(name: string, age: number, address: string){
           super(name, age, address)
        }
    }

    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation:string){
            super(name, age, address)
            this.designation = designation;
        }
        takeClass(numOfClass: number){
            return `${this.name} will take ${numOfClass}.`
        }
    }

    const student = new Student('mr raj', 23, 'ctg');
    const teacher = new Teacher('mr jack', 40, 'dhaka', 'professor');





}