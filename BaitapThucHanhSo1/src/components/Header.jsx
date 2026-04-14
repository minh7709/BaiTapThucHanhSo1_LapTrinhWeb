import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <span className="phoneshop-logo">PhoneShop</span>
          </NavLink>
        </div>
        
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <button className="icon-btn search-btn" aria-label="Tìm kiếm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/>
              <path d="M20 20l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="icon-btn cart-btn" aria-label="Giỏ hàng">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="9" cy="20" r="1" fill="currentColor"/>
              <circle cx="18" cy="20" r="1" fill="currentColor"/>
              <path d="M3 3h3l1 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <button className="icon-btn account-btn" aria-label="Tài khoản">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
