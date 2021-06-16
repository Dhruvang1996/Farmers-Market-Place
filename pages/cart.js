import Navbar from '../components/Navbar';
import React,{ useEffect, useState } from 'react';
import {profile, getCartProducts} from '../Service/apiService';
import CartList from '../components/CartList';
import styles from '../styles/Cart.module.css';
import { useAuthentication } from '../Hooks/useAuth';

const cart = (authentication) => {

  useAuthentication(authentication);

  const initialState1 = {
    firstName: '',
    lastName: '',
    email:'',
  };

  const [user, setUser] = useState(initialState1);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect( async () => {
    const accessToken = localStorage.getItem('accessToken');
    const userData = await getUser(accessToken);
    
    if (userData) {
      const {email} = userData;
      getAllcartProducts(accessToken,email)
    } 
  },[cartProducts]);

  const getUser = async (accessToken) => {
    const userProfile = await profile(accessToken);
    if (userProfile) {
        setUser(userProfile);
    }

    return userProfile;
  }

  const getAllcartProducts = async (accessToken,email) => {
    const allCartProducts = await getCartProducts(accessToken,email);
    if (allCartProducts) {
      setCartProducts([...allCartProducts]);
    }
  }

  return (
    <div className={styles.outerDiv}>
        <Navbar/>
        <div>
          <CartList cartProducts={cartProducts}/> 
        </div>
    </div>
  )
}
  
export default cart;