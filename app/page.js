import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {

 


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-24 gap-8 ">
      <div className="bg-white shadow p-2 md:p-8 rounded">

      <div className="h-24  w-full flex items-center justify-center">
        <Image src="/logo.png" width={150} height={100} />

      </div>
      <div className="flex md:flex-row gap-4 items-center flex-col">
        <div className="flex-1 flex flex-col gap-2 md:gap-12">
          <h1 className="text-2xl md:text-5xl text-blue-600 font-bold italic">Texcellence</h1>
          <span className="text-gray-500">Where tech Enthusiasm Meets Innovation</span>

          <div className="flex flex-col">
            <span className="text-xs text-gray-500">Date </span>
            <span className="text-2xl text-blue-600 uppercase">Feb 25, 2024.</span>
            <span className="text-xs text-gray-500">Location</span>
            <span className="text-2xl text-blue-600 uppercase">Dubai, UAE</span>
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
