import {
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, googleProvider } from '../firebase/config';

/**
 * Sign in with Google using popup
 * @returns {Promise} Promise with user credentials
 */
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    // The signed-in user info
    const user = result.user;

    // You can also get the Google Access Token
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      }
    };
  } catch (error) {
    console.error('Error signing in with Google:', error);
    return {
      success: false,
      error: {
        code: error.code,
        message: error.message
      }
    };
  }
};

/**
 * Sign in with Google using redirect (better for mobile)
 * Note: Need to handle redirect result in app initialization
 */
export const signInWithGoogleRedirect = async () => {
  try {
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error('Error initiating Google redirect:', error);
    throw error;
  }
};

/**
 * Sign out current user
 * @returns {Promise} Promise with sign out result
 */
export const logOut = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return {
      success: false,
      error: {
        code: error.code,
        message: error.message
      }
    };
  }
};

/**
 * Subscribe to authentication state changes
 * @param {Function} callback - Callback function to handle auth state changes
 * @returns {Function} Unsubscribe function
 */
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, (user) => {
    if (user) {
      callback({
        isAuthenticated: true,
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }
      });
    } else {
      callback({
        isAuthenticated: false,
        user: null
      });
    }
  });
};

/**
 * Get current user
 * @returns {Object|null} Current user object or null
 */
export const getCurrentUser = () => {
  const user = auth.currentUser;
  if (user) {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
  }
  return null;
};
