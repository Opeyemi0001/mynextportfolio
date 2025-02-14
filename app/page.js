// "use client";
// import { useEffect, useState } from "react";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Work from "./components/Work";

// export default function Home() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//     ) {
//       setIsDarkMode(true);
//     } else {
//       setIsDarkMode(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.theme = "dark";
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.theme = "";
//     }
//   }, [isDarkMode]);
//   return (
//     <>
//       <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
//       <Header isDarkMode={isDarkMode} />
//       <About isDarkMode={isDarkMode} />
//       {/* <Services isDarkMode={isDarkMode} /> */}
//       <Work isDarkMode={isDarkMode} />
//       <Contact isDarkMode={isDarkMode} />
//       <Footer isDarkMode={isDarkMode} />
//     </>
//   );
// }


"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode === null) return; // Don't update until theme is set

    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Prevent rendering until theme is determined
  if (isDarkMode === null) return null;

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      {/* <Services isDarkMode={isDarkMode} /> */}
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}

