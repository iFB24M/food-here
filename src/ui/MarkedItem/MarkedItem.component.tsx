import React from 'react';
import styles from './MarkedItem.module.scss';
import { MarkedItemProps } from './MarkedItem.props';

export const MarkedItem = (props: MarkedItemProps) => {
	return (
		<li className={styles.listItem} {...props}></li>
	);
};