'use server';

import React from 'react';

import { CartItem } from '@/components/Cart/CartItem/CartItem.component';
import { Container } from '@/components/Container/Container.component';

import styles from './page.module.scss';
import { Result } from '@/components/Cart/Result/Result.component';
import { Title2 } from '@/ui';
import { getCart } from '@/functions/getCart.function';

export default async function Cart() {
	const cart = await getCart();
	return (
		<Container>
			<Title2 className={styles.title}>Корзина</Title2>
			<div className={styles.goods}>
				{cart.map((item) => <CartItem className={styles.cartItem} name={item.name} count={item.value} key={item.name} />)}
			</div>
			<Result />
		</Container>
	);
}