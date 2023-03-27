import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/JEM_Logo_Typo_Noir.png'
import Wrapper from '../wrapper/Wrapper'
import classes from './Header.module.css'

function Header() {
  return (
    <Wrapper>
      <div className={classes.headerCon}>
        
        <img src={Logo} alt="J-em logo" width='64px' />

        <nav>
          <Link to='/'>ACCUEIL</Link>
          <Link to='/realisation'>RÉALISATIONS</Link>
          <Link to='/a-propos'>À PROPOS</Link>
          <Link to='/blogue'>BLOG</Link>
          <Link to='/contactez-nous'>CONTACT-NOUS</Link>
        </nav>
      </div>

    </Wrapper>
  )
}

export default Header