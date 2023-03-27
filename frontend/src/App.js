import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddPost from "./pages/AddPost";
import Register from "./pages/Register";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Router>
          <Navbar />

          <main className="body-main">
            <Routes>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/addpost" element={<AddPost />} />
              <Route path="/addpost" element={<AddPost />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
