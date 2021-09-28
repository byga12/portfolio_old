import React from 'react'
import Project from '../../components/Project/Project'
import s from './Projects.module.sass'
//IMAGES
import desktopElementImg from '../../img/elementProject/element_desktop.png'
import mobileElementImg from '../../img/elementProject/element_mobile.png'
import desktopCrlImg from '../../img/CrlProject/crl_desktop.png'
import mobileCrlImg from '../../img/CrlProject/crl_mobile.png'
import desktopPortfolioImg from '../../img/portfolioProject/portfolio_desktop.png'
import mobilePortfolioImg from '../../img/portfolioProject/portfolio_mobile.png'

export default function Projects() {
  return (
    <div>
    <h2 className={s.projects_title}>My projects</h2>
    <div className={s.container}>
      <Project 
      title="Element e-commerce" 
      description="Fake e-commerce made with create-react-app."
      desktopImg={desktopElementImg}
      mobileImg={mobileElementImg} 
      repo="https://github.com/byga12/react_ecommerce" 
      live="http://react-ecommerce-ten.vercel.app/"
      />
      <Project 
      title="CRL Final Challenge" 
      description="Final Challenge from Kevin Powell's Conquering Responsive Layouts course."
      desktopImg={desktopCrlImg}
      mobileImg={mobileCrlImg} 
      repo="https://github.com/byga12/CRL-FinalChallenge" 
      live="https://byga12.github.io/CRL-FinalChallenge/"
      />
      <Project 
      title="Portfolio" 
      description="This website was built using create-react-app and Sass."
      desktopImg={desktopPortfolioImg}
      mobileImg={mobilePortfolioImg} 
      repo="https://github.com/byga12/portfolio" 
      live="https://portfolio-byga12.vercel.app/"
      />
    </div>
    </div>
  )
}
