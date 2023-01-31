import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../wrapper/Wrapper'
import classes from './Footer.module.css'

function Footer() {
  return (
    <div className={classes.footerMainCon}>
      {/* blueBg container */}
      <div className={classes.blueBgCon}>
        <Wrapper>

          <Wrapper>
            <Wrapper>

              <div className={ classes.blueInnerDiv }>

                <h2>PASSER À L’ACTION</h2>

                <div>
                  <Link to='/'>NOUS CONTACTER &#8594;</Link>

                  <p>allo@j-em.ca</p>
                  <p>418-670-2259</p>
                </div>
              </div>
            </Wrapper>
          </Wrapper>


          <div className={ classes.footerTagline }>
            <p>©2023 - J-EM Événements</p>
            <p>Conception web par Mikael Design</p>
          </div>

        </Wrapper>

      </div>

      {/* blackBg container */}
      <div className={classes.blackBgCon}>
        <nav>
          <Link to='/'>ACCUEIL</Link>
          <Link to='/'>RÉALISATIONS</Link>
          <Link to='/'>À PROPOS</Link>
          <Link to='/'>BLOG</Link>
          <Link to='/'>CONTACT-NOUS</Link>
        </nav>
      </div>
    </div>


  )
}

export default Footer