import React from "react";
import "./style.css";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Middletitle from "./components/Middletitle";
import Products from "./components/Products";
import LastTitle from "./components/LastTitle";
import Designers from "./components/Designers";
import Icons from "./components/Icons";
import Footer from "./components/Footer";
import Bottom from "./components/Bottom";

export default function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Middletitle />
      <Products />
      <LastTitle />
      <Designers />
      <Icons />
      <Footer />
      <Bottom />
    </div>
  );
}
