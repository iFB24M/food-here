import React from 'react';
import { Container } from '../Container/Container.component';
import styles from './Footer.module.scss';
import { Logo } from '../Logo/Logo.component';
import { Wordpress } from '@/services/Wordpress.service';
// import { Button } from '@/ui';
// import { cookies } from 'next/headers';

export const Footer = async () => {
	const { data: categories } = await Wordpress.getMenuCategories();

	return (
		<Container className={styles.header}>
			<Logo className={styles.logo} icon="lunch_dining" />
			<div className={styles.menu}>
				<ul className={styles.menuList}>
					<li className={styles.menuTitle}>Меню</li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>О нас</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Каталог</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Доставка</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Корзина</a></li>
				</ul>
			</div>
			<div className={styles.menu}>
				<ul className={styles.menuList}>
					<li className={styles.menuTitle}>Категории</li>
					{categories.map((item) => <li key={item.id} className={styles.menuItem}>
						<a href={`/catalog/${item.slug}`} className={styles.menuLink}>{item.name}</a>
					</li>)}
				</ul>
			</div>
			<div className={styles.menu}>
				<ul className={styles.menuList}>
					<li className={styles.menuTitle}>Другое</li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Политика конфиденциальности</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Лицензионное соглашение</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Регистрационные документы</a></li>
				</ul>
			</div>
		</Container>
	);
};