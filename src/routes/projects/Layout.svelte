<script lang="ts">
	export let id: number;
	import { lang } from '$lib/stores';
	import { projects } from '$lib/content/projects';
	import LocalNav from '$lib/components/Navbar/LocalNav.svelte';
	let project = projects.find((x) => x.id == id);
</script>

<LocalNav>
	<a href="/projects">Projects</a> <span class="mx-4 opacity-50">></span>
	<u>{project[$lang].title}</u>
</LocalNav>
<div class="p-5">
	<p class="date">{project.date}</p>
	<h1>{project[$lang].title}</h1>
	<h5>{project[$lang].description}</h5>
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
