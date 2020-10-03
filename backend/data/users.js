import bcrypt from "bcryptjs";

const users = [
  {
    name: "admin User",
    email: "admin@ProProduct.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Abdalslam Aboubakar",
    email: "abdul@ProProduct.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "test user",
    email: "test@ProProduct.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
