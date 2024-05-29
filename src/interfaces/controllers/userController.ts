import { Request, Response } from 'express';
import { verifyIdentity } from '../../application/usecases/userUsecases/verifyIdentity';

export class UserController {
  constructor() {}

  checkIdentity = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, phoneNumber } = req.body;
      console.log(req.body);

      const response = await verifyIdentity(email, phoneNumber);
      if (response) {
        res.status(201).send({ message: 'Registration success' });
      } else {
        res.status(404).send({ message: 'Something went wrong!!' });
      }
    } catch (e: any) {
      console.log('\n verify identity:', e.message);
      const code = !e.code ? 500 : e.code >= 400 && e.code <= 599 ? e.code : 500;
      res.status(code).send({ message: e.message });
    }
  };
}
