import React from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './OurTeam.module.css';
import { TeamData } from '../../assets/Apropos/TeamData';
import SingleTeam from './SingleTeam';

function OurTeam() {


    return (
        <>

            <div className={classes.mainCon}>
                <Wrapper>
                    <InnerWrapper>
                        <div className={classes.innerCon}>
                            <h1 className={classes.titleHead}>VOS PROFESSIONNELS</h1>
                        </div>
                        <div style={{ marginTop: '2em' }}>
                            {TeamData.map((singleTeam) => {
                                return (

                                    <SingleTeam singleTeam={singleTeam} />

                                )
                            })}
                        </div>


                    </InnerWrapper>
                </Wrapper>
            </div>

            
        </>
    )
}

export default OurTeam