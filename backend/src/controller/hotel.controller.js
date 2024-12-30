import httpStatus from "http-status";
import asynchandler from "../utils/asynchandler.js";
import hotelService from "../services/hotel.service.js";
import ApiError from "../utils/ApiError.js";
class hotelcontroller {
  static addhotel = asynchandler(async (req, res) => {
    const textFields = req.body;
    const image = req.file;
    const user=req.user;

    if (!image) {
        throw new ApiError(httpStatus.BAD_REQUEST, "Image is required");
      }
      const resObj = await hotelService.saveFormData({user, image, textFields });
    res.status(httpStatus.CREATED).send(resObj);
  });

  static gethotel = asynchandler(async (req, res) => {
    // console.log(req.user);
    const formEntry = await hotelService.gethotel(req?.user);
    res.status(httpStatus.OK).send(formEntry);
      //   hotelname: formEntry.users.hotelname,
      //   address: formEntry.users.address,
      // image: `data:${formEntry.users.image.contentType};base64,${formEntry.image.users.data.toString("base64")}`,
    // }); 
  });
  static deleteorder=asynchandler(async(req,res)=>{
    const res_obj=await hotelService.deleteorder(req?.user ,req.params._id);
    return res.status(httpStatus.OK).json(res_obj)
})

}
export default hotelcontroller;