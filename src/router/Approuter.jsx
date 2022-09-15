import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import BooksDetail from "../pages/booksdetail/BooksDetail";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Private Router */}
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Private Router */}
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<BooksDetail />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
