import React, { useState } from 'react';
import { loginService } from '../Service/apiService';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

const login = ( { setIsAuthenticated } ) => {
  const initialState = {
    email:'',
    password:'',
  };

  const [state, setState] = useState(initialState);

  const router = useRouter();

  const handleChange = ({target}) => {
    setState(oldState => ({...oldState, [target.name]: target.value.trim()}));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = state;
    const user = { email, password };
    const res = await loginService(user);

    if (res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      localStorage.setItem('accessToken', accessToken);
      setIsAuthenticated(true);
      setState(initialState);
      router.push('/')     
    }
  }

  const validateForm = () => {
    return !state.email || !state.password;
  };

  return (
    <div className={styles.outerDiv}>
      <h1 className={styles.heading}>Farmers Market</h1>
      <div className={styles.innerDiv}>
      <h2 className={styles.heading1}>Sign In</h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <input className={styles.input}
                type="text"
                name="email"
                value={state.email}
                placeholder="name@mail.com"
                autoComplete="off"
                onChange={handleChange} 
                />
        <input className={styles.input}
                type="password"
                name="password"
                value={state.password}
                placeholder="password"
                autoComplete="new-password"
                onChange={handleChange} 
        /><br/>
        <button className={styles.button} type="submit" disabled={validateForm()}>
          Sign In
        </button>
        <p className={styles.p}>If you are new user?</p>
        <p className={styles.p}>Register here <Link href="/register"><a>Sign Up</a></Link></p>
      </form>
      </div>
    </div>
  )
}
  
export default login;