{
  // Generic with function

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGenericString = createArrayWithGeneric<string>("Dhaka");

  type User = {
    id: number;
    name: string;
  };
  const resGenericObj = createArrayWithGeneric<User>({
    id: 12,
    name: "pritom",
  });



  // or
  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const res2 = createArrayWithTuple<string, number>("Bangladesh", 233);
  const res3 = createArrayWithTuple<string, { postCode: number }>("Dhaka", {
    postCode: 222,
  });



  // or
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web development";

    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent({
    name: "x",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "y",
    email: "y@gmail.com",
    devType: "NLWD",
    watch: "apple",
  });




  
}
