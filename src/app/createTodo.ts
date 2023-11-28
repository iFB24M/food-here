'use server';

// import { createCartItem } from "./createCartItem";
import { cookies } from 'next/headers';

export async function sendForm(formData: FormData) {
	console.log(formData.get('text-kakoy-to'));
	cookies().set('good-1', '20');
	console.log(cookies().getAll());
}