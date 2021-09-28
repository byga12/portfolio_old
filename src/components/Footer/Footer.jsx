import React from 'react'
import s from './Footer.module.sass'

import websiteIcon from '../../img/websiteIcon.svg'
import linkedinIcon from '../../img/linkedinIcon.svg'
import githubIcon from '../../img/githubIcon.svg'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div><a href="./"><img src={websiteIcon} className={s.icon} alt="Website icon" /></a></div>
      <div><a href="https://www.linkedin.com/in/gabriel-shimabuku/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} className={s.icon} alt="LinkedIn icon" /></a></div>
      <div><a href="https://github.com/byga12/" target="_blank" rel="noopener noreferrer"><img src={githubIcon} className={s.icon} alt="GitHub icon" /></a></div>
    </footer>
  )
}
