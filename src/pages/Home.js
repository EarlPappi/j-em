import React from 'react'
import BannerSection from '../components/Home/BannerSection'
import FilterComp from '../components/Home/FilterComp'
import NosSection from '../components/Home/NosSection'

function Home() {
  return (
    <>
      <BannerSection />
      <NosSection/>
      <FilterComp/>
    </>
  )
}

export default Home