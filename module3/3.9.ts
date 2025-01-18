{
  // Abstraction in OOP - using interface and abstract class

  // using interface
  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car engine");
    }
    stopEngine(): void {
      console.log("I am stopping the car engine");
    }
    move(): void {
      console.log("I am moving the car");
    }
    test(): void {
      console.log("I am testing");
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();




  // abstract class
  // idea
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class Car2 extends Vehicle2 {
    startEngine(): void {
        console.log("I am starting the car engine");
      }
      stopEngine(): void {
        console.log("I am stopping the car engine");
      }
      move(): void {
        console.log("I am moving the car");
      }
      test(): void {
        console.log("I am testing");
      }
  }
  const hondaCar = new Car2();
  hondaCar.move()




}
