import React from 'react';

import { Container } from '@/components/Container/Container.component';
import { Wordpress } from '@/services/Wordpress.service';

import styles from './page.module.scss';
import { WpImage } from '../../../../components/WpImage/WpImage.component';
import { ReadMore, Title3 } from '@/ui';
import { AddToCartForm } from '@/components/Menu/MenuItem/AddToCartForm/AddToCartForm.component';

const CatalogPage = async (props: { params: { slug: string } }) => {
	const { data } = await Wordpress.getMenuItemBySlug(props.params.slug);

	if (data)
		return (
			<Container className={styles.container}>
				<div className={styles.image}>
					<WpImage className={styles.image} idValue={data[0].featured_media} alt={data[0].title.rendered} />
				</div>
				<div className={styles.content}>
					<Title3 className={styles.title}>{data[0].title.rendered}</Title3>
					<ReadMore
						wrapperClassName={styles.readMore}
						className={styles.description}
						content={data[0].content.rendered}
					></ReadMore>
					<div className={styles.buy}>
						<Title3 className={styles.price}>{data[0].acf.price} руб. <span>/ {data[0].acf.weight} гр</span></Title3>
						<AddToCartForm id={data[0].id} />
					</div>
				</div>
			</Container>
		);
	return <>Ничего</>;
};

export default CatalogPage;