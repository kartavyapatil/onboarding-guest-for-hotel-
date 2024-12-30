import React, { useState } from 'react';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { toast } from 'sonner';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoQrCode } from "react-icons/io5";
import QRCode from 'qrcode';
import { useDeleteguestMutation } from '../query/Guestformdetails';
import { Dialog } from 'primereact/dialog';
const Tablecard = ({ data, loading }) => {
    const [deleteguest]=useDeleteguestMutation();
  const [visibleConfirmDialog, setVisibleConfirmDialog] = useState(false);
  const[visible,setVisible]=useState(false)
  const handleDelete = async (_id) => {
    setVisibleConfirmDialog(true);
    console.log(`Delete requested for hotel ID: ${_id}`);
    confirmDialog({
      visible:{visibleConfirmDialog},
      onHide:setVisibleConfirmDialog(false),
      message:"are you want to delete it",
      header:"confirmation",
      accept:async()=>{
        try{
          const {data,error}=await deleteguest(_id);
          if(error){
            toast.error(error.data.message);
            return;
          }
          toast.message(data.message);
        }catch(e){
          toast.error(e.message)
        }
      },
      reject:()=>{
        console.log("reject for "+_id);
      }
    }) 
    // Add delete logic here, e.g., calling a mutation or API
  };


  return (
    <>
      <Dialog header="QR Code" visible={visible}  className='border-slate-200 border-2 w-[17vw] h-auto bg-gray-300 p-3' onHide={() => {if (!visible) return; setVisible(false); }}>
    
</Dialog>
      <ConfirmDialog  className='w-[30vw] h-[20vh] p-3 m-3 text-xl border-2 bg-gray-50 rounded-md'/>
      <table className="w-4/5 text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">Full Name</th>
            <th scope="col" className="px-6 py-3">Mobile Number</th>
            <th scope="col" className="px-6 py-3">Address</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((guest, index) => {
              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">
                    {guest.fullName} 
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{guest.mobileNumber}</td>
                  <td className="px-6 py-4">{guest.address}</td>
                  <td className="px-6 py-4 ">
                    <button
                      onClick={() => handleDelete(guest._id)}
                      className="bg-red-500 text-white p-2 m-2 rounded-md"
                    >
                      <RiDeleteBin6Line size={27} />
                    </button>
                    {/* <button
                      onClick={() => qrhandler( hotel.website)}
                      className="bg-blue-400 text-white p-2 m-2 rounded-md"
                    >
                      <IoQrCode size={27} />
                    </button> */}
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center">
                {loading ? "Loading..." : "No data available"}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Tablecard;

