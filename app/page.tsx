import { About } from "@/components/about"
import { CityGallery } from "@/components/city-gallery"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { SectionBlend } from "@/components/section-blend"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Works } from "@/components/works"

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <SectionBlend />
        <Works />
        <CityGallery />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
