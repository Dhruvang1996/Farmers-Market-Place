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

export const getMyProducts = (accessToken, email) => {
    return fetch(`${BASE_URL}/products/myList/${email}`, {
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

export const addToCart = (accessToken,id,email) => {
    return fetch(`${BASE_URL}/cart/${id}/${email}`, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${accessToken}`
        },
    })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const removeFromCart = (accessToken,id) => {
    return fetch(`${BASE_URL}/cart/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${accessToken}`
        },
    })
    // .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const removeProduct = (accessToken,id) => {
    console.log(id)
    return fetch(`${BASE_URL}/myList/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${accessToken}`
        },
    })
    // .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getCartProducts = (accessToken, email) => {
    return fetch(`${BASE_URL}/cart/${email}`, {
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