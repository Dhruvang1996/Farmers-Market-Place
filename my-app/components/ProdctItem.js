import React from 'react';
import Link from 'next/link';
import styles from '../styles/ProductItem.module.css';

const ProductItem = ({product}) => {
    return (
        <div className={styles.product}>
            <img src={product.imageUrl}/>
            <div className={styles.productInfo}>
                <p className={styles.infoName}>{product.description}</p>
                <p className={styles.infoDescription}></p>
                <p className={styles.infoPrice}>CAD {product.price}/lb</p>
                <Link href="/products/[id]" as={`/products/${product._id}`} ><a className={styles.infoButton}>Details</a></Link>
            </div>
        </div>
    );
};

export default ProductItem;