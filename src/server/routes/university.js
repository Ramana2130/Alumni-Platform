import { Router } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import universitymodels from "../models/universitymodels.js";

const router = Router();

router.post('/addcollege', async (req, res) => {
    try {
        const {universityid, universitypassword} = req.body;
        const existingUniversity = await universitymodels.findOne({universityid});
        if(existingUniversity) {
            return res.status(400).send({success: false, message: "University Already Exists"});
        }
        const hashedPassword = await bcryptjs.hash(universitypassword, 10);
        const newUniversity = new universitymodels({
            universityid,
            universitypassword : hashedPassword
        })
        await newUniversity.save();
        return res.status(200).send({success: true, message: "University Registered Successfully"});
    } catch (error) {
        console.log("Error in university Routes ",error);
      return res.status(500).send({ success: false, message: "Internal Server Error", error });
    
    }
})

router.post('/login', async (req, res) => {
    try {
        const { universityid, universitypassword } = req.body;
        const existingUniversity = await universitymodels.findOne({ universityid });
        if (!existingUniversity) {
          return res.status(400).send({ success: false, message: "University Not Found " });
        }
       const isPasswordValid = await bcryptjs.compare(universitypassword, existingUniversity.universitypassword );
       if(!isPasswordValid) {
        return res.status(401).send({ message: "Invalid Password" });
       }
       const token = jwt.sign({_id: existingUniversity._id}, process.env.JWT_TOKEN, {expiresIn: '1d'});
       res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        maxAge: 360000
       });
       return res.status(200).send({success: true, message: "Login Successfully", existingUniversity, token, _id: existingUniversity._id })
      } catch (error) {
        console.log("Error in unversity Login: ", error);
        return res.status(500).send({ success: false, message: "Internal Server Error", error });
      }
})

router.post('/logout', async (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).send({message: "Logout Successful"})
  } catch (error) {
    console.error("Error in university Logout ",error);
        res.status(500).send({ error: true, message: "Internal Server Error" });
  }
})
export default router;