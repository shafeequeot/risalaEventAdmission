'use client'

import { useSearchParams } from "next/navigation"
import { Suspense, useState } from "react"

function Page() {

    const [password, setPassword] = useState()
    const [loading, setLoading] = useState(false)
    const [result, setResult] = useState("")

    let params
    if (typeof window !== 'undefined'){
         params = useSearchParams()
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true)
        try{
            setResult("")

            if((process.env.NEXT_PUBLIC_PASSWORD) != (String(password).toLowerCase())) throw new Error('wrong password')
            
            await fetch('/api/attend', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({id:params.get('id')}),
            })
            
            setResult('Data updated')
            
        }catch(err){
            console.log(err)
            
            setResult('Unable to update', err.message)
        }finally{
            setLoading(false)
        }
    }
  return (
    <Suspense fallback={<div>Loading...</div>}>

        <div className="h-screen w-full flex items-center justify-center">
    <form onSubmit={handleSubmit} className="bg-white p-2 md:p-8 rounded-md shadow-md w-full md:w-96 justify-center items-center ">

    <h2 className="text-2xl font-bold mb-6 text-gray-800">Attendendance</h2>
    <div className="mb-4">
      <input type="text" name="password" value={password||""} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full px-3 py-2 rounded-md bg-white   border outline-none  focus:bg-blue-100" />
    </div>
  
    <button disabled={loading} type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white  font-bold py-2 rounded-md focus:outline-none focus:shadow-outline">Submit</button>
    {result && result.toString()}
  </form>
        </div>
        </Suspense>
  )
}

export default Page