import React from 'react'
import s from './Footer.module.sass'

import websiteIcon from '../../img/websiteIcon.svg'
import linkedinIcon from '../../img/linkedinIcon.svg'
import githubIcon from '../../img/githubIcon.svg'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div><img src={websiteIcon} className={s.icon} alt="Website icon" /></div>
      <div><img src={linkedinIcon} className={s.icon} alt="LinkedIn icon" /></div>
      <div><img src={githubIcon} className={s.icon} alt="GitHub icon" /></div>
    </footer>
  )
}
