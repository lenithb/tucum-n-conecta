import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Categories from "./pages/Categories";
import Content from "./pages/Content";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// persistencia del darkmode en localstorage
function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((currentMode) => !currentMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/explore" element={<Explore />} />

          <Route path="/categories" element={<Categories />} />

          <Route path="/content/:id" element={<Content />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
