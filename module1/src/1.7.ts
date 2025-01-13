{
  // spread operator
  // rest operator

  // spread operator
  const user1: string[] = ["a", "b", "c", "d", "e"];
  const user2: string[] = ["f", "g", "h", "i"];
  user1.push(...user2);

  const mentors1 = {
    cse: "indra",
    eee: "saki",
  };
  const mentors2 = {
    mech: "raja",
    chem: "dip",
  };
  const mentorList = { ...mentors1, ...mentors2 };

  // rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };
  greetFriends("Abul", "Mabul", "Tabul");
}
