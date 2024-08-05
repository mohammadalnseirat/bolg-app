import User from "../models/user.model.js";
import { handleErrors } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// function to sign up
export const signup_post = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    // check if email already exists:
    const isCurrectEmail = await User.findOne({ email });
    if (isCurrectEmail) {
      return next(
        handleErrors(401, "Email already exists,please try to sign in!")
      );
    }
    //check if all input:
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return next(handleErrors(400, "All Field are required!"));
    }

    if (password.length < 8) {
      return next(
        handleErrors(400, "Password must be at least 8 characters long!")
      );
    }
    // hassh password:
    const hashedPassword = bcryptjs.hashSync(password, 15);
    // create a newUser:
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });
    // save user:
    await newUser.save();
    // create and save the token:
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);
    const { password: hash, ...rest } = newUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true, maxAge: 86400000 })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
