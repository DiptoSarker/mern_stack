import jwt from "jsonwebtoken";
const authMiddlewere = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorised, Login again" });
  }
  try {
    const token_decode = jwt.verify(token, "secret@random");
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

export default authMiddlewere;
