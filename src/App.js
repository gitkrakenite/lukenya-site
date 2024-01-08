import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./pages/About";
import Involved from "./pages/Involved";
import AllGallery from "./components/AllGallery";
import Blog from "./pages/Blog";
import SpecificBlog from "./pages/SpecificBlog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/get-involved" element={<Involved />} />
          <Route path="/gallery" element={<AllGallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<SpecificBlog />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
