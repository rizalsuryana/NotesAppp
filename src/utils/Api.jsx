const BASE_URL = 'https://notes-api.dicoding.dev/v1';

const getAccessToken = () => {
    return localStorage.getItem('accessToken')
}


const putAccessToken = (accessToken) => {
    return localStorage.setItem('accessToken', accessToken);
}


const fetchWithToken = async (url, options = {}) => {
    return fetch(url, {
        ...options,
        headers: { B
            ...options.headers,
            Authorization: `Bearer ${getAccessToken}`
        },
    });
}


const login = async ({email, password}) => {
    const response = await fetch(`${BASE_URL}/login`, {
        method  : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body    : JSON.stringify({email, password}),
    });

    const responseJson = await response.json();

    if(response.status !== 'success') {
        alert(responseJson.message);
        return { error: true, data: null};
    }

    return {error: false, data: responseJson.data};
}


const register = async ({name, email, password}) => {
    const response = await fetch(`${BASE_URL}/register`, {
        method  :   'POST',
        headers :   {
            'Content-Type' : 'application/json'
        },

        body    : JSON.stringify({name, email, password}),

    });

    const responseJson = await response.json();

    if(responseJson.status !== 'success') {
        alert(responseJson.message);
        return { error: true};
    }

    return {error : false};
    
}

const getUserLogged = async () => {
    const response      = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson  = await response.json();

    if (responseJson.status !== 'success') {
        return{ error : true, data : null};
    }

    return { error: false, data: responseJson.data};
}