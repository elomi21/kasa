import { createRoot } from "react-dom/client";
import React from "react";
// import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/home/";
import About from "./pages/about/";
import Carddescription from "./pages/carddescription";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Error from "./pages/Error/";
import reportWebVitals from "./reportWebVitals";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/carddescription" element={<Carddescription />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

createRoot(document.getElementById("root")).render(<App />);
reportWebVitals();
