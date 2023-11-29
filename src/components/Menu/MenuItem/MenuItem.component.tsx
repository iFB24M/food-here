'use server';

import React from 'react';

import { Card, Title3 } from '@/ui';
import styles from './MenuItem.module.scss';
import { MenuItemProps } from './MenuItem.props';
import { WpImage } from '@/components/WpImage/WpImage.component';
import { AddToCartForm } from './AddToCartForm/AddToCartForm.component';
import Link from 'next/link';

export const MenuItem = (props: MenuItemProps) => {
	return (

		<Card className={styles.body}>
			<Link href={`/catalog/item/${props.slug}`}>
				<picture>
					<WpImage idValue={props.imageId} className={styles.image} alt={props.title} />
				</picture>
				<div className={styles.info}>
					<Title3 className={styles.title}>{props.title}</Title3>
					<Title3 className={styles.price}>{props.price} руб. <span>за {props.weight} гр.</span></Title3>
				</div>
			</Link>
			<AddToCartForm id={props.id} />
		</Card>

	);
};