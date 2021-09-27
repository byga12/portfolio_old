import React from 'react'
import { Link } from 'wouter'
import s from './Navigation.module.sass'
export default function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link href="/about">About me</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>   
      </ul>
    </nav>
  )
}
