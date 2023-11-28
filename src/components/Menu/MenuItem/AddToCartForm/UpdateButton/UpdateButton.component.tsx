'use client';

import React, { useState } from 'react';
import { Button } from '@/ui';
// import { ReactNode } from 'react';

export const UpdateButton = ({ inCart }: { inCart: boolean }) => {
	const [isInCart] = useState(inCart);

	return <Button type="submit" appearance="primary" icon="shopping_cart">
		{isInCart ? 'Да' : 'НЕТ'}
	</Button>;
};