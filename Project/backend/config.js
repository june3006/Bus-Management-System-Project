// backend/config.js
export const mysql = {
  database: "busManagement",
  username: "root",
  password: "090402Hieu@",
  host: "localhost",
  dialect: "mysql",
  port: 3306,
};

// config.js

module.exports = {
  email: {
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  },
};

export default mysql;
