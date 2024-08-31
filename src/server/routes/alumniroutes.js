import express from "express";
// import { register } from "../controller/AuthController.js";
import alumniformsmodels from "../models/alumniform.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from "multer";
import { read, utils } from "xlsx";
import mongoose from "mongoose";
const AuthRoutes = express.Router();

const upload = multer({ storage: multer.memoryStorage() });


// AuthRoutes.post("/register", register);
// AuthRoutes.post('/addexcelfile/:universityId', upload.single('file'), async (req, res) => {
//   try {
//     const file = req.file;
//     const { universityId } = req.params;

//     if (!file) {
//       return res.status(400).send('No file uploaded.');
//     }

//     if (!mongoose.Types.ObjectId.isValid(universityId)) {
//       return res.status(400).send('Invalid University ID.');
//     }

//     const universityObjectId = new mongoose.Types.ObjectId(universityId);

//     // Read the file buffer using xlsx
//     const workbook = read(file.buffer, { type: 'buffer' });
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const json = utils.sheet_to_json(worksheet);
//     // Hash the passwords and transform the data
//     const saltRounds = 10; // You can adjust the salt rounds as needed
//     const alumniDataPromises = json.map(async row => {
//       const password = typeof row['RegisterNo'] === 'string' ? row['RegisterNo'].trim() : String(row['RegisterNo']);
//       const hashedPassword = await bcryptjs.hash(password, saltRounds);

//       return {
//         universityId: universityObjectId,
//         alumniname: typeof row['Name'] === 'string' ? row['Name'].trim() : row['Name'],
//         department: typeof row['Department'] === 'string' ? row['Department'].trim() : row['Department'],
//         alumniemail: typeof row['Email'] === 'string' ? row['Email'].trim() : row['Email'],
//         yearofjoining: typeof row['Year of Joining'] === 'string' ? row['Year of Joining'].trim() : row['Year of Joining'],
//         passedoutyear: typeof row['Year of Passing'] === 'string' ? row['Year of Passing'].trim() : row['Year of Passing'],
//         alumniregisterno: typeof row['RegisterNo'] === 'string' ? row['RegisterNo'].trim() : row['RegisterNo'],
//         alumnimobilenumber: typeof row['Mobile Number'] === 'string' ? row['Mobile Number'].trim() : row['Mobile Number'],
//         password: hashedPassword // Set hashed password
//       };
//     });

//     const alumniData = (await Promise.all(alumniDataPromises)).filter(row =>
//       row &&
//       row.alumniname &&
//       row.department &&
//       row.alumniemail &&
//       row.yearofjoining &&
//       row.passedoutyear &&
//       row.alumniregisterno &&
//       row.alumnimobilenumber &&
//       row.password
//     );

//     if (alumniData.length === 0) {
//       return res.status(400).json({ error: 'No valid data to save.' });
//     }

//     await alumniformsmodels.insertMany(alumniData);

//     res.status(200).json({ message: 'Data uploaded and saved successfully.' });
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     res.status(500).json({ error: 'Error uploading file.' });
//   }
// });
AuthRoutes.post('/addalumini/:universityId', async (req, res) => {
  try {
    const { universityId } = req.params;
    const {
      alumniname,
      department,
      alumniemail,
      yearofjoining,
      passedoutyear,
      alumniregisterno,
      alumnimobilenumber,
      password,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(universityId)) {
      return res.status(400).send('Invalid University ID.');
    }

    const universityObjectId = new mongoose.Types.ObjectId(universityId);

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcryptjs.hash(password, saltRounds);

    const alumniData = {
      universityId: universityObjectId,
      alumniname: alumniname.trim(),
      department: department.trim(),
      alumniemail: alumniemail.trim(),
      yearofjoining: yearofjoining.trim(),
      passedoutyear: passedoutyear.trim(),
      alumniregisterno: alumniregisterno.trim(),
      alumnimobilenumber: alumnimobilenumber.trim(),
      password: hashedPassword,
    };

    await alumniformsmodels.create(alumniData);

    res.status(200).json({ message: 'Data saved successfully.' });
  } catch (error) {
    console.error('Error processing data:', error);
    res.status(500).json({ error: 'Error processing data.' });
  }
});

// Set up multer for file upload
AuthRoutes.post('/addexcelfile/:universityId', upload.single('file'), async (req, res) => {
  try {
    const file = req.file;
    const { universityId } = req.params;

    if (!file) {
      return res.status(400).send('No file uploaded.');
    }

    if (!mongoose.Types.ObjectId.isValid(universityId)) {
      return res.status(400).send('Invalid University ID.');
    }

    const universityObjectId = new mongoose.Types.ObjectId(universityId);

    // Read the file buffer using xlsx
    const workbook = read(file.buffer, { type: 'buffer' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = utils.sheet_to_json(worksheet);

    console.log("Parsed Excel Data:", json);

    // Hash the password and transform the data
    const saltRounds = 10; // You can adjust the salt rounds as needed
    const alumniData = await Promise.all(json.map(async row => {
      // Ensure RegisterNo is a string
      const password = typeof row['RegisterNo'] === 'string' ? row['RegisterNo'].trim() : String(row['RegisterNo']);

      // Debug logs
      console.log(`Original Password: ${password}`);

      try {
        const hashedPassword = await bcryptjs.hash(password, saltRounds);

        return {
          universityId: universityObjectId,
          alumniname: typeof row['Name'] === 'string' ? row['Name'].trim() : row['Name'],
          department: typeof row['Department'] === 'string' ? row['Department'].trim() : row['Department'],
          alumniemail: typeof row['Email'] === 'string' ? row['Email'].trim() : row['Email'],
          yearofjoining: typeof row['Year of Joining'] === 'string' ? row['Year of Joining'].trim() : row['Year of Joining'],
          passedoutyear: typeof row['Year of Passing'] === 'string' ? row['Year of Passing'].trim() : row['Year of Passing'],
          alumniregisterno: typeof row['RegisterNo'] === 'string' ? row['RegisterNo'].trim() : row['RegisterNo'],
          alumnimobilenumber: typeof row['Mobile Number'] === 'string' ? row['Mobile Number'].trim() : row['Mobile Number'],
          password: hashedPassword // Set hashed password
        };
      } catch (err) {
        console.error('Error hashing password:', err);
        return null; // Skip the row if password hashing fails
      }
    })).filter(row =>
      row &&
      row.alumniname &&
      row.department &&
      row.alumniemail &&
      row.yearofjoining &&
      row.passedoutyear &&
      row.alumniregisterno &&
      row.alumnimobilenumber &&
      row.password // Ensure password is included
    );

    if (alumniData.length === 0) {
      return res.status(400).json({ error: 'No valid data to save.' });
    }

    await alumniformsmodels.insertMany(alumniData);

    res.status(200).json({ message: 'Data uploaded and saved successfully.' });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Error uploading file.' });
  }
});


AuthRoutes.post("/login", async (req, res) => {
  try {
    const { alumniemail, alumniregisterno } = req.body;

    // Find the alumni by email
    const alumni = await alumniformsmodels.findOne({ alumniemail });
    if (!alumni) {
      return res.status(400).send({ success: false, message: "Invalid Email or Register Number" });
    }

    // Check if the provided register number matches the stored hashed password
    const isMatch = await bcryptjs.compare(alumniregisterno.toString(), alumni.password);
    if (!isMatch) {
      return res.status(400).send({ success: false, message: "Invalid Email or Register Number" });
    }

    // Create a JWT token
    const token = jwt.sign({ id: alumni._id, alumniname: alumni.alumniname }, process.env.JWT_TOKEN, {
      expiresIn: '1h',
    });

    // Return the token and user information
    return res.status(200).send({
      success: true,
      message: "Login successful",
      token,
      alumni: {
        id: alumni._id,
        alumniname: alumni.alumniname,
        universityId: alumni.universityId,
        department: alumni.department,
        passedoutyear: alumni.passedoutyear,
        alumniemail: alumni.alumniemail,
        alumniregisterno: alumni.alumniregisterno,
        alumnimobilenumber: alumni.alumnimobilenumber,
        yearofjoining: alumni.yearofjoining,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ success: false, message: "Internal Server Error", error });
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
    const alumnidetails = await alumniformsmodels.findOne({ _id: _id });
    if (!alumnidetails) {
      return res.status(404).send({ error: true, message: "Alumni not found" });
    }
    return res.status(200).send({ alumnidetails });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: true, message: "Internal Server Error" });
  }
});

AuthRoutes.get("/:universityId/alumnis", async (req, res) => {
  const { universityId } = req.params;
  try {
    const alumnis = await alumniformsmodels.find({ universityId: universityId })
    res.status(200).json({ alumnis });
  } catch (error) {
    console.log("Error in getalumni by university ", error);
    res.status(500).send({ error: true, message: "Internal Server Error" });
  }
})

AuthRoutes.delete("/delete/:id", async (req, res) => {
  const aluminId = req.params.id;
  try {
    const alumni = await alumniformsmodels.findByIdAndDelete(aluminId);
    if (!alumni) {
      return res.status(404).send({ message: "Alumni Not Found" });
    }
    res.status(200).send({ message: "Alumni Deleted Successfully" })
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
      return res.status(404).send({ error: true, message: "No Alumni Found for the given department" });
    }

    return res.status(200).json(alumnis);
  } catch (error) {
    console.log("Error in getting alumni by department", error);
    return res.status(500).send({ error: true, message: "Internal Server Error" });
  }
});

AuthRoutes.put("/:universityId/update/:id", async (req, res) => {
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
      { new: true }
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
    res.status(200).send({ success: true, updatealumni, message: 'Alumni Updated Successfully' });

  } catch (error) {
    console.log("Error in Alumni Update Routes", error);
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

    res.json({ alumni });
  } catch (error) {
    console.error('Error fetching alumni by year:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default AuthRoutes;
