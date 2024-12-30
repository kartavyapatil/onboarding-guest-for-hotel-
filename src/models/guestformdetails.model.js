import mongoose from 'mongoose';

const guestFormDetailsSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },fullName: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    purposeOfVisit: {
        type: String,
        enum: ['Business', 'Personal', 'Tourist'],
        required: true
    },
    stayDates: {
        from: {
            type: Date,
            required: true
        },
        to: {
            type: Date,
            required: true
        }
    },
    emailId: {
        type: String,
        required: true
    },
    idProofNumber: {
        type: String,
        required: true
    }
}, { timestamps: true });

const GuestFormDetails = mongoose.model('GuestFormDetails', guestFormDetailsSchema);

export default GuestFormDetails;