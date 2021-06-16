import React from 'react';
import styles from '../styles/ProductItem.module.css';
import RemoveListing from './RemoveListing';

const MyListItem = ({ myProduct }) => {
    
    return (
        <div className={styles.product}>
            <img src={myProduct.imageUrl}/>
            <div className={styles.productInfo}>
                <p className={styles.infoName}>{myProduct.productName}</p>
                <p className={styles.infoDescription}>{myProduct.productDescription}</p>
                <p className={styles.infoPrice}>CAD {myProduct.price}/lb</p>
                <RemoveListing myProduct={myProduct}/>
            </div>
        </div>
    );
};

export default MyListItem;