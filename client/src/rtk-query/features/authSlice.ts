import { createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  name: string;
  email: string;
  token: string;
}

const initialState: { userInfo: UserInfo | null } = {
  userInfo:
    typeof window !== "undefined" && localStorage.getItem("userInfo")
      ? (JSON.parse(localStorage.getItem("userInfo") || "{}") as UserInfo)
      : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;

      if (typeof window !== "undefined") {
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.userInfo = null;

      if (typeof window !== "undefined") {
        localStorage.removeItem("userInfo");
      }
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
