import React from "react";
import { Link, useLocation } from "wouter";
import s from "./Navigation.module.sass";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className={s.nav}>
      <ul className={s.links}>
        <li>
          <Link
            className={`${s.link} ${location === "/" ? s.active : ""}`}
            href="/"
          >
            About me
          </Link>
        </li>
        <li>
          <Link
            className={`${s.link} ${location === "/projects" ? s.active : ""}`}
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={`${s.link} ${location === "/contact" ? s.active : ""}`}
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
