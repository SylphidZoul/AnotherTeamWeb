import React, { useState, useEffect } from 'react'
import { ContactFormComponent } from './component'
import * as emailjs from 'emailjs-com'
import { ContactToast } from '../ContactToast/index'

export const ContactForm = () => {
  const [showMessage, setShowMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    let templateParams = {
      from_name: `${e.target[0].value} ${e.target[1].value}`,
      subject: e.target[2].value,
      message: e.target[3].value,
    }

    emailjs.send(
      'service_jo5xevl',
      'template_trcwj18',
       templateParams,
      'user_g258croUc6eeFjoHCKfJV'
    )

    e.target[0].value = ''
    e.target[1].value = ''
    e.target[2].value = ''
    e.target[3].value = ''

    setShowMessage(true)
  }

  useEffect(() => {
    if(showMessage) {
      setTimeout(() => {
        setShowMessage(false)
      }, 5000)
    }
  }, [showMessage])

  return (
    <>
      <ContactFormComponent onSubmit={handleSubmit} />
      { showMessage && <ContactToast /> }
    </>
  )
}

