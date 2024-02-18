import sequelize from "../createqr/connectDB"


export async function POST(req) {
    const data = await req.json()

    console.log(data)
    
    await sequelize.query(`
    UPDATE user SET attended = true WHERE id = ${data?.id};
  `);

  

    return  Response.json({statue: true })
  }