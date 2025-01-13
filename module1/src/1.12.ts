{
  //nullable types
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching.....");
    } 
    else {
      console.log("Nothing to search!");
    }
  };
  searchName(null);



  //unknown types
  const getSpeedInMeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertSpeed = (value * 1000) / 3600;
      console.log(`The car speed is ${convertSpeed} ms^-1`);
    } 
    else if (typeof value === "string") {
      const [result] = value.split(" ");
      const convertSpeed = (parseFloat(result) * 1000) / 3600;
      console.log(`The car speed is ${convertSpeed} ms^-1`);
    } 
    else {
      console.log("wrong input!");
    }
  };
  getSpeedInMeterPerSecond("1000 dd");




  //never types
  const throwError = (mgs: string): never => {
    throw new Error(mgs);
  };
  throwError('Mushkil se error!')
}
