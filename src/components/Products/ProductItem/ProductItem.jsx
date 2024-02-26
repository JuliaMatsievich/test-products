import s from './ProductItem.module.css'

export const ProductItem = ({ product }) => {
  console.log('product', product)
  // console.log('pid', product.id);
  return (
    <>
      <div className={s.item}>
        <div className={s.imageContainer}>
          <img src="/public/img/diamonds.png" alt="icon" className={s.img} />
        </div>
        <div className={s.content}>
          <div className={s.name}>{product.product}</div>
          <div className={s.id}>
            <span className={s.title}>Id:&nbsp;</span>
            {product.id}
          </div>
          <div className={s.brand}>
            <span className={s.title}>Brand:&nbsp;</span>
            {product.brand}
          </div>
        </div>
        <div className={s.price}>{product.price.toLocaleString()} руб.</div>
      </div>
    </>
  )
}
