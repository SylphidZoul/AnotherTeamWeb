import React from 'react'
import GitHub from '../../assets/img/github.png'
import Email from '../../assets/img/email.png'
import Phone from '../../assets/img/phone.png'
import Linkedin from '../../assets/img/linkedin.png'
import { DataWrapper, Icon, H3, Li, Anchor } from './styles'

export const ContactData = () => {
  return (
    <DataWrapper>
      <H3>
        Datos de contacto
      </H3>
      <ul>
        <Li>
          <Icon src={Email} alt='email' />
          <Anchor
            href='mailto:JCruzCardozo.Dev@gmail.com'
          >
            JCruzCardozo.Dev@gmail.com
          </Anchor>
        </Li>
        <Li>
          <Icon src={Phone} alt='phone' />
          <Anchor
            href='#'
          >
            +54 9 11 6432-9781
          </Anchor>
        </Li>
        <Li>
          <Icon src={Linkedin} alt='LinkedIn' />
          <Anchor
            href='https://www.linkedin.com/in/juancruzcardozo92/'
            target='_blank'
          >
            JuanCruzCardozo92
          </Anchor>
        </Li>
        <Li>
          <Icon src={GitHub} alt='GitHub' />
          <Anchor
            href='https://github.com/SylphidZoul'
            target='_blank'
          >
            SylphidZoul
          </Anchor> 
        </Li>
      </ul>
    </DataWrapper>
  )
}
