import React from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './ContactNous.module.css'
import crayon from '../../assets/Contact/JEM_Picto_Crayon_Mauve.png'

function ContactNous() {
    return (
        <div className={classes.contactMainCon}>
            <Wrapper>
                <InnerWrapper>
                    <InnerWrapper>
                        <div className={classes.contHead}>
                            <div>
                                <p>PARLEZ-NOUS DE VOTRE PROJET !</p>
                                <h2>CONTACTEZ-NOUS</h2>
                            </div>

                            <div>
                                <img src={crayon} alt="" />
                            </div>
                        </div>

                        <div className={ classes.formCon }>
                            <div>
                                
                            </div>

                        </div>
                    </InnerWrapper>
                </InnerWrapper>
            </Wrapper>
        </div>
    )
}

export default ContactNous