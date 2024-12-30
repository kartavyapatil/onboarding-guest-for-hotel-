// import React from 'react'
// import  { useState, useEffect } from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import Model from './Model.order';
// import Tablecard from './Tablecard.order';;
// import { useGethotelQuery } from '../query/hotel.query';
// import logo from "../assets/logo.png";  
// import LoadingPage from '../LoadingPage';
// import ModelGuest from '../Guestform/Model.guest';
// const Hotel = () => {
//   const [Hotelmodelvisible,setHotelmodelvisible]=useState(false);
//   const [guestformmodel,setguestformmodel]=useState(false);
//   const navigate=useNavigate()
//   const {data,isLoading,error}=useGethotelQuery()
//   // console.log(`the data is ${data, error} from index.jsx`)
// //   const{data ,isLoading}=useGetAllOrdersQuery({query:SearchParams.get("query")||'',page:SearchParams.get("page")||1 })
//   // console.log(`the data is getorder${data}`)
// //   console.log(data)
//   return (
//     <>
//       <div className="text-4xl shadow-sm font-sans py-3 flex items-center gap-4"><span><img src={logo} className='w-16 ml-3 mt-2' alt="logo" /></span> hotel Information </div>
//       <div className="flex justify-center items-center "> 
//         <button className="m-3 p-2 bg-purple-500 rounded-md" onClick={()=>{setHotelmodelvisible(!Hotelmodelvisible)}}>Add hotel</button>
//         <button className="m-3 p-2 bg-purple-500 rounded-md" onClick={setguestformmodel(!guestformmodel)}>Guest Details </button>
//         <button className="m-3 p-2 bg-purple-500 rounded-md" onClick={()=>{navigate('/guestdtails')}}>Fill Form </button>
//       </div>  
//         <Model visible={Hotelmodelvisible} setVisible={setHotelmodelvisible}/>
//         <ModelGuest visible={guestformmodel} setVisible={setguestformmodel}/>
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
// export default Hotel


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Model from './Model.order';
// import Tablecard from './Tablecard.order';
// import { useGethotelQuery } from '../query/hotel.query';
// import logo from "../assets/logo.png";
// import LoadingPage from '../LoadingPage';
// import ModelGuest from '../Guestform/Model.guest';
// import { useSelector } from 'react-redux';


// const Hotel = () => {
//   const [Hotelmodelvisible, setHotelmodelvisible] = useState(false);
//   const [guestformmodel, setguestformmodel] = useState(false);
//   const navigate = useNavigate();
//   const { data, isLoading } = useGethotelQuery();
//   const role = useSelector((state) => state.userslice.user.role);
//   console.log (role);
//   return (
//     <>
//       <div className="text-4xl shadow-sm font-sans py-3 flex items-center gap-4">
//         <span>
//           <img src={logo} className="w-16 ml-3 mt-2" alt="logo" />
//         </span>
//         Hotel Information
//       </div>
//       <div className="flex justify-center items-center">
//        {if (role !== 'admin') {
//         return <button
//           className="m-3 p-2 bg-purple-500 rounded-md"
//           onClick={() => setHotelmodelvisible(!Hotelmodelvisible)}
//         >
//           Add Hotel
//         </button>}}
//         <button
//           className="m-3 p-2 bg-purple-500 rounded-md"
//           onClick={() => setguestformmodel(!guestformmodel)}
//         >
//          Fill Form
//         </button>
//         <button
//           className="m-3 p-2 bg-purple-500 rounded-md"
//           onClick={() => navigate('/guestdtails')}
//         >
//            Guest Details 
//         </button>
//       </div>
//       <Model visible={Hotelmodelvisible} setVisible={setHotelmodelvisible} />
//       <ModelGuest visible={guestformmodel} setVisible={setguestformmodel} />
//       {isLoading ? (
//         <LoadingPage />
//       ) : (
//         <div className="flex justify-center overflow-x-auto">
//           <Tablecard data={data} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Hotel;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Model from './Model.order';
import Tablecard from './Tablecard.order';
import { useGethotelQuery } from '../query/hotel.query';
import logo from "../assets/logo.png";
import LoadingPage from '../LoadingPage';
import ModelGuest from '../Guestform/Model.guest';
import { FaUser } from "react-icons/fa";
const Hotel = () => {
  const [Hotelmodelvisible, setHotelmodelvisible] = useState(false);
  const [guestformmodel, setguestformmodel] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading } = useGethotelQuery();
  const role = useSelector((state) => state.userslice.user.role);
  const handleregister=()=>{
    navigate('/registeradmin')
  }
  return (
    <>
      <div className="shadow-sm font-sans py-3 flex justify-between   items-center gap-4">
        <span className='text-4xl shadow-sm font-sans py-3 flex items-center gap-4'>
          <img src={logo} className="w-16 ml-3 mt-2" alt="logo" />
        <div>Hotel Information</div>
        </span>
        <div>
          {role == ('MainAdmin'||'GuestAdmin') && (<button onClick={handleregister} className='m-3 p-2 bg-purple-500 rounded-md mr-8'><FaUser size={20}/> </button>)}
          </div>
      </div>
      <div className="flex justify-center items-center">
        {role === 'MainAdmin' && (
          <button
            className="m-3 p-2 bg-purple-500 rounded-md"
            onClick={() => setHotelmodelvisible(!Hotelmodelvisible)}
          >
            Add Hotel
          </button>
        )}
        {
          role === ('MainAdmin'||'GuestAdmin') && (
            <button
              className="m-3 p-2 bg-purple-500 rounded-md"
              onClick={() => navigate('/guestdtails')}
            >
              Guest Details
            </button>
          )
        }

        {  role !== ('MainAdmin'||'GuestAdmin') && (
        <button
          className="m-3 p-2 bg-purple-500 rounded-md"
          onClick={() => setguestformmodel(!guestformmodel)}
        >
          Fill Form
        </button>
          )
        }
      </div>

      {/* Modals */}
      <Model visible={Hotelmodelvisible} setVisible={setHotelmodelvisible} />
      <ModelGuest visible={guestformmodel} setVisible={setguestformmodel} />

      {/* Loading State */}
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="flex justify-center overflow-x-auto">
          <Tablecard data={data} />
        </div>
      )}
    </>
  );
};

export default Hotel;
