import React, { useState, useEffect } from 'react';
import {getProducts, profile} from '../Service/apiService';
import Navbar from '../components/Navbar';
import ProductList from '../components/ProductList';
import { useAuthentication } from '../Hooks/useAuth';
import styles from '../styles/Home.module.css';

const Home = ({ isAuthenticated, authentication }) => {

  const initialState = {
    firstName: '',
    lastName: '',
  };

  const [products, setProducts] = useState();
  const [user, setUser] = useState(initialState);

  useAuthentication(authentication);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    getAllProducts(accessToken);
    setProducts([]);
    setUser(initialState);
  },[]);

  const getAllProducts = async (accessToken) => {
    const allProducts = await getProducts(accessToken);
    const userProfile = await profile(accessToken);
    if (allProducts && userProfile) {
      setProducts(() => [...allProducts]);
      setUser(userProfile);
    }
  }
  
  return (
    <div className={styles.outerDiv}>
      { isAuthenticated && <div>
        <Navbar/>
        <div>
          { products ? <ProductList products={products} user={user}/> : 
            <h2>No Products Available</h2>}
        </div>
      </div>}
      </div>
  )
};

export default Home;