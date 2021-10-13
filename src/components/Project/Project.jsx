import React,{useRef} from 'react'
import s from './Project.module.sass'

//CUSTOM HOOKS
import useTransitionOnScroll from '../../hooks/useTransitionOnScroll';



export default function Project({title,description,desktopImg,mobileImg,repo,live}) {
  const refs = useRef([]);

  
  useTransitionOnScroll(refs.current, s.fadeIn);



  return (


      <div className={s.picture_container} ref={ref=>refs.current.push(ref)}>
        
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
