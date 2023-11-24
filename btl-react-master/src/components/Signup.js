// Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Xóa thông báo lỗi khi người dùng thay đổi giá trị
    setFormErrors((prevErrors) => ({
      ...prevErrors,
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

    // Kiểm tra xác nhận mật khẩu
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Mật khẩu không khớp';
    }

    if (Object.keys(errors).length > 0) {
      // Nếu có lỗi, cập nhật state và không tiếp tục xử lý
      setFormErrors(errors);
      return;
    }

    // Thêm logic xử lý đăng ký của bạn ở đây
    console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-header">
          <h2>SIGN UP</h2>
        </div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="error-message">{formErrors.username}</div>
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="error-message">{formErrors.email}</div>
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error-message">{formErrors.password}</div>
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <div className="error-message">{formErrors.confirmPassword}</div>
        </label>
        <div className="button-group">
          <button type="submit">Sign up</button>
          <Link to="/sign-in">
            <button type="button">Login</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
