import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jack Sparrow",
    email: "jack@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Walter White",
    email: "walter@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;