import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirm, setPasswordConfirm] = useState('');
    const [name, setName] = useState('');

    const handleRegister = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/users/register/', {
                params: { username: username, email: email, password: password, password_confirm: password_confirm, name: name }
            });

           
        } catch (error) {
            console.error('Erro na busca:', error);
            
        }
    };
    return (
        <div>
            <a href='../'><h1>voltar</h1></a>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
            />
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                placeholder="senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="text"
                placeholder="confirme a senha"
                value={password_confirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <input
                type="text"
                placeholder="nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleRegister}>Buscar</button>
        </div>
    )
}
export default Register;