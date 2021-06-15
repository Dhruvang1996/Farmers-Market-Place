import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { logoutService } from '../Service/apiService'
import { useRouter } from 'next/router';

const Navbar = ({user}) => {

    const router = useRouter();

    const handleClick = async () => {
        await logoutService('accessToken');
        router.push('/login')
    }

    return (
        <div className={styles.topnav}>
            <div className={styles.left}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/seller"><a>Sell</a></Link>
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