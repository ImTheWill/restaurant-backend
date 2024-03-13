import * as userService from "../services/userService";
//sends errors if mssing parts of signup or login

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new Error("Missing Username or email or password!");
    }

    await userService.signup(username, email, password);
    console.log("SignUp Successful");
    
    return res.status(200).json({message : 'Success'});
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Missing email or password!");
    }
    console.log("before error 1")
    await userService.login(email, password);
    console.log("after error 1")
    return res.status(200).json({ message: "Success" });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

//create edituser
