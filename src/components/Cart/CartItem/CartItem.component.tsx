import React from 'react';
import styles from './CartItem.module.scss';

import { CartItemProps } from './CartItem.props';
import { Wordpress } from '@/services/Wordpress.service';

import { Body1, Button, Card, Title3 } from '@/ui';
import { WpImage } from '@/components/WpImage/WpImage.component';
import { removeCartItem } from '@/app/createCartItem';

export const CartItem = async (props: CartItemProps) => {
	const id: number = +props.name.split('-')[2];

	const { data } = await Wordpress.getMenuItemById(id);

	if (data)
		return (
			<Card className={styles.wrapper}>
				<a href={`/catalog/item/${data.slug}`} className={styles.link}>
					<WpImage className={styles.image} idValue={data.featured_media} alt="" />
					<Body1 className={styles.title}>{data.title.rendered}</Body1>
				</a>
				<div className={styles.info}>
					<form>
						<input className={styles.input} type="text" defaultValue={props.count + ' шт.'} readOnly />
					</form>
					<Title3 className={styles.price}>{+props.count * data.acf.price} руб.</Title3>
				</div>
				<form action={removeCartItem}>
					<input type="text" name="item-id" value={data.id} readOnly style={{ display: 'none' }} />
					<Button icon="delete" appearance="link" type="submit">Удалить</Button>
				</form>
			</Card>
		);
};