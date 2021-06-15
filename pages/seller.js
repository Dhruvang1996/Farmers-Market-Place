import React,{ useEffect, useState } from 'react';
import {createProduct, profile} from '../Service/apiService';
import Navbar from '../components/Navbar';
import Progressbar from '../components/Progressbar';
import useStorage from '../firebase/useStorage';
import { useAuthentication } from '../Hooks/useAuth';
import styles from '../styles/Seller.module.css';

const seller = ( { isAuthenticated, authentication } ) => {

    useAuthentication(authentication);

    const initialState = {
        firstName:'',
        lastName:'',
        email:'',
        price:'',
        quantity:'',
        description:'',
    }

    const initialState1 = {
        firstName: '',
        lastName: '',
      };

    const [state, setState] = useState(initialState);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [user, setUser] = useState(initialState1);

    const types = ['image/png', 'image/jpeg'];

    const {url} = useStorage(file);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        getUser(accessToken);
        setUser(initialState1);
    },[]);
    
    const getUser = async (accessToken) => {
        const userProfile = await profile(accessToken)
        if (userProfile) {
            setUser(userProfile);
        }
    }

    const handleChange = ({target}) => {
        setState(oldProductDetail => ({...oldProductDetail,[target.name]:target.value.trim()}))
    }

    const fileHandleChange = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null); 
            setError('Please select an image file (png or jpeg)')
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const accessToken = localStorage.getItem('accessToken')
        const {firstName,lastName,email,price,quantity,description} = state;
        const productDetails = {firstName,lastName,email,price,quantity,description,imageUrl:url};
        createProduct(accessToken, productDetails);
        setState(initialState);
        setFile(null);
        setError(null);
    }

    const validateForm = () => {
        if (file && url) {
            return !state.firstName || !state.lastName || 
                    !state.email || !state.price || 
                    !state.quantity || !state.description ||
                    !url;
        }
        return true;
    };

    return (
      <>
      {isAuthenticated && <div>
          <Navbar user={user}/>
          <div className={styles.outerDiv}>
          <div>
            <h1 className={styles.heading1}>Seller Details</h1>
          </div>
          <div> 
            <form action="submit" onSubmit={submitHandler}>
                <table>
                    <tbody>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="firstName">First name :</label></div></td>
                            <td><input className={styles.input} type="text" id="firstName" name="firstName" 
                                        value={state.firstName} onChange={handleChange} placeholder="First Name"
                                        autoComplete="off"/></td>
                        </tr>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="lastName">Last name :</label></div></td>
                            <td><input className={styles.input} type="text" id="lastName" name="lastName"
                                        value={state.lastName} onChange={handleChange} placeholder="Last Name"
                                        autoComplete="off"/></td>
                        </tr>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="email">Email :</label></div></td>
                            <td><input className={styles.input} type="email" id="email" name="email"
                                       value={state.email} onChange={handleChange} placeholder="Email"
                                       autoComplete="off"/></td>
                        </tr>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="price">Price :</label></div></td>
                            <td><input className={styles.input} type="text" id="price" name="price" 
                                        value={state.price} onChange={handleChange} placeholder="CAD /lb"
                                        autoComplete="off"/></td>
                        </tr>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="quantity">Quantity :</label></div></td>
                            <td><input className={styles.input} type="text" id="quantity" name="quantity" 
                                        value={state.quantity} onChange={handleChange} placeholder="lbs."
                                        autoComplete="off"/></td>
                        </tr>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="description">Desription :</label></div></td>
                            <td><input className={styles.input} type="text" id="description" name="description" 
                                        value={state.description} onChange={handleChange} placeholder="Product Name"
                                        autoComplete="off"/></td>
                        </tr>
                        <tr>
                        <td><div className={styles.label}><label htmlFor="imageUrl">Upload Image :</label></div></td>
                        <td>
                            <input className={styles.input} type="file" id="imageUrl" onChange={fileHandleChange}/></td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.buttonRow}>
                    <button className={styles.button} type="submit" disabled={validateForm()}>Submit</button>
                </div>
            </form>
            <div>
                {!url && <Progressbar file={file} />}
            </div>
          </div>
          </div>
      </div>}
      </>
    );
};
  
export default seller;