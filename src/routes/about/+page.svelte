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
	<div class="lg:w-3/4 md:w-2/3 sm:w-full">
		<h1>{data.name[$lang]}</h1>
		<p class="whitespace-pre-line">{data.text[$lang]}</p>
	</div>
	<br />
	<p>
		<a href="/Andrey_Golovin_CV.pdf">CV</a><br />
	</p>
	<br />
	<p>
		<a mailto="agamurain@outlook.com">agamurian@outlook.com</a><br />
	</p>
	<p>
		<a mailto="ag-3d@ya.ru">ag-3d@ya.ru</a><br />
	</p>
	<p>
		<a href="https://agamura.artstation.com">artstation</a><br />
	</p>
	<p>
		<a href="https://linkedin.com/in/agamura">linkedin</a><br />
	</p>
	<p>
		<a href="https://github.com/agamurian">github</a><br />
	</p>
	<p>
		<a href="https://gitlab.com/agamura">gitlab</a><br />
	</p>
	<p />
</article>
