{
  // ternary operator
  // optional chaining
  // nullish  coalescing operator

  // ternary operator
  const age: number = 18;
  if (age >= 18) {
    console.log("Adult.");
  } else {
    console.log("Mot Adult!");
  }

  const isAdult = age >= 18 ? "adult" : "not adult";
  console.log({ isAdult });

  // nullish coalescing operator : [note: decision making for null/undefined]
  const isAuthenticated = null;
  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log({ result1 }, { result2 });

  // optional chaining
  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentaddress: string;
      permanentaddress?: string;
    };
  };

  const user: User = {
    name: "Raja",
    address: {
      city: "Comilla",
      road: "12 Chandpur",
      presentaddress: "Chittagong",
    },
  };
  const permanentAddress = user?.address?.permanentaddress??"No Permanent Address!";
  console.log({permanentAddress});
}
