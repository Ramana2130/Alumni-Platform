import express from "express";
const router = express.Router();

// Route to submit alumni personal details
router.post('/personaldetails/:alumniId', async (req, res) => {
    try {
        const { alumniId } = req.params;
        const { about, city, nationality, currentstatus, role, companyname, currentcity, successstories, fromlearn } = req.body;

        const newDetails = new alumnipersonaldetails({
            alumniId,
            about,
            city,
            nationality,
            currentstatus,
            role,
            companyname,
            currentcity,
            successstories,
            fromlearn
        });

        await newDetails.save();
        return res.status(200).send({ success: true, message: "Details Submitted Successfully" });
    } catch (error) {
        console.log("Error in alumni personal details route: ", error);
        res.status(500).send({ error: true, message: "Internal Server Error" });
    }
});

// Route to fetch alumni personal details
router.get('/personaldetails/:alumniId', async (req, res) => {
    try {
        const { alumniId } = req.params;
        const details = await alumnipersonaldetails.findOne({ alumniId });

        if (!details) {
            return res.status(404).send({ success: false, message: "Details not found" });
        }

        return res.status(200).send({ success: true, details });
    } catch (error) {
        console.log("Error in fetching alumni personal details", error);
        res.status(500).send({ error: true, message: "Internal Server Error" });
    }
});

// Route to update alumni personal details
router.put('/personaldetails/:alumniId', async (req, res) => {
    try {
        const { alumniId } = req.params;
        const { about, city, nationality, currentstatus, role, companyname, currentcity, successstories, fromlearn } = req.body;

        const updateData = {
            about,
            city,
            nationality,
            currentstatus,
            role,
            companyname,
            currentcity,
            successstories,
            fromlearn
        };

        const updatedDetails = await alumnipersonaldetails.findOneAndUpdate(
            { alumniId },
            { $set: updateData },
            { new: true }
        );

        if (!updatedDetails) {
            return res.status(404).send({ success: false, message: "Details not found" });
        }

        return res.status(200).send({ success: true, message: "Details updated successfully", updatedDetails });
    } catch (error) {
        console.log("Error in updating alumni personal details", error);
        res.status(500).send({ error: true, message: "Internal Server Error" });
    }
});

// Route to delete alumni personal details
router.delete('/personaldetails/:alumniId', async (req, res) => {
    try {
        const { alumniId } = req.params;

        const deletedDetails = await alumnipersonaldetails.findOneAndDelete({ alumniId });

        if (!deletedDetails) {
            return res.status(404).send({ success: false, message: "Details not found" });
        }

        return res.status(200).send({ success: true, message: "Details deleted successfully" });
    } catch (error) {
        console.log("Error in deleting alumni personal details", error);
        res.status(500).send({ error: true, message: "Internal Server Error" });
    }
});

router.post('/addjob', async (req, res) => {
    try {
        const { alumniId, ...jobData } = req.body;

        const job = new JobDetails({
            alumniId,  // Save the alumniId
            ...jobData // Spread the rest of the job details from the request body
        });

        await job.save();
        res.status(200).send({ success: true, message: 'Job Posted Successfully' });
    } catch (error) {
        console.error("Error in posting job details:", error);
        res.status(500).send({ error: true, message: 'Internal Server Error' });
    }
});

export default router;
