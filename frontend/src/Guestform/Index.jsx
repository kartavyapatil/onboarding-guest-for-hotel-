// import React from 'react'
// import  { useState, useEffect } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import Tablecard from './Table.guest'
// import { useGetguestformQuery } from '../query/Guestformdetails';
// import logo from "../assets/logo.png";  
// import LoadingPage from '../LoadingPage';
// const Index = () => {
//   const [visible,setVisible]=useState(false);
//   const navigate=useNavigate()
//   const {data,isLoading,error}=useGetguestformQuery()
//   console.log(`the data is ${data, error} from guest index.jsx`)
//   return (
//     <>
//       <div className="text-4xl shadow-sm font-sans py-3 flex items-center gap-4"><span><img src={logo} className='w-16 ml-3 mt-2' alt="logo" /></span> hotel Information </div>
//       <div className="flex justify-around items-center "> 
//         <button className="m-3 p-2 bg-purple-500 rounded-md" onClick={()=>{setVisible(!visible)}}>Add hotel</button>
//       </div>  
//       {isLoading ? <><LoadingPage/></>:
//       <div className="flex justify-center overflow-x-auto">
//         { 
//             <Tablecard data={data}/>
//         }
//       </div>
//       } 
//     </>
//   )
// }
// export default Index



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tablecard from './Table.guest';
import { useGetguestformQuery  } from '../query/Guestformdetails';
import logo from "../assets/logo.png";  
import LoadingPage from '../LoadingPage';
import ModelGuest from './Model.guest';
const Index = () => {
  const [visible,setVisible]=useState(false);
  const navigate = useNavigate();
  const { data, isLoading, error } = useGetguestformQuery();

  console.log("Data:", data);
  console.log("Error:", error);

  if (isLoading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div className="text-red-500">Error loading guest form data: {error.message}</div>;
  }

  return (
    <>
      <div className="text-4xl shadow-sm font-sans py-3 flex items-center gap-4">
        <span>
          <img src={logo} className='w-16 ml-3 mt-2' alt="logo" />
        </span> 
        Guest Information
      </div>
      <div className="flex justify-center items-center"> 
        <button 
          className="m-3 p-2 bg-purple-500 rounded-md" 
          onClick={() => {setVisible(!visible)}}
        >
          Fill Form 
        </button>
        <button className="m-3 p-2 bg-purple-500 rounded-md" onClick={()=>{navigate('/')}}>Hotel details </button>
        <ModelGuest visible={visible} setVisible={setVisible}/>
      </div>  
      <div className="flex justify-center overflow-x-auto">
        <Tablecard data={data} />
      </div>
    </>
  );
};

export default Index;
