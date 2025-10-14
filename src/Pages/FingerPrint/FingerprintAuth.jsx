import React, { useState } from "react";
import axios from "axios";
import {
  startAuthentication,
  startRegistration,
} from "@simplewebauthn/browser";
// 🔑 FIX: useSelector-এর সঠিক ইমপোর্ট
import { useSelector } from "react-redux";

const API_BASE = "http://localhost:5000/api/fingerprint"; // backend URL

// 🔑 বাইনারি ডেটাগুলিকে Base64URL স্ট্রিং-এ রূপান্তর করার Helper Function
// এটি ArrayBuffer ডেটাগুলিকে JSON-এর মাধ্যমে সার্ভারে পাঠানোর জন্য উপযুক্ত করে তোলে।
const cleanAttestationResponse = (attResp) => {
  // ArrayBuffer ডেটাগুলিকে Base64URL স্ট্রিং-এ রূপান্তর করার লজিক
  const encoder = (data) =>
    data instanceof ArrayBuffer
      ? btoa(String.fromCharCode(...new Uint8Array(data)))
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "")
      : data;

  // attResp থেকে বাইনারি প্রপার্টিগুলি নির্বাচন করে স্ট্রিং-এ রূপান্তর করা
  return {
    ...attResp,
    id: encoder(attResp.id),
    rawId: encoder(attResp.rawId),
    response: {
      ...attResp.response,
      attestationObject: encoder(attResp.response.attestationObject),
      clientDataJSON: encoder(attResp.response.clientDataJSON),
    },
  };
};

const FingerprintAuth = ({ mode = "login", phone }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔑 FIX: useSelector-এর সঠিক ব্যবহার
  const { token: reduxToken } = useSelector((state) => state.auth);
  const token = reduxToken || localStorage.getItem("token");

  // ------------------- REGISTER -------------------
  const handleRegister = async () => {
    try {
      setLoading(true);
      setMessage("Initializing fingerprint registration...");

      const { data: options } = await axios.post(
        `${API_BASE}/register/start`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Step 2: Browser performs WebAuthn registration
      const attResp = await startRegistration(options);

      // 🔑 ডেটা পরিষ্কার করুন: সার্ভারে পাঠানোর আগে ArrayBuffer কে স্ট্রিং-এ রূপান্তর
      const cleanedAttResp = cleanAttestationResponse(attResp);

      // Step 3: Verify registration on server (Line 39/40)
      await axios.post(`${API_BASE}/register/verify`, cleanedAttResp, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage("✅ Fingerprint registered successfully!");
    } catch (error) {
      console.error("Registration Error:", error);
      setMessage(
        "❌ Registration failed: " +
          (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  // ------------------- LOGIN -------------------
  const handleLogin = async () => {
    try {
      if (!phone) return setMessage("❌ Phone number required for login");
      setLoading(true);
      setMessage("Starting fingerprint login...");

      // Step 1: get login challenge
      const { data: options } = await axios.post(`${API_BASE}/login/start`, {
        phone,
      });

      // Step 2: browser performs WebAuthn authentication
      const asseResp = await startAuthentication(options);

      // 🔑 ডেটা পরিষ্কার করুন: লগইন Assertion Response-এর জন্যও এটি প্রয়োজনীয়
      const cleanedAsseResp = cleanAttestationResponse(asseResp);

      // Step 3: verify login on server
      const { data } = await axios.post(`${API_BASE}/login/verify`, {
        phone,
        response: cleanedAsseResp, // পরিষ্কার ডেটা পাঠানো
      });

      localStorage.setItem("token", data.token);
      setMessage("✅ Fingerprint login successful!");
      window.location.reload();
    } catch (error) {
      console.error(error);
      setMessage(
        "❌ Fingerprint login failed: " +
          (error.response?.data?.message || error.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center my-4">
      <h3 className="text-lg font-semibold mb-2">
        {mode === "register"
          ? "Register Fingerprint"
          : "Login with Fingerprint"}
      </h3>

      <button
        onClick={mode === "register" ? handleRegister : handleLogin}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        {loading
          ? "Processing..."
          : mode === "register"
          ? "Register Fingerprint"
          : "Login with Fingerprint"}
      </button>

      {message && <p className="mt-2 text-sm text-gray-700">{message}</p>}
    </div>
  );
};

export default FingerprintAuth;
