import React from 'react'
import { Link } from 'wouter'
import s from './Navigation.module.sass'
export default function Navigation() {


 
  return (
    <nav className={s.nav} >
      <ul className={s.links}>
        <li><Link className={s.link} href="/">About me</Link></li>
        <li><Link className={s.link} href="/projects">Projects</Link></li>
        <li><Link className={s.link} href="/contact">Contact</Link></li>   
      </ul>
    </nav>
  )
}
