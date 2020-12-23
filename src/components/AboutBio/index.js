import React from 'react'
import { Hologram } from '../Hologram'
import { BioWrapper, Title, P, Strong, Download } from './styles'
import CV from '../../assets/downloads/CV.pdf'

export const AboutBio = () => {
  return (
    <Hologram vertical>
      <BioWrapper>
        <Title>
          Sobre mi
        </Title>
        <P>
          Me llamo <Strong>Juan Cruz Cardozo</Strong>. Tengo una sólida formación secundaria <Strong>técnica en informática</Strong> y actualmente estudio <Strong>Licenciatura en Sistemas</Strong>. Desde muy temprana edad tengo acceso a internet, lo cual me desarrollo una fuerte habilidad de<Strong> autoaprendizaje</Strong>.
        </P>
        <P>
          Me especializo en <Strong>Javascript</Strong> con <Strong>React</Strong> para frontend, y <Strong>Node</Strong> para backend.
        </P>
        <P>
          <Download href={CV} download='cv.pdf'>{'< '}Mas detalles{' >'}</Download>
        </P>
      </BioWrapper>
    </Hologram>
  )
}
