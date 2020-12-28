import ConfcarAdmin from '../assets/img/confcar-admin.jpg'
import ConfcarAndroid from '../assets/img/confcar-android.jpg'
import Lorem from '../assets/img/lorem.jpg'
import Nurien from '../assets/img/nurien.jpg'
import Sylphid from '../assets/img/sylphiddev.jpg'
import Petgram from '../assets/img/petgram.jpg'
import Sockets from '../assets/img/nodeSockets.jpg'
import CryptoTracker from '../assets/img/cryptoTracker.jpg'
import Avocado from '../assets/img/avocado.jpg'

export const Projects = [
  {
    id: 1,
    name: 'confcar',
    technologies: 'React, Electron, Jest, Node, Express, MySQL',
    URL: 'https://github.com/SylphidZoul/Confcar-AdminClient/blob/master/README.md',
    gitURL: 'https://github.com/SylphidZoul/Confcar-AdminClient',
    screenshot: ConfcarAdmin,
    description: `App para llevar control y registro de los horarios trabajados por
      empleados de una pequeña pyme. Cliente administrador construido con electron para su uso desde desktop.`
  },
  {
    id: 3,
    name: 'lorem',
    technologies: 'React, ContextAPI, Node, Express, MongoDB',
    URL: 'https://lorem-ecommerce-sylphid.vercel.app/',
    gitURL: 'https://github.com/SylphidZoul/LoremEcommerce',
    screenshot: Lorem,
    description: `Lorem es una app anónima de ecommerce que como sistema de pagos 
      integra Mercado Pago.
      El backend está hosteado gratis en Heroku, por lo que puede demorar hasta 5 
      segundos en reactivarse si es la primera visita en horas.`
  },
  {
    id: 3,
    name: 'sylphid',
    technologies: 'React, WebGL, ThreeJS',
    URL: 'https://jcruzcardozo.com',
    gitURL: 'https://github.com/SylphidZoul/Portfolio',
    screenshot: Sylphid,
    description: 'Mi web personal, construida con librerias de 3D e inspirada en el diseño synthwave.'
  },
  {
    id: 4,
    name: 'confcar',
    technologies: 'React Native, Redux, Jest, Node, Express, MySQL',
    URL: 'https://github.com/SylphidZoul/Confcar-AndroidClient/blob/master/readme.md',
    gitURL: 'https://github.com/SylphidZoul/Confcar-AndroidClient',
    screenshot: ConfcarAndroid,
    description: `App para llevar control y registro de los horarios trabajados por
      empleados de una pequeña pyme. Cliente mobile de empleados para marcar sus intervalos y ver
      sus resumenes.`
  },
  {
    id: 5,
    name: 'nurien',
    technologies: 'React, StyledComponents, Cloudinary',
    URL: 'https://www.nurienstudio.com/',
    gitURL: 'https://github.com/SylphidZoul/nurien',
    screenshot: Nurien,
    description: `NurienStudio es el sitio de un fotográfo en el cuál muestra sus 
      trabajos destacados. Utiliza Cloudinary como CDN.`
  }
]

export const CoursesProjects = [
  {
    id: 1,
    name: 'petgram',
    technologies: 'React, StyledComponents, GraphQL',
    URL: 'https://petgram-sylphid.vercel.app/',
    gitURL: 'https://github.com/SylphidZoul/petgram-platzi',
    screenshot: Petgram,
    description: `Proyecto del curso de React avanzado de Platzi. 
      Clon sencillo de instagram pero que enseña conceptos y buenas 
      practicas.`
  },
  {
    id: 2,
    name: 'queue',
    technologies: 'Node, Express, SocketIO',
    URL: 'https://sockets-cola-node.herokuapp.com/',
    gitURL: 'https://github.com/SylphidZoul/Aplicacion-Queue',
    screenshot: Sockets,
    description: `Proyecto de Udemy. Una app de tickets para colas, cuenta
      con una screen para generar tickets, otra para atender los tickets en los distintos
      escritorios y la última para mostrar al público.`
  },
  {
    id: 3,
    name: 'crypto',
    technologies: 'React Native',
    URL: 'https://github.com/SylphidZoul/cryptoTracker',
    gitURL: 'https://github.com/SylphidZoul/cryptoTracker',
    screenshot: CryptoTracker,
    description: `Proyecto del curso de React Native de platzi. Consta de una app
      que consume una API de criptomonedas para mostrar toda la información sobre
      ellas en una sencilla interfaz.`
  },
  {
    id: 4,
    name: 'avocado',
    technologies: 'React, NextJS, TypeScript, ContextAPI',
    URL: 'https://avocadonext.sylphidzoul.vercel.app/',
    gitURL: 'https://github.com/SylphidZoul/NextJS-Fundamentals',
    screenshot: Avocado,
    description: `Proyecto con NextJS. Donde implementamos Server Side Rendering y 
      Static Site Generator, consumiendo datos desde la misma API interna que nos proporciona NextJS.`
  }
]
