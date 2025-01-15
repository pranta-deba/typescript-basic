{
  // Constraints

  const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
    const course = "Next level web development";

    return {
      ...student,
      course,
    };
  };
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({
    id: 1,
    name: "x",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    id: 2,
    name: "y",
    email: "y@gmail.com",
    devType: "NLWD",
    watch: "apple",
  });
  const student3 = addCourseToStudent({
    id: 3,
    name: "z",
    email: "z@gmail.com",
  });









}
