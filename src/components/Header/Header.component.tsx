import React from 'react';
import { Container } from '../Container/Container.component';
import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo.component';
import { Button } from '@/ui';
import { cookies } from 'next/headers';

export const Header = () => {
	return (
		<Container className={`${styles.header} header`}>
			<Logo className={styles.logo} icon="lunch_dining" />
			<div className={styles.menu}>
				<ul className={styles.menuList}>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>О нас</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Каталог</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Доставка</a></li>
				</ul>
			</div>
			<Button as="a" href="/cart" icon="shopping_cart" appearance="primary">Корзина ({cookies().getAll().filter((item) => item.name.includes('cart-item-')).length})</Button>
		</Container>
	);
};