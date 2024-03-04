import { useDispatch, useSelector } from 'react-redux'
import s from './Pagination.module.css'
import { setCurrentPage, setPages } from '../store/paginaionSlice'

export const Pagination = () => {
  const pages = useSelector((state) => state.pagination.pages)
  const dispatch = useDispatch()
  const currentPage = useSelector((state) => state.pagination.currentPage)

  const handleClickPrev = () => {
    dispatch(setCurrentPage(currentPage - 1))
  }

  const handleClickNext = () => {
    dispatch(setCurrentPage(currentPage + 1))
    dispatch(setPages(currentPage + 1))
  }

  const handleClickPage = (page) => {
    dispatch(setCurrentPage(page))
  }
  return (
    <>
      <div className="container">
        <div className={`${s.container} centralContainer`}>
          <button onClick={handleClickPrev} type="button" className={s.prev}>
            Пред.
          </button>

          {pages.map((page, index) => {
            return (
              <button
                type="button"
                key={index}
                className={
                  page === currentPage ? `${s.page} ${s.active}` : s.page
                }
                onClick={() => handleClickPage(page)}
              >
                {page}
              </button>
            )
          })}

          <button onClick={handleClickNext} type="button" className={s.next}>
            След.
          </button>
        </div>
      </div>
    </>
  )
}
