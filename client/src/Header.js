import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <a href="" className="logo">
        IA-Blog
      </a>
      <nav>
        <Link href="/login">Login</Link>
        <a href="">Register</a>
      </nav>
    </header>
  );
}
