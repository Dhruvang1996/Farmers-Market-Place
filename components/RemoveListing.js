import React from 'react';
import { removeProduct } from '../Service/apiService';
import styles from '../styles/ProductItem.module.css';

const RemoveListing = ({myProduct}) => {

    const removeMyProduct = async () => {
        const {_id} = myProduct;
        const accessToken = localStorage.getItem('accessToken');
        await removeProduct(accessToken,_id);
    }

    return (
        <button className={styles.infoAddtoCart} onClick={removeMyProduct}>Remove Listing</button>
    )
};

export default RemoveListing;