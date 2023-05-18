<script lang="ts">
	import { lang, backgroundColor } from '$lib/stores';
	import Layout from '../Layout.svelte';
	backgroundColor.set('#444488');

	let data = {
		projectId: 4,
		en: {
			text1: `
			Transfer purely fictional concept created for optimization purposes to real world.
			
			End result looks a unique blend between photograph and sculpture, its flat surface, which reacts to light. A sculpture, which always look at you.
			`
		},
		ru: {
			text1: `
			Перенос исключительно воображемого концепта, разработанного для оптимизайии в реальный мир.

			Результат выглядит как уникальная смесь фотографии и скультуры, плоская поверхность, которая реагирует на свет. Скульптура, которая всегда смотрит на зрителя.
		`
		}
	};

	const images = ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11'];

	const getImagePath = (num: string): string => {
		return `/projects/normalmap/P-AGAMURA-NM-${num}.png`;
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
