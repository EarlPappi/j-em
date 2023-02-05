import React from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './NosSection.module.css'

function NosSection() {
    return (
        <div className={classes.nosMainCon}>
            <Wrapper>
                <InnerWrapper>
                    NosSection
                </InnerWrapper>
            </Wrapper>
        </div>
    )
}

export default NosSection