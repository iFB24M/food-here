import React from 'react';

import { Container } from '@/components/Container/Container.component';
import styles from './Spinner.module.scss';


export const Spinner = () => {
	return (
		<Container className={styles.container}>
			<svg className={styles.spinner} viewBox="0 0 50 50">
				<circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
			</svg>
		</Container>
	);
};