{
  // generic type
  // generic tuple



  // generic type
  //   const rolls: number[] = [1, 2, 3, 4, 5];
  const rolls1: Array<number> = [1, 2, 3, 4, 5];
  //   const names: string[] = ["a", "b", "c"];
  const names1: Array<string> = ["a", "b", "c"];
  //   const boolArr: boolean[] = [true, false, true];
  const boolArr1: Array<boolean> = [true, false, true];

  // reuseable generic type
  type GenericArray<param> = Array<param>;

  const rolls2: GenericArray<number> = [1, 2, 3, 4, 5];
  const names3: GenericArray<string> = ["a", "b", "c"];
  const boolArr3: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "raj",
      age: 22,
    },
    {
      name: "raj",
      age: 22,
    },
  ];




  // generic tuple
  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["raj", "pritom"];

  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    123,
    { name: "raj", email: "abc@gmail.com" },
  ];



  
}
