import React from 'react';
import MyListItem from './MyListItem';
import styles from '../styles/ProductList.module.css';

const MyList = ({ myProducts }) => {
    return (
        <div className={styles.homeScreen}>
            <h2 className={styles.homeScreenTitle}>My Listings</h2>
            <hr />
            <div className={styles.homeScreenProducts}>
                {myProducts.length ? myProducts.map( myProduct => {
                return (<MyListItem
                        key = {myProduct._id}
                        myProduct = {myProduct}
                    />
                )}) : <h2 className={styles.emptyCartScreenProducts}>No Products Listed</h2>}
            </div>
        </div>
    );
};

export default MyList;