import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// Your Firebase configuration
// Ensure these environment variables are correctly loaded
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase App and Auth service
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 🔹 Setup Recaptcha with the correct parameter order
export const setUpRecaptcha = async () => {
  if (!window.recaptchaVerifier) {
    // ⚠️ Corrected line: 'auth' is now the first parameter
    const verifier = new RecaptchaVerifier(
      auth, // Pass the 'auth' instance here
      "recaptcha-container", // The ID of the reCAPTCHA container element
      { size: "invisible" }
    );

    // Render the reCAPTCHA verifier
    await verifier.render();

    // 🔹 Enable test mode for development
    // This allows you to bypass phone verification with test phone numbers
    // and the code '123456'
    verifier.appVerificationDisabledForTesting = true;

    window.recaptchaVerifier = verifier;
  }
  return window.recaptchaVerifier;
};

// 🔹 Send OTP
export const sendOtp = async (phoneNumber) => {
  // Ensure reCAPTCHA verifier is set up before sending OTP
  const appVerifier = await setUpRecaptcha();

  // Use signInWithPhoneNumber with the auth instance, phone number, and verifier
  return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
};
