import React, { useState } from 'react'
import classes from './SingleTeam.module.css'
import { SunIcon } from '../../assets/Apropos/Icons';

function SingleTeam({ singleTeam }) {
  const [current, setCurrent] = useState(0);
  
  return (
    <div>

      <div className={classes.singleTeamMainCon}>
        <div className={ classes.singleImgCon }>
          <div style={{
            position: 'absolute',
            right: '8em',
            top: '8em'
          }}>
            <SunIcon/>
          </div>
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