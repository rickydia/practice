"use client";

import { createContext, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  username: string;
};

type AuthContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {
    throw new Error("Not implemented");
  },
  logout: () => {
    throw new Error("Not implemented");
  },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const login = async (username: string, password: string) => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);
      const response = await axios.post(
        "http://localhost:8000/auth/token",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      localStorage.setItem("token", response.data.access_token);
      setUser({ id: response.data.id, username: response.data.username });
      router.push("/");
    } catch (error: any) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
