{
  // Type guard using typeof & in

  // typeof --> type guard
  type AlphaNumeric = string | number;

  const add = (p1: AlphaNumeric, p2: AlphaNumeric): AlphaNumeric => {
    if (typeof p1 === "number" && typeof p2 === "number") {
      return p1 + p2;
    } 
    else {
      return p1.toString() + " " + p2.toString();
    }
  };

  const res1 = add(2,2);
  const res2 = add("2",2);


  // typeof --> in guard
  type NormalUser = {
    name: string
  }
  type AdminUser = {
    name: string;
    role: "admin";
  }

  const getUser = (user: NormalUser|AdminUser)=>{
    if ('role' in user) {
        console.log(`My name is ${user.name} and my role is ${user.role}`)
    }
    else{
        console.log(`My name is ${user.name}.`)
    }
  }

  const normalUser: NormalUser = {
    name: "Pritom"
  }
  const adminUser: AdminUser = {
    name: "Pranta",
    role: "admin"
  }

  getUser(normalUser);
  getUser(adminUser);



}
