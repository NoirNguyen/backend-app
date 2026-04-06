const userService = require("../services/user.service");
const jwt = require("jsonwebtoken");

// 🔐 LOGIN
exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email?.trim().toLowerCase();

    if (!email || !password) {
      return res.status(400).json({ message: "Thiếu dữ liệu" });
    }

    const user = await userService.login(email, password);

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: "30m" }
    );

    res.json({
      message: "Đăng nhập thành công",
      token
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
