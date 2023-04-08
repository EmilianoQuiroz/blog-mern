import "./App.css";
import Header from "./Header";
import Layout from "./Layout";
import Post from "./Post";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    /* Routes */
    <Routes>
      {/** Routing al menu */}
      <Route path="/" element={<Layout />}>
      {/** Routing a los posteos */}
      <Route index element={<IndexPage />} />
      {/** Routing al Login */}
      <Route path="/login" element={ <LoginPage /> } />
      {/** Routing al formulario de registro */}
      <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>

  );
}

export default App;
