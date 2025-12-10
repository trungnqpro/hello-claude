// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://stg-auction-api-v2.famtechvn.com',
  ENDPOINTS: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh-token',
    PROFILE: '/auth/profile'
  },
  TIMEOUT: 30000 // 30 seconds
};

// Storage keys
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_PROFILE: 'user_profile',
  DEVICE_ID: 'device_id'
};

// Customer types
export const CUSTOMER_TYPES = {
  PERSONAL: 'personal',
  BUSINESS: 'business'
};

// Device ID generation
export const getOrCreateDeviceId = () => {
  let deviceId = localStorage.getItem(STORAGE_KEYS.DEVICE_ID);
  if (!deviceId) {
    deviceId = `device_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem(STORAGE_KEYS.DEVICE_ID, deviceId);
  }
  return deviceId;
};
