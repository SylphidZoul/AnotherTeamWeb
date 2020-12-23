import { Hologram } from '../components/Hologram'
import { SectionLayout } from '../components/Layout'
import { ContactForm } from '../components/ContactForm'
import { ContactData } from '../components/ContactData'

const Contact = () => {
  return (
    <SectionLayout title='Contacto'>
      <Hologram colorVariant vertical>
        <ContactForm />
      </Hologram>
      <div>
        <Hologram colorVariant>
          <ContactData />
        </Hologram>
      </div>
    </SectionLayout>
  )
}

export default Contact
