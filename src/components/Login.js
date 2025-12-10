import React, { useState } from 'react';
import { login } from '../services/authService';
import { CUSTOMER_TYPES } from '../config/api';
import './Login.css';

const Login = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    customerType: CUSTOMER_TYPES.PERSONAL
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (error) setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.username.trim()) {
      setError('Vui lòng nhập số điện thoại');
      return;
    }
    if (!formData.password) {
      setError('Vui lòng nhập mật khẩu');
      return;
    }

    setLoading(true);
    setError(null);

    const result = await login({
      username: formData.username.trim(),
      password: formData.password,
      customerType: formData.customerType
    });

    if (result.success) {
      // Success - App component will handle the redirect via auth state
      if (onLoginSuccess) {
        onLoginSuccess(result.data);
      }
    } else {
      setError(result.error.message || 'Đăng nhập thất bại. Vui lòng thử lại.');
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Chào mừng! 👋</h1>
          <p>Đăng nhập để tiếp tục</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="customerType">Loại tài khoản</label>
            <select
              id="customerType"
              name="customerType"
              value={formData.customerType}
              onChange={handleChange}
              disabled={loading}
              className="form-select"
            >
              <option value={CUSTOMER_TYPES.PERSONAL}>Cá nhân</option>
              <option value={CUSTOMER_TYPES.BUSINESS}>Doanh nghiệp</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="username">Số điện thoại</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Nhập số điện thoại"
              value={formData.username}
              onChange={handleChange}
              disabled={loading}
              className="form-input"
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mật khẩu</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Nhập mật khẩu"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              className="form-input"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="error-message">
              <span>⚠️ {error}</span>
            </div>
          )}

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </form>

        <div className="login-footer">
          <p>Bằng cách đăng nhập, bạn đồng ý với các điều khoản sử dụng</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
