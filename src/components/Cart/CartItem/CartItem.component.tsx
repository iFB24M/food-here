import React from 'react';
import styles from './CartItem.module.scss';

import { CartItemProps } from './CartItem.props';
import { Wordpress } from '@/services/Wordpress.service';

import { Body1, Card } from '@/ui';
import { WpImage } from '@/components/WpImage/WpImage.component';

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
				<form>
					<input type="text" defaultValue={props.count + ' шт.'} readOnly />
				</form>
			</Card>
		);
};