import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/home-page";
import SignUp from "./pages/SignUp/sign-up";
import SignIn from "./pages/SignIn/sign-in";
import About from "./pages/About/about";
import Schedule from "./pages/Schedule/schedule";
import Payment from "./pages/Payment/payment";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const userId = user ? user.id : "";
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route
            path="sign-in"
            element={
              <SignIn
                setUser={setUser}
                setIsAuthenticated={setIsAuthenticated}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="schedule" element={<Schedule userId={userId} />} />
          <Route path="/schedule/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
