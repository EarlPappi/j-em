import React from 'react'
import InnerWrapper from '../wrapper/InnerWrapper'
import Wrapper from '../wrapper/Wrapper'
import classes from './NosSection.module.css';
import cloud from '../../assets/Home/NosSection/cloud.png';
import handshake from '../../assets/Home/NosSection/handshake.png';
import param1 from '../../assets/Home/NosSection/Realisations/Parapapam_1.jpg';
import param2 from '../../assets/Home/NosSection/Realisations/Parapapam_2.jpg';
import gala1 from '../../assets/Home/NosSection/Realisations/66e_Gala_SCCPQ_1.jpg';
import gala2 from '../../assets/Home/NosSection/Realisations/66e_Gala_SCCPQ_2.jpg';
import asperos1 from '../../assets/Home/NosSection/Realisations/Aperos_vins_Bordeaux_1.jpg';
import asperos2 from '../../assets/Home/NosSection/Realisations/Aperos_vins_Bordeaux_2.jpg';
import atelier1 from '../../assets/Home/NosSection/Realisations/Atelier_kimchi_1.jpg';
import atelier2 from '../../assets/Home/NosSection/Realisations/Atelier_kimchi_2.jpg';

function NosSection() {
    const realisations = [
        {
            title: 'PARAPAPAM la fête hivernale de Beauport',
            category: 'Production',
            hashtag: [
                'grand public'
            ],
            main_img: param1,
            hover_img: param2
        },
        {
            title: '66e gala de la relève – SCCPQ',
            category: 'Production',
            hashtag: [
                'corporatif'
            ],
            main_img: gala1,
            hover_img: gala2
        },
        {
            title: 'Les Apéros des vins de Bordeaux',
            category: 'Réalisation',
            hashtag: [
                'grand public'
            ],
            main_img: asperos1,
            hover_img: asperos2
        },
        {
            title: 'Atelier de kimchi',
            category: 'Réalisation',
            hashtag: [
                'grand public'
            ],
            main_img: atelier1,
            hover_img: atelier2
        },
        {
            title: 'PARAPAPAM la fête hivernale de Beauport',
            category: 'Production',
            hashtag: [
                'grand public'
            ],
            main_img: param1,
            hover_img: param2
        },
        {
            title: 'PARAPAPAM la fête hivernale de Beauport',
            category: 'Production',
            hashtag: [
                'grand public'
            ],
            main_img: param1,
            hover_img: param2
        },
        {
            title: 'PARAPAPAM la fête hivernale de Beauport',
            category: 'Production',
            hashtag: [
                'grand public'
            ],
            main_img: param1,
            hover_img: param2
        },
    ]


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
                                    <div className={ classes.imgCon }>
                                        <img src={ realise.main_img } alt={ realise.title } width='100%'
                                        onMouseOver={(e)=>{
                                            e.currentTarget.src = `${realise.hover_img}`
                                        }} 
                                        onMouseLeave={(e)=>{
                                            e.currentTarget.src = `${realise.main_img}`
                                        }} 
                                        />
                                    </div>

                                    <h2>{ realise.title }</h2>

                                    <p className={ classes.hashtag }>
                                       { realise.hashtag.map((tags)=>{
                                        return <span>#{ tags }</span>
                                       }) }
                                    </p>
                                </div>
                            )
                        })}

                    </div>
                </InnerWrapper>
            </Wrapper>
        </div>
    )
}

export default NosSection