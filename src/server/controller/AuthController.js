// import userModels from "../models/usermodels.js";
// const register = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const existingUser = await userModels.findOne({ email });
//     if (existingUser) {
//       res.status(400).send({ success: false, message: "User Already Exists" });
//     }
//     const newUSers = new userModels({
//       email,
//       password,
//     });
//     await newUSers.save();
//     res
//       .status(200)
//       .send({ success: true, message: "user registerd Succesfully" });
//   } catch (error) {
//     return res
//       .status(500)
//       .send({ success: false, message: "Internal Server Error", error });
//   }
// };

// export { register };
