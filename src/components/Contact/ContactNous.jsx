import React from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './ContactNous.module.css'
import crayon from '../../assets/Contact/JEM_Picto_Crayon_Mauve.png'
import ContactForm from './ContactForm'

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

                        <div className={classes.formCon}>
                            <div className={ classes.sideCon }>
                                <div>
                                    <h3>BUREAU DE QUÉBEC</h3>
                                    <p>C.P. 93 succursale Haute-Ville <br /> Québec, QC <br /> G1R 4M8</p>
                                </div>
                                <div>
                                    <h3>BUREAU DE BOUCHERVILLE</h3>
                                    <p>Boucherville, <br /> QC J4B 8L5</p>
                                </div>

                            </div>

                            <div className={ classes.formHold }>
                                <ContactForm />
                            </div>

                        </div>
                    </InnerWrapper>
                </InnerWrapper>
            </Wrapper>
        </div>
    )
}

export default ContactNous