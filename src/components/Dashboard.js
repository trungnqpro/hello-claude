import React from 'react';
import { logOut } from '../services/authService';
import './Dashboard.css';

const Dashboard = ({ user }) => {
  const handleLogout = async () => {
    const result = await logOut();
    if (!result.success) {
      console.error('Logout failed:', result.error);
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
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName} />
            ) : (
              <div className="avatar-placeholder">
                {user.displayName ? user.displayName.charAt(0).toUpperCase() : '?'}
              </div>
            )}
          </div>

          <div className="profile-info">
            <h2>{user.displayName || 'Người dùng'}</h2>
            <p className="user-email">{user.email}</p>
            <p className="user-id">ID: {user.uid}</p>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="welcome-message">
            <h3>🎉 Đăng nhập thành công!</h3>
            <p>Bạn đã đăng nhập thành công bằng tài khoản Google.</p>
          </div>

          <div className="info-card">
            <h4>Thông tin tài khoản</h4>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Tên hiển thị:</span>
                <span className="info-value">{user.displayName || 'Chưa cập nhật'}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email:</span>
                <span className="info-value">{user.email}</span>
              </div>
              <div className="info-item">
                <span className="info-label">User ID:</span>
                <span className="info-value">{user.uid}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
