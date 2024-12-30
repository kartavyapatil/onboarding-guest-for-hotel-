import jwt from 'jsonwebtoken';
import Public_data from '../constants.js';
export const generateToken = (user) => {
    return jwt.sign({user:user._id,role:user.role}, Public_data.JWT_auth, { expiresIn: '1d' });
}

export const validate =(token)=>{
    const tokens=jwt.verify(token,Public_data.JWT_auth)
    return tokens
}