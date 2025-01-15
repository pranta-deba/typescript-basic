{
  // Asynchronous typescript - promise

  type Something = { name: string };
  // simulate
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { name: "pritom" };

      if (data) {
        resolve(data);
      } else {
        reject("failed to load data!");
      }
    });
  };

  // calling create promise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };

  const res1 = showData();


  // or
  type Todo = { 
        userId: number;
        id: number; 
        title:string; 
        completed: boolean;
    }
  
  const getTodo = async (): Promise<Todo> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data
  };
  const res2 = getTodo();



}
