import { MainWrapper, IconsWrapper, IconsTitle, IconDiv, IconName } from './styles'

export const IconsContainer = ({ name, iconsData }) => {
  return (
    <MainWrapper>
      <IconsTitle>{name}</IconsTitle>
      <IconsWrapper>
        {
          iconsData.map(element => (
            <IconDiv key={element.id}>
              {element.icon({ size: element.size, color: '#f6f5f7' })}
              <IconName>{element.name}</IconName>
            </IconDiv>
          ))
        }
      </IconsWrapper>
    </MainWrapper>
  )
}
