

import { Container } from '@/components/Container/Container.component';
import React from 'react';
import { Input, Title2, Card, Title3, Body1, Button } from '@/ui';
import { Select } from '@/ui/Select/Select.component';
import { SelectItem } from '@/ui/SelectItem/SelectItem.component';
import { Wordpress } from '@/services/Wordpress.service';
import styles from './page.module.scss';
import { Telegram } from '@/services/Telegram.service';
import { cookies } from 'next/headers';
import { NextPage } from 'next';

export const Order: NextPage = async () => {
	const { data: cities } = await Wordpress.getDistricts();

	const submitOrder = async (formData: FormData) => {
		'use server';
		console.log(formData);
		Telegram.sendOrder(`Заказ с сайта Food Here. 
		Улица: ${formData.get('street')}, дом: ${formData.get('house')}, подъезд: ${formData.get('entrance')}, этаж: ${formData.get('floor')}. 
		Имя: ${formData.get('contact-name')}, телефон: ${formData.get('phone')}`);

		const goods = cookies().getAll().filter((item) => item.name.includes('cart-item'));

		goods.forEach(async (goodData) => {
			Wordpress.getMenuItemById(+goodData.name.split('-')[2]).then(({ data }) => {
				console.log(data);
				Telegram.sendOrder(`(${data.id}) ${data.title.rendered} - ${data.acf.price} руб.`);
			});

		});
	};

	return (<>
		<Container>
			<form action={submitOrder} className={styles.wrapper}>
				<Title2>Оформление заказа</Title2>
				<Card size="big" className={styles.form}>
					<Title3>Адрес</Title3>
					<div className={styles.block}>
						<Select name="district" placeholder="Выберите район">
							{cities.map((city) => <SelectItem key={city.id}>{city.title.rendered} / {city.id}</SelectItem>)}
						</Select>
					</div>
					<div className={styles.flexBlock}>
						<div className={styles.block}>
							<label className={styles.label} htmlFor="street">Улица:</label>
							<Input required placeholder="Пушкина" name="street" id="street" />
						</div>
						<div className={styles.block}>
							<label className={styles.label} htmlFor="house">Дом:</label>
							<Input required placeholder="31" name="house" id="house" />
						</div>
					</div>
					<div className={styles.flexBlock}>
						<div className={styles.block}>
							<label className={styles.label} htmlFor="entrance">Подъезд:</label>
							<Input required placeholder="5" name="entrance" id="entrance" />
						</div>
						<div className={styles.block}>
							<label className={styles.label} htmlFor="floor">Этаж:</label>
							<Input required placeholder="7" name="floor" id="floor" />
						</div>
					</div>
					<div className={styles.block}>
						<label className={styles.label} htmlFor="office">Квартира / офис:</label>
						<Input required placeholder="78" name="office" id="office" />
					</div>
				</Card>
				<Card size="big" className={styles.form}>
					<Title3>Контактные данные</Title3>
					<div className={styles.flexBlock}>
						<div className={styles.block}>
							<label className={styles.label} htmlFor="contact-name">Имя:</label>
							<Input required placeholder="Иван" name="contact-name" id="contact-name" />
						</div>
						<div className={styles.block}>
							<label className={styles.label} htmlFor="phone">Телефон:</label>
							<Input required placeholder="+7 (999) 999 99-99" name="phone" id="phone" />
						</div>
					</div>
					<Body1>Внимание: не указывайте настоящие данные в этой форме. Все заявки с этой формы доступны в публичном виде, могут храниться и обрабатываться в соответствии с законами</Body1>
				</Card>
				<Button appearance="primary" type="submit">Заказать</Button>
				<Body1>Оплата будет совершена при получении</Body1>
			</form>
		</Container>
	</>
	);
};

export default Order;