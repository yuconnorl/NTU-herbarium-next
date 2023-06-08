import LandingCollection from '@/components/Landing/LandingCollection'
import LandingExhibition from '@/components/Landing/LandingExhibition'
import LandingHero from '@/components/Landing/LandingHero'
import LandingNews from '@/components/Landing/LandingNews'

const LandingPage = () => {
  return (
    <main className='text-brown'>
      <LandingHero />
      <LandingCollection />
      <LandingNews />
      <LandingExhibition />
    </main>
  )
}

export default LandingPage
