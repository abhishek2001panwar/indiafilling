import React from 'react'
import Navbar from './section/navbar'
import Hero from './section/hero'
import MeetJune from './section/meetjune'
import Complete from './section/complete'
import Marque from './section/marque'
import Start from './section/start'
import AIPowered from './section/aipowered'
import FAQ from './section/faq'
import Footer from './section/footer'
import Story from './section/story'

function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MeetJune />
      <Complete />
      <Marque />
      <Story/>
      <Start />
      <AIPowered />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page




