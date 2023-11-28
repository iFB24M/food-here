// 'use client';

import React from 'react';

import { Container } from '../Container/Container.component';
import { MenuItem } from './MenuItem/MenuItem.component';
import styles from './Menu.module.scss';
import { Wordpress } from '@/services/Wordpress.service';
import { Card, Title3 } from '@/ui';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
	const menuItems = await Wordpress.getMenu();

	return {
		props: { menuItems }
	};
};


export const Menu = async () => {
	const { data } = await Wordpress.getMenu();
	const { data: categories } = await Wordpress.getMenuCategories();

	return (
		<Container className={styles.container}>
			<div className={styles.menu}>
				<Title3>Категории</Title3>
				<Card size="big">
					{categories ? categories.map((item) => item.name) : ''}
				</Card>
			</div>
			<div className={styles.grid}>
				{data ? data.map((item) => <MenuItem
					key={item.id}
					id={item.id}
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