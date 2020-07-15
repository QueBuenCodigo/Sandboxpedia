import { verifyIdToken, createUser, deleteUser, updateUser } from "../../utils/auth/firebaseAdmin";

export default async (req, res) => {
  const { user, uid } = req.body;
  const {id} = req.query;
  switch (req.method) {
    case 'POST':
      const response = await createUser(user)
      res.status(200).json(response)
      break;
    case 'DELETE':
      await deleteUser(id)
      res.status(200).send('ok')
      break;
    case 'PUT':
      await updateUser(uid, user)
      res.status(200).send('ok')
      break;

  }

};
