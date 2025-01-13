{
  // destructuring

  // object destructuring
  const user = {
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
    },
  };
  const {
    name,
    age,
    address: { street },
  } = user;

  // array destructuring
  const numbers = [1, 2, 3, 4, 5];
  const [first, second, ...rest] = numbers;
}
