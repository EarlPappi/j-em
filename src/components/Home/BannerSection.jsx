import React, { useRef, useState } from 'react'
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
    const imgTray = [slide_1, slide_2, slide_3, slide_4]




    const changeBg = useRef();

    changeBg.current = setTimeout(() => {
        setCurrent(current === imgTray.length - 1 ? 0 : current + 1);
    }, 3000)



    const nextBg = () => {
        setCurrent(current === imgTray.length - 1 ? 0 : current + 1);
        clearTimeout(changeBg.current)

        console.log("Clicked Next");
    }

    const prevBg = () => {
        setCurrent(current === 0 ? imgTray.length - 1 : current - 1);
        clearTimeout(changeBg.current)

        console.log("Clicked Prev");
    }


    // changeBg();


    return (
        <div>
            {/* background change */}
            <div className={classes.bannerSectionCon} style={{
                backgroundImage: `url(${imgTray[current]})`,
                backgroundSize: 'cover'

            }}>
                {/* dark overlay */}
                <div className={classes.bannerInnerCon}>

                    {/* Arrow left */}
                    <div className={classes.iconCon}>
                        <div onClick={prevBg}>
                            <RxCaretLeft color='white' size='4em' />
                        </div>
                    </div>

                    {/* content starts here */}
                    <div className={classes.contentCon}>
                        <div>
                            <img src={Logo} width='200px' />
                        </div>

                        <div>
                            <p>BIENVENUE CHEZ J-EM ÉVÈNEMENTS</p>

                            <h2>VOTRE PROJET, NOTRE RÉALITÉ</h2>

                            <p>VOTRE PROJET, NOTRE RÉALITÉ</p>
                        </div>


                        {/* Banner Nav */}
                        <div>
                            <nav>
                                <Link to='/'>ACCUEIL</Link>
                                <Link to='/'>RÉALISATIONS</Link>
                                <Link to='/'>À PROPOS</Link>
                                <Link to='/'>BLOG</Link>
                                <Link to='/'>CONTACT-NOUS</Link>
                            </nav>

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