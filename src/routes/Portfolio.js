import React, { useContext } from 'react'
import { MainWrapper, Title, Subtitle } from '../styles/StyledPortfolio'
import { AngleContext } from '../context/AngleContext'
import { Projects, CoursesProjects } from '../data/PortfolioData'
import PortfolioItem from '../components/PortfolioItem'

const Portfolio = () => {
  return (
    <>
      <MainWrapper>
        <Title>Proyectos</Title>
        <Subtitle>Proyectos propios</Subtitle>
        { Projects.map(project => (
          <PortfolioItem
            key={project.id + project.name}
            {... project}
          />
        ))}
        <Subtitle>Proyectos favoritos de cursos</Subtitle>
        { CoursesProjects.map(project => (
          <PortfolioItem
            colorVariant
            key={project.id + project.name}
            {... project}
          />
        ))}
      </MainWrapper>
    </>
  )
}

export default Portfolio