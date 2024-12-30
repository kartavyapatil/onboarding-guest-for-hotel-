import { body } from 'express-validator';

class GuestFormDetailsValidation {
    static createGuestFormDetails = [
        body('fullName').notEmpty().withMessage('Full Name cannot be empty'),
        body('mobileNumber').notEmpty().withMessage('Mobile Number cannot be empty'),
        body('address').notEmpty().withMessage('Address cannot be empty'),
        body('purposeOfVisit').isIn(['Business', 'Personal', 'Tourist']).withMessage('Purpose of Visit must be one of Business, Personal, Tourist').notEmpty().withMessage('Purpose of Visit cannot be empty'),
        body('stayDates.from').isISO8601().withMessage('Stay Dates (From) must be a valid date').notEmpty().withMessage('Stay Dates (From) cannot be empty'),
        body('stayDates.to').isISO8601().withMessage('Stay Dates (To) must be a valid date').notEmpty().withMessage('Stay Dates (To) cannot be empty'),
        body('emailId').isEmail().withMessage('Email ID must be valid').notEmpty().withMessage('Email ID cannot be empty'),
        body('idProofNumber').notEmpty().withMessage('ID Proof Number cannot be empty')
    ];
}

export default GuestFormDetailsValidation;