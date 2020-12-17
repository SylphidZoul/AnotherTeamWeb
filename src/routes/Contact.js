import React, { useContext } from 'react'
import { Hologram } from '../components/Hologram'
import { MainWrapper, Title } from '../styles/StyledContact'
import { AngleContext } from '../context/AngleContext'
import { ContactForm } from '../components/ContactForm'
import { ContactData } from '../components/ContactData'

const Contact = () => {
  const { cameraAngle } = useContext(AngleContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    console.log(e.target[1].value)
    console.log(e.target[2].value)
    console.log(e.target[3].value)
  }

  return (
    <>
      {cameraAngle === 'right' && (  
        <MainWrapper>
          <Title>Contacto</Title>
          <Hologram colorVariant vertical>
            <ContactForm onSubmit={handleSubmit} />
          </Hologram>
          <div>
            <Hologram colorVariant>
              <ContactData />
            </Hologram>
          </div>
        </MainWrapper>
      )}
    </>
  )
}

export default Contact
