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
        productDescription:'',
        productName:'',
        city:'',
        province:'',
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
        const {firstName,lastName,email,price,quantity,productDescription,productName,city,province} = state;
        const productDetails = {firstName,lastName,email,price,quantity,productDescription,productName,city,province,imageUrl:url};
        createProduct(accessToken, productDetails);
        setState(initialState);
        setFile(null);
        setError(null);
    }

    const validateForm = () => {
        if (file && url) {
            return !state.firstName || !state.lastName || 
                    !state.email || !state.price || 
                    !state.quantity || !state.productDescription ||
                    !state.city || !state.productName ||
                    !state.province || !url;
        }
        return true;
    };

    return (
      <>
      {isAuthenticated && <div>
          <Navbar/>
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
                            <td><div className={styles.label}><label htmlFor="productName">Product Name :</label></div></td>
                            <td><input className={styles.input} type="text" id="productName" name="productName" 
                                        value={state.productName} onChange={handleChange} placeholder="Product Name"
                                        autoComplete="off"/></td>
                        </tr>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="price">Price :</label></div></td>
                            <td><input className={styles.input} type="number" id="price" name="price" 
                                        value={state.price} onChange={handleChange} placeholder="CAD /lb"
                                        autoComplete="off"/></td>
                        </tr>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="quantity">Quantity :</label></div></td>
                            <td><input className={styles.input} type="number" id="quantity" name="quantity" 
                                        value={state.quantity} onChange={handleChange} placeholder="lbs."
                                        autoComplete="off"/></td>
                        </tr>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="productDescription">Desription :</label></div></td>
                            <td><textarea className={styles.textarea} type="text" id="productDescription" name="productDescription" 
                                        onChange={handleChange} placeholder="Product Description"
                                        autoComplete="off">{state.productDescription}</textarea></td>
                        </tr>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="city">City :</label></div></td>
                            <td><input className={styles.input} type="text" id="city" name="city" 
                                        value={state.city} onChange={handleChange} placeholder="city"
                                        autoComplete="off"/></td>
                        </tr>
                        <tr>
                            <td><div className={styles.label}><label htmlFor="province">Province :</label></div></td>
                            <td><input className={styles.input} type="text" id="province" name="province" 
                                        value={state.province} onChange={handleChange} placeholder="lbs."
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