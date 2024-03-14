import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext( {} as any);

export const UserStorage = ({ children }: any) => {
  const [login, setLogin] = useState(true); //estado do login do usuário. Começa com false para que o usuário se logue.
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token") as string);

  
  const getUser = (token: string) => {
    api.get("/user/get-user", {headers:{Authorization: token}}).then(({ data }) => {
      setUser(data.user);
      setLogin(true);
    }).catch ((error) => {
      console.log("Usuário nçao autenticado", error);
    })
  }

  useEffect(() => {
    getUser(token);
  },[token])

  const logOut = () => {
    localStorage.removeItem("token");
    setLogin(false);
    setUser({});
  }


//trazer os dados do usuário; salvar no token no localStorage para quando o usuário recarregar a página ele não precisar fazer o login novamente.
  const handleLogin = (email: string, password: string) => {
    api.post("/user/sign-in", {email, password}).then(({ data }) => {
      setLogin(true);
      
      localStorage.setItem("token", data.token);
      setToken(data.token);
      getUser(data.token);
    }).catch ((error) => {
      console.log("Não foi possivel fazer o login", error);
    })
  }

  return (
    <UserContext.Provider value ={{
      login,
      user,
      handleLogin,
      logOut
    }}>
      {children}
    </UserContext.Provider>
  )

}