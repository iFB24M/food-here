import React from 'react';

import styles from './Card.module.scss';
import { CardProps } from './Card.props';

export const Card = ({ className, size = 'normal', ...props }: CardProps) => {
	return <div className={`${styles.card} ${styles[size]} ${className}`} {...props}></div>;
};