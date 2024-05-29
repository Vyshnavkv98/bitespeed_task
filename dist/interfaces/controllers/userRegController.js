"use strict";
// import { Request, Response } from "express";
// // import { UserRegistartion } from "../../application/usecases/userUsecases/userSignupUsecase";
// import { verifyOtp } from "../../application/usecases/userUsecases/verifyOtp";
// import { UserRepositoryImpl } from "../../infrastructure/dataAccess/userRepositoryImpl";
// // import login from "../../application/usecases/userUsecases/login";
// // let userRegistartion = new UserRegistartion()
// export class userRegController {
//   constructor() {
//   }
//   public async userRegistration(req: Request, res: Response): Promise<void> {
//     try {
//       await userRegistartion.createUser(req.body);
//       res.status(201).send("otp sent successfully");
//     } catch (e: any) {
//       console.log("\nCreate User Route Error:", e.message);
//       const code = !e.code ? 500 : e.code >= 400 && e.code <= 599 ? e.code : 500;
//       res.status(code).send();
//     }
//   }
//   verifyOtp = async (req: Request, res: Response) => {
//     try {
//       const { otp, email } = req.body
//       const response = await verifyOtp(otp, email);
//       if (response) res.status(201).send({ message: "registration success" });
//       else res.status(404).send({ message: "some thing went wrong!!" })
//     } catch (e: any) {
//       console.log("\nverify otp:", e.message);
//       const code = !e.code ? 500 : e.code >= 400 && e.code <= 599 ? e.code : 500;
//       res.status(code).send({ message: e.message });
//     }
//   }
//   login = async (req: Request, res: Response) => {
//     try {
//       const body = req.body
//       const { user, accessToken } = await login(body);
//       if (!user) {
//         res.status(401).send(('email or password incorrect'))
//       }
//       res.status(200).send({ user, accessToken });
//     } catch (e: any) {
//       const code = !e.code ? 500 : e.code >= 400 && e.code <= 599 ? e.code : 500;
//       console.log("\nLogin User Route Error:", e.message);
//       res.status(code).send({ message: e.message });
//     }
//   }
//   }
//# sourceMappingURL=userRegController.js.map