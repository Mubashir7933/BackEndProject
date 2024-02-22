
import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js";



Router.route('/register').post(registerUser);


export default userRouter


// user.routes.js

/*import express from "express";
import { registerUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

// Define your routes and link them to route handlers
userRouter.post('/register', registerUser);

export default userRouter;*/


