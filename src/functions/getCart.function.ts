'use server';

import { cookies } from 'next/headers';

export const getCart = async () =>
	cookies().getAll().filter((item) => item.name.includes('cart-item-'));

