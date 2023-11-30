'use server';

import { cookies } from 'next/headers';

export const savePrice = async (formData: FormData) => {
	cookies().set('price', formData.get('price')!.toString());
};