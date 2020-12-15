import ConfcarAdmin from '../assets/img/confcar-admin.jpg'
import ConfcarAndroid from '../assets/img/confcar-android.jpg'
import Lorem from '../assets/img/lorem.jpg'
import Nurien from '../assets/img/nurien.jpg'
import Sylphid from '../assets/img/sylphiddev.jpg'

export const Projects = [
  {
    id: 1,
    name: 'confcar',
    technologies: 'React, Electron, Node, Express, MySQL',
    URL: 'https://github.com/SylphidZoul/Confcar-AdminClient/blob/master/README.md',
    gitURL: 'https://github.com/SylphidZoul/Confcar-AdminClient',
    screenshot: ConfcarAdmin,
    description: `App para llevar control y registro de los horarios trabajados por
      empleados de una pequeña pyme. Desde el backend genera diversos reportes de 
      horas trabajadas y dinero a pagar con la posibilidad de elegir entre periodos semanales,
      mensuales o anuales.
      Este es el cliente de administrador, por lo que tiene acceso total a modificar
      la base de datos.
      Construida con electron para su uso desde desktop.`,
  },
  {
    id: 2,
    name: 'confcar',
    technologies: 'React-Native, Redux, Node, Express, MySQL',
    URL: 'https://github.com/SylphidZoul/Confcar-AndroidClient/blob/master/readme.md',
    gitURL: 'https://github.com/SylphidZoul/Confcar-AndroidClient',
    screenshot: ConfcarAndroid,
    description: `Mobile client de empleados de la app de control de horarios. Al estar orientado
      a personas poco cercanas a la tecnología, cuenta con una interfaz muy simple que les
      permite con un mismo botón ir marcando las entradas y salidas del horario laboral de modo
      que el backend es quién lleva el control de qué periodo del día se trata. También les da
      a sus usuarios la posibilidad de ver su resumen semanal y detalles de cada día. Por orden
      de mi cliente, la app sólo marca horarios dentro de la red WiFi de la empresa.`
  },
  {
    id: 3,
    name: 'lorem',
    technologies: 'React, StyledComponents, ContextAPI, Node, Express, MongoDB.',
    URL: 'https://lorem-ecommerce-sylphid.vercel.app/',
    gitURL: 'https://github.com/SylphidZoul/LoremEcommerce',
    screenshot: Lorem,
    description: `Lorem es una app de ecommerce.
      Cuenta con sistema de login propio o mediante redes sociales,
      el cuál da acceso a rutas y acciones privadas.
      También cuenta con buscador que permite ordenar y filtrar.
      Como sistema de pagos integra Mercado Pago desde el backend.
      La temática de productos fue elegida aleatoriamente y su data fue copiada
      de los más vendidos de Google Play Music en género rock.
      Utiliza distintas técnicas de optimización en el frontend
      como code splitting, lazy load con infinite scroll.`
  },
  {
    id: 4,
    name: 'sylphid',
    technologies: 'React, WebGL, ThreeJS, StyledComponents.',
    URL: '#',
    gitURL: '#',
    screenshot: Sylphid,
    description: `Mi página personal, originalmente era un proyecto sólo para experimentar
      con 3D pero qué con las horas invertidas decidí volverlo mi portfolio. Utiliza algoritmos
      que generan aleatoriamente los desniveles, las animaciones dentro del canvas están calculadas
      cuadro por cuadro, por lo que si no se tiene cuidado es muy fácil que el performance empeore.`
  },
  {
    id: 5,
    name: 'nurien',
    technologies: 'React, StyledComponents, Cloudinary.',
    URL: 'https://www.nurienstudio.com/',
    gitURL: 'https://github.com/SylphidZoul/nurien',
    screenshot: Nurien,
    description: `NurienStudio es el sitio de un fotográfo en el cuál muestra sus 
      trabajos destacados. Utiliza Cloudinary como CDN. Al ser de mis primeros proyectos, 
      el responsive necesita reload.` 
  },
]
