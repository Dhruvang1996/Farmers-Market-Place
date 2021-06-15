import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { profile } from '../Service/apiService';

function MyApp({ Component, pageProps }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  const authentication = async () => {  
    if (!isAuthenticated) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        await profile(token)
        setIsAuthenticated(true);
        return true;
      }
    }
    return isAuthenticated;
  }

  return <Component {...pageProps} isAuthenticated={isAuthenticated} authentication={authentication} setIsAuthenticated={setIsAuthenticated}/>
}

export default MyApp;