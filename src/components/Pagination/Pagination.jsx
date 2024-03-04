import s from './Pagination.module.css'

export const Pagination = () => {
  return (
    <>
      <div className="container">
        <div className={`${s.container} centralContainer`}>
          <button type="button" className={s.prev}>
            Пред.
          </button>
          <button type="button" className={s.next}>
            След.
          </button>
        </div>
      </div>
    </>
  )
}
