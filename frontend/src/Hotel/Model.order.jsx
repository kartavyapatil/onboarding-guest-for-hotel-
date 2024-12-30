// import React from 'react';
// import { Dialog } from 'primereact/dialog';
// import { ErrorMessage, Field, Formik, UploadFile } from 'formik';
// import * as yup from 'yup';
// import { toast } from 'sonner';
// import { useAddhotelMutation } from '../../query/hotel.query';
// const Model = ({ visible, setVisible }) => {

//   const [addhotel, addorderResponse] = useAddhotelMutation();  
        
//   const validationScheme = yup.object({
//     hotelname: yup.mixed().required("hotelname is required"),
//     address: yup.mixed().required("address is required"),
//     image: yup.mixed().required("User is required"),
//   });

//   const initialValues = {
//     hotelname: null,
//     image: null,
//     address: null,
//   };

//   const handlesubmit = async (e, { resetForm }) => {
//     console.log(e)
//     try {
//       const { data, error } = await addhotel({ ...e, user: e.user._id });
//       toast.success("Added hotel successfully");
//       resetForm();
//       setVisible(false);
//       if (error) {
//         toast.error(error.data.message);
//         return;
//       }
//     } catch (e) {
//       toast.error(e.message);
//     }
//   };

//   return (
//     <Dialog header="Add Order" position="top" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
//       <Formik initialValues={initialValues} validationSchema={validationScheme} onSubmit={handlesubmit}>
//         {({ values, setFieldValue, handleSubmit }) => (
//           <form onSubmit={handleSubmit}>
//             <div className='flex justify-center flex-col p-1'>
//               <label htmlFor='hotelname'>Hotel name<span className='text-red-800'>*</span></label>
//               <Field id="hotelname" name="hotelname" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
//               <ErrorMessage name='hotelname' component="p" className='text-red-500' />
              
//               <label htmlFor='image'>Image<span className='text-red-800'>*</span></label>
//               <UploadFile initialValues={initialValues} id="image" name="image" setFieldValue={setFieldValue} />
//               <ErrorMessage name='image' component="p" className='text-red-500' />
                 
                 
//                 <label htmlFor='address'>Address<span className='text-red-800'>*</span></label>
//                 <Field id="address" name="address" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
//                 <ErrorMessage name='address' component="p" className='text-red-500' />

//               <button type="submit" className='m-3 p-2 bg-purple-500 text-black font-sans text-xl'>Submit</button>
//             </div>
//           </form>
//         )}
//       </Formik>
//     </Dialog>
//   );
// };

// export default Model;

import React from 'react';
import { Dialog } from 'primereact/dialog';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'sonner';
import { useAddhotelMutation } from '../query/hotel.query';

const Model = ({ visible, setVisible }) => {
  const [addhotel] = useAddhotelMutation();

  const validationSchema = yup.object().shape({
    hotelname: yup.string().required("Hotel name is required"),
    address: yup.string().required("Address is required"),
    image: yup
      .mixed()
      .required("Image is required"),
      website: yup.string().required("Website is required"),
      // .test("fileSize", "File size is too large", (value) => {
      //   return value && value.size <= 2 * 1024 * 1024; // Limit to 2MB
      // }),
  });

  const initialValues = {
    hotelname: '',
    address: '',
    image: '',
    website: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData();
      formData.append("hotelname", values.hotelname);
      formData.append("address", values.address);
      formData.append("image", values.image);
      formData.append("website", values.website);
  
      const response = await addhotel(formData).unwrap();
  
      if (response.error) {
        toast.error(response.error.data.message);
        return;
      }
  
      toast.success("Hotel added successfully");
      resetForm();
      setVisible(false);
    } catch (e) {
      toast.error(e.message || "Failed to add hotel");
    }
  };
  

  return (
    <Dialog 
      header="Add Hotel" 
      position="center" 
      visible={visible} 
      style={{ width: '50vw' }} 
      onHide={() => setVisible(false)}
      className='bg-gray-50 p-4 m-4 rounded-lg border border-gray-200 text-bold' 
    >
      <Formik 
        initialValues={initialValues} 
        validationSchema={validationSchema} 
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-3">
              <label htmlFor="hotelname">
                Hotel Name<span className="text-red-800">*</span>
              </label>
              <Field 
                id="hotelname" 
                name="hotelname" 
                className="rounded-lg bg-slate-100 py-2 px-2 outline-none" 
              />
              <ErrorMessage name="hotelname" component="p" className="text-red-500" />

              <label htmlFor="image">
                Image<span className="text-red-800">*</span>
              </label>
              <input
              id="image"
              name="image"
              type="file"
              onChange={(event) => setFieldValue("image", event.currentTarget.files[0])}
              className="rounded-lg bg-slate-100 py-2 px-2 outline-none"
            />

              <ErrorMessage name="image" component="p" className="text-red-500" />

              <label htmlFor="address">
                Address<span className="text-red-800">*</span>
              </label>
              <Field 
                id="address" 
                name="address" 
                className="rounded-lg bg-slate-100 py-2 px-2 outline-none" 
              />
              <ErrorMessage name="address" component="p" className="text-red-500" />

              <label htmlFor="website"> Website<span className="text-red-800">*</span></label>
              <Field 
                id="website" 
                name="website" 
                className="rounded-lg bg-slate-100 py-2 px-2 outline-none"    
              />
              <ErrorMessage name="website" component="p" className="text-red-500" />
                
              <button 
                type="submit" 
                className="m-3 p-2 bg-purple-500 text-black font-sans text-xl"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};

export default Model;
