import React from 'react';
import styles from './MarkedList.module.scss';
import { MarkedListProps } from './MarkedList.props';

export const MarkedList = ({ children, ...props }: MarkedListProps) => {
	return (
		<ul className={styles.list} {...props}>
			{children}
		</ul>
	);
};