import moment from "moment"
import sequelize from "./connectDB"


export async function POST(req) {
    const data = await req.json()
    
    const result = await sequelize.query(`
   INSERT INTO user (name, email, mobile, whatsapp, age, visa, job, qualification, emirates, createdAt) 
VALUES ('${data?.name}', '${data?.email}', '${data?.mobile}', '${data?.whatsapp}', '${data?.age}', '${data?.visa}', '${data?.qualification}', '${data?.emirates}', '${moment().format("YYYY-MM-DD")}');
`)
    const result2 = await sequelize.query(`SELECT LAST_INSERT_ID() `)

  

    return  Response.json({id: result2?.[0][0]['LAST_INSERT_ID()'] })
  }