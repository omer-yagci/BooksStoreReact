import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import BooksDetail from "../pages/booksdetail/BooksDetail";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";
import Register from "../pages/register/Register";
import PrivateRouter from "./PrivateRouter";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Private Router */}
        <Route path="/detail" element={<PrivateRouter />}>
          <Route path="" element={<BooksDetail />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
