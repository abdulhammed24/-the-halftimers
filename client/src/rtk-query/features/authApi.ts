import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define UserInfo interface
export interface UserInfo {
  id: string;
  name: string;
  email: string;
  token?: string;
}

// Define the authApi
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/auth`,
  }),
  endpoints: (builder) => ({
    // Register mutation
    register: builder.mutation<UserInfo, Partial<UserInfo>>({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),

    // Login mutation
    login: builder.mutation<UserInfo, { email: string; password: string }>({
      query: (credentials) => ({
        url: "/login",
        method: "POST",
        body: credentials,
      }),
    }),

    // Forgot Password mutation
    forgotPassword: builder.mutation<void, { email: string }>({
      query: ({ email }) => ({
        url: "/forgot-password",
        method: "POST",
        body: { email },
      }),
    }),

    // Reset Password mutation
    resetPassword: builder.mutation<
      void,
      { token: string; newPassword: string }
    >({
      query: ({ token, newPassword }) => ({
        url: "/reset-password",
        method: "POST",
        body: { token, newPassword },
      }),
    }),

    // Logout mutation
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useLogoutMutation,
} = authApi;
