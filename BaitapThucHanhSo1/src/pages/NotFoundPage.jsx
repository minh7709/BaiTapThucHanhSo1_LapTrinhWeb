import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './InfoPage.css'

function NotFoundPage() {
  return (
    <div className="info-page">
      <Header />

      <main className="info-page-main">
        <div className="info-container">
          <section className="info-hero">
            <span className="info-kicker">404</span>
            <h1 className="info-title">Không tìm thấy trang</h1>
            <p className="info-subtitle">
              URL bạn truy cập không tồn tại hoặc đã được thay đổi. Bạn có thể quay về trang chủ để tiếp tục.
            </p>
            <Link to="/" className="back-home-link">
              Quay về trang chủ
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFoundPage
