import './App.css'
import { Header } from './components/Header/Header'
import { Pagination } from './components/Pagination/Pagination'
import { ProductList } from './components/Products/ProductsList/ProductList'

function App() {
  return (
    <>
      <Header />
      <ProductList />
      <Pagination />
    </>
  )
}

export default App
