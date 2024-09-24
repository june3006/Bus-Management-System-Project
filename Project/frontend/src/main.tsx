import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/sign-up";
import SignIn from "./pages/SignIn/sign-in";
import Template from "./components/Template/template";
import HomePage from "./pages/HomePage/home-page";
import About from "./pages/About/about";
import Schedule from "./pages/Schedule/schedule";
import Payment from "./pages/Payment/payment";
import SearchRoute from "./pages/SearchRoute/search-route";
import BookingSuccess from "./components/BookModal/BookingSuccess";
import SignInSuccess from "./pages/SignInSuccess/SignInSuccess";

const Main = () => {
  const [user, setUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Assuming userId is derived from the authenticated user
  const userId = user ? user.id : "";

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Template isAuthenticated={isAuthenticated} />}
        >
          <Route index element={<HomePage />} />
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
          <Route path="search-route" element={<SearchRoute />} />
          <Route path="booking-success" element={<BookingSuccess />} />
          <Route path="sign-in-success" element={<SignInSuccess />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
