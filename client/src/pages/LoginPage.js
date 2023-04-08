export default function LoginPage(){
    return (
        <form className="login">
            <h1>Formulario de login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Login</button>
        </form>
    );
}