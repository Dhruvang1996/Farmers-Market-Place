import React from 'react';
import ProductItem from './ProdctItem';
import styles from '../styles/ProductList.module.css';

const ProductList = ({products, user}) => {
    return (
        <div className={styles.homeScreen}>
            <h2 className={styles.homeScreenTitle}>All Products</h2>
            <hr />
            <div className={styles.homeScreenProducts}>
                {products.map( product => {
                return (<ProductItem
                        key = {product._id}
                        product = {product}
                        user={user}
                    />
                )})}
            </div>
        </div>
    );
};

export default ProductList;