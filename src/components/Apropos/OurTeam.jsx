import React from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './OurTeam.module.css';

function OurTeam() {
  return (
    <div className={ classes.mainCon }>
        <Wrapper>
            <InnerWrapper>
                <div className={ classes.innerCon }>
                    Our team
                </div>
            </InnerWrapper>
        </Wrapper>
    </div>
  )
}

export default OurTeam