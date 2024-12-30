import httpstatus from 'http-status';
import  ApiError from '../utils/ApiError.js';
import {guestmodel,profilemodel} from '../models/index.js';
import { generateToken } from '../utils/Token.utlis.js';

class guestService {
   static async registerUser(body) {
    const{name,email,password ,role}=body;

    const checkExist = await guestmodel.findOne({ email });
    if (checkExist) {
        throw new ApiError(httpstatus.BAD_REQUEST, "User is already registered");
        return
    }
    const user = await guestmodel.create({ name, email, password, role });
    const token = generateToken(user);
    const refresh_token=generateToken(user,"2d")
    await profilemodel.create({
        user: user._id,
        refresh_token
    });
    return {
        msg: "guest registered successfully",
        token: token // Add logic for generating a token if needed
    };
   }
   static async loginUser(body) {
    const { email, password,role } = body;
    
    const checkExist = await guestmodel.findOne({ email });
    if (!checkExist) {
        throw new ApiError(httpstatus.BAD_REQUEST, "user not register");
        return
    }
    if(password !==checkExist.password || role !=="guest"){
        throw new ApiError(httpstatus.BAD_REQUEST,"invalid password")
        return
    }

    const token=generateToken(checkExist)
    console.log(token);
    return {
        msg: "User login successfully",
        token: token // Add logic for generating a token if needed
    };
   }
//     static async Profileservies(user) {
        
//     const checkExist = await guestmodel.findById(user).select("name email");
//     if (!checkExist) {
//         throw new ApiError(httpstatus.BAD_REQUEST, "user not register");
//         return
//     }
//     return {
//         msg: "data",
//         user: checkExist // Add logic for generating a token if needed
//     };
// }
}
export default guestService;
