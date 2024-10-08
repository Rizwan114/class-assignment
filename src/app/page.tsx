import Link from "next/link";

import about from "./about/page"
import Style from "./page.module.css"
import React from "react";

export default function Home() {
  return (
    <div className="body">
      <h1 className="green">Check My Website</h1>
      <br />

        <nav className="text">
      
        <ul>
          <div>
          <li>
          <Link href= "home" target="_blank">Home</Link>  <span></span>
          <Link href= "service" target="_blank">Services</Link> <span></span>
          <Link href= "about" target="_blank">About</Link> <span></span>
          <Link href="contact" target="_blank">Contact</Link> <span></span>

          </li>
          </div>
        </ul>


      </nav>

      <br />

      <nav className="help">
      <Link href = "contact/help" target="_blank">Help Center</Link>
      </nav>

    </div>
  );
}
