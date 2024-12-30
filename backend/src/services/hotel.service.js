import httpstatus from 'http-status';
import  ApiError from '../utils/ApiError.js';
import { generateToken } from '../utils/Token.utlis.js';
import { hotelmodel } from '../models/index.js';
class hotelservice{
    static async saveFormData({ user,image, textFields }) {
        const { buffer, mimetype, originalname } = image;
    
        const data = await hotelmodel.create({
          user:user,
            hotelname: textFields.hotelname,
            address: textFields.address,
            website: textFields.website,
          image: {
            filename: originalname,
            contentType: mimetype,
            data: buffer,
          },
        });
        return {
          msg: "Form data saved successfully",
          data: data._id,
        };
      }  
      static async gethotel(user){
        // console.log("the request recievd on get hotel the user is "+user) ;

    const data =  await hotelmodel.find({}).select("hotelname address image website")
    // console.log("the data is from service  "+data)
    // console.log("the data is "+data)
    // ;
    //total document
    // const totalproduct = await hotelmodel.countDocuments(queryies)
    //hasmore
        return {
            users:data,
            // totalproduct:totalproduct
          }
    }
    static async deleteorder(user,id){
      const checkExist=await hotelmodel.findOneAndDelete({_id:id})
      if (!checkExist){
          throw new ApiError(httpstatus.BAD_REQUEST,"consumer not in record");
          return
      }
          return {
              msg:"consumer delete  :("
          }   
     }

    }
    export default hotelservice; 