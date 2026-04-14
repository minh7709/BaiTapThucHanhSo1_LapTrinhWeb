import Header from '../components/Header'
import Footer from '../components/Footer'
import './InfoPage.css'

function ContactPage() {
  return (
    <div className="info-page">
      <Header />

      <main className="info-page-main">
        <div className="info-container">
          <section className="info-hero">
            <span className="info-kicker">Liên hệ</span>
            <h1 className="info-title">Kết nối với PhoneShop</h1>
            <p className="info-subtitle">
              Cần tư vấn sản phẩm, hỗ trợ bảo hành hoặc giải đáp đơn hàng? Chọn kênh liên hệ phù hợp bên dưới.
            </p>
          </section>

          <section className="info-grid" aria-label="Thông tin liên hệ">
            <article className="info-card">
              <h3>Showroom</h3>
              <p>123 Nguyen Van Linh, Quan 7, TP.HCM</p>
            </article>
            <article className="info-card">
              <h3>Tổng đài</h3>
              <p>1900 8888 (08:00 - 22:00 mỗi ngày)</p>
            </article>
            <article className="info-card">
              <h3>Email</h3>
              <p>support@phoneshop.vn</p>
            </article>
          </section>

          <section className="info-panel">
            <h2>Thông tin nhanh</h2>
            <p>Phản hồi trong 24 giờ làm việc qua các kênh sau:</p>
            <ul className="contact-list">
              <li>
                Email: <a href="mailto:support@phoneshop.vn">support@phoneshop.vn</a>
              </li>
              <li>
                Hotline: <a href="tel:19008888">1900 8888</a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage
