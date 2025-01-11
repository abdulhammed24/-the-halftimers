import { useEffect, useState } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const { token } = JSON.parse(userData);
      setIsAuthenticated(!!token);
    }
  }, []);

  return { isAuthenticated, setIsAuthenticated };
};

export default useAuth;
