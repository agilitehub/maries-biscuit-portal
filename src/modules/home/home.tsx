import React from 'react'

import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import FeaturedBiscuitsSection from './components/FeaturedBiscuitsSection'
import HeroSection from './components/HeroSection'

export default function HomePage(): React.ReactElement {
  return (
    <>
      <HeroSection />
      <FeaturedBiscuitsSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
