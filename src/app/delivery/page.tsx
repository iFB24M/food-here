import React from 'react';
import { Wordpress } from '../../services/Wordpress.service';
import { Title3 } from '@/ui';
import { Container } from '@/components/Container/Container.component';

import styles from './page.module.scss';
import { MarkedList } from '@/ui/MarkedList/MarkedList.component';
import { MarkedItem } from '../../ui/MarkedItem/MarkedItem.component';

const Delivery = async () => {
	const { data: cities } = await Wordpress.getDistricts();

	return (
		<Container>
			<Title3 className={styles.title}>Условия доставки</Title3>
			<MarkedList>
				<MarkedItem>Примерные сроки доставки оговариваются по телефону после заказа в течении 5 минут</MarkedItem>
				<MarkedItem>В финальную стоимость заказа доставка НЕ входит. Приготовьте, пожалуйста, сумму в зависимости от района отдельно</MarkedItem>
				<MarkedItem>В зависимости от суммы доставки, на нее применяется скидка. Условия скидок описаны ниже</MarkedItem>
				<MarkedItem>Цены на доставку могут изменяться в любое время. Пользователи сайта могут быть не предупреждены об изменении цен</MarkedItem>
			</MarkedList>
			<Title3 className={styles.title}>Стоимость доставки по городам</Title3>
			<ul className={styles.list}>
				{cities.map((city) =>
					<li key={city.id}>{city.title.rendered} - {city.acf.price} руб.</li>)}
			</ul>
			<Title3 className={styles.title}>Скидки на доставку</Title3>
			<MarkedList>
				<MarkedItem>Скидка 20% при заказе от 1000 руб.</MarkedItem>
				<MarkedItem>Скидка 30% при заказе от 1500 руб.</MarkedItem>
				<MarkedItem>Скидка 50% при заказе от 2000 руб.</MarkedItem>
				<MarkedItem>При заказе от 3000 руб. доставка бесплатная</MarkedItem>
			</MarkedList>
		</Container >
	);
};

export default Delivery;