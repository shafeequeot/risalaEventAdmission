import sequelize from "./connectDB"


export async function POST(req) {
    const data = await req.json()
    
    const result = await sequelize.query(`
   INSERT INTO user (name, email, mobile, whatsapp, company, designation, emirates) 
VALUES ('${data?.name}', '${data?.email}', '${data?.mobile}', '${data?.whatsapp}', '${data?.company}', '${data?.designation}', '${data?.emirates}');

`)

   console.log(result)
   console.log(data)

    return  Response.json({dd:'StreamingTextResponse(stream)'})
  }