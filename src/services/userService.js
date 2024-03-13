import * as userDao from "../models/userDao";
import * as bcrypt from "bcrypt";

export const signup = async (username, email, password) => {
  try {
    const user = await userDao.getUserByEmail(email);
    if (user) {
      throw new Error("Email is already in use by another user");
    }else{
      const encrptedPass = await bcrypt.hash(password, 12);//encrypts pass
      userDao.signUpUser(username, email, "" + encrptedPass);}//stores encrypt pass
  } catch (err) {
    throw new Error(err);
  }
};

export const login = async (email, password) => {
  try {
    const user =  await userDao.getUserByEmail(email);
    if(!user){
      throw new Error("email does not exist");
    }

    console.log("before error 2")
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Wrong password");
    }
  } catch (err) {
    throw new Error(err);
  }
};
