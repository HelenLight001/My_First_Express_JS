const UserModels = require("../Models/UserModels");
const bcrypt = require("bcryptjs");

const SignUp = async (req, res) => {
  const {password, firstName, lastName, email, userName, phone} = req.body;
  try {
    /// TO CHECK IF TASK EXIST IN OUR DB UNDER TASK COLLECTION
    const userExist = await UserModels.findOne({email});
    if (userExist) {
      return res.status(405).json({
        message: "User already exixts",
      });
    }

    /// TO CREATE A NEW TASK
    const creatNewUser = await new UserModels({
      password,
      firstName,
      lastName,
      email,
      userName,
      phone,
    });

    /// SAVING EVERYTHING IN THE REQ.BODY TO THE DB
    const taskResult = await creatNewUser.save();

    ///WHERE AM RETURNING THE DATA IF SUCCESSFUL
    // res.status(200).json(taskResult);
    // OR
    ///WHERE AM RETURNING THE DATA IF SUCCESSFUL

    res.status(200).json({
      _id: taskResult._id,
      password: taskResult.password,
      firstName: taskResult.firstName,
      lastName: taskResult.lastName,
      email: taskResult.email,
      userName: taskResult.userName,
      phone: taskResult.phone,
    });
  } catch (error) {
    res.status(404).json({
      message: "Sign up failed",
    });
  }
};

const Login = async (req, res) => {
  const {email, password} = req.body;
  try {
    /// TO CHECK IF TASK EXIST IN OUR DB UNDER TASK COLLECTION
    const checkUser = await UserModels.findOne({email});
    if (!checkUser) {
      return res.status(405).json({
        message: "User not found",
      });
    }

    const validPassword = await bcrypt.compare(password, checkUser.password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Invalid password",
      });
    }

    /// SAVING EVERYTHING IN THE REQ.BODY TO THE DB
    // const taskResult = checkUser;
    ///WHERE AM RETURNING THE DATA IF SUCCESSFUL
    // res.status(200).json(taskResult);
    // OR
    ///WHERE AM RETURNING THE DATA IF SUCCESSFUL

    res.status(200).json({
      message: "Lgin successful",
      _id: checkUser._id,
      firstName: checkUser.firstName,
      lastName: checkUser.lastName,
      email: checkUser.email,
      userName: checkUser.userName,
      phone: checkUser.phone,
    });
  } catch (error) {
    res.status(404).json({
      message: "Login failed",
    });
  }
};

module.exports = {
  SignUp,
  Login,
};
