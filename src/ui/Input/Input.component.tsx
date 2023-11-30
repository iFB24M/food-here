import React from 'react';
import { InputProps } from './Input.props';

import styles from './Input.module.scss';

export const Input = ({ className, ...props }: InputProps) => {
	return (
		<div>
			<input className={`${styles.input} ${className}`} {...props} />
		</div>
	);
};