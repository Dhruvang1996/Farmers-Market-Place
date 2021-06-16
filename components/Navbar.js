import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { logoutService, profile } from '../Service/apiService'
import { useRouter } from 'next/router';
import React, { useState, useEffect} from 'react';

const Navbar = () => {

    const router = useRouter();

    const initialState = {
        firstName: '',
        lastName: '',
    };
    
    const [user, setUser] = useState(initialState);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        getUser(accessToken);
        setUser(initialState);
      },[]);
    
      const getUser = async (accessToken) => {
        const userProfile = await profile(accessToken);
        if (userProfile) {
          setUser(userProfile);
        }
      }

    const handleClick = async () => {
        await logoutService('accessToken');
        router.push('/login')
    }


    return (
        <div className={styles.topnav}>
            <div className={styles.left}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/seller"><a>Sell</a></Link>
                <Link href="/myProduct"><a>My Listings</a></Link>
            </div>
            <div className={styles.right}>
                <div className={styles.topnav2} >
                    <div>Hi {user.firstName}</div>
                    <div>{user.lastName}</div>
                </div>
                <div className={styles.topnav1} onClick={handleClick}>Logout</div>
                <Link href="/cart"><a>Cart</a></Link>
            </div>
        </div>
    )
}

export default Navbar;