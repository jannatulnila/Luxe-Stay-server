export const verifyMember = (req, res, next) => {
  if (req.user?.role !== "member") {
    return res.status(403).json({ message: "Member access only" });
  }
  next();
};
