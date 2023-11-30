import React from 'react';
import { Wordpress } from '../../services/Wordpress.service';
import { Title2 } from '@/ui';
import { Container } from '@/components/Container/Container.component';

// import styles from './page.module.scss';

const Delivery = async () => {
	const { data: cities } = await Wordpress.getDistricts();

	return (
		<Container>
			<Title2>Стоимость доставки по городам</Title2>
			<ul>
				{cities.map((city) =>
					<li key={city.id}>{city.title.rendered} - {city.acf.price} руб.</li>)}
			</ul>
		</Container >
	);
};

export default Delivery;