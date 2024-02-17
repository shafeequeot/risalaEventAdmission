import Form from "@/components/Form";
import Image from "next/image";

export default function Home() {

 


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4">
      <div className="h-24 bg-gray-300 w-full flex items-center justify-center">
        <Image src="/logo.png" width={150} height={100} />

      </div>
      <div className="flex flex-row gap-4 items-center">
        <div className="flex-1 flex flex-col gap-12">
          <h1 className="text-5xl text-blue-400 font-bold italic">Texcellence</h1>
          <span className="text-gray-300">Where tech Enthusiasm Meets Innovation</span>

          <div className="flex flex-col">
            <span className="text-xs text-gray-300">Date </span>
            <span className="text-2xl text-blue-400 uppercase">Feb 25, 2024.</span>
            <span className="text-xs text-gray-300">Location</span>
            <span className="text-2xl text-blue-400 uppercase">Dubai, UAE</span>
          </div>
        </div>
        <div className="flex-1">
            
           <Form/>
          </div>
        </div>
    </main>
  );
}
