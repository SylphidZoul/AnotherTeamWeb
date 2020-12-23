import { MainWrapper, Title, HomeLink, BackCross } from './styles'

export const SectionLayout = ({ title, children, portfolio = false }) => {
  return (
    <MainWrapper portfolioVariant={portfolio}>
      <HomeLink to='/'>
        <BackCross>x</BackCross>
      </HomeLink>
      <Title>
        {title}
      </Title>
      {children}
    </MainWrapper>
  )
}
