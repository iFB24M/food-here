'use server';

// import { createCartItem } from './createCartItem';
import { cookies } from 'next/headers';

export async function createCartItem(formData: FormData) {
	const id: string = `cart-item-${formData.get('item-id')!.toString()}`;

	if (!cookies().get(id)) cookies().set(id, '1');
	else cookies().delete(id);
}