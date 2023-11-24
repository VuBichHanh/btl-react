// Signin.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import thư viện Link từ react-router-dom
import './Signin.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [formError, setFormError] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Xóa thông báo lỗi khi người dùng thay đổi giá trị
    setFormError((prevError) => ({
      ...prevError,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra trống và cập nhật thông báo lỗi
    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = 'Không được bỏ trống';
      }
    });

    if (Object.keys(errors).length > 0) {
      // Nếu có lỗi, cập nhật state và không tiếp tục xử lý
      setFormError(errors);
      return;
    }

    // Thêm logic xử lý đăng nhập của bạn ở đây
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="signin-header">
          <h2>SIGN IN</h2>
        </div>
        <label>
          Tài khoản:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="error-message">{formError.username}</div>
        </label>
        <label>
          Mật khẩu:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error-message">{formError.password}</div>
        </label>
        <div className="link-container">
          <Link to="/sign-up">Don't have one? Signup now!</Link>
          <br />
          <br />
          <Link to="/sign-up">Forgot password?</Link>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Signin;
