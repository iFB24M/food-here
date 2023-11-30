# Food Here

<!--
<div class="banners">
	<img src="https://img.shields.io/badge/SCSS-cc6699">
	<img src="https://img.shields.io/badge/WordPress-3858E9">
	<img src="https://img.shields.io/badge/TypeScript-2d79c7">
	<img src="https://img.shields.io/badge/ESLint-4B32C3">
	<img src="https://img.shields.io/badge/React-4fafc9">
	<img src="https://img.shields.io/badge/Next.js-000000">
	<img src="https://img.shields.io/badge/Git-f64d27">
</div> -->

```mermaid
flowchart TD
	STACK[Technologies Stack]
	STACK --> TS[TypeScript];
	STACK --> SCSS[SCSS];
	TS --> ESLINT[ESLint];
	TS --> NEXT[Next.js];
	NEXT --> REACT[React.js];
	NEXT --> AXIOS[Axios];
	TS --> MODULES[Modules];
	SCSS --> MODULES[Modules];
	STACK --> WP[WordPress];
	WP --> ACF[ACF];
	WP --> API[Rest API];
```

<img class="image" src="https://fb24m.ru/food-here/wp-content/uploads/2023/11/snimok-ekrana-ot-2023-11-30-20-18-55.png">

## Tl;dr

[Перейти на сайт](https://food.fb24m.ru)

[Админ-панель (логин и пароль - admin1)](https://fb24m.ru/food-here/wp-admin)

[Телеграм чат, куда поступают заказы](https://t.me/food_here)

Food Here - полностью рабочий сайт для заказа еды, написаный на Next.js с использованием WordPress и SCSS. Для поддержки стиля и надежности кода используются ESLint и TypeScript.

Использовано крайне мало компонентов с клиенстким рендерингом - страницы генерируются на сервере, а контент на них можно менять через админ-панель.

## Безопасность

Все токены и ключи доступа хранятся на сервере в зашифрованном виде. При заказе стоимость пересчитывается автоматически, чтобы не допустить ошибки. Для хранения данных используются Cookie.

## Wordpress

Wordpress вместе с основным плагином ACF играют роль бекенда сайта, через админ-панель можно менять товары и регионы для доставки, а также добавлять новые (вы можете сами добавить что угодно через панель по ссылке выше)

<style>
	.image {
		width:100%;
		border-radius: 8px;
	}
	.banners{
		margin-bottom: 16px;
	}
</style>
<div style="display:flex;align-items: flex-start;gap:8px">
<div style="flex-basis:50%;">
<img class="image" alt="Редактор позиции меню" src="https://fb24m.ru/food-here/wp-content/uploads/2023/11/snimok-ekrana-ot-2023-11-30-20-12-45.png">
</div>
<div style="flex-basis:50%;">
<img class="image" alt="Редактор настроек позиции меню" src="https://fb24m.ru/food-here/wp-content/uploads/2023/11/snimok-ekrana-ot-2023-11-30-20-13-02.png">
</div>
</div>
