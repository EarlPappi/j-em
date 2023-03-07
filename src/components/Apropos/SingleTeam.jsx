import React from 'react'
import classes from './SingleTeam.module.css'

function SingleTeam({ singleTeam }) {
  return (
    <div>

      <div className={classes.singleTeamMainCon}>
        <div className={ classes.singleImgCon }>
            <img src={singleTeam.imgTray[0]} alt="" width='100%'/>
        </div>

        <div className={ classes.singleTextCon }>
          <h2>{singleTeam.name}</h2>
          <span>{singleTeam.tag}</span>

          <div className={ classes.singleTextConBody }>{ singleTeam.body }</div>

          <div className={ classes.socialBox }>
            <p>{singleTeam.socials[0].email}</p>
            <p>{singleTeam.socials[0].tel}</p>
            <a href={singleTeam.socials[0].linkedin}>Linkedin</a>
          </div>
        </div>

      </div>


    </div>
  )
}

export default SingleTeam