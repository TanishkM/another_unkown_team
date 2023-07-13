import React from "react";
import Content from "../components/OpenlakeHome/Content";
import Resource from "../components/OpenlakeHome/Resource";
import Blog from "../components/OpenlakeHome/Blog";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "./Home.css";
import { useState } from "react";

export default function Home() {
  const [a, setA] = useState("Home");
  // console.log(a);
  return (
    <div className="superContainer">
      <div className="expContainer">
        <div className="expImg">
          <div className="expTag">
            <Navbar onExit={setA} />
            {a === "Home" ? <Content /> : null}
            {a === "Resource" ? <Resource /> : null}
            {a === "Blog" ? <Blog /> : null}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
