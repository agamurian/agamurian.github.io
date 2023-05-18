<script lang="ts">
	import { projects } from '$lib/content/projects';
	import { lang, tagsFilter, backgroundColor } from '$lib/stores';
	import TagBar from '$lib/components/Projects/TagBar.svelte';
	backgroundColor.set('#3d3d3d');
	const inculedsAny = (array: Array<string>, set: Set<string>) => {
		for (let elem of array) {
			if (set.has(elem)) return true;
		}
		return false;
	};
</script>

<TagBar />

<div class="w-100 p-0 py-5">
	{#each projects as project}
		{#if inculedsAny(project.tags, $tagsFilter) && project.draft == 0}
			<a href={project.href}>
				<div class="card p-5">
					<h2>{project[$lang].title}</h2>
					<h5 class="decription">{project[$lang].description}</h5>
					<br />
					{#each project.tags as tag}
						<span class="tag mx-1">{tag}</span>
					{/each}
				</div>
			</a>
		{/if}
	{/each}
</div>

<style>
	.card {
		background-color: #0000;
		transition: 0.4s ease-out;
	}
	.card:hover {
		background-color: #8888;
	}

	@media (min-width: 768px) {
		.card:hover {
			backdrop-filter: blur(1rem);
		}
	}
	.description {
		font: monospace;
	}

	.tag {
		border-radius: 0.25rem;
		padding: 0.25rem 0.5rem 0.25rem 0.5rem;
		background-color: #8888;
		width: auto;
		margin-top: 2rem;
		text-decoration: none !important;
	}

	a {
		text-decoration: none !important;
	}
</style>
