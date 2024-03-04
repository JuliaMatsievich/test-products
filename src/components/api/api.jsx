import { md5 } from 'js-md5'
import { PASSWORD, URL } from '../../utils/constants'
import { getFormatDate } from '../../helpers/getFormatDateFunc'

export const getProductsId = async ({ offset, limit }) => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'X-Auth': md5(`${PASSWORD}_${getFormatDate()}`),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action: 'get_ids',
      params: { offset, limit },
    }),
  })
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => console.error('Ошибка:', error))
}

export const getRroducts = async ({ action, params }) => {
  return fetch(URL, {
    method: 'POST',
    headers: {
      'X-Auth': md5(`${PASSWORD}_${getFormatDate()}`),
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      action,
      params,
      // { ids: productsId }
    }),
  })
    .then((response) => response.json())
    .then((data) => data.result)
    .catch((error) => console.error('Ошибка:', error))
}
