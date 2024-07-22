import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {

 


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-18 gap-8 ">
      <div className="bg-white shadow p-2 md:p-8 rounded">

      <div className="  w-full flex items-center justify-center">

      </div>
      <div className="flex md:flex-row gap-4 items-center flex-col">
        <div className="flex-1 flex flex-col gap-2 md:gap-12">
          {/* <h1 className="text-2xl md:text-5xl text-blue-600 font-bold italic">Texcellence</h1> */}
        <Image src="/Group-3.png" width={300} height={300} />
          <span className="text-gray-500">Carrier connect</span>

          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Date </span>
            <span className="text-2xl text-blue-600 uppercase">AUG 04, 2024</span>
            <span className="text-xs text-gray-500">Location</span>
            <span className="text-2xl text-blue-600 uppercase">Karama, Dubai, UAE</span>
          </div>
        </div>
        <div className="flex-1">
            
           <Form/>
          </div>
        </div>
      </div>
    </main>
  );
}
