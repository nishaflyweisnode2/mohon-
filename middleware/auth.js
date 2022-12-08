const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const Auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace('Bearer ', '')

    console.log("irfbfbcvu mila mila mila mila ", token)
    const decoded = jwt.verify(token, process.env.Token_Key);
    console.log("irfbfbcvu mila nnn nnn nnn nnn  ", decoded.payload)
    
    const user = await User.findOne({ _id: decoded.payload, "tokens.token": token });
    console.log("userauth",user)
    if (!user) {
      throw new Error();
    }
    else{
    req.user = user;
    // console.log("tttttttt ttttt      ", user)
    next();
}
  } catch (e) {
    // res.status(401).send({ error:error });
    next(e)
  }
};
module.exports = Auth;