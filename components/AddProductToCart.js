import React from 'react';
import { addToCart } from '../Service/apiService';
import styles from '../styles/ProductItem.module.css';

const AddProductToCart = ({product, user}) => {

    const addProductToCart = async () => {
        const {_id} = product;
        const {email} = user ;
        const accessToken = localStorage.getItem('accessToken');
        const res = await addToCart(accessToken,_id,email);

        if(res.error) {
            alert(`${res.message}`);
        }
    }

    return (
        <button className={styles.infoAddtoCart} onClick={addProductToCart}>Add to cart</button>
    )
};

export default AddProductToCart;