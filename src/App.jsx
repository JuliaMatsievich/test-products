import './App.css'
import { Header } from './components/Header/Header'

function App() {
  // Функция запроса GET авторизованного пользователя
  async function fetchGetProducts() {
    return fetch(`http://api.valantis.store:40000/`, {
      method: 'POST',
      headers: {
        'X-Auth': `md5("Valantis_20240224")`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        action: 'get_ids',
        params: { offset: 10, limit: 3 },
      }),
    })
    .then((response) => console.log(response))
      // .then((response) => response.json())
      // .then((data) => console.log(data))
      .catch((error) => console.error('Ошибка:', error))
  }

  fetchGetProducts()

  return (
    <>
      <Header />
      <p>;;lk</p>
    </>
  )
}

export default App
