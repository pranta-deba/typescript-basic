{
  // interface
  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  type UserWithRole1 = User1 & { role: string };

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: UserWithRole2 = {
    name: "raj",
    age: 33,
    role: "dev",
  };



  // interface uses into array
  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber: Roll2 = [1, 2, 3, 4, 5];



  // interface uses into func
  type Add1 = (a: number, b: number) => number;

  interface Add2 {
    (a: number, b: number): number;
  }
  
  const sum: Add2 = (a, b) => a + b;
}
