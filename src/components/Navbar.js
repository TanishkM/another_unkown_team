import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <div id="logo">
        <a href="https://openlake.vercel.app/"></a>
      </div>
      <div>
        <p>
          <Link to="https://openlake.vercel.app/">Home</Link>
        </p>
      </div>
      <div id="Abhay">
        <a href="https://openlake.vercel.app/"></a>
      </div>
      <div>
        <p>
          <Link to="https://openlake.vercel.app/">ABhay</Link>
        </p>
      </div>
      <div id="Abhay_1">
        <a href="https://openlake.vercel.app/"></a>
      </div>
      <div>
        <p>
          <Link to="https://openlake.vercel.app/">Abhay_1</Link>
        </p>
      </div>
      <div id="Abhay_2">
        <a href="https://openlake.vercel.app/"></a>
      </div>
      <div>
        <p>
          <Link to="https://openlake.vercel.app/">Abhay_2</Link>
        </p>
      </div>
    </div>
    
  );
}
