import md5 from 'js-md5'
import { useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem/ProductItem'
import s from './ProductList.module.css'

export const ProductList = () => {
  const [productsId, setProductsId] = useState([])

  useEffect(() => {
    fetch(`http://api.valantis.store:40000/`, {
      method: 'POST',
      headers: {
        'X-Auth': md5('Valantis_20240226'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'get_ids',
        params: { offset: 1, limit: 50 },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setProductsId(data)
        console.log(data)
      })
      .catch((error) => console.error('Ошибка:', error))
  }, [])

  return (
    <>
      <div className="container">
        <div className={`${s.container} centralContainer`}>
          <div className={s.items}>
            
            <ProductItem />
          </div>
        </div>
      </div>
    </>
  )
}
