import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="./" className="logo">Blog</a>
        <nav>
          <a href="./">Login</a>
          <a href="./">Register</a>
        </nav>
      </header>

      <div className="post">
          <div className="image">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img.blog"/>
          </div>
          <div className="texts">
          <h2>Imagen muestra robot reales en China</h2>
          <p className="info">
            <a className="author">Santiago Quiroz</a>
            <time>2023-11-24 16:45</time>
          </p>
            <p className="sumary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <div className="post">
          <div className="image">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img.blog"/>
          </div>
          <div className="texts">
          <h2>Imagen muestra robot reales en China</h2>
          <p className="info">
            <a className="">Santiago Quiroz</a>
            <time>2023-11-24 16:45</time>
          </p>
            <p className="sumary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <div className="post">
          <div className="image">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img.blog"/>
          </div>
          <div className="texts">
          <h2>Imagen muestra robot reales en China</h2>
          <p className="info">
            <a className="">Santiago Quiroz</a>
            <time>2023-11-24 16:45</time>
          </p>
            <p className="sumary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
    </main>
  );
}

export default App;
