import { API } from "./api";

// 🔹 Types
type SignupData = {
  name: string;
  email: string;
  password: string;
};

type LoginData = {
  email: string;
  password: string;
};

// ✅ Signup API
export const signupUser = async (data: SignupData) => {
  const res = await API.post("/auth/signup", data);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data;
};

// ✅ Login API
export const loginUser = async (data: LoginData) => {
  const res = await API.post("/auth/login", data);

  localStorage.setItem("token", res.data.token);
  localStorage.setItem("user", JSON.stringify(res.data.user));

  return res.data;
};
