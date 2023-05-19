import Footer from '@/components/Footer'
import HeaderComponent from '@/components/HeaderComponent'

const Layout = ({ children, key }) => {
  return (
    <div className='flex flex-col justify-between h-full' key={key}>
      <HeaderComponent />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
