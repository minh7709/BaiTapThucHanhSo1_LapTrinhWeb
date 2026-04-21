import { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import ProductCard from './components/ProductCard'
import './LandingPage.css'

function LandingPage() {
  const [products, setProducts] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [productsError, setProductsError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'
        const response = await axios.get(`${apiBaseUrl}/products`)
        setProducts(Array.isArray(response.data) ? response.data : [])
      } catch (error) {
        setProductsError('Khong the tai danh sach san pham. Vui long thu lai sau.')
      } finally {
        setLoadingProducts(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="phoneshop-landing">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slide">
          <div className="hero-content">
            <span className="hero-tag">Mới ra mắt</span>
            <h1>iPhone 16 Pro Max</h1>
            <p className="hero-subtitle">Siêu mạnh mẽ. Siêu đẳng cấp.</p>
            <p className="hero-desc">
              Camera 48MP với khả năng zoom quang học 5x. Chip A18 Pro mạnh mẽ nhất từ trước đến nay.
            </p>
            <div className="hero-buttons">
              <Button variant="primary" href="#">Mua ngay</Button>
              <Button variant="secondary" href="#">Tìm hiểu thêm</Button>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <span className="phone-text">PhoneShop</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-indicators">
          <button className="indicator active"></button>
          <button className="indicator"></button>
          <button className="indicator"></button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Sản phẩm nổi bật</h2>
          <div className="product-grid">
            {loadingProducts && <p className="products-message">Dang tai san pham...</p>}
            {productsError && <p className="products-message products-error">{productsError}</p>}
            {!loadingProducts && !productsError && products.length === 0 && (
              <p className="products-message">Chua co san pham nao.</p>
            )}
            {!loadingProducts && !productsError && products.map((product, index) => (
              <ProductCard key={product.id || `${product.name}-${index}`} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-section">
        <div className="banner-grid">
          <div className="banner-item banner-large">
            <div className="banner-content">
              <span className="banner-tag">Phụ kiện chính hãng</span>
              <h3>Ốp lưng & Cường lực</h3>
              <p>Bảo vệ điện thoại của bạn với phụ kiện chất lượng cao</p>
              <Button variant="white" href="#">Khám phá</Button>
            </div>
            <div className="banner-bg gradient-blue"></div>
          </div>
          <div className="banner-item">
            <div className="banner-content">
              <h3>Sạc nhanh & Pin dự phòng</h3>
              <p>Công nghệ sạc siêu tốc</p>
              <a href="#" className="link-arrow">Tìm hiểu →</a>
            </div>
            <div className="banner-bg gradient-purple"></div>
          </div>
          <div className="banner-item">
            <div className="banner-content">
              <h3>Tai nghe Bluetooth</h3>
              <p>Chất âm đỉnh cao - Chống ồn chủ động</p>
              <a href="#" className="link-arrow">Tìm hiểu →</a>
            </div>
            <div className="banner-bg gradient-green"></div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers-section">
        <div className="container">
          <h2 className="section-title">Ưu đãi đặc biệt</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <div className="offer-icon">🎁</div>
              <h4>Giảm đến 30%</h4>
              <p>Cho đơn hàng đầu tiên</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">🚚</div>
              <h4>Miễn phí vận chuyển</h4>
              <p>Đơn hàng từ 500.000₫</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">💳</div>
              <h4>Trả góp 0%</h4>
              <p>Lãi suất 0% trong 12 tháng</p>
            </div>
            <div className="offer-card">
              <div className="offer-icon">🔄</div>
              <h4>Đổi trả dễ dàng</h4>
              <p>Trong vòng 15 ngày</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Dịch vụ PhoneShop</h2>
          <div className="services-grid">
            <a href="#" className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 24l6 6 10-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Bảo hành chính hãng</h4>
              <p>Bảo vệ toàn diện</p>
            </a>
            <a href="#" className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 14v10l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Hỗ trợ 24/7</h4>
              <p>Luôn sẵn sàng phục vụ</p>
            </a>
            <a href="#" className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M8 38V18l16-10 16 10v20l-16 6-16-6z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M24 8v36M8 18l16 6 16-6" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Trade-in</h4>
              <p>Đổi cũ lấy mới</p>
            </a>
            <a href="#" className="service-card">
              <div className="service-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="10" y="14" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M18 38v-4M30 38v-4" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Sửa chữa nhanh</h4>
              <p>Kỹ thuật viên chuyên nghiệp</p>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2>Đăng ký nhận tin</h2>
            <p>Nhận thông tin sản phẩm mới và ưu đãi đặc biệt</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Nhập email của bạn" />
              <Button variant="primary" type="submit">Đăng ký</Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage
