import { Item, InfoWrapper, InfoHologram, StyledScreenshot, InfoContent, P, Strong, Hr, Icon } from './styles'
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
            <P>
              Tecnologías principales:<br />
              <Strong colorVariant={colorVariant}>{technologies}</Strong>
            </P>
            <P>{description}</P>
            <Hr />
            <a href={gitURL} target='_blank' rel='noopener noreferrer'>
              <Icon src={GitHub} alt='Github' colorVariant={colorVariant} />
            </a>
            <a href={URL} target='_blank' rel='noopener noreferrer'>
              <Icon src={DirectLink} alt={name} colorVariant={colorVariant} />
            </a>
          </InfoContent>
        </InfoHologram>
      </InfoWrapper>
    </Item>
  )
}

export default PortfolioItem
