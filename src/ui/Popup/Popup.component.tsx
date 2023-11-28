'use client';

import React, { useEffect, useState } from 'react';
import styles from './Popup.module.scss';
import { Body1, Button, Card } from '..';

export const Popup = () => {
	const [loaded, setLoaded] = useState(false);
	const [opened, setOpened] = useState(false);
	useEffect(() => {
		if (!loaded) {
			if (!localStorage.getItem('cookies-warned')) {
				setOpened(true);
			}

			setLoaded(true);
		}
	}, []);

	return (
		<Card size="big" className={`${styles.popup}${opened ? ' ' + styles.open : ''}`}>
			<div className={styles.popupWrapper}>
				<div className={styles.popupBody}>
					<Body1>Это очередной сайт, который использует Cookie</Body1>
					<Button appearance="primary" onClick={() => { localStorage.setItem('cookies-warned', '1'); setOpened(false); }}>Понятно</Button>
				</div>
			</div>
		</Card>
	);
};