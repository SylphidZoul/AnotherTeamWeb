import React, { useContext, useState } from 'react'
import { StyledNav, ListUL, ListLi, MenuLinks } from './styles'
import { AngleContext } from '../../context/AngleContext'
import { Burger } from '../Burger'

const Navbar = () => {
  const [ showMenu, setShowMenu ] = useState(false)
  const { handleCameraAngle } = useContext(AngleContext)

  const handleMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <StyledNav>
      <Burger onClick={handleMenu} open={showMenu} />
      <ListUL active={showMenu}>
        <ListLi onClick={handleMenu}>
          <MenuLinks
            onClick={() => handleCameraAngle('left')}
          >
            Portfolio
          </MenuLinks>
        </ListLi>
        <ListLi onClick={handleMenu}>
          <MenuLinks
            onClick={() => handleCameraAngle('center')}
          >
            About Me
          </MenuLinks>
        </ListLi>
        <ListLi onClick={handleMenu}>
          <MenuLinks
            onClick={() => handleCameraAngle('right')}
          >
            Contact
          </MenuLinks>
        </ListLi>
      </ListUL>
    </StyledNav>
  )
}

export default Navbar
