
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.scss";
import Home from "./pages/home/";
import About from "./pages/about/";
import Error from "./pages/error/";
import Rentaldescription from "./pages/rental-description";
import Header from "./components/Header/";
import Footer from "./components/Footer/";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rental-description/:id" element={<Rentaldescription />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
