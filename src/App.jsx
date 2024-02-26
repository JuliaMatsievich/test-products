import md5 from 'js-md5';
import './App.css';
import { Header } from './components/Header/Header';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
        fetch(`http://api.valantis.store:40000/`, {
          method: 'POST',
          headers: {
            'X-Auth': md5("Valantis_20240226"),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            action: 'get_ids',
            params: { offset: 10, limit: 3 },
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error('Ошибка:', error))
  },[])


  return (
    <>
      <Header />
      <p>;;lk</p>
    </>
  )
}

export default App
