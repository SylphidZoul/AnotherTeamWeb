import { ToastWrapper, Message } from './styles'
import { Hologram } from '../Hologram/'

export const ContactToast = () => {
  return (
    <ToastWrapper>
      <Hologram colorVariant>
        <Message>
          Mensaje Enviado
        </Message>
      </Hologram>
    </ToastWrapper>
  )
}
