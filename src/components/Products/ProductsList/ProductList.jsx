import { useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import s from './ProductList.module.css'
import { getProductsId, getRroducts } from '../../api/api'

export const ProductList = () => {
  const [productsId, setProductsId] = useState([])
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getProductsId().then((data) => {
      const productUnikId = Array.from(new Set(data))
      setProductsId(productUnikId)
    })
  }, [])

  useEffect(() => {
    getRroducts({ action: 'get_items', params: { ids: productsId } }).then(
      (data) => {
        setProducts(data)
        setIsLoading(false)
      },
    )
  }, [isLoading])

  return (
    <>
      <div className="container">
        <div className={`${s.container} centralContainer`}>
          <div className={s.items}>
            {isLoading ? (
              <div>Загрузка....</div>
            ) : (
              products.map((product, index) => {
                return <ProductItem key={index} product={product} />
              })
            )}
          </div>
        </div>
      </div>
    </>
  )
}
