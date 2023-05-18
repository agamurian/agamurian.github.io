<script>
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import BackgroundCanvas from '$lib/components/Canvas/BackgroundCanvas.svelte';
	import { page } from '$app/stores';
	$: title = $page.url.pathname.split('/').join(' | ') + ' | Agamurian';
	const description = 'Designer, Dveloper, Media-Artist';
</script>

<svelte:head>
	<!--<link rel="stylesheet" href="/tutorial/dark-theme.css">-->
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="description" content={description} />
	<meta name="twitter:description" content={description} />
	<meta property="og:description" content={description} />

	<meta property="og:image" content="" />
	<meta property="og:image:width" content="200" />
	<meta property="og:image:height" content="200" />
	<meta name="twitter:image" content="" />
	<meta itemprop="image" content="" />
</svelte:head>

<Navbar />
<BackgroundCanvas />
<slot />

<!--{#key data.url}-->
<!--<div in:fly={{ y: -200, duration: 200, delay: 50 }} out:fly={{ y: -200, duration: 50 }}>-->
<!--<slot />-->
<!--</div>-->
<!--{/key}-->
