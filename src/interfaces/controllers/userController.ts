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
console.log(response,'response');

        res.status(200).send(response);
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
