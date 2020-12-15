import React, { useContext } from 'react'
import { MainWrapper, Title, Subtitle } from '../styles/StyledSection'
import { AngleContext } from '../context/AngleContext'
import { Projects } from '../data/PortfolioData'
import PortfolioItem from '../components/PortfolioItem'

const Portfolio = () => {
  const { cameraAngle } = useContext(AngleContext)

  return (
    <>
      {
        cameraAngle === 'left' && (
          <MainWrapper>
            <Title>My Portfolio</Title>
            <Subtitle>Proyectos propios</Subtitle>
            { Projects.map(project => (
              <PortfolioItem
                key={project.id + project.name}
                {... project}
              />
            ))}
            <Subtitle>Proyectos favoritos de cursos</Subtitle>
            { Projects.map(project => (
              <PortfolioItem
                colorVariant
                key={project.id + project.name}
                {... project}
              />
            ))}
          </MainWrapper>
        )
      }
    </>
  )
}

export default Portfolio