import httpStatus from 'http-status';
import AuthService from '../services/auth.user.service.js';
import asynchandler from '../utils/asynchandler.js';
class AuthController {
    static RegisterUser = asynchandler(async(req,res)=>{
        const res_obj = await AuthService.registerUser(req.body);
        res.status(httpStatus.CREATED).send(res_obj)
    }) 
    static loginUser = asynchandler(async(req,res)=>{
        const res_obj = await AuthService.loginUser(req.body);
        res.status(httpStatus.OK).send(res_obj)
    }) 
    static profilelogin = asynchandler(async(req,res)=>{
        const res_obj = await AuthService.Profileservies(req.user);
        res.status(httpStatus.OK).send(res_obj)
    }) 
}

export default AuthController;
