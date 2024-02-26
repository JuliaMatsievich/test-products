import md5 from 'js-md5'
import { useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import s from './ProductList.module.css'
import { PASSWORD, URL } from '../../../utils/constants'
import { getFormatDate } from '../../../helpers/getFormatDateFunc'

export const ProductList = () => {
  const [productsId, setProductsId] = useState([])
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'X-Auth': md5(`${PASSWORD}_${getFormatDate()}`),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'get_ids',
        params: { offset: 1, limit: 50 },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProductsId(data.result)
        console.log(data.result)
      })
      .catch((error) => console.error('Ошибка:', error))
  }, [])

  useEffect(() => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'X-Auth': md5(`${PASSWORD}_${getFormatDate()}`),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'get_items',
        params: { ids: productsId },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.result)
        setIsLoading(false)
        console.log('products', data.result)
      })
      .catch((error) => console.error('Ошибка:', error))
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
                // return (
                // 	<div key={index}>{product.id}</div>
                // )
                console.log(isLoading)
                return <ProductItem key={index} product={product} />
              })
            )}
          </div>
        </div>
      </div>
    </>
  )
}
