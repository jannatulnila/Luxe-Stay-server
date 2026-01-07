
import User from "./user.model.js";

const createUser = (payload) => User.create(payload);
const getAllUsers = () => User.find();

export const UserService = {
  createUser,
  getAllUsers
};
