import Navbar from '../components/Navbar';
import React,{ useEffect, useState } from 'react';
import {profile, getMyProducts} from '../Service/apiService';
import MyList from '../components/MyList';
import styles from '../styles/Cart.module.css';

const myProduct = () => {

  const initialState1 = {
    firstName: '',
    lastName: '',
    email:'',
  };

  const [user, setUser] = useState(initialState1);
  const [myProducts, setMytProducts] = useState([]);

  useEffect( async () => {
    const accessToken = localStorage.getItem('accessToken');
    const userData = await getUser(accessToken);
    
    if (userData) {
      const {email} = userData;
      getAllMyProducts(accessToken,email)
    } 
  },[myProducts]);

  const getUser = async (accessToken) => {
    const userProfile = await profile(accessToken);
    if (userProfile) {
        setUser(userProfile);
    }
    return userProfile;
  }

  const getAllMyProducts = async (accessToken,email) => {
    const allMyProducts = await getMyProducts(accessToken,email);
    if (allMyProducts) {
        setMytProducts([...allMyProducts]);
    }
  }

  return (
    <div className={styles.outerDiv}>
        <Navbar/>
        <div>
          <MyList myProducts={myProducts}/> 
        </div>
    </div>
  )
}

export default myProduct;