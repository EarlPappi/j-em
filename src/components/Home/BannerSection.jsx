import React, { useState } from 'react'
import classes from './BannerSection.module.css'
import slide_1 from '../../assets/Home/Banners/slide_1.jpg';
import slide_2 from '../../assets/Home/Banners/slide_2.jpg';
import slide_3 from '../../assets/Home/Banners/slide_3.jpg';
import slide_4 from '../../assets/Home/Banners/slide_4.jpg';

function BannerSection() {
    const [current, setCurrent] = useState(0);
    const imgTray = [slide_1, slide_2, slide_3, slide_4]

    const runTime = () => {

        setTimeout(() => {
            current < imgTray.length - 1 ? setCurrent(current + 1) : setCurrent(0);
            console.log("Current: ", current)
        }, 3000)
    }

    runTime();


    return (
        <div>
            <div className={classes.bannerSectionCon} style={{
                backgroundImage: `url(${imgTray[current]})`,
                backgroundSize: 'cover'

            }}>
                <div className={classes.bannerInnerCon}>

                </div>

            </div>
        </div>
    )
}

export default BannerSection