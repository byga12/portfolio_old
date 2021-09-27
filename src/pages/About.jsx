import React from 'react'
import s from './About.module.sass'
export default function About() {
  console.log(s);
  return (
    <div className={s.container}>
      <div className={s.firstCol}>a</div>
      <div className={s.secondCol}>b</div>
    </div>
  )
}
