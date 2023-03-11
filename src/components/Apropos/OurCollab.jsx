import React from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './OurCollab.module.css'
import SingleCollab from './SingleCollab'

function OurCollab() {
    return (

        <div className={classes.collabCon}>
            <Wrapper>
                <InnerWrapper>
                    <h1 className={classes.titleHead}>NOS COLLABORATEURS</h1>
                    <p>
                    Pour compléter notre trio, nous faisons appel à des collaborateurs créatifs, passionnés et reconnus dans leur domaine. Rien de moins!
                    </p>

                    <div>
                        <SingleCollab/>
                    </div>
                </InnerWrapper>
            </Wrapper>
        </div>
    )
}

export default OurCollab