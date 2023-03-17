import React from 'react'
import classes from './SingleCollab.module.css'

function SingleCollab({collab}) {
  return (
    <div className={ classes.collabCOn }>
      <div>
        <img src={ collab.img } alt="" width='100%'/>
      </div>

      <p>{ collab.title }</p>
    </div>
  )
}

export default SingleCollab