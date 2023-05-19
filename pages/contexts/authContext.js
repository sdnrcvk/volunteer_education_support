import { createContext, useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { api_url } from "../api/hello";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
          setUser(JSON.parse(localStorage.getItem('user')) || null);
          setToken(JSON.parse(localStorage.getItem('token')) || null);
      }, []);

    const login = async (values) => {
        try {
            const response = await axios.post(api_url+`/login`,{
                email: values.email,
                password:values.password
            });
            const userData = response.data;
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData.user));
            localStorage.setItem('token', JSON.stringify(userData.token));
            return response.data;
        } catch (error) {
            console.error(error);
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                text: "Giriş yapılırken hata oluştu. " +
                "Hata :"+JSON.stringify(error.response.data.errors),
                showConfirmButton: false,
            })
        }
    };
    
    const logout = () => {
        setUser(null);
        localStorage.clear();
        document.location="/"
    };

    const authContextValues = { user, login, logout };
  
    return (
      <AuthContext.Provider value={authContextValues}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => useContext(AuthContext);