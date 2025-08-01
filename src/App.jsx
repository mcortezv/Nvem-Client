import { useState } from 'react'
import { StickyNavbar } from './components/Navbar.jsx'
import { HeroSection16 } from './components/HeroSection.jsx'
import { FooterWithSocialLinks } from './components/footer.jsx'
import { SidebarDark } from './components/SidebarSecction.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StickyNavbar></StickyNavbar>
      <HeroSection16></HeroSection16>
      <SidebarDark></SidebarDark>
      <FooterWithSocialLinks></FooterWithSocialLinks>
    </>
  )
}

export default App
