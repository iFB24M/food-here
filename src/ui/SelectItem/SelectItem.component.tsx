'use client';

import React, { ReactNode, useContext } from 'react';
import styles from '@/ui/Select/Select.module.scss';
import { SelectContext } from '../Select/Select.component';

export interface SelectItemProps {
	children: ReactNode;
}

export const SelectItem = ({ children }: SelectItemProps) => {
	const setPreview = useContext(SelectContext);

	return (
		<li className={styles.item}
			onClick={() => setPreview(children!.toString())}>{children}</li>
	);
};