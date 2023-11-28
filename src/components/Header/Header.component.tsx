import React from 'react';
import { Container } from '../Container/Container.component';
import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo.component';
import { Button } from '@/ui';

export const Header = () => {
	return (
		<Container className={styles.header}>
			<Logo className={styles.logo} icon="lunch_dining" />
			<div className={styles.menu}>
				<ul className={styles.menuList}>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>О нас</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Каталог</a></li>
					<li className={styles.menuItem}><a href="#" className={styles.menuLink}>Доставка</a></li>
				</ul>
			</div>
			<Button icon="shopping_cart" appearance="primary">Кнопка</Button>
		</Container>
	);
};