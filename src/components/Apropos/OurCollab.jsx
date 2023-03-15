import React from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './OurCollab.module.css'
import SingleCollab from './SingleCollab'
import { CollabData } from '../../assets/Apropos/Collab/CollabData'

function OurCollab() {
   

    return (

        <div className={classes.collabCon}>
            <Wrapper>
                <InnerWrapper>
                    <h1 className={classes.titleHead}>NOS COLLABORATEURS</h1>
                    <p>
                    Pour compléter notre trio, nous faisons appel à des collaborateurs créatifs, passionnés et reconnus dans leur domaine. Rien de moins!
                    </p>

                    <div className={ classes.singleCollabCon }>
                        { CollabData.map((collab)=>{
                            return <SingleCollab collab={collab}/>
                        }) }
                    </div>
                </InnerWrapper>
            </Wrapper>
        </div>
    )
}

export default OurCollab