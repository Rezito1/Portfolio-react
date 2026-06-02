import "./App.css"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import CV from "./pages/CV"
import { useState } from "react"

import { Routes, Route } from "react-router-dom"

export default function App() {
  const [bgColor, setBgColor] = useState("#f4f6f8");
  return (
    <>
    <div className={bgColor === "lightblue" ? "app-container blue-mode" : "app-container"}>
      <Navbar bgColor={bgColor} />

      <Routes>
        <Route path="/" element={<Home bgColor={bgColor} setBgColor={setBgColor} />} />
        <Route path="/about" element={<About setBgColor={setBgColor} />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<CV />} />
      </Routes>

      <Footer bgColor={bgColor} />
    </div>
    </>
  )
}