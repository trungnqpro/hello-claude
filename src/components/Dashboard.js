import React from 'react';
import { logout } from '../services/authService';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  const handleLogout = async () => {
    const result = await logout();
    if (result.success && onLogout) {
      onLogout();
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <button className="logout-btn" onClick={handleLogout}>
            Đăng xuất
          </button>
        </div>

        <div className="user-profile">
          <div className="profile-avatar">
            <div className="avatar-placeholder">
              {user.fullname ? user.fullname.charAt(0).toUpperCase() : '?'}
            </div>
          </div>

          <div className="profile-info">
            <h2>{user.fullname || 'Người dùng'}</h2>
            <p className="user-type">
              {user.customerType === 'personal' ? '📱 Cá nhân' : '🏢 Doanh nghiệp'}
            </p>
            <p className="user-id">ID: {user._id}</p>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="welcome-message">
            <h3>🎉 Đăng nhập thành công!</h3>
            <p>Bạn đã đăng nhập thành công vào hệ thống.</p>
          </div>

          <div className="info-card">
            <h4>Thông tin tài khoản</h4>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Họ tên:</span>
                <span className="info-value">{user.fullname || 'Chưa cập nhật'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Loại tài khoản:</span>
                <span className="info-value">
                  {user.customerType === 'personal' ? 'Cá nhân' : 'Doanh nghiệp'}
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">User ID:</span>
                <span className="info-value">{user._id}</span>
              </div>
              {user.twofa && (
                <div className="info-item">
                  <span className="info-label">Xác thực 2 lớp:</span>
                  <span className="info-value">
                    {user.twofa.isEnabled ? '✅ Đã bật' : '❌ Chưa bật'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
