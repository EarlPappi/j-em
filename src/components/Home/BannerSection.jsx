import React, { useEffect, useState } from 'react'
import classes from './BannerSection.module.css'
import slide_1 from '../../assets/Home/Banners/slide_1.jpg';
import slide_2 from '../../assets/Home/Banners/slide_2.jpg';
import slide_3 from '../../assets/Home/Banners/slide_3.jpg';
import slide_4 from '../../assets/Home/Banners/slide_4.jpg';
import Logo from '../../assets/logo/JEM_Logo_Blanc.png'
import { Link } from 'react-router-dom';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx'

function BannerSection() {
    const [current, setCurrent] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const imgTray = [slide_1, slide_2, slide_3, slide_4]

    // changeBg.current = setTimeout(() => {
    //     setCurrent(current === imgTray.length - 1 ? 0 : current + 1);
    // }, 3000)


    // auto play 
    useEffect(() => {
        const id = setInterval(() => {
            setCurrent(current === imgTray.length - 1 ? 0 : current + 1);
        }, 3000);
        setIntervalId(id)

        return () => clearInterval(id);
        // eslint-disable-next-line
    }, [current]);


// next slide
    const nextBg = () => {
        setCurrent(current === imgTray.length - 1 ? 0 : current + 1);
    }

    // prev slide
    const prevBg = () => {
        clearInterval(intervalId);
        setCurrent((prevCurrent) =>
    prevCurrent === 0 ? imgTray.length - 1 : prevCurrent - 1)
    }


//     const mouseOver = () => {
//         clearInterval(intervalId)
//     }
// 
//     const mouseLeave = () => {
//         nextBg();
//     }


    // changeBg();


    return (
        <div>
            {/* background change */}
            <div className={classes.bannerSectionCon} style={{
                backgroundImage: `url(${imgTray[current]})`,
                backgroundSize: 'cover'

            }}
       >
                {/* dark overlay */}
                <div  className={classes.bannerInnerCon}>

                    {/* Arrow left */}
                    <div className={classes.iconCon}>
                        <div onClick={prevBg}>
                            <RxCaretLeft color='white' size='4em' />
                        </div>
                    </div>

                    {/* content starts here */}
                    <div className={classes.contentCon}>
                        <div style={{
                            textAlign: 'right'
                        }}>
                            <img src={Logo} width='200px' alt='J-Em Logo' />
                        </div>



                        <div className={classes.contentTexts}>
                            <p>BIENVENUE CHEZ J-EM ÉVÈNEMENTS</p>

                            <h2>VOTRE PROJET, NOTRE RÉALITÉ</h2>

                            <p>VOTRE PROJET, NOTRE RÉALITÉ</p>
                        </div>


                        {/* Banner Nav */}
                        <div className={classes.contentNav}>
                            <nav>
                                <Link to='/'>ACCUEIL</Link>
                                <Link to='/services'>RÉALISATIONS</Link>
                                <Link to='/a-propos'>À PROPOS</Link>
                                <Link to='/blogue'>BLOG</Link>
                                <Link to='/contactez-nous'>CONTACT-NOUS</Link>
                            </nav>

                            <div style={{
                                display: 'flex',
                                gap: '3em',
                                color: 'white'
                            }}>
                                <p>allo@j-em.ca</p>
                                <p>418-670-2259</p>
                            </div>

                        </div>


                    </div>

                    {/* Arrow left */}
                    <div className={classes.iconCon}>
                        <div onClick={nextBg}>
                            <RxCaretRight color='white' size='4em' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BannerSection