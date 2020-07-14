import { verifyIdToken, createUser } from "../../utils/auth/firebaseAdmin";

export default (req, res) => {
  const {user} = req.body;
  createUser(user);
  res.status(200).send("ok")
};
