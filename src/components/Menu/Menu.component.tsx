// 'use client';

import React from 'react';

import { Container } from '../Container/Container.component';
import { MenuItem } from './MenuItem/MenuItem.component';
import styles from './Menu.module.scss';
// import { useQuery } from '@tanstack/react-query';
import { API, Wordpress } from '@/services/Wordpress.service';
import { Spinner } from '@/ui/Spinner/Spinner.component';
import { Card, Title3 } from '@/ui';
import { IMenuItem } from '@/interfaces/MenuItem.interface';



async function getData() {
	const res = await fetch(`${API}/menu`)
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data')
	}

	return res.json()
}


export const Menu = async () => {
	// const { isLoading, data, error } = useQuery({ queryKey: ['posts'], queryFn: Wordpress.getMenu });
	// const { data: categories } = useQuery({ queryKey: ['categories'], queryFn: Wordpress.getMenuCategories });

	const data = await getData();

	// if (error) return <>{error.message}</>;
	return (
		<Container className={styles.container}>
			<div className={styles.menu}>
				<Title3>Категории</Title3>
				<Card size="big">
					{/* {isLoading ? <Spinner /> : ''} */}
					{/* {categories ? categories.data.map((item) => item.name) : ''} */}
				</Card>
			</div>
			<div className={styles.grid}>
				{/* {isLoading ? <Spinner /> : ''} */}
				{data ? data.map((item) => <MenuItem
					key={item.id}
					title={item.title.rendered}
					description={item.content.rendered}
					imageId={item.featured_media}
					price={item.acf.price}
					weight={item.acf.weight}
					slug={item.slug}
				/>) : ''}
			</div>

		</Container>
	);
};