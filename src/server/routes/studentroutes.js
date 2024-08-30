import { Router } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import userModels from "../models/usermodels.js";

const router = Router();
const emailRegex = /^[a-zA-Z0-9._%+-]+@(skcet\.ac\.in|gmail\.com)$/;

router.post("/addstudent", async(req, res) => {
    try {
        const {universityId,currentstudentsname,currentstudentsregisterno,currentstudentsdepartment, currentstudentsyearofjoining, currentstudentsyearofpassing, email} = req.body;
        if(!emailRegex.test(email)) {
            return res.status(400).send({ success: false, message: "Invalid Email" });
        }
        const existingStudent = await userModels.findOne({email});
        if(existingStudent){
            return  res.status(400).send({ success: false, message: "Already Exists" });
        }
        const hashedPassword = await bcryptjs.hash(currentstudentsregisterno.toString(), 10);
        const newStudents = new userModels({
            universityId: universityId,
            currentstudentsname,  
            currentstudentsregisterno,          
            currentstudentsdepartment,
            currentstudentsyearofjoining,
            currentstudentsyearofpassing,
            email,
            hashedPassword
        })
        await newStudents.save();
        return res.status(200).send({success: true, message: "Registred Successfully"});
    } catch (error) {
        console.log("Error in Student Add Routes ",error);
      res.status(500).send({ error: true, message: "Internal Server Error" });
    }
})

router.post('/login', async (req, res) => {
    try {
        const {email, currentstudentsregisterno} = req.body;
        const student = await userModels.findOne({email});
        if(!student) {
            return res.status(400).send({ success: false, message: "User Not Found " });
        }
        const isPasswordValid = await bcryptjs.compare(currentstudentsregisterno,  student.hashedPassword);
        if(!isPasswordValid) {
            return res.status(401).send({ message: "Invalid Password" });
        }
        const token = jwt.sign({_id: student._id}, process.env.JWT_TOKEN, {expiresIn: '1d'});
        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            maxAge: 360000
           });
           return res.status(200).send({success: true, message: "Login Successfully", student, token, _id: student._id, universityId: student.universityId });
    } catch (error) {
        console.log("Error in student Login: ", error);
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

  router.get("/:universityId/students", async(req, res) => {
    const {universityId} = req.params;
    try {
      const students = await userModels.find({universityId: universityId}).select("-password");
       res.status(200).json({students});
    } catch (error) {
      console.log("Error in getalumni by university ",error);
      res.status(500).send({ error: true, message: "Internal Server Error" });      
    }
  })

  
  router.delete("/delete/:id", async(req, res) => {
    const studentId = req.params.id;
    try {
      const student = await userModels.findByIdAndDelete(studentId);
      if(!student) {
        return res.status(404).send({message: "Alumni Not Found"});
      }      
      res.status(200).send({message: "Student Deleted Successfully"})
    } catch (error) {
      
    }
  })

  router.put("/:universityId/update/:id", async(req, res) => {
    const studentId = req.params.id;
    try {
      const updatestudent = await userModels.findByIdAndUpdate(
        studentId, {
          currentstudentsname: req.body.currentstudentsname,
          currentstudentsregisterno: req.body.currentstudentsregisterno,
          hashedPassword: req.body.hashedPassword,
          currentstudentsdepartment: req.body.currentstudentsdepartment,
          currentstudentsyearofjoining: req.body.currentstudentsyearofjoining,
          currentstudentsyearofpassing: req.body.currentstudentsyearofpassing,
          email: req.body.email
        },
        {new: true}
      );
      if (req.body.currentstudentsregisterno) {
        // Encrypt the new password
        const saltRounds = 10;
        const hashedPassword = await bcryptjs.hashSync(req.body.currentstudentsregisterno, saltRounds);
        updatestudent.password = hashedPassword;
      }    
      await updatestudent.save();
    if (!updatestudent) {
      return res.status(404).send({ error: true, message: 'Student Not Found' });
  }
  res.status(200).send({ success: true, updatestudent,message: 'Student Updated Successfully' });
  
    } catch (error) {
      console.log("Error in Alumni Update Routes",error);
          res.status(500).send({ error: true, message: 'Internal Server Error' });
    }
  })

export default router;