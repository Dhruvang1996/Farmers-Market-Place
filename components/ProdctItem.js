import React from 'react';
import Link from 'next/link';
import styles from '../styles/ProductItem.module.css';
import AddProductToCart from './AddProductToCart';

const ProductItem = ({product, user}) => {
    
    return (
        <div className={styles.product}>
            <img src={product.imageUrl}/>
            <div className={styles.productInfo}>
                <p className={styles.infoName}>{product.productName}</p>
                <p className={styles.infoDescription}>{product.productDescription}</p>
                <p className={styles.infoPrice}>CAD {product.price}/lb</p>
                <Link href="/products/[id]" as={`/products/${product._id}`} ><a className={styles.infoButton}>Details</a></Link>
                <AddProductToCart product={product} user={user}/>
            </div>
        </div>
    );
};

export default ProductItem;