import Button from './Button'

const FALLBACK_BRAND_CLASSES = {
  samsung: 'samsung',
  xiaomi: 'xiaomi',
}

function formatPriceVnd(price) {
  if (Number.isNaN(Number(price))) {
    return 'Dang cap nhat'
  }

  return `Tu ${new Intl.NumberFormat('vi-VN').format(Number(price))}₫`
}

function ProductCard({ product, index }) {
  const brandKey = (product.brand || '').toLowerCase()
  const phoneVisualClass = FALLBACK_BRAND_CLASSES[brandKey] || ''
  const isAccessory = product.name?.toLowerCase().includes('airpods')

  return (
    <div className="product-card">
      {index === 0 && <div className="product-badge">Moi</div>}
      {index === 1 && <div className="product-badge hot">Hot</div>}

      <div className={`product-image ${isAccessory ? 'buds-icon' : 'phone-icon'}`}>
        {isAccessory ? (
          <div className="buds-visual"></div>
        ) : (
          <div className={`phone-visual ${phoneVisualClass}`}></div>
        )}
      </div>

      <h3>{product.name}</h3>
      <p className="product-desc">{product.description || 'Dang cap nhat thong tin'}</p>
      <p className="product-price">{formatPriceVnd(product.price)}</p>
      <Button variant="outline" href="#">Xem chi tiet</Button>
    </div>
  )
}

export default ProductCard
