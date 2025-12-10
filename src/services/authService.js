import { API_CONFIG, STORAGE_KEYS, CUSTOMER_TYPES, getOrCreateDeviceId } from '../config/api';

/**
 * Make API request with proper headers
 * @param {string} endpoint - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise} API response
 */
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_CONFIG.BASE_URL}${endpoint}`;
  const token = getAccessToken();

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw {
        status: response.status,
        message: data.message || 'Request failed',
        data: data
      };
    }

    return data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};

/**
 * Login with username and password
 * @param {object} credentials - Login credentials
 * @param {string} credentials.username - Username (phone number)
 * @param {string} credentials.password - Password
 * @param {string} credentials.customerType - Customer type (personal/business)
 * @returns {Promise} Login result with tokens and profile
 */
export const login = async ({ username, password, customerType = CUSTOMER_TYPES.PERSONAL }) => {
  try {
    const deviceId = getOrCreateDeviceId();

    const response = await apiRequest(API_CONFIG.ENDPOINTS.LOGIN, {
      method: 'POST',
      body: JSON.stringify({
        customerType,
        username,
        password,
        deviceId,
        reCaptchaToken: 'a', // TODO: Implement real reCaptcha
        deviceToken: deviceId // Using deviceId as deviceToken for now
      })
    });

    if (response.data) {
      // Save tokens and profile to localStorage
      setAccessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      setUserProfile(response.data.profile);

      return {
        success: true,
        data: {
          profile: response.data.profile,
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken
        }
      };
    }

    return {
      success: false,
      error: {
        message: 'Login failed - no data received'
      }
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      error: {
        message: error.message || 'Đăng nhập thất bại',
        status: error.status,
        data: error.data
      }
    };
  }
};

/**
 * Logout current user
 * @returns {Promise} Logout result
 */
export const logout = async () => {
  try {
    // Optional: Call logout API if available
    // await apiRequest(API_CONFIG.ENDPOINTS.LOGOUT, { method: 'POST' });

    // Clear all auth data
    clearAuthData();

    return { success: true };
  } catch (error) {
    console.error('Logout error:', error);
    // Clear data even if API call fails
    clearAuthData();
    return { success: true };
  }
};

/**
 * Refresh access token
 * @returns {Promise} New tokens
 */
export const refreshAccessToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await apiRequest(API_CONFIG.ENDPOINTS.REFRESH_TOKEN, {
      method: 'POST',
      body: JSON.stringify({ refreshToken })
    });

    if (response.data) {
      setAccessToken(response.data.accessToken);
      if (response.data.refreshToken) {
        setRefreshToken(response.data.refreshToken);
      }
      return {
        success: true,
        data: response.data
      };
    }

    return { success: false };
  } catch (error) {
    console.error('Refresh token error:', error);
    clearAuthData();
    return { success: false, error };
  }
};

/**
 * Get current user profile
 * @returns {object|null} User profile or null
 */
export const getCurrentUser = () => {
  return getUserProfile();
};

/**
 * Check if user is authenticated
 * @returns {boolean} Authentication status
 */
export const isAuthenticated = () => {
  const token = getAccessToken();
  const profile = getUserProfile();
  return !!(token && profile);
};

// ============================================
// Token Management Functions
// ============================================

export const getAccessToken = () => {
  return localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
};

export const setAccessToken = (token) => {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
};

export const getRefreshToken = () => {
  return localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);
};

export const setRefreshToken = (token) => {
  localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token);
};

export const getUserProfile = () => {
  const profile = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
  return profile ? JSON.parse(profile) : null;
};

export const setUserProfile = (profile) => {
  localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
};

export const clearAuthData = () => {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
};
