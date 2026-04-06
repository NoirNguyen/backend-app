const db = require("../config/db");
const bcrypt = require("bcryptjs");

// 🔐 LOGIN
exports.login = async (email, password) => {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE email = ? LIMIT 1",
    [email]
  );

  if (rows.length === 0) {
    throw new Error("Email không tồn tại");
  }

  const user = rows[0];

  if (user.status === 0) {
    throw new Error("Tài khoản bị khóa");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Sai mật khẩu");
  }

  return user;
};
