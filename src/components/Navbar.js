import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  function handleClick(e) {
    props.onExit(e);
  }
  return (
    <div className="nav" style={{paddingTop: '4rem'}}>
      <div
        id="Home"
        style={{
          cursor: "pointer",
        }}
        onClick={() => handleClick("Home")}
      >
        Home
      </div>
      <div
        id="Resource"
        style={{
          cursor: "pointer",
        }}
        onClick={() => handleClick("Resource")}
      >
        Resource
      </div>
      <div
        id="Blog"
        style={{
          cursor: "pointer",
        }}
        onClick={() => handleClick("Blog")}
      >
        Blog
      </div>
      <div
        id="Abhay_3"
        style={{
          cursor: "pointer",
        }}
        onClick={() => handleClick("Abhay_3")}
      >
        Abhay_3
      </div>
    </div>
  );
}
