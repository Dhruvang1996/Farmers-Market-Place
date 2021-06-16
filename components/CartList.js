import React from 'react';
import CartItem from './CartItem';
import styles from '../styles/ProductList.module.css';

const CartList = ({ cartProducts }) => {
    return (
        <div className={styles.homeScreen}>
            <h2 className={styles.homeScreenTitle}>ITEMS ADDED TO SHOPPING CART</h2>
            <hr />
            <div className={styles.homeScreenProducts}>
                {cartProducts.length ? cartProducts.map( cartProduct => {
                return (<CartItem
                        key = {cartProduct._id}
                        cartProduct = {cartProduct}
                    />
                )}) : <h2 className={styles.emptyCartScreenProducts}>No Products Available</h2>}
            </div>
        </div>
    );
};

export default CartList;