// import  { Sequelize }  from 'sequelize'

// // Create Sequelize instance
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     // logging: false, // Disable logging if not needed
// });

// // Test the connection
// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//                 console.log('User table created successfully.');
    
        
//         console.log('Connection to the database has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// testConnection();

// module.exports = sequelize;


const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool for querying
module.exports = pool.promise();