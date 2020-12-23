import { Image } from '../components/Layout/styles'
import { Hologram } from '../components/Hologram'
import { AboutBio } from '../components/AboutBio'
import { IconsContainer } from '../components/IconsContainer'
import { SectionLayout } from '../components/Layout'
import { TechStack, Enviroment } from '../data/StackData'
import Profile from '../assets/img/profile.jpg'

const About = () => {
  return (
    <SectionLayout title='Sylphid'>
      <AboutBio />
      <div>
        <Hologram vertical>
          <Image src={Profile} alt='Juan Cruz' />
        </Hologram>
      </div>
      <Hologram>
        <IconsContainer name='Tecnologias' iconsData={TechStack} />
      </Hologram>
      <div>
        <Hologram>
          <IconsContainer name='Entorno' iconsData={Enviroment} />
        </Hologram>
      </div>
    </SectionLayout>

  )
}

export default About
