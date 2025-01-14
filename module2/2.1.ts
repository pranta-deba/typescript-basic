{
  // type assertion
  // custom try catch error

  // type assertion
  let anything: any;
  anything = "Level 2";
  (anything as string).length;

  // or
  let anything2: any;
  anything2 = 22;
  (anything2 as number).toString();

  // or
  const kgToGm = (kg: string | number): string | number | undefined => {
    if (typeof kg === "string") {
      return `${parseFloat(kg) * 1000} gm`;
    } else if (typeof kg === "number") {
      return kg * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;



  // custom try catch error
  type CustomError = {
    message: string;
  };
  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }


}
