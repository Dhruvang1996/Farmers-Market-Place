import Navbar from '../components/Navbar';
import React,{ useEffect, useState } from 'react';
import {profile} from '../Service/apiService';

const cart = ( { isAuthenticated, setIsAuthenticated } ) => {

  const initialState1 = {
    firstName: '',
    lastName: '',
  };

  const [user, setUser] = useState(initialState1);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    getUser(accessToken);
    setUser(initialState1);
  },[]);

  const getUser = async (accessToken) => {
    const userProfile = await profile(accessToken)
    if (userProfile) {
        setUser(userProfile);
    }
  }

  return (
    <div>
        <Navbar setIsAuthenticated={setIsAuthenticated} user={user}/>
        <div>
          <h1>Cart</h1>
        </div>
    </div>
  )
}
  
export default cart;