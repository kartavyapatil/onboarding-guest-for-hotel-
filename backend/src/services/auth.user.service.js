import httpstatus from 'http-status';
import  ApiError from '../utils/ApiError.js';
import {usermodel,profilemodel,guestmodel} from '../models/index.js';
import { generateToken } from '../utils/Token.utlis.js';

class AuthService {
   static async registerUser(body) {
    const{name,email,password ,role}=body;

    const checkExist = await usermodel.findOne({ email });
    if (checkExist) {
        throw new ApiError(httpstatus.BAD_REQUEST, "User is already registered");
        return
    }
    const user = await usermodel.create({ name, email, password, role });
    const token = generateToken(user);
    const refresh_token=generateToken(user,"2d")
    await profilemodel.create({
        user: user._id,
        refresh_token
    });
    return {
        msg: "User registered successfully",
        token: token // Add logic for generating a token if needed
    };
   }
   static async loginUser(body) {
    const { email, password,role } = body;
    console.log(password)
    const checkExist = await usermodel.findOne({ email });
    if (!checkExist) {
        throw new ApiError(httpstatus.BAD_REQUEST, "user not register");
        return
    }
    console.log(checkExist.password)
    if(password !==checkExist.password || role !==checkExist.role){
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
        
//     const checkExist1 = await usermodel.findById(user).select("name email");
//     const checkExist2 = await guestmodel.findById(user).select("name email");
//     if (!checkExist1 || !checkExist2) {
//         throw new ApiError(httpstatus.BAD_REQUEST, "user not register");
//         return
//     }
//     console.log(checkExist1);
//     console.log(checkExist2)
//     return {
//         msg: "data",
//         user: checkExist2 // Add logic for generating a token if needed
//     };
// }
static async Profileservies(user) {
    const [checkExist1, checkExist2] = await Promise.all([
        usermodel.findById(user).select("name email role"),
        guestmodel.findById(user).select("name email role")
    ]);

    if (!checkExist1 && !checkExist2) {
        throw new ApiError(httpstatus.BAD_REQUEST, "User not registered");
    }

    const userData = checkExist1 || checkExist2;

    return {
        msg: "User data retrieved successfully",
        user: userData
    };
}
}
export default AuthService;
