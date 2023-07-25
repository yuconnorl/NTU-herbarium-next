import LandingCollection from '@/components/Landing/LandingCollection'
import LandingExhibition from '@/components/Landing/LandingExhibition'
import LandingHero from '@/components/Landing/LandingHero'
import LandingNews from '@/components/Landing/LandingNews'
import PageTransitionProvider from '@/provider/PageTransitionProvider'

const LandingPage = () => {
  return (
    <PageTransitionProvider>
      <main className='text-brown'>
        <LandingHero />
        <LandingCollection />
        <LandingNews />
        <LandingExhibition />
      </main>
    </PageTransitionProvider>
  )
}

export default LandingPage
