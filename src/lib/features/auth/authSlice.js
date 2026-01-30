import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  loading: false,
  error: null,
};
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND}/api/auth/register`,
        userData,
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND}/api/auth/login`,
        userData,
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  },
);
export const getMe = createAsyncThunk("auth/me", async (userData, thunkAPI) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND}/api/auth/me`,
      { headers: { Authorization: `Bareer ${token}` } },
    );
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});
//Reducers used to handle synchronous funcitons in slice
//extra reducers handle asynchronous
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  //builder work like switch statements
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (action, state) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (action, state) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(loginUser.pending, (action, state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (action, state) => {
        state.loading = false;
        state.user = action.payload;
        state.error = action.payload;
      })
      .addCase(loginUser.rejected, (action, state) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(getMe.pending, (action, state) => {
        state.loading = true;
        state.user = null;
      })
      .addCase(getMe.fulfilled, (action, state) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })

      .addCase(getMe.rejected, (action, state) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const {} = authSlice.actions;
export default authSlice.reducer;
