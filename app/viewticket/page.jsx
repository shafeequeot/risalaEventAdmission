'use client'
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import QRCode from "qrcode.react"
import { Suspense, useEffect, useState } from "react"
import html2canvas from 'html2canvas';


function Page() {

    let searchquery
    if (typeof window !== 'undefined'){
      searchquery = useSearchParams()
    }

    const [user, setUser]= useState({})
    const [image, setImage] = useState(null);

    useEffect(()=>{
        const id = searchquery.get('id')
        const name = searchquery.get('name')
        const website = process?.env?.NEXT_PUBLIC_WEBSITE
        setUser({id, name, website})
    },[])


    const handleCapture = async () => {
      const element = document.getElementById('ticket'); // Target the specific part
      const canvas = await html2canvas(element);
      const dataURL = canvas.toDataURL('image/png');
      setImage(dataURL);
       // Create a blob object for automatic download
       const blob =dataURLtoBlob(dataURL);;
       const filename =`${user.name}_${user.id}.png`;
   
       // Trigger download using a blob URL
       const link = document.createElement('a');
       link.href = URL.createObjectURL(blob);
       link.download = filename;
       link.click();
   
       // Revoke the blob URL after download
       URL.revokeObjectURL(link.href);
    };

    const dataURLtoBlob = (dataURL) => {
        const parts = dataURL.split(';base64,');
        const contentType = parts[0].split(':')[1];
        const raw = window.atob(parts[1]);
        const rawLength = raw.length;
        const uInt8Array = new Uint8Array(rawLength);
    
        for (let i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
    
        return new Blob([uInt8Array], { type: contentType });
    };
  
  return (
    <Suspense fallback={<div>Loading...</div>}>

    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-24 gap-8 ">
        <div className="flex flex-col gap-4 justify-center">
    <div id="ticket" className="bg-white  p-2 md:p-8 rounded flex flex-col items-center ">

    <div className="h-24  w-full flex items-center justify-center">
      <Image alt="logo" src="/logo.png" width={150} height={100} />


    </div>
      <h1 className="text-2xl font-semibold text-blue-500 max-w-96">{user?.name}</h1>
      <span className="text-xs text-gray-700 mb-4">Your id: {String(user?.id).padStart(6, 0)}</span>
      <QRCode value={`${process?.env?.NEXT_PUBLIC_WEBSITE}/attend?id=${user?.id}`}/>
      <h1 className="text-2xl font-semibold text-blue-500 max-w-96 mt-4">YOUR ENTRY TICKET</h1>
      <span className="text-xs text-gray-700">{user?.website}</span>

    </div>

    <button className="bg-blue-500 text-white p-2 rounded" onClick={handleCapture}>Download</button>
        </div>
  </main>
  </Suspense>
  )
}

export default Page