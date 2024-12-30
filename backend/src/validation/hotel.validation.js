import { query } from 'express';
import { body,param } from 'express-validator';

class hotelvalidation{
    static addproduct=[
        body("hotelname").notEmpty().withMessage("the name cannot be empty"),
        body("address").notEmpty().withMessage("the address is not empty"),
    ];
    static Params_query= [
        query("page"),
        query("query")
    ]
    static Params_id= [
        param("id").isMongoId().withMessage("provide valid Id").notEmpty().withMessage("Id is required")
    ]
}
export default hotelvalidation;