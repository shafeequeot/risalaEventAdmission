'use client'
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import QRCode from "qrcode.react"
import { Suspense, useEffect, useRef, useState } from "react"
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';


function Page() {

  let searchquery
  if (typeof window !== 'undefined') {
    searchquery = useSearchParams()
  }

  const [user, setUser] = useState({})

  useEffect(() => {
    const id = searchquery.get('id')
    const name = searchquery.get('name')
    const website = process?.env?.NEXT_PUBLIC_WEBSITE
    setUser({ id, name, website })
  }, [])

  const divRef = useRef(null)

  const handleCapture = async () => {
    if (divRef.current) {
      domtoimage.toPng(divRef.current)
        .then(dataUrl => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = `${user?.id}_${user?.name}`;
          link.click();
        })
        .catch(error => {
          console.error('Error converting image:', error);
        });
    }
  };



  return (
    <Suspense fallback={<div>Loading...</div>}>

      <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-24 gap-4 ">
        <div className="flex flex-col gap-4 justify-center ">
          <div id="ticket" ref={divRef} style={{height: 450, width: 370}} className=" p-2 md:p-8 rounded flex flex-col items-center relative">
          <Image className="absolute top-0 -z-10" src="/qr code rev 3.jpg" alt="qr background" width={820} height={1200}/>

            <div className="h-44 mt-32 w-48  flex flex-col items-center justify-center">


             <span className="font-semibold text-blue-500 line-clamp-2 leading-4 text-center w-32 ">{user?.name}</span>
            <span className="text-xs text-gray-700 mb-4">Your id: {String(user?.id).padStart(6, 0)}</span> 
            <QRCode style={{width: 100, height: 100}} value={`${process?.env?.NEXT_PUBLIC_WEBSITE}/attend?id=${user?.id}`} />
        
            </div>

          </div>

          <button className="bg-blue-500 text-white p-2 rounded" onClick={handleCapture}>Download</button>
        </div>
      </main>
    </Suspense>
  )
}

export default Page