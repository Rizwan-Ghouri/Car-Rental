import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Carlist from "./components/Carlist/Carlist";
import Testimonial from "./components/Testimonial/Testimonial";
import AppStoreBanner from "./components/AppStoreBanner/AppStoreBanner";
import Contect from "./components/Contect/Contect";
import Footer from "./components/Footer/Footer";

const App = () => {
  // Dark Mode feature
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const elements = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      elements.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      elements.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  },[]);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <div className="bg-white dark:bg-black dark:text-white -z-40">
      <About />
      <Service />
      <Carlist />
      <Testimonial />
      <AppStoreBanner />
      <Contect />
      <Footer />
      </div>
    </div>
  );
};

export default App;
