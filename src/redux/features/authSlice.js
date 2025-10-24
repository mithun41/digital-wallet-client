// src/redux/features/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import useAxiosSecure from "../../axiosSecure/useAxiosSecure";

const axiosSecure = useAxiosSecure();

// ================= REGISTER USER =================
export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosSecure.post("/api/register", userData);
      console.log(response.data);
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Registration failed" }
      );
    }
  }
);

// ================= LOGIN USER =================
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosSecure.post("/api/login", userData);
      // console.log(response.data);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Login failed" }
      );
    }
  }
);

// ================= RESET PIN =================
export const resetPinUser = createAsyncThunk(
  "auth/resetPinUser",
  async ({ phone, oldPin, newPin }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const response = await axiosSecure.post("/api/reset-pin", {
        phone,
        oldPin,
        newPin,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: error.message || "Reset failed" }
      );
    }
  }
);

// ================= FETCH USER =================
export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      const response = await axiosSecure.get("/api/me");

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data || { message: "Failed to fetch user" }
      );
    }
  }
);

// ================= SLICE =================
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // ---- REGISTER ----
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Registration failed";
      })

      // ---- LOGIN ----
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
      })

      // ---- RESET PIN ----
      .addCase(resetPinUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(resetPinUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPinUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Reset PIN failed";
      })

      // ---- FETCH USER ----
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Fetch user failed";
        state.user = null;
      });
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
