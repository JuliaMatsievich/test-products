import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import s from './ProductList.module.css'
import { getProductsId, getRroducts } from '../../api/api'

export const ProductList = () => {
  const [productsId, setProductsId] = useState([])
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const currentPage = useSelector((state) => state.pagination.currentPage)

  useEffect(() => {
    getProductsId({ offset: currentPage, limit: 50 }).then((data) => {
      const productUnikId = Array.from(new Set(data))
      setProductsId(productUnikId)
    })
    console.log('currentPagep', currentPage)
  }, [currentPage])

  useEffect(() => {
    getRroducts({ action: 'get_items', params: { ids: productsId } }).then(
      (data) => {
        setProducts(data)
        setIsLoading(false)
      },
    )
  }, [isLoading, productsId])

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
