import React from 'react'
import logo from "../src/assets/logo.png"
import wave from "../src/assets/wave.svg"
import person from "../src/assets/loginpageasset.png"
import * as yup from "yup";
import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterUserMutation } from './query/Authuser.query';
import { toast } from 'sonner';
import { Dropdown } from 'primereact/dropdown';


const RegisterAdmin = () => {
   
  const navigate=useNavigate()
  const [Registeruser,RegisterUserResponse]=useRegisterUserMutation()
  const initialValues = {
    name: "",
    email: '',
    password: '',
    role:''
  };

  const validationSchema = yup.object({
     name: yup.string().required('Required'),
    email: yup.string().email('Invalid email address').required('Required'),
    password: yup.string().required('Required').min(5,"password must be greater than 5 character"),
    role:yup.string().required('Required')
  });
  const role = [
    { label: "MainAdmin", value: "MainAdmin" },
    { label: "GuestAdmin", value: "GuestAdmin" }
  ];
  const onSubmitHandler = async (values,{resetForm}) => {
    try {
      const { data, error } = await Registeruser(values);
      if (error) {
        toast.error(error.data.message);
        return;
      }                                                                 
      navigate("/")
      toast.success("Register successfull")
      resetForm();
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className='flex justify-between  items-center  h-[10vh] bg-slate-50'>
        <div className='flex items-center gap-4 h-[10vh] bg-slate-50'>
          <div className='logo'>
            <img src={logo} className='w-16 ml-3 mt-2' alt="logo" />
          </div>
          <div className='logo-name font-serif font-bold text-2xl'>
          Digital Guest Onboarding System
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className=' flex gap-1 justify-center  bg-slate-50'>
        <div className='w-[45vw]  h-[69.5vh] '>
          <div className='rounded-lg  p-10 bg-white w-full h-[58vh] mt-8'>
            <div className='text-3xl font-serif font-medium flex justify-center p-4'>Register</div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitHandler} >
            {({ values, setFieldValue, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="flex flex-col p-4 gap-5">
                    <div className="flex flex-col gap-1">
                      <div className='flex  gap-3 items-center'>
                          <label htmlFor="name" className='font-serif text-xl'>Name :-</label>
                          <Field id='name' name='name' className="rounded-lg bg-slate-200 border-gray-500 py-5 px-2 outline-none h-8 w-[26vw]" placeholder='Enter name' />
                      </div>
                          <ErrorMessage component={'p'} className='text-red-500 text-sm' name='name' />
                     </div>
                  <div className="flex  flex-col gap-1">
                  <div className='flex  gap-3 items-center'>
                    <label htmlFor="email" className='font-serif text-xl'>Email :-</label>
                    {/* <input id='email' name='email' value={values.email} onChange={(e)=>{setFieldValue('email',e.target.value)}} className="rounded-lg bg-slate-200 border-gray-500 py-5 px-2 outline-none h-8 w-[26vw]"  placeholder='Enter Email Address' /> */}
                    <Field id='email' name='email' className="rounded-lg bg-slate-200 border-gray-500 py-5 px-2 outline-none h-8 w-[26vw]"  placeholder='Enter Email Address' />
                    </div>
                    <ErrorMessage component={'p'} className='text-red-500 text-sm' name='email'/>
                  </div>
                  <div className='flex  flex-col gap-1'>
                  <div className='flex  gap-3 items-center'>
                    <label className='font-serif text-xl' htmlFor='password'>Password :-</label>
                    {/* <input name='password' className="rounded-lg bg-slate-200 border-gray-500 py-5 px-2 outline-none h-8 w-[26vw] " type='password' value={values.password} onChange={(e)=>{setFieldValue('password',e.target.value)}} placeholder='Enter password' /> */}
                    <Field id='password' name='password' className="rounded-lg bg-slate-200 border-gray-500 py-5 px-2 outline-none h-8 w-[26vw] " type='password' placeholder='Enter password' />
                    </div>
                    <ErrorMessage component={'p'} className='text-red-500 text-sm' name='password'/>
                  </div>
                  <div className='flex  flex-col gap-1'>
                  <div className='flex  gap-3 items-center'>
                    <label className='font-serif text-xl' htmlFor='role'>role :-</label>
                    {/* <input name='password' className="rounded-lg bg-slate-200 border-gray-500 py-5 px-2 outline-none h-8 w-[26vw] " type='password' value={values.password} onChange={(e)=>{setFieldValue('password',e.target.value)}} placeholder='Enter password' /> */}
                    {/* <Field id='role' name='role' className="rounded-lg bg-slate-200 border-gray-500 py-5 px-2 outline-none h-8 w-[26vw] " type='text' placeholder='Enter role' /> */}
                    <Dropdown
                          id="role"
                          name="role"
                          value={values.role} // Bind Formik's `values.role`
                          onChange={(e) => setFieldValue("role",e.value)} // Use `setFieldValue` to update Formik's state
                          options={role} // Dropdown options
                          optionLabel="label" // The label for each dropdown option
                          placeholder="Select a role" // Placeholder text
                          className="rounded-lg bg-slate-200 py-2 px-2 outline-none w-[25vw]"
                        />
                    </div>
                    <ErrorMessage component={'p'} className='text-red-500 text-sm' name='role'/>
                  </div>
                  <button  className='justify-center w-28 font-serif text-xl bg-green-600 rounded-lg p-1 border ' type='submit'>Submit</button>
                  {/* <div className='flex'>
                    <p className='font-serif '>Don't have a Account ? </p>
                    <Link to={'/registerguest'} className='font-semibold text-blue-600'>Register</Link>
                  </div> */}
                   
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div className='w-[45vw]  h-[69vh] '>
          <img className='absolute h-[80vh] w-[38vw] z-10' src={person} alt="person" />
        </div>
      </div>
      <div className='absolute bottom-0'>
        <img className='bg-slate-50 w-[100vw]' src={wave} alt="wave" />
      </div>

    </>
  );
};


export default RegisterAdmin