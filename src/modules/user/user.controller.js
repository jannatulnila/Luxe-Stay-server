// import { UserService } from "./user.service.js";

// const createUser = async (req, res) => {
//   const user = await UserService.createUser(req.body);
//   res.status(201).json({ success: true, data: user });
// };

// const getUsers = async (req, res) => {
//   const users = await UserService.getAllUsers();
//   res.json({ success: true, data: users });
// };

// export const UserController = {
//   createUser,
//   getUsers
// };


// import { User } from "./user.model.js";
// import bcrypt from "bcryptjs";

// export const registerUser = async (req, res) => {
//   try {
//     const { name, email, photo, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ message: "Email & password required" });
//     }

//     const existing = await User.findOne({ email });
//     if (existing) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await User.create({
//       name,
//       email,
//       photo,
//       password: hashedPassword,
//     });

//     res.status(201).json({ message: "Registration successful" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



import bcrypt from "bcryptjs";
import { User } from "./user.model.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, photo, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must have at least 1 uppercase, 1 lowercase & minimum 6 characters",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      photo,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Registration successful",
      user: {
        name: user.name,
        email: user.email,
        photo: user.photo,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
