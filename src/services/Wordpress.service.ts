import { ICategory } from '@/interfaces/Category.interface';
import { IDistrict } from '@/interfaces/District.interface';
import { IMedia } from '@/interfaces/Media.interface';
import { IMenuItem } from '@/interfaces/MenuItem.interface';
import { ISettings } from '@/interfaces/Settings.interface';

import axios from 'axios';

export const API = 'https://fb24m.ru/food-here/wp-json/wp/v2';

export const Wordpress = {
	getMenu: () => axios.get<IMenuItem[]>(`${API}/menu`),
	getMenuItemBySlug: (slug: string) => axios.get<IMenuItem[]>(`${API}/menu?slug=${slug}`),
	getMenuItemById: (id: number) => axios.get<IMenuItem>(`${API}/menu/${id}`),
	getMenuItemByCategory: (category: number) => axios.get<IMenuItem[]>(`${API}/menu?menu-category=${category}`),

	getMediaById: (id: number) => axios.get<IMedia>(`${API}/media/${id}`),

	getMenuCategories: () => axios.get<ICategory[]>(`${API}/menu-category`),
	getMenuCategoryBySlug: (slug: string) => axios.get<ICategory[]>(`${API}/menu-category?slug=${slug}`),
	getMenuCategoryById: (id: number) => axios.get<ICategory[]>(`${API}/menu-category/${id}`),

	getDistricts: () => axios.get<IDistrict[]>(`${API}/districts`),

	getFileBySlug: (slug: string) => axios.get<{ content: { rendered: string } }[]>(`${API}/files?slug=${slug}`),

	getSettings: () => axios.get<ISettings>('https://fb24m.ru/food-here/wp-json/')
};