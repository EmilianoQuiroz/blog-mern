export default function RegisterPage(){
    return (
        <form className="register">
        <h1>Formulario de registro</h1>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Register</button>
    </form>
    );
}