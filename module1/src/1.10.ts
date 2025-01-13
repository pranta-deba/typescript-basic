{
  // union types
  type Role = "Admin" | "User";
  const userRole: Role = "Admin";

  type User = {
    name: string;
    age: number;
    gender: "male" | "female";
    role: Role;
  };
  const user: User = {
    name: "John Doe",
    age: 30,
    gender: "male",
    role: "Admin",
  };

  // intersection types
  type FrontendDev = {
    skills: string[];
    designation1: "Frontend Dev";
  };
  type BackendDev = {
    skills: string[];
    designation2: "Backend Dev";
  };
  type FullStackDev = FrontendDev & BackendDev;

  const fullStackDev: FullStackDev = {
    skills: ["JavaScript", "TypeScript", "React", "Node.js"],
    designation1: "Frontend Dev",
    designation2: "Backend Dev",
  };
}
