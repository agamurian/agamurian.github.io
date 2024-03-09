<script lang="ts">
	import { lang, backgroundColor } from '$lib/stores';
	import Layout from '../Layout.svelte';
	backgroundColor.set('#2d2d2d');

	let data = {
		projectId: 1,
		en: {
			text1: `Original name is "questions".

			This is inter-medium artwork, meta-procrastination for people too lazy to do so.

			A simple script, which just emulates keypress and launches client-side programs and mainly ask quite abstract questions about life in thouse programs, in terminal, in browser on different websites, it browes goodle and play piano on emulator, creating	meta-immersive expirience, with sound and video, which depend on real-time internet and is different everytime the script plays.

			This work is very poetic and personal, for example it includes question "why there are so many butterflies", because at the time of doing, summer of 2018, author was bombarder by moths and butterflies from room window for no reason, but even this type of personal and detailed questions plays nicely in such an abstract plot.

			It also uses popular tile window manager i3 and riced linux distro to reflect soothing nerdy environment.
			Timing is routhly 7minutes, it starts slow and shy and intecifies at the end, with sound of rapid electoric music and outloud tts read from google translator.

			This artwork was done during student times at Rodchenko Art School.
			`
		},
		ru: {
			text1: `
Оригинальное название «Вопросы».

Это промежуточное произведение искусства, мета-прокрастинация для людей, которым лень это делать.

Простой скрипт, который просто эмулирует нажатие клавиш и запускает клиентские программы и в основном задает довольно абстрактные вопросы о жизни в домашних программах, в терминале, в браузере на разных веб-сайтах, он гудит и играет на пианино на эмуляторе, создавая мета-иммерсивный опыт, со звуком и видео, которые зависят от Интернета в режиме реального времени и каждый раз меняются при воспроизведении сценария.

Эта работа очень поэтична и индивидуальна, например, в ней есть вопрос «почему так много бабочек», потому что на момент создания, летом 2018 года, автора беспричинно бомбардировали мотыльки и бабочки из окна комнаты, но даже это тип личных и подробных вопросов прекрасно играет в таком абстрактном сюжете.

Он также использует популярный оконный менеджер плитки i3 и дистрибутив Linux, чтобы отразить успокаивающую занудную среду.
Хронометраж составляет примерно 7 минут, начинается медленно и застенчиво, а в конце становится более интенсивным, со звуком быстрой электронной музыки и громким текстом, прочитанным из переводчика Google.

Работа выполнена в студенческие годы в Школе Родченко.
		`
		}
	};

	const images = (() => {
		let array = [];
		for (let i = 1; i < 33; i++) {
			let str = i.toLocaleString('en-US', { minimumIntegerDigits: 3, useGrouping: false });
			array.push(str);
		}
		return array;
	})();

	const getImagePath = (name: string): string => {
		return `/projects/procrastinator/${name}.webp`;
	};
</script>

<Layout id={1}>
	<p class="whitespace-pre-line my-10">
		{data[$lang].text1}
	</p>
	{#each images as image}
		<img class="w-100 my-10 rounded" src={getImagePath(image)} />
	{/each}
</Layout>

<style>
	.container-lg {
		max-width: 1024px;
		display: flex;
		align-self: center;
	}
</style>
