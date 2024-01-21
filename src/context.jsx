import { useContext, useEffect, useState } from "react";
import { createContext } from "react";




export const AppContext = createContext();

export const AppProvider = ({children}) => {
      
    const [scrolling, setScrolling] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(false);
    const handleLogin = () => {

        console.log(`Username: ${username}, Password: ${password}`);
      };


    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  
    return (
        <AppContext.Provider value={{
            scrolling, username,
            setUsername,
            password, setPassword,
            handleLogin,
            login, setLogin
          
        }}
        >
           {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}