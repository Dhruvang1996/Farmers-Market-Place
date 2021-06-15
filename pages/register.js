import React, { useState } from 'react';
import { registerService } from '../Service/apiService';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Register.module.css';

const register = ( { setIsAuthenticated } ) => {

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState);

  const router = useRouter();

  const handleChange = ({target}) => {
    setState(oldState => ({...oldState, [target.name]: target.value.trim()}));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = state;
    const user = { firstName, lastName, email, password };
    const res = await registerService(user);

    if (res && res.error) {
      alert(`${res.message}`);
      setState(initialState);
    } else {
      const { accessToken } = res;
      localStorage.setItem('accessToken', accessToken);
      setIsAuthenticated(true);
      router.push('/')     
      setState(initialState);
    }
  };

  const validateForm = () => {
    return (
      !state.email || !state.password || !state.firstName || !state.lastName
    );
  };

  return (
    <div className={styles.outerDiv}>
      <h1 className={styles.heading}>Farmers Market</h1>
    <div className={styles.innerDiv}>
      <h2 className={styles.heading1}>Register</h2>
      <form className={styles.form} onSubmit={submitHandler} autoComplete="none">
        <input className={styles.input}
                type="text" 
                name="firstName"
                value={state.firstName}
                placeholder="First Name"
                onChange={handleChange}
                autoComplete="none"
                />
        <input className={styles.input}
                type="text" 
                name="lastName"
                value={state.lastName}
                placeholder="Last Name"
                onChange={handleChange}
                autoComplete="none"
        />
        <input className={styles.input}
                type="email" 
                name="email"
                value={state.email}
                placeholder="name@mail.com"
                onChange={handleChange}
                autoComplete="none"
        />
        <input className={styles.input}
                type="password" 
                name="password"
                value={state.password}
                placeholder="password"
                onChange={handleChange}
                autoComplete="new-password"
        />
        <button className={styles.button} type="submit" disabled={validateForm()}>
          &nbsp;Register&nbsp;
        </button>
        <p className={styles.p}>If you are alredy register?</p>
        <p className={styles.p}>Login here <Link href="/login"><a>Sign In</a></Link></p>
      </form>
      </div>
    </div>
  )
}
  
export default register;