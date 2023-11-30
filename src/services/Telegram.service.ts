import axios from 'axios';

export const API = 'https://api.telegram.org';
export const TOKEN = process.env['TELEGRAM_TOKEN'];
export const ORDERS_CHAT = process.env['TELEGRAM_CHAT_ID'];

export const Telegram = {
	sendOrder: (text: string) => axios.post(`${API}/${TOKEN}/sendMessage?chat_id=${ORDERS_CHAT}&text=${text}`)
};