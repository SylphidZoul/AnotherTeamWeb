import React from 'react'
import { Item, InfoWrapper, InfoHologram, StyledScreenshot, InfoContent, Icon } from './styles'
import GitHub from '../../assets/img/github.png'
import DirectLink from '../../assets/img/link.png'
import { Hologram } from '../Hologram'

const PortfolioItem = ({
  name, screenshot, URL, colorVariant,
  description, technologies, gitURL
}) => {
  return (
    <Item>
      <Hologram colorVariant={colorVariant} name={name}>
        <a href={URL} target='_blank' rel='noopener noreferrer'>
          <StyledScreenshot src={screenshot} alt={name} colorVariant={colorVariant} />
        </a>
      </Hologram>
      <InfoWrapper colorVariant={colorVariant}>
        <InfoHologram colorVariant={colorVariant}>
          <InfoContent colorVariant={colorVariant}>
            <p>{description}</p>
            <br />
            <p><strong>Tecnologías principales:</strong> {technologies}</p>
            <br />
            <a href={gitURL} target='_blank' rel='noopener noreferrer'>
              <Icon src={GitHub} alt='Github' />
            </a>
            <a href={URL} target='_blank' rel='noopener noreferrer'>
              <Icon src={DirectLink} alt={name} />
            </a>
          </InfoContent>
        </InfoHologram>
      </InfoWrapper>
    </Item>
  )}

export default PortfolioItem
