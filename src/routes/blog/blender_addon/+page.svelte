<script lang="ts">
	import { lang, backgroundColor } from '$lib/stores';
	import Layout from '../Layout.svelte';
	backgroundColor.set('#222222');

	let data = {
		en: {
			text1: `i joined wargaming world of warships visual team`,
			title: 'wargaming.net',
			titleLink: 'https://wargaming.net',
			text2: `My task was to set the 3dscan in motion and optimize it for the web.
			`
		},
		ru: {
			text1: ``,
			title: 'wargaming.net',
			titleLink: 'https://wargaming.net',
			text2: `
			`
		}
	};
</script>

<svelte:head>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vime/core@^5/themes/default.css" />
</svelte:head>

<Layout>
<img class="w-100 my-10 rounded" src="/blog/wargaming.webp" />
	<p class="whitespace-pre-line my-10">
	</p>
	<p>
	</p>
	<p class="whitespace-pre-line my-10">
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
