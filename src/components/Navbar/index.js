import React, { useState } from 'react'
import { StyledNav, ListUL, ListLi, MenuLinks } from './styles'
import { Burger } from '../Burger'

const Navbar = () => {
  const [ showMenu, setShowMenu ] = useState(false)

  const handleMenu = () => {
    setShowMenu(prev => !prev)
  }

  return (
    <StyledNav>
      <Burger onClick={handleMenu} open={showMenu} />
      <ListUL active={showMenu}>
        <ListLi onClick={handleMenu}>
          <MenuLinks
            to='/portfolio'
          >
            Portfolio
          </MenuLinks>
        </ListLi>
        <ListLi onClick={handleMenu}>
          <MenuLinks
            to='/about'
          >
            About Me
          </MenuLinks>
        </ListLi>
        <ListLi onClick={handleMenu}>
          <MenuLinks
            to='/contact'
          >
            Contact
          </MenuLinks>
        </ListLi>
      </ListUL>
    </StyledNav>
  )
}

export default Navbar
