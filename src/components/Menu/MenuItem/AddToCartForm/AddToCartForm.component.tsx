'use server';

import React from 'react';

import { createCartItem } from '@/app/createCartItem';
import { Button } from '@/ui';
import { AddToCartFormProps } from './AddToCartForm.props';

import { cookies } from 'next/headers';

import styles from './AddToCartForm.module.scss';

export const AddToCartForm = (props: AddToCartFormProps) => {
	return (
		<form action={createCartItem}>
			<input style={{ display: 'none' }} readOnly type="text" name="item-id" value={props.id} />

			<Button className={styles.button} type="submit" appearance="primary" icon="shopping_cart">
				{!cookies().has(`cart-item-${props.id}`) ? 'В корзину' : ''}
				{cookies().has(`cart-item-${props.id}`) ? 'Удалить' : ''}
			</Button>

		</form>
	);
};