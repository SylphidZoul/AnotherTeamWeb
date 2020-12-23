import { useState } from 'react'
import { StyledNav, ListUL, ListLi, MenuLinks } from './styles'
import { Burger } from '../Burger'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleMenu = () => {
    setShowMenu(prev => !prev)
  }

  const handleScroll = () => {
    window.scrollTo(0, 0)
  }

  return (
    <StyledNav>
      <Burger onClick={handleMenu} open={showMenu} />
      <ListUL active={showMenu}>
        <ListLi onClick={handleMenu}>
          <MenuLinks
            to='/portfolio'
            onClick={handleScroll}
          >
            Portfolio
          </MenuLinks>
        </ListLi>
        <ListLi onClick={handleMenu}>
          <MenuLinks
            to='/about'
            onClick={handleScroll}
          >
            About Me
          </MenuLinks>
        </ListLi>
        <ListLi onClick={handleMenu}>
          <MenuLinks
            to='/contact'
            onClick={handleScroll}
          >
            Contact
          </MenuLinks>
        </ListLi>
      </ListUL>
    </StyledNav>
  )
}

export default Navbar
