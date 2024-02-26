import s from './ProductItem.module.css'

export const ProductItem = () => {
	return (
		<>
			<div className={s.item}>
					<div className={s.imageContainer}>
						<img src="" alt="" className={s.img}/>
					</div>
					<div className={s.id}>iddddddd</div>
					<div className={s.name}>Название</div>
					<div className={s.brand}>Брэнд</div>
					<div className={s.price}>2000 руб.</div>
			</div>
		</>
	)
}