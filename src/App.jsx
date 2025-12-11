import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Carlist from "./components/Carlist/Carlist";
import Testimonial from "./components/Testimonial/Testimonial";

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
      <About />
      <Service />
      <Carlist />
      <Testimonial />
    </div>
  );
};

export default App;
