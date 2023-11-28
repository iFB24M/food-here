

import React from 'react';

import { cookies } from 'next/headers';
import { CartItem } from '@/components/Cart/CartItem/CartItem.component';
import { Container } from '@/components/Container/Container.component';

import styles from './page.module.scss';

const Cart = () => {

	const items = cookies().getAll().filter((item) => item.name.includes('cart-item-'));

	return (
		<Container className={styles.cart}>
			{items.map((item) => <CartItem name={item.name} count={item.value} key={item.name} />)}
		</Container>
	);
};

export default Cart;