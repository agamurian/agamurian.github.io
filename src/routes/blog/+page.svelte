<script lang="ts">
	import { posts } from '$lib/content/posts';
	import { lang, tagsFilter, backgroundColor } from '$lib/stores';
	backgroundColor.set('#131313');
	const inculedsAny = (array: Array<string>, set: Set<string>) => {
		for (let elem of array) {
			if (set.has(elem)) return true;
		}
		return false;
	};
</script>

<div class="w-100 p-0 pb-5">
  {#each [...posts].reverse() as post}
		{#if inculedsAny(post.tags, $tagsFilter) && post.draft == 0}
			<a href={post.href}>
        <div class="card p-5" style="background-image: url({post.img}); opacity: 0.8; backdrop-filter: blur(5px); background-size: 100%;">
					<p>{post.date}</p>
					<h2>{post[$lang].title}</h2>
					<h5 class="decription">{post[$lang].description}</h5>
					<br />
				</div>
			</a>
		{/if}
	{/each}
</div>

<style>
	.card {
		background-color: #0000;
    border-bottom: 3px solid #6668;
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
