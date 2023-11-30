'use server';


import { Wordpress } from '@/services/Wordpress.service';
import { Card, Icon, Title3, Button } from '@/ui';
import { cookies } from 'next/headers';
import React from 'react';
import { savePrice } from './savePrice';
import styles from './Total.module.scss';

const sum = async (a: Promise<number>, b: Promise<number>) => (await a) + (await b);

const items = cookies().getAll().filter((item) => item.name.includes('cart-item-'));

const getParam = (param: 'price' | 'weight') =>
	items.map((item) => {
		return Wordpress.getMenuItemById(+item.name.split('-')[2]).then(product => product.data.acf[param]);
	}).reduce(sum);


export const Result = async () => {
	// const items = cookies().getAll().filter((item) => item.name.includes('cart-item-'));
	const price = await getParam('price');
	const weight = await getParam('weight');

	// let price = 0;
	return (
		<Card className={styles.card} size="big">
			<Title3>Итого:</Title3>
			<ul>
				<li className={styles.item}><Icon icon="monetization_on" size={24} /> Стоимость: {' '} {price} руб.</li>
				<li className={styles.item}><Icon icon="scale" size={24} /> Суммарный вес: {' '} {weight} гр.</li>
				<li className={styles.item}><Icon icon="local_shipping" size={24} /> Стоимость доставки будет рассчитана после указания адреса</li>
			</ul>
			<form action={savePrice}>
				<input type="text" className={styles.input} readOnly name="price" value={price} />
				<Button as="a" href="order" appearance="primary">Далее</Button>
			</form>
		</Card>
	);
};