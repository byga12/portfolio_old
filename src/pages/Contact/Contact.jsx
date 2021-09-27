import s from './Contact.module.sass'

import React from 'react'

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>

      <article className={s.socialMedia}>
        <h2 className={s.socialMedia_title}>Find me on...</h2>
        <ul className={s.socialMedia_list}>
          <li className={s.socialMedia_item}>Linkedin: https://www.linkedin.com/in/gabriel-shimabuku</li>
          <li className={s.socialMedia_item}>GitHub: https://github.com/byga12/</li>
        </ul>
      </article>

      <article className={s.formBckg}>
        <form onSubmit={handleSubmit} className={s.form}>

          <h2 className={s.form_title}>Or send me an email</h2>

          <div className={s.fieldContainer}>
            <label className={s.emailLabel}>Email</label>
            <input className={s.emailInput} type="text" name="" id="" />
          </div>

          <div className={s.fieldContainer}>
            <label className={s.messageLabel}>Message</label>
            <textarea className={s.messageInput} resize="none"></textarea>
          </div>

          <div className={s.fieldContainer}>
            <button type='submit' className={s.sendButton}>Send</button>
          </div>

        </form>
      </article>
    </div>
  )
}
