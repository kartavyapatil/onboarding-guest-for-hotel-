import httpStatus from 'http-status';
import guestService from '../services/guest.service.js';
import asynchandler from '../utils/asynchandler.js';
class guestController {
    static RegisterUser = asynchandler(async(req,res)=>{
        const res_obj = await guestService.registerUser(req.body);
        res.status(httpStatus.CREATED).send(res_obj)
    }) 
    static loginUser = asynchandler(async(req,res)=>{
        const res_obj = await guestService.loginUser(req.body);
        res.status(httpStatus.OK).send(res_obj)
    }) 
}

export default guestController;
