import Header from '../components/Header'
import Footer from '../components/Footer'
import './InfoPage.css'

function AboutUsPage() {
  return (
    <div className="info-page">
      <Header />

      <main className="info-page-main">
        <div className="info-container">
          <section className="info-hero">
            <span className="info-kicker">Về PhoneShop</span>
            <h1 className="info-title">Trang giới thiệu</h1>
            <p className="info-subtitle">
              PhoneShop là cửa hàng chuyên smartphone và phụ kiện chính hãng, tập trung vào trải nghiệm mua sắm
              minh bạch, giao hàng nhanh và dịch vụ hậu mãi tận tâm.
            </p>
          </section>

          <section className="info-grid" aria-label="Điểm mạnh của PhoneShop">
            <article className="info-card">
              <h3>Sản phẩm chính hãng</h3>
              <p>
                Tất cả thiết bị đều có nguồn gốc rõ ràng, bảo hành đầy đủ, giúp bạn an tâm khi mua sắm.
              </p>
            </article>
            <article className="info-card">
              <h3>Tư vấn đúng nhu cầu</h3>
              <p>
                Đội ngũ tư vấn viên hỗ trợ bạn chọn đúng máy theo nhu cầu học tập, công việc và giải trí.
              </p>
            </article>
            <article className="info-card">
              <h3>Hỗ trợ sau bán hàng</h3>
              <p>
                Hỗ trợ đổi trả theo chính sách, nhắc lịch bảo hành và hướng dẫn sử dụng trong suốt quá trình.
              </p>
            </article>
          </section>

          <section className="info-panel">
            <h2>Sứ mệnh</h2>
            <p>
              Mang công nghệ hiện đại đến gần hơn với mọi người thông qua sản phẩm chất lượng, giá hợp lý và
              dịch vụ vượt mong đợi.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default AboutUsPage
