<script lang="ts">
	import { lang, backgroundColor } from '$lib/stores';
	import Layout from '../Layout.svelte';
	backgroundColor.set('#771111');

	let data = {
		projectId: 3,
		en: {
			text1: `
			IoT Device for russian goverment official to maintain balance.
			The Project is a joke. Localization of the Doomsday clock.
			
			The clock is build with:
			 - nodeMcu arduido chip
			 - real analog clock
			 - a tiny internet server

			It connects to internet and analyzes data from news, social media and other sources to predict how russian society is close to revolution. Arduino chip handle clock speed, from still to realtime. 00:00 is refered to revolution and end of current goverment.

			The basis for prediction fetched from internet:
			1. Sechin's salary
			2. Bread Prices
			3. Reputation of Police
			4. Frequency of new laws appearing

			Interesting fact: resistor was build of a pencil and clock worked only at certain temperatures, i had to heat them up with head dryer before presentation.
			`
		},
		ru: {
			text1: `
			Устройство IoT для государственного чиновника России для поддержания баланса.
         Проект — это шутка. Локализация часов Судного дня.
                                                                                                      
         Часы построены с:
          - чип nodeMcu arduido
          - настоящие аналоговые часы
          - крошечный интернет-сервер
                                                                                                      
         Он подключается к Интернету и анализирует данные из новостей, социальных сетей и других источников, чтобы предсказать, насколько российское общество близко к революции. Чип Arduino управляет тактовой частотой от неподвижного до реального времени. 00:00 означает революцию и конец нынешнего правительства.
                                                                                                      
         Основа для прогноза взята из интернета:
         1. Зарплата Сечина
         2. Цены на хлеб
         3. Репутация полиции
         4. Частота появления новых законов
                                                                                                                                                                              
         Интересный факт: резистор был сделан из карандаша, а часы работали только при определенных температурах, перед презентацией мне пришлось прогреть их феном.
		`
		}
	};

	const images = ['rc4.webp', 'rc1.webp', 'rc2.webp', 'rc3.webp'];

	const getImagePath = (num: string): string => {
		return `/projects/revolution-clock/${num}`;
	};
</script>

<Layout id={data.projectId}>
	<p class="whitespace-pre-line my-10">
		{data[$lang].text1}
	</p>
	{#each images as image}
		<img class="w-100 my-10 rounded" src={getImagePath(image)} />
	{/each}
</Layout>
