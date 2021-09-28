import React from 'react'
import s from './Project.module.sass'

export default function Project({title,description,desktopImg,mobileImg,repo,live}) {
  return (


      <div className={s.picture_container}>
        
        <picture>
          <source media="(min-width: 700px)" srcSet={desktopImg}/>
          <img className={s.pictureImage} src={mobileImg} alt="Element e-commerce sample"/>
        </picture>

        <div className={s.overlay}>
          <h2 className={s.overlay_title}>{title}</h2>
          <p className={s.overlay_description}>{description}</p>

          <ul className={s.links}>
            <li><a href={repo} target="_blank" rel="noopener noreferrer">View repo</a></li>
            <li><a href={live} target="_blank" rel="noopener noreferrer">Live website</a></li>
          </ul>
        </div>

      </div>



  )
}
