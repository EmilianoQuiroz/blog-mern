import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUsername(userInfo.username);
            });
        });
    }, [])

    return (
        <header>
            <Link to="/" className="logo">Blog</Link>
            <nav>
                {username && (
                    <>
                        <Link to="/create">Crea un nuevo articulo</Link>
                        <a href='/'>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header;