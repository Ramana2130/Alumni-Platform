import jwt from "jsonwebtoken";
import universitymodels from "../models/universitymodels";

const isUser = async (req, res, next) => {
    try {
        const token =  req.cookies.token;
        if(!token) {
            return res.status(401).send({ message: 'Unauthorized: No token provided' });
        }
        const decode = jwt.verify(token, process.env.JWT_TOKEN);
        const university = await universitymodels.findById(decode._id);
        if (!university) {
            return res.status(401).json({ success: false, message: 'User not found' });
        } 
        req.university = university;
        next();
    } catch (error) {
        console.error('middleware error:', error);
        return res.status(500).send({ error: true, message: 'Internal Server Error' });       
    }
}
export {isUser};