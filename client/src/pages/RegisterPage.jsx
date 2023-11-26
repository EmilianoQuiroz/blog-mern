import { useState } from 'react';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if(response.status === 200){
            alert('Registro de usuario exitoso');
        } else {
            alert('Fallo el registro');
        }
    }

    return (
        <form className='register' onSubmit={register}>
            <h1>Register</h1>
            <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <button>Register</button>
        </form>
    )
}

export default RegisterPage;