import { UserService } from "./user.service.js";

const createUser = async (req, res) => {
  const user = await UserService.createUser(req.body);
  res.status(201).json({ success: true, data: user });
};

const getUsers = async (req, res) => {
  const users = await UserService.getAllUsers();
  res.json({ success: true, data: users });
};

export const UserController = {
  createUser,
  getUsers
};
