import React, { useState } from 'react';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { toast } from 'sonner';
import { useDeleteorderMutation } from '../query/hotel.query';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoQrCode } from "react-icons/io5";
import QRCode from 'qrcode';
import { Dialog } from 'primereact/dialog';
const Tablecard = ({ data, loading }) => {
  const [visibleConfirmDialog, setVisibleConfirmDialog] = useState(false);
  const[deletehotel,deletehotelResponse]=useDeleteorderMutation()
  const[visible,setVisible]=useState(false)
  const[qrCode,setQrCode]=useState("")
  const[urlofwebsite,seturlofwebsite]=useState("")
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
          const {data,error}=await deletehotel(_id);
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
  const qrhandler=(data)=>{
    console.log("qr code generated");
    QRCode.toDataURL(data, (err, qrCode) =>{
      if(err){
        console.log("error in generating qr code");
        return;
      }
      console.log(qrCode);
      setQrCode(qrCode);
      seturlofwebsite(data)
      setVisible(true);
    });

  }

  return (
    <>
      <Dialog header="QR Code" visible={visible}  className='border-slate-200 flex justify-center border-2 w-[17vw] h-auto bg-gray-300 p-3' onHide={() => {if (!visible) return; setVisible(false); }}>
    <img src={qrCode} className='w-[15vw] h-auto mt-4 ' alt="qr code " />
    <div className='flex justify-center'>
    <a className='text-blue-800 mt-4 underline ' href={urlofwebsite}>link</a>
    </div>
</Dialog>
      <ConfirmDialog  className='w-[30vw] h-[20vh] p-3 m-3 text-xl border-2 bg-gray-50 rounded-md'/>
      <table className="w-4/5 text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100">
          <tr>
            <th scope="col" className="px-6 py-3">Image</th>
            <th scope="col" className="px-6 py-3">Hotel Name</th>
            <th scope="col" className="px-6 py-3">Address</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.users?.length > 0 ? (
            data.users.map((hotel, index) => {
              // Extract binary data and convert to Base64
              // console.log("the image data is "+hotel.image.data.data)
              const arrayBuffer = new Uint8Array(hotel.image.data.data);
              let base64String = "";
              arrayBuffer.forEach((byte) => {
                base64String += String.fromCharCode(byte);
              });
              const base64Image = `data:${hotel.image.contentType};base64,${btoa(base64String)}`;

              return (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4">
                    <img src={base64Image} alt="hotel" className="w-16 h-16 object-cover rounded-lg border-1 border-black " />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900">{hotel.hotelname}</td>
                  <td className="px-6 py-4">{hotel.address}</td>
                  <td className="px-6 py-4 ">
                    <button
                      onClick={() => handleDelete(hotel._id)}
                      className="bg-red-500 text-white p-2 m-2 rounded-md"
                    >
                      <RiDeleteBin6Line size={27} />
                    </button>
                    <button
                      onClick={() => qrhandler( hotel.website)}
                      className="bg-blue-400 text-white p-2 m-2 rounded-md"
                    >
                      <IoQrCode size={27} />
                    </button>
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

