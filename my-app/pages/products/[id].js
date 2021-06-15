import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { getProductById, profile } from '../../Service/apiService';
import { useAuthentication } from '../../Hooks/useAuth';
import styles from '../../styles/ProductDetails.module.css';

const productId = ({authentication}) => {

    const initialState1 = {
        firstName: '',
        lastName: '',
    };
    const [product, setProduct] = useState({});
    const [user, setUser] = useState(initialState1);
    const router = useRouter();
    const {id} = router.query;
    
    console.log(id)
    useAuthentication(authentication);
    
    useEffect (() => {
        if (id) {
            const accessToken = localStorage.getItem('accessToken');
            getProduct(accessToken,id);
            getUser(accessToken);
            setProduct({});
            setUser(initialState1);
        }
    },[router.query])
    
    const getProduct = async (accessToken, id) => {
        const productById = await getProductById(accessToken,id);
        if (productById) {
            setProduct(productById);
        }
    };

    const getUser = async (accessToken) => {
        const userProfile = await profile(accessToken);
        if (userProfile) {
            setUser(userProfile);
        }
    };

    return (
        <div>
            <Navbar user={user}/>
            <div className={styles.outerDiv}>
                <div className={styles.innerDiv1}>
                    {product && <img src={product.imageUrl}/>}
                </div>
                <div className={styles.innerDiv2}>
                    <h2>{product.description}</h2>
                    <p>Price:<strong> CAD {product.price}/lb</strong></p>
                    <p>Quantity: {product.quantity}</p>
                    <h2>Seller Details</h2>
                    <p>Name: {product.firstName} {product.lastName}</p>
                    <p>Email: {product.email}</p>
                </div>
            </div>
        </div>
    )
}

// export const getServerSideProps = async (context) => {
//     const accessToken = localStorage.getItem('accessToken');
//     const {id} = context.params.id;
//     if (accessToken) {
//         const getProduct = async (accessToken,id) => {
//             const product = await getProductById(accessToken,id);
//             return {
//             props: {
//                 id
//             },
//             };
//         };
//         getProduct(accessToken,id);
//     }
// }

export default productId;