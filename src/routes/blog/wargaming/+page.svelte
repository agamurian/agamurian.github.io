<script lang="js">
	import { lang, backgroundColor } from '$lib/stores';
	import Layout from '../Layout.svelte';
	backgroundColor.set('#500000');

	let data = {
		en: {
			text1: `i joined wargaming world of warships visual team`,
			title: 'wargaming.net',
			titleLink: 'https://wargaming.net',
			text2: `Writting addons, batch processing files, providing expertise and knowledge, connecting tech and art side of a visual team of World of Warships`
		},
		ru: {
			text1: `i joined wargaming world of warships visual team`,
			title: 'wargaming.net',
			titleLink: 'https://wargaming.net',
			text2: `Writting addons, batch processing files, providing expertise and knowledge, connecting tech and art side of a visual team of World of Warships`
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
