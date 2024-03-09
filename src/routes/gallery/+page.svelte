<script>
	import { backgroundColor, lang } from '$lib/stores';
	backgroundColor.set('#111111');
	const data = {
		name: { en: 'Andrey Golovin', ru: 'Андрей Головин' },
		text: {
			en: `
				Designer, Dveloper, and Media Artist.
				Mainly work as Technical Artsit in game development or as freelance web developer.
				
				Opened contemprorary art Gallery Kerka.

				Education:
				ITMO university : Teacher of computer graphics
				Rodchenko Art School: New Media
			`,
			ru: `
				Дизайнер, Разработчик и Медиа-художник.
				В основном работаю как Технический художник в разработке игр или как независивый веб разработчик.

				Открыл галерею современного искусства Kerka

				Образование:
				ИТМО: преподаватель компьютерной графики
				СПБГМТУ: художник-технолог по обработке материалов
				Школа Родченко: Новые Медиа 
			`
		}
	};
</script>

<article class="p-5">
	<img class='img' src="/gallery/1.webp"/>
	<div class="text">image numbre one</div>
	<img class='img' src="/gallery/w1.webp"/>
	<div class="text">image one</div>
	<img  class='img' src="/gallery/w7.webp"/>
	<div class="text">image seven</div>
	<img  class='img' src="/gallery/w8.webp"/>
	<div class="text">image eight</div>
	<img  class='img' src="/gallery/w9.webp"/>
	<div class="text">image nine</div>
</article>

<style lang="css">

	.text {
		font-family: Monospace;
		font-size: 0.6rem;
		margin-right: 2rem;
		margin: 1rem;
		margin-bottom: 2rem;
	}
	.img {
		outline: none;
		border: none;
		display: block;
		margin:auto;
		border-radius: 0.5rem;
	}
	</style>
