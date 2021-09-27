import React from 'react'
import s from './About.module.sass'
import profilePhoto from '../../img/profile_photo.png'
export default function About() {
  return (
    <div className={s.container}>



      <article className={s.hero}>
        <main className={s.firstCol}>
          <h1 className={s.name}>Gabriel Shimabuku</h1>
          <h3 className={s.area}>frontend web developer</h3>
        </main>
        {/* <aside className={s.secondCol}></aside> */}
      </article>

      <article className={s.bio}>
        <figure className={s.bio_figure}>
          <img className={s.bio_photo} src={profilePhoto} alt="Profile pic" />
        </figure>

        <section className={s.bio_description}>
          <h2 className={s.bio_title}>about me</h2>
          <p className={s.bio_content}>I’m a frontend developer based in Buenos Aires, Argentina. I enjoy building apps, solving problems and learning about web development. Most of what I’ve learned comes from personal projects and free courses. 
          I consider myself a self-taught person who likes discovering and experimenting with new technologies.</p>
        </section>
      </article>

      <article className={s.skills}>
        <h2 className={s.skills_title}>Skills & tools I use</h2>
        <div className={s.skills_description}>
          <ul className={s.skillsList}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Sass</li>
            <li>TailwindCSS</li>
            <li>React</li>
          </ul>
          <ul className={s.toolsList}>
            <li>Git</li>
            <li>GitHub</li>
            <li>VSCode</li>
            <li>Figma</li>
          </ul>
        </div>
      </article>


    </div>
  )
}
