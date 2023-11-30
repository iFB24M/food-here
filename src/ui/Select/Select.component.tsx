'use client';

import React, { ReactNode, createContext, useState, Dispatch, SetStateAction } from 'react';
import styles from './Select.module.scss';
import { Card } from '../Card/Card.component';

export const SelectContext = createContext<Dispatch<SetStateAction<string>>>(() => { });

export interface SelectProps {
	name?: string;
	children?: ReactNode;
	placeholder?: string;
}

export const Select = ({ children, name, placeholder }: SelectProps) => {
	const [preview, setPreview] = useState(placeholder ? placeholder : '');
	const [listClassName, setListClassName] = useState('');

	const toggleListOpened = () =>
		listClassName ? setListClassName('') : setListClassName(styles.opened);


	return (
		<div className={styles.select}>
			<Card className={`${styles.card} ${styles.preview}`}>
				<input onClick={() => toggleListOpened()} className={styles.preview} name={name} readOnly value={preview} />
			</Card>
			<Card className={`${styles.card} ${styles.list} ${listClassName}`}>
				<SelectContext.Provider value={setPreview}>
					<ul>
						{children}
					</ul>
				</SelectContext.Provider>
			</Card>
		</div>
	);
};