import { IMedia } from '@/interfaces/Media.interface';
import { IMenuItem } from '@/interfaces/MenuItem.interface';
import axios from 'axios';

const API = 'https://fb24m.ru/food-here/wp-json/wp/v2'

export const Wordpress = {
	getMenu: () => axios.get<IMenuItem[]>(`${API}/menu`),
	getMediaById: (id: number) => axios.get<IMedia>(`${API}/media/${id}`),
}