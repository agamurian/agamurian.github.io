<script lang="ts">
	import { lang, backgroundColor } from '$lib/stores';
	import Layout from '../Layout.svelte';
	backgroundColor.set('#000000');

	let data = {
		en: {
			text1: `
			`
		},
		ru: {
			text1: `
		`
		}
	};

	const images = [
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12',
		'13',
		'17_1',
		'17_2',
		'18',
		'19',
		'20',
		'21',
		'22',
		'23',
		'24',
		'25'
	];

	const getImagePath = (num: string): string => {
		return `/projects/hga/F_HCGP_${num}.png`;
	};
</script>

<Layout>
	<p class="whitespace-pre-line my-10">
		{data[$lang].text1}
	</p>
	{#each images as image}
		<img class="w-100 my-10 rounded" src={getImagePath(image)} />
	{/each}
</Layout>
