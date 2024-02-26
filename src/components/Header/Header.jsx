import s from './Header.module.css'

export function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={`${s.headerContainer} centralContainer`}>
          <img src="icon.png" alt="" />

          <p className={s.logoTitle}>Список товаров</p>
        </div>
      </div>
    </header>
  )
}
