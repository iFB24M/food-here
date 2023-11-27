import { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	size?: 'small' | 'normal' | 'big';
}