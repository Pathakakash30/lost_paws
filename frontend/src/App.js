import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddPost from "./pages/AddPost";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />

          <main className="body-main">
            <Routes>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addpost" element={<AddPost />} />
            </Routes>
          </main>
        </Router>
      </div>
    </>
  );
}

export default App;
