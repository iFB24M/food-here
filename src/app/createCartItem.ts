'use client';

export const createCartItem = (name: string, count: number) => {
	localStorage.setItem(`cart-item-${name}`, `${count}`);
}