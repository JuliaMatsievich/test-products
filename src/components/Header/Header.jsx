import s from './Header.module.css'

export function Header() {
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.headerContainer}>
          <img src="icon.png" alt="" />

          <p className={s.logoTitle}>gbitv</p>
        </div>
      </div>
    </header>
  )
}
