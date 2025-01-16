{
  // Utility types : pick, omit, required, partial, read only, record

  // pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type Name = Pick<Person, "name">;
  type AgeContactNo = Pick<Person, "name" | "contactNo">;

  // omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // required
  type PersonRequired = Required<Person>;

  // partial
  type PersonPartial = Partial<Person>;

  // read only
  type PersonReadOnly = Readonly<Person>;
  const person1: PersonReadOnly = {
    name: "Mr X",
    age: 23,
    contactNo: "x@gmail.com",
  };
  //   person1.name = "raj";

  // record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   }
  type MyObj = Record<string, string>;

  const EmptyObj : Record<string, unknown> = {
    aa: "aa",
    bb: 33,
    cc: false
  }

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "dd",
  };
}
