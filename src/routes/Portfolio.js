import { Subtitle } from '../components/Layout/styles'
import { SectionLayout } from '../components/Layout'
import { Projects, CoursesProjects } from '../data/PortfolioData'
import PortfolioItem from '../components/PortfolioItem'

const Portfolio = () => {
  return (
    <SectionLayout title='Proyectos' portfolio>
      <Subtitle>Proyectos propios</Subtitle>
      {Projects.map(project => (
        <PortfolioItem
          key={project.id + project.name}
          {... project}
        />
      ))}
      <Subtitle>Proyectos favoritos de cursos</Subtitle>
      {CoursesProjects.map(project => (
        <PortfolioItem
          colorVariant
          key={project.id + project.name}
          {... project}
        />
      ))}
    </SectionLayout>
  )
}

export default Portfolio
