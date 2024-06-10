import React from "react";
import Login from "./Components/auth/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/auth/Signup";
import Home from "./Components/Home";
import Home2 from "./Components/Home2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />}></Route>
          <Route path="signup" element={<Signup />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="home2" element={<Home2 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
