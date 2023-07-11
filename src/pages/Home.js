import React from "react";
import Content from "../components/OpenlakeHome/Content";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "./Home.css"

export default function Home() {
  return (
    <div className="superContainer">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
