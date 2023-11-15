<script lang="ts">
	import { page } from '$app/stores';
	import { lang } from '$lib/stores';
	import { posts } from '$lib/content/posts';
	import LocalNav from '$lib/components/Navbar/LocalNav.svelte';
	const post = posts.find((x: projectType) => x.href == $page.url.pathname);
</script>

<LocalNav>
	<a href="/blog">Blog</a> <span class="mx-4 opacity-50">></span>
	<u>{post[$lang].title}</u>
</LocalNav>
<div class="p-5">
	<p class="date">{post.date}</p>
	<h1>{post[$lang].title}</h1>
	<h5>{post[$lang].description}</h5>
	<hr style="border-top: 3px dashed #8888" />
	<div class="container-lg">
		<slot />
	</div>
</div>

<style>
	.container-lg {
		max-width: 1200px;
		display: block;
		margin: auto;
		align-self: center;
	}
</style>
