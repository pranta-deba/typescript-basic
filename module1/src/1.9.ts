{
  // Type Alias

  // multiple and reuse
  type Student = {
    name: string;
    age: number;
    contact?: string; // Optional Type
    gender: string;
    address: string;
  };

  const student1: Student = {
    name: "John Doe",
    age: 20,
    gender: "Male",
    address: "123 Main St",
  };

  const student2: Student = {
    name: "John Doe",
    age: 20,
    gender: "Male",
    address: "123 Main St",
  };

  // single
  type UserName = string;
  type Email = string;
  const username: UserName = "john doe";
  const email: Email = "johndoe@example.com";

  // function type alias
  type Add = (num1: number, num2: number) => number;
  const add: Add = (num1, num2) => num1 + num2;
}
