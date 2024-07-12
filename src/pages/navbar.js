import MenuItems from "@/components/MenuItems"
import { useState } from "react"
import dynamic from "next/dynamic"

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
)

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">AEON</div>
        <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
          <MenuItems />
        </div>
      </div>
      <div className="right-section">
        <div className="search-icon mx-3">
          <FontAwesomeIcon icon="search" />
        </div>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <FontAwesomeIcon icon="bars" />
        </div>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search documentation..."
          className="search-box"
        />
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <MenuItems />
        </div>
      )}
    </nav>
  )
}

export default Navbar
