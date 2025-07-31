const UserModels = require("../Models/UserModels");

const SignUp = async (req, res) => {
  const {password, firstName, lastName, userInfo, email, userName, phone} =
    req.body;
  try {
    /// TO CHECK IF TASK EXIST IN OUR DB UNDER TASK COLLECTION
    const userExist = await UserModels.findOne({email, userName, password});
    if (userExist) {
      return res.status(405).json({
        message: "User already exixts",
      });
    }

    /// TO CREATE A NEW TASK
    const creatNewUser = await userModel.create({
      password,
      firstName,
      lastName,
      userInfo,
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
      userInfo: taskResult.userInfo,
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

module.exports = {
  SignUp,
};
