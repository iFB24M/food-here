import { MouseEventHandler, ReactNode } from 'react';

export interface ButtonProps {
	className?: string,
	appearance?: 'primary' | 'secondary' | 'link',
	as?: 'button' | 'a',
	href?: string,
	children: ReactNode,
	onClick?: MouseEventHandler<HTMLButtonElement>
}