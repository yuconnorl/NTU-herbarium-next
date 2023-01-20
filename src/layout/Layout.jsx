import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

const Layout = ({ children, key }) => {
  return (
    <div key={key}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
