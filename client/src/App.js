import "./App.css";
import Header from "./Header";
import Post from "./Post";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    /* Routes */
    <Routes>
      <Route index element={
        <main>
            {/* Components */}
            <Header />
            <Post />
            <Post />
            <Post />
          </main>
        }/>
    </Routes>

  );
}

export default App;
