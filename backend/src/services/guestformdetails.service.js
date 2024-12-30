import GuestFormDetails from '../models/guestformdetails.model.js';
import ApiError from '../utils/ApiError.js';
import httpstatus from 'http-status';

class GuestFormDetailsService {
    static async createGuestFormDetails(user,body) {
        const {fullName, mobileNumber, address, purposeOfVisit, stayDates, emailId, idProofNumber } = body;
console.log("this body from service "+body)
        // Validate required fields
        if (!user||!fullName || !mobileNumber || !address || !purposeOfVisit || !stayDates || !emailId || !idProofNumber) {
            throw new ApiError(httpstatus.BAD_REQUEST, "All fields are required");
        }

        // Create new guest form details entry
        const checkExist=await GuestFormDetails.findOne({idProofNumber:idProofNumber, user: user})
        if (checkExist){
            throw new ApiError(httpstatus.BAD_REQUEST,"guest already in record");
            return
        }
        const guestFormDetails = await GuestFormDetails.create({
            user,
            fullName,
            mobileNumber,
            address,
            purposeOfVisit,
            stayDates,
            emailId,
            idProofNumber
        });

        return {
            msg: "Guest form details created successfully",
            data: guestFormDetails
        };
    }
    static async getGuestFormDetails(user) {
        const guestFormDetails = await GuestFormDetails.find({});
        return guestFormDetails;
    }
    static async deleteorder(user,id){
        console.log("the id is "+id)
        console.log("the user is "+user)
        const checkExist=await GuestFormDetails.findOneAndDelete({_id:id})
        if (!checkExist){
            throw new ApiError(httpstatus.BAD_REQUEST,"guest not in record");
            return
        }
            return {
                msg:"Guest delete  :("
            }   
       }
}

export default GuestFormDetailsService;