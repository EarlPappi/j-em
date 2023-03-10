import React from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './NosSection.module.css';
import cloud from '../../assets/Home/NosSection/cloud.png';
import handshake from '../../assets/Home/NosSection/handshake.png'
import pc from '../../assets/Home/NosSection/pc.png'
import { realisations } from './realisations';
import BtnPrimary from '../../components/TinyComp/BtnPrimary'

function NosSection() {


    return (
        <div className={classes.nosMainCon}>
            <Wrapper>
                <InnerWrapper>
                    <div className={classes.titleCon}>
                        <h1>NOS RÉALISATIONS</h1>

                        <div>
                            <img src={cloud} alt="" width='75%' />
                        </div>
                    </div>

                    <div className={classes.realisationCon}>
                        {realisations.map((realise) => {
                            return (
                                <div>
                                    <div className={classes.imgCon}>
                                        <img src={realise.main_img} alt={realise.title} width='100%'
                                            onMouseOver={(e) => {
                                                e.currentTarget.src = `${realise.hover_img}`
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.src = `${realise.main_img}`
                                            }}
                                        />
                                    </div>

                                    <h2>{realise.title}</h2>

                                    <p className={classes.hashtag}>
                                        {realise.hashtag.map((tags) => {
                                            return <span>#{tags}</span>
                                        })}
                                    </p>
                                </div>
                            )
                        })}

                    </div>
                    <div className={classes.handCon}>
                        <BtnPrimary To={'/'}>Voir Plus De Nos Realisation</BtnPrimary>

                        <div>
                            <img src={handshake} alt="" width='100%'/>
                        </div>
                    </div>

                </InnerWrapper>

            </Wrapper>


            <div className={ classes.pcCon }>
                <img src={pc} alt="" width=""/>
            </div>


        </div>
    )
}

export default NosSection