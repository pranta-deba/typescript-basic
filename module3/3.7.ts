{
  //  Statics in OOP

  class Counter {
    static count: number = 0;
    static inc() {
      return (Counter.count += 1);
    }
    static dec() {
      return (Counter.count -= 1);
    }
  }

  const instance1 = new Counter();
//   console.log(instance1.inc())
  console.log(Counter.inc())
  
  const instance2 = new Counter();
//   console.log(instance2.inc())
  console.log(Counter.inc())



}
