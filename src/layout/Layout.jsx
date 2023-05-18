import Footer from '@/components/Footer'
import Header from '@/components/Header'

const Layout = ({ children, key }) => {
  return (
    <div className='flex flex-col justify-between h-full' key={key}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
