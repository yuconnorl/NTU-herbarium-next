import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Layout = ({ children, key }) => {
  return (
    <div className='flex flex-col justify-between' key={key}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
