<script>
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import BackgroundCanvas from '$lib/components/Canvas/BackgroundCanvas.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<!--<link rel="stylesheet" href="/tutorial/dark-theme.css">-->
	<title>{$page.url.pathname.split('/').join(' | ') + ' | Agamurian'}</title>
</svelte:head>

<Navbar />
<BackgroundCanvas />
<slot />

<!--{#key data.url}-->
<!--<div in:fly={{ y: -200, duration: 200, delay: 50 }} out:fly={{ y: -200, duration: 50 }}>-->
<!--<slot />-->
<!--</div>-->
<!--{/key}-->
