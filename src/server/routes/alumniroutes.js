import express from "express";
// import { register } from "../controller/AuthController.js";
import alumniformsmodels from "../models/alumniform.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import universitymodels from "../models/universitymodels.js";
const AuthRoutes = express.Router();

// AuthRoutes.post("/register", register);
AuthRoutes.post("/addalumni", async (req, res) => {
    try {
      const {
        universityId,
        alumniname,
        department,
        passedoutyear,
        alumniemail,
        password,
        yearofjoining,
      } = req.body;
      const existingalumni = await alumniformsmodels.findOne({ alumniemail });
      if (existingalumni) {
       return  res.status(400).send({ success: false, message: "User Already Exists" });
      }
      const hashedPassword = await bcryptjs.hash(password, 10);      
      const newAlumni = new alumniformsmodels({
        universityId: universityId,
        alumniname,
        department,
        passedoutyear,
        alumniemail,
        password: hashedPassword,
        yearofjoining,
      });
      await newAlumni.save();
     return res
        .status(200)
        .send({ success: true, message: "Alumni registerd Succesfully" });
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send({ success: false, message: "Internal Server Error", error });
    }
  });
  AuthRoutes.get("/getalumni", async (req, res) => {
    try {
      const alumnidetails = await alumniformsmodels.find({});
      return res.status(200).send({ alumnidetails });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: true, message: "Internal Server Error" });
    }
  });
  AuthRoutes.get("/getalumni/:_id", async (req, res) => {
    try {
      const _id = req.params._id;
      const alumnidetails = await alumniformsmodels.findOne({_id: _id});
      if (!alumnidetails) {
        return res.status(404).send({error: true, message: "Alumni not found"});
    }
      return res.status(200).send({ alumnidetails });
    } catch (error) {
      console.log(error);
      res.status(500).send({ error: true, message: "Internal Server Error" });
    }
  });

  AuthRoutes.get("/:universityId/alumnis", async(req, res) => {
    const {universityId} = req.params;
    try {
      const alumnis = await alumniformsmodels.find({universityId: universityId})
       res.status(200).json({alumnis});
    } catch (error) {
      console.log("Error in getalumni by university ",error);
      res.status(500).send({ error: true, message: "Internal Server Error" });      
    }
  })

  AuthRoutes.delete("/delete/:id", async(req, res) => {
    const aluminId = req.params.id;
    try {
      const alumni = await alumniformsmodels.findByIdAndDelete(aluminId);
      if(!alumni) {
        return res.status(404).send({message: "Alumni Not Found"});
      }      
      res.status(200).send({message: "Alumni Deleted Successfully"})
    } catch (error) {
      
    }
  })

  AuthRoutes.get("/:universityId/alumnis/:department", async (req, res) => {
    const { universityId, department } = req.params;
    try {
        const alumnis = await alumniformsmodels.find({
            universityId: universityId,
            department: department
        }).select("-password");

        if (alumnis.length === 0) {
            return res.status(404).send({error: true, message: "No Alumni Found for the given department" });
        }

        return res.status(200).json(alumnis);
    } catch (error) {
        console.log("Error in getting alumni by department", error);
        return res.status(500).send({ error: true, message: "Internal Server Error" });
    }
});

AuthRoutes.put("/:universityId/update/:id", async(req, res) => {
  const alumniId = req.params.id;
  try {
    const updatealumni = await alumniformsmodels.findByIdAndUpdate(
      alumniId, {
        alumniname: req.body.alumniname,
        department: req.body.department,
        passedoutyear: req.body.passedoutyear,
        alumniemail: req.body.alumniemail,
        yearofjoining: req.body.yearofjoining,
        password: req.body.password
      },
      {new: true}
    );
    if (req.body.password) {
      // Encrypt the new password
      const saltRounds = 10;
      const hashedPassword = await bcryptjs.hashSync(req.body.password, saltRounds);
      updatealumni.password = hashedPassword;
    }    
    await updatealumni.save();
  if (!updatealumni) {
    return res.status(404).send({ error: true, message: 'Alumni Not Found' });
}
res.status(200).send({ success: true, updatealumni,message: 'Alumni Updated Successfully' });

  } catch (error) {
    console.log("Error in Alumni Update Routes",error);
        res.status(500).send({ error: true, message: 'Internal Server Error' });
  }
})

AuthRoutes.get('/:universityId/alumnisyear/:year', async (req, res) => {
  const { universityId, year } = req.params;

  try {
      const alumni = await alumniformsmodels.find({
          universityId,
          passedoutyear: year, // Filter by year
      });

      if (alumni.length === 0) {
          return res.status(404).json({ message: 'No Alumni Found for the selected year' });
      }

      res.json({alumni});
  } catch (error) {
      console.error('Error fetching alumni by year:', error);
      res.status(500).json({ message: 'Server Error' });
  }
});

export default AuthRoutes;
