import React from 'react';
import { removeFromCart } from '../Service/apiService';
import styles from '../styles/ProductItem.module.css';

const RemoveProductFromCart = ({cartProduct}) => {

    const removeProductFromTheCart = async () => {
        const {_id} = cartProduct;
        const accessToken = localStorage.getItem('accessToken');
        await removeFromCart(accessToken,_id);
    }

    return (
        <button className={styles.infoAddtoCart} onClick={removeProductFromTheCart}>Remove from cart</button>
    )
};

export default RemoveProductFromCart;