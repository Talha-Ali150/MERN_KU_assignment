import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Users from "./components/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <Auth>
              <Home />
            </Auth>
          }
        />
        <Route
          path="/about"
          element={
            <Auth>
              <About />
            </Auth>
          }
        />
        <Route
          path="/contact"
          element={
            <Auth>
              <Contact />
            </Auth>
          }
        />
        <Route
          path="/users"
          element={
            <Auth>
              <Users />
            </Auth>
          }
        />
        <Route path="/*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
