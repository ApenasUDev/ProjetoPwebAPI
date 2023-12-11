import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        
        if (!username || !password) {
            console.error('Username and password are required.');
            return;
        }
        try {
            const response = await axios.get('http://127.0.0.1:8000/users/login/', {
                params:{username: username,password: password,}
            });
    
            // Check if the response status is successful (e.g., 200)
            if (response.status === 200) {
                // Handle successful login, e.g., redirect to another page
                console.log('Login successful');
            } else {
                // Handle other status codes (e.g., display an error message)
                console.error('Login failed. Status:', response.status);
            }
        } catch (error) {
            console.error('Error during login:', error);
            // Handle login failure, show an error message, etc.
        }
    };
    return (
        <div>
            <a href="../">
                <h1>voltar</h1>
            </a>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="password"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;