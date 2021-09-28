import React from 'react'
import Project from '../../components/Project/Project'
import s from './Projects.module.sass'
//IMAGES
import desktopImg from '../../img/elementProject/element_desktop.png'
import mobileImg from '../../img/elementProject/element_mobile.png'
export default function Projects() {
  return (
    <>
    <h2 className={s.projects_title}>My projects</h2>
    <div className={s.container}>
      <Project 
      title="Element e-commerce" 
      description="Fake e-commerce made with create-react-app."
      desktopImg={desktopImg}
      mobileImg={mobileImg} 
      repo="https://github.com/byga12/react_ecommerce" 
      live="http://react-ecommerce-ten.vercel.app/"
      />
      <Project 
      title="Element e-commerce" 
      description="Fake e-commerce made with create-react-app."
      desktopImg={desktopImg}
      mobileImg={mobileImg} 
      repo="https://github.com/byga12/react_ecommerce" 
      live="http://react-ecommerce-ten.vercel.app/"
      />
      <Project 
      title="Element e-commerce" 
      description="Fake e-commerce made with create-react-app."
      desktopImg={desktopImg}
      mobileImg={mobileImg} 
      repo="https://github.com/byga12/react_ecommerce" 
      live="http://react-ecommerce-ten.vercel.app/"
      />
    </div>
    </>
  )
}
