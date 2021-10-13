import React, {useRef} from 'react'
import s from './About.module.sass'
import profilePhoto from '../../img/profile_photo.png'


//CUSTOM HOOKS
import useTransitionOnScroll from '../../hooks/useTransitionOnScroll';




export default function About() {

  const refs = useRef([]);

  
  useTransitionOnScroll(refs.current, s.fadeIn);
  

  return (
    <div className={s.container}>


      <article className={s.hero} >
        <main className={s.firstCol} ref={ref=>refs.current.push(ref)}>
          <h1 className={s.name}>Gabriel Shimabuku</h1>
          <h3 className={s.area}>frontend web developer</h3>
        </main>
        
      </article>

      <article className={s.bio}>
        <figure className={s.bio_figure} ref={ref=>refs.current.push(ref)} >
          <img className={s.bio_photo} src={profilePhoto} alt="Profile pic" />
        </figure>

        <section className={s.bio_description} ref={ref=>refs.current.push(ref)}>
          <h2 className={s.bio_title}>about me</h2>
          <p className={s.bio_content}>I’m a frontend developer based in Buenos Aires, Argentina. I enjoy building apps, solving problems and learning about web development. Most of what I’ve learned comes from personal projects and free courses. 
          I consider myself a self-taught person who likes discovering and experimenting with new technologies.</p>
        </section>
      </article>

      <article className={s.skills}>
        <h2 className={s.skills_title} ref={ref=>refs.current.push(ref)}>Skills & tools I use</h2>
        <div className={s.skills_description} ref={ref=>refs.current.push(ref)}>
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
