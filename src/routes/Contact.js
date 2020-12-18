import React from 'react'
import { Hologram } from '../components/Hologram'
import { MainWrapper, Title } from '../styles/StyledContact'
import { ContactForm } from '../components/ContactForm'
import { ContactData } from '../components/ContactData'

const Contact = () => {
  return (
    <>
      <MainWrapper>
        <Title>Contacto</Title>
        <Hologram colorVariant vertical>
          <ContactForm />
        </Hologram>
        <div>
          <Hologram colorVariant>
            <ContactData />
          </Hologram>
        </div>
      </MainWrapper>
    </>
  )
}

export default Contact
