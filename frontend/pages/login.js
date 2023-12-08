import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/users/login/', {
                params: { username: username, password: password },
            });

            // Handle successful login, e.g., redirect to another page
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
