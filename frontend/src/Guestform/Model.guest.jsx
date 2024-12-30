// import React from 'react';
// import { Dialog } from 'primereact/dialog';
// import { ErrorMessage, Field, Formik } from 'formik';
// import * as yup from 'yup';
// import { toast } from 'sonner';
// import { useAddhotelMutation } from '../query/hotel.query';
// import { Calendar } from 'primereact/calendar';
// import { Dropdown } from 'primereact/dropdown';
        
// const ModelGuest = ({ visible, setVisible }) => {
//   const [addhotel] = useAddhotelMutation();
//   const validationSchema = yup.object().shape({
//     fullName: yup.string().required("Full Name is required"),
//     mobileNumber: yup
//       .string()
//       .required("Mobile number is required"),
//     purposeOfVisit: yup.string().required("Purpose of visit is required"),
//     emailId: yup.string().email("Invalid email format").required("Email is required"),
//     idProofNumber: yup.string().required("ID proof number is required"),
//     stayDates: yup.object().shape({
//       from: yup.date().required("Start date is required"),
//       to: yup
//         .date()
//         .required("End date is required")
//         .min(yup.ref('from'), "End date must be after start date"),
//     }),
//   });
//  const purposeOfVisits = [
//     {label: "Business", value: 'Business' },
//     {label: "Personal",  value: 'Personal' },
//     {label: "Tourist",  value: 'Tourist' },]
//   const initialValues = {
//     fullName: '',
//     mobileNumber: '',
//     purposeOfVisit: '',
//     emailId: '',
//     idProofNumber: '',
//     stayDates: {
//       from: '',
//       to: '',
//     },
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     try {
//       const formData = new FormData();
//       Object.keys(values).forEach((key) => {
//         if (key === "stayDates") {
//           formData.append("stayFrom", values.stayDates.from);
//           formData.append("stayTo", values.stayDates.to);
//         } else {
//           formData.append(key, values[key]);
//         }
//       });

//       const response = await addhotel(formData).unwrap();

//       if (response.error) {
//         toast.error(response.error.data.message);
//         return;
//       }

//       toast.success("Hotel added successfully");
//       resetForm();
//       setVisible(false);
//     } catch (e) {
//       toast.error(e.message || "Failed to add hotel");
//     }
//   };

//   return (
//     <Dialog
//       header="Add detail"
//       position="center"
//       visible={visible}
//       style={{ width: '50vw' }}
//       onHide={() => setVisible(false)}
//       className="bg-gray-50 p-4 m-4 rounded-lg border border-gray-200 text-bold font-sans"
//     >
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={handleSubmit}
//       >
//         {({values, setFieldValue, handleSubmit }) => (
//           <form onSubmit={handleSubmit}>
//             <div className="flex flex-col p-3">
//               <label htmlFor="fullName">Full Name<span className="text-red-800">*</span></label>
//               <Field id="fullName" name="fullName" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
//               <ErrorMessage name="fullName" component="p" className="text-red-500" />

//               <label htmlFor="mobileNumber">Mobile Number<span className="text-red-800">*</span></label>
//               <Field id="mobileNumber" name="mobileNumber" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
//               <ErrorMessage name="mobileNumber" component="p" className="text-red-500" />

//               <label htmlFor="purposeOfVisit">Purpose of Visit<span className="text-red-800">*</span></label>
//               {/* <Field id="purposeOfVisit" name="purposeOfVisit" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" /> */}
//               <Dropdown  id="purposeOfVisit" name="purposeOfVisit"  onChange={(e) => setFieldValue(e.value)} options={purposeOfVisits} optionLabel="name" 
//                 placeholder="purpose to visit" className="rounded-lg bg-slate-100 py-2 px-2 outline-none"  />
//               <ErrorMessage name="purposeOfVisit" component="p" className="text-red-500" />

//               <label htmlFor="emailId">Email<span className="text-red-800">*</span></label>
//               <Field id="emailId" name="emailId" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
//               <ErrorMessage name="emailId" component="p" className="text-red-500" />

//               <label htmlFor="idProofNumber">ID Proof Number<span className="text-red-800">*</span></label>
//               <Field id="idProofNumber" name="idProofNumber" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
//               <ErrorMessage name="idProofNumber" component="p" className="text-red-500" />

//               <label htmlFor="stayFrom">Stay Dates<span className="text-red-800">*</span></label>
//               <Calendar placeholder=' from' maxDate={new Date()} value={values.stayDates.from} onChange={(e) => setFieldValue('stayDates.from', e.value)} id="stayFrom" name="stayDates.from" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
//               <Calendar placeholder='  to' minDate={new Date()} value={values.stayDates.to} onChange={(e) => setFieldValue('stayDates.to', e.value)} id="stayFrom" name="stayDates.to" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
//               {/* <Field type="date" id="stayFrom" name="stayDates.from" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" /> */}
//               {/* <Field type="date" id="stayTo" name="stayDates.to" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" /> */}
//               <ErrorMessage name="stayDates.from" component="p" className="text-red-500" />
//               <ErrorMessage name="stayDates.to" component="p" className="text-red-500" />

//               <button
//                 type="submit"
//                 className="m-3 p-2 bg-purple-500 text-black font-sans text-xl"
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         )}
//       </Formik>
//     </Dialog>
//   );
// };

// export default ModelGuest;


import React from 'react';
import { Dialog } from 'primereact/dialog';
import { ErrorMessage, Field, Formik } from 'formik';
import * as yup from 'yup';
import { toast } from 'sonner';
// import { useAddhotelMutation } from '../query/hotel.query';
import { useAddguestformMutation } from '../query/Guestformdetails';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';

const ModelGuest = ({ visible, setVisible }) => {
  const [addGuest] = useAddguestformMutation();
  const validationSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    mobileNumber: yup.string().required("Mobile number is required"),
    address:yup.string().required(),
    purposeOfVisit: yup.string().required("Purpose of visit is required"),
    emailId: yup.string().email("Invalid email format").required("Email is required"),
    idProofNumber: yup.string().required("ID proof number is required"),
    stayDates: yup.object().shape({
      from: yup.date().required("Start date is required"),
      to: yup
        .date()
        .required("End date is required")
        .test(
          "is-greater",
          "End date must be after start date",
          function (value) {
            const { from } = this.parent;
            return value && from && new Date(value) > new Date(from);
          }
        ),
    }),
  });

    const purposeOfVisits = [
      { label: "Business", value: "Business" },
      { label: "Personal", value: "Personal" },
      { label: "Tourist", value: "Tourist" },
    ];

  const initialValues = {
    fullName: "",
    mobileNumber: "",
    address:"",
    purposeOfVisit: "",
    emailId: "",
    idProofNumber: "",
    stayDates: {
      from: "",
      to: "",
    },
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
    //   const formData = new FormData();
    //   Object.keys(values).forEach((key) => {
    //     if (key === "stayDates") {
    //       formData.append("stayFrom", new Date(values.stayDates.from).toISOString());
    //       formData.append("stayTo", new Date(values.stayDates.to).toISOString());
    //     } else {
    //       formData.append(key, values[key]);
    //     }
    //   });

      const response = await addGuest(values);

      if (response?.error?.data?.message) {
        toast.error(response.error.data.message);
        return;
      }

      toast.success("form submitted successfully");
      resetForm();
      setVisible(false);
    } catch (e) {
      toast.error(e.message || "Failed to add hotel");
    }
  };

  return (
    <Dialog
      header="Add detail"
      position="center"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => setVisible(false)}
      className="bg-gray-50 p-4 m-4 rounded-lg border border-gray-200 text-bold font-sans"
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col p-3">
              <label htmlFor="fullName">Full Name<span className="text-red-800">*</span></label>
              <Field id="fullName" name="fullName" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
              <ErrorMessage name="fullName" component="p" className="text-red-500" />

              <label htmlFor="mobileNumber">Mobile Number<span className="text-red-800">*</span></label>
              <Field id="mobileNumber" name="mobileNumber" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
              <ErrorMessage name="mobileNumber" component="p" className="text-red-500" />

              <label htmlFor="address">address<span className="text-red-800">*</span></label>
              <Field id="address" name="address" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
              <ErrorMessage name="address" component="p" className="text-red-500" />

              <label htmlFor="purposeOfVisit">Purpose of Visit<span className="text-red-800">*</span></label>
              <Dropdown
                id="purposeOfVisit"
                name="purposeOfVisit"
                value={values.purposeOfVisit}
                onChange={(e) => setFieldValue("purposeOfVisit", e.value)}
                options={purposeOfVisits}
                optionLabel="label"
                
                className="rounded-lg bg-slate-100 py-2 px-2 outline-none"
              />
              <ErrorMessage name="purposeOfVisit" component="p" className="text-red-500" />

              <label htmlFor="emailId">Email<span className="text-red-800">*</span></label>
              <Field id="emailId" name="emailId" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
              <ErrorMessage name="emailId" component="p" className="text-red-500" />

              <label htmlFor="idProofNumber">ID Proof Number<span className="text-red-800">*</span></label>
              <Field id="idProofNumber" name="idProofNumber" className="rounded-lg bg-slate-100 py-2 px-2 outline-none" />
              <ErrorMessage name="idProofNumber" component="p" className="text-red-500" />

              <label>Stay Dates<span className="text-red-800">*</span></label>
              <Calendar
                placeholder="From"
                value={values.stayDates.from}
                minDate={new Date()}
                onChange={(e) => setFieldValue("stayDates.from", e.value)}
                id="stayFrom"
                className="rounded-lg bg-slate-100 py-2 px-2 outline-none"
              />
              <Calendar
                placeholder="To"
                minDate={values.stayDates.from}
                value={values.stayDates.to}
                onChange={(e) => setFieldValue("stayDates.to", e.value)}
                id="stayTo"
                className="rounded-lg bg-slate-100 py-2 px-2 outline-none"
              />
              <ErrorMessage name="stayDates.from" component="p" className="text-red-500" />
              <ErrorMessage name="stayDates.to" component="p" className="text-red-500" />

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

export default ModelGuest;
