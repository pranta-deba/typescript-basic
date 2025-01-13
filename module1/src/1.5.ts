// Reference Type --> Object Type

const user: {
  company: "ABC Company"; // literal type
  firstName: string;
  middleName?: string; // Optional Type
  lastName: string;
  readonly age: number; // only read
  isMarried: boolean;
} = {
  company: "ABC Company",
  firstName: "Pritom",
  middleName: "Deba",
  lastName: "Nath",
  age: 25,
  isMarried: false,
};
user.firstName = "Pritom";
// user.age = 25;