import React from 'react'
import { ToastWrapper, Message } from './styles'
import { Hologram } from '../Hologram/'

export const ContactToast = () => {
  return (
    <ToastWrapper>
      <Hologram>
        <Message>
          Mensaje Enviado
        </Message>
      </Hologram>
    </ToastWrapper>
  )
}
