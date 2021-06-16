import React from 'react';
import styles from '../styles/ProductItem.module.css';
import RemoveProductFromCart from './RemoveFromCart';

const CartItem = ({ cartProduct }) => {
    
    return (
        <div className={styles.product}>
            <img src={cartProduct.imageUrl}/>
            <div className={styles.productInfo}>
                <p className={styles.infoName}>{cartProduct.productName}</p>
                <p className={styles.infoDescription}>{cartProduct.productDescription}</p>
                <p className={styles.infoPrice}>CAD {cartProduct.price}/lb</p>
                <RemoveProductFromCart cartProduct={cartProduct}/>
            </div>
        </div>
    );
};

export default CartItem;