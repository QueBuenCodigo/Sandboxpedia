import { verifyIdToken, createUser, deleteUser, updateUser } from "../../utils/auth/firebaseAdmin";

export default async (req, res) => {
  const { user, uid } = req.body;
  let response = null;
  switch (req.method) {
    case 'POST':
      response = await createUser(user)
      res.status(200).json(response)
      break;
    case 'DELETE':
      response = await deleteUser(uid)
      res.status(200).json(response)
      break;
    case 'PUT':
      response = await updateUser(uid, user)
      res.status(200).json(response)
      break;

  }

};
