import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;

    // User details coming from form ...
    if (
      !firstName ||
      !email ||
      !password ||
      password.length < 6 
    ) {
      return res
        .status(400)
        .json({ error: "Please enter input values correctly" });
    }

    const user = await User.findOne({ email });

    if (user) {
      // Check for user
      return res.status(400).json({ error: "email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      });
    } else {
      res.status(400).json({ error: "Invalid User Data" });
    }
  } catch (error) {
    console.log("Error in SignUp Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password} = req.body;

    // step 1: check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    // step 2: check password
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid password" });
    }

    // step 5: generate token and set cookie
    const token = generateTokenAndSetCookie(user._id, res);

    // send user info + token to frontend
    res.status(200).json({
      _id: user._id,
      email: user.email,
      token,
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
    });

  } catch (error) {
    console.log("Error in Login Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged Out Successfully" });
  } catch (error) {
    console.log("Error in Logout Controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
