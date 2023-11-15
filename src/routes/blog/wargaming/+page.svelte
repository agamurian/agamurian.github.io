<script lang="ts">
	import { lang, backgroundColor } from '$lib/stores';
	import Layout from '../Layout.svelte';
	backgroundColor.set('#500000');

	let data = {
		en: {
			projectBy: 'Project by',
			name: 'Varavara Kuleshova',
			nameLink: 'https://varvarakuleshova.com',
			text1: `i joined wargaming world of warships visual team`,
			title: 'wargaming.net',
			titleLink: 'https://wargaming.net',
			text2: `My task was to set the 3dscan in motion and optimize it for the web.
This is an art project, and the IDLE animation here is not extrapolated in any way, well it was necessary to make realistic, detailed, barely noticeable movements of the human body with a state when the person himself does not consciously move.
                                                                                      
Breathing, heartbeat, blinking and barely noticeable hand tremors together create an effect similar to the uncanny valley effect, unique to this project.                   

What I've done:
Optimized models and textures, added missing parts for references (eye, teeth, eyelashes), Rigging, Animation, export, compression, testing and editing along the way.
                                                                                      
In this project, I decided to use my favorite procedural animations:
Using simple functions like sine and perlin noise, you can transfer a large number of organic movements.
			`
		},
		ru: {
			projectBy: 'Проект ',
			name: 'Варвары Кулешовой',
			nameLink: 'https://varvarakuleshova.com',
			text1: `Согласно авторскому описанию:
			Seeance это web-сайт через который на мобильном устройстве можно увидеть анимированный 3D-скан тела человека в дополненной реальности. В разработке используется GoogleAR.`,
			title: 'Seeance.icu',
			titleLink: 'https://seeance.icu',
			text2: `Мой же задачей было приведение 3дскана в движение и его оптимизация для веба.
			Это художественный проект, и здесь IDLE анимация никак не екстраполирована, нужно было сделать именно реалистичное, детальное, едва заметные движения человеческого тела с состоянии, когда сам человек сознательно не двигается.

			Дыхание, сердцебиение, моргания и едва заметные подрагиванию рук вместе создают эффект, похожий на эффект зловещей долины, уникальный для этого проекта.

			Что я сделал:
			Оптимизировал модели и текстуры, дорисовал недостающие части по рефенсам (глаза, зубы, ресницы), Риггинг, Анимация, экспорт, компрессия, тестирование и правки по ходу дела.
			
			В этом прокте я решил использовать свои любимые процедурные анимации:
			С помощью простых функций вроде синуса и шума перлина можно передать большое количество органических движений.
			`
		}
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css" />
</svelte:head>

<Layout>
<img class="w-100 my-10 rounded" src="/blog/wargaming.png" />
	<p class="whitespace-pre-line my-10">
		{data[$lang].text1}
	</p>
	<p>
		<a href={data[$lang].titleLink}>{data[$lang].title}</a>
	</p>
	<p class="whitespace-pre-line my-10">
		{data[$lang].text2}
	</p>
</Layout>

<style>
	video {
		border-radius: 0.25rem;
		max-height: 85vh;
		margin: auto;
		margin-top: 4rem;
		margin-bottom: 4rem;
	}
</style>
