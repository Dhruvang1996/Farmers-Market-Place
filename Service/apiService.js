const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';

export const getProducts = (accessToken) => {
    return fetch(`${BASE_URL}/products`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${accessToken}`
        },
    })
        .then(res => res.json())
        .catch(err => console.log(err));
};

export const getProductById = (accessToken, id) => {
    return fetch(`${BASE_URL}/products/${id}`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${accessToken}`
        },
    })
        .then(res => res.json())
        .catch(err => console.log(err));
};

//testing Vercel

export const createProduct = (accessToken,productDetails) => {
    return fetch(`${BASE_URL}/seller`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${accessToken}`
        },
        body: JSON.stringify(productDetails),
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const loginService = (user) => {
    return fetch(`${BASE_URL}/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
};

export const registerService = (user) => {
    return fetch(`${BASE_URL}/register`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
     .then((res) => res.json())
     .catch((err) => console.log(err));
};

export const profile = (accessToken) => {
    return fetch(`${BASE_URL}/profile`, {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
};

export const logoutService = (tokenName) => {
    //getitem from local storage
    localStorage.removeItem(tokenName);
}