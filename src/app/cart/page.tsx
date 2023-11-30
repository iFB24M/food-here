

import React from 'react';

import { cookies } from 'next/headers';
import { CartItem } from '@/components/Cart/CartItem/CartItem.component';
import { Container } from '@/components/Container/Container.component';

import styles from './page.module.scss';
import { Result } from '@/components/Cart/Result/Result.component';

const Cart = () => {

	const items = cookies().getAll().filter((item) => item.name.includes('cart-item-'));

	return (
		<Container className={styles.cart}>
			<div className={styles.goods}>
				{items.map((item) => <CartItem className={styles.cartItem} name={item.name} count={item.value} key={item.name} />)}
			</div>
			<Result />
		</Container>
	);
};

export default Cart;