'use client';

import React from 'react';

import { Container } from '@/components/Container/Container.component';
import { Wordpress } from '@/services/Wordpress.service';
import { Spinner } from '@/ui/Spinner/Spinner.component';
import { useQuery } from '@tanstack/react-query';

import styles from './page.module.scss';
import { WpImage } from '../../../../components/WpImage/WpImage.component';
import { Button, Title3 } from '@/ui';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const toggleState = (value: string, stateArray: [string, Dispatch<SetStateAction<string>>]) => {
	const [state, setState] = stateArray;

	console.log(state);
	if (state) setState('');
	else setState(value);
};

const CatalogPage = (props: { params: { slug: string } }) => {
	const { isLoading, data, error } =
		useQuery({ queryKey: ['posts'], queryFn: () => Wordpress.getMenuItemBySlug(props.params.slug) });

	const [descriptionOpened, setDescriptionOpened] = useState('');

	useEffect(() => {
		console.log(document.querySelector(`.${styles.description}`));
	}, []);

	const toggleDescription = () =>
		toggleState(styles.opened, [descriptionOpened, setDescriptionOpened]);

	if (isLoading) return (<Spinner />);
	if (error) return (<>{error.message}</>);
	if (data)
		return (
			<Container className={styles.container}>
				<div className={styles.image}>
					<WpImage className={styles.image} idValue={data.data[0].featured_media} alt={data.data[0].title.rendered} />
				</div>
				<div className={styles.content}>
					<Title3 className={styles.title}>{data.data[0].title.rendered}</Title3>
					<div className={`${styles.description} ${descriptionOpened}`} dangerouslySetInnerHTML={{ __html: data.data[0].content.rendered }}></div>
					<button onClick={() => toggleDescription()} className={styles.fullDescriprion}>Полное описание</button>
					<div className={styles.buy}>
						<Title3 className={styles.price}>{data.data[0].acf.price} руб. <span>/ {data.data[0].acf.weight} гр</span></Title3>
						<Button appearance="primary">В корзину</Button>
					</div>
				</div>
			</Container>
		);
	return <>Ничего</>;
};

export default CatalogPage;