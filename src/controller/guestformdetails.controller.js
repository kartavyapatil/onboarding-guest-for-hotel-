import GuestFormDetailsService from '../services/guestformdetails.service.js';
import httpstatus from 'http-status';
import asynchandler from '../utils/asynchandler.js';

class GuestFormDetailsController {
    static createGuestFormDetails=asynchandler(async(req,res)=>{
        console.log("this body from controller "+req.user)
            const result = await GuestFormDetailsService.createGuestFormDetails(req?.user,req.body);
            res.status(httpstatus.CREATED).json(result); 
    });
    static getGuestFormDetails=asynchandler(async(req,res)=>{
        const result = await GuestFormDetailsService.getGuestFormDetails(req?.user);
        res.status(httpstatus.OK).json(result);
    });
    static deleteGuestFormDetails=asynchandler(async(req,res)=>{
        const result = await GuestFormDetailsService.deleteorder(req?.user,req.params.id);
        res.status(httpstatus.OK).json(result);
    });
    
}

export default GuestFormDetailsController;