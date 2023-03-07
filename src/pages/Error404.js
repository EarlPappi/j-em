import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import classes from '../components/Error404/Error404.module.css'
import { Link } from 'react-router-dom';

function Error404() {
  return (
    <div className={ classes.errorMainCon }>
      <div className={ classes.lotCon }>
        <Player src='https://assets3.lottiefiles.com/packages/lf20_u1xuufn3.json' loop autoplay/>
      </div>

      <div>
        <Link to='/'>Go Home</Link>
      </div>
    </div>
  )
}

export default Error404