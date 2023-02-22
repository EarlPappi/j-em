import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import image1 from "../../assets/Home/Banners/slide_1.jpg"
import image2 from "../../assets/Home/Banners/slide_2.jpg"
import image3 from "../../assets/Home/Banners/slide_3.jpg"
import image4 from "../../assets/Home/Banners/slide_4.jpg"

function BannerAlt() {
    const [counter, setCounter] = useState(0)


    const imageContainer = [image1, image2, image3, image4]
    const increment = () => {
        //    counter == 3 ? setCounter(0) : setCounter(counter++)
        console.log("clicked")
    }
    let currImage = imageContainer[counter]



    console.log(counter)



    return (
        <div>

            <button onClick={increment} style={{ display: 'block' }}> button ibih</button>
            <img src={currImage} alt='profile' />
        </div>
    )
}

export default BannerAlt