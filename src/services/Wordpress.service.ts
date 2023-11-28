import { ICategory } from '@/interfaces/Category.interface';
import { IMedia } from '@/interfaces/Media.interface';
import { IMenuItem } from '@/interfaces/MenuItem.interface';
import { ISettings } from '@/interfaces/Settings.interface';

import axios from 'axios';

export const API = 'https://fb24m.ru/food-here/wp-json/wp/v2';

export const Wordpress = {
	getMenu: () => axios.get<IMenuItem[]>(`${API}/menu`),
	getMenuItemBySlug: (slug: string) => axios.get<IMenuItem[]>(`${API}/menu?slug=${slug}`),
	getMediaById: (id: number) => axios.get<IMedia>(`${API}/media/${id}`),
	getMenuCategories: () => axios.get<ICategory[]>(`${API}/menu-category`),
	getSettings: () => axios.get<ISettings>('https://fb24m.ru/food-here/wp-json/')
};