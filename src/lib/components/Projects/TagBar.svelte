<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';
	import { lang, backgroundColor, tagsFilter, hideNav } from '$lib/stores';
	import { tags } from '$lib/content/projects';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';
	let localTags = tags;
	let filter: Set<string> = get(tagsFilter); // new Set(getUrlParams('filter'));
	function toggleTag(key: string): void {
		if (filter.has(key)) {
			filter.delete(key);
		} else {
			filter.add(key);
		}
		localTags = localTags;
		tagsFilter.set(filter);
		setUrlParams('filter', Array.from(filter));
	}

	let showTag = false;
	const isTagActive = (key: string) => filter.has(key);

	function getUrlParams(key: string): Array<string> {
		if ($page.url.searchParams) {
			return $page.url.searchParams.get(key) ? $page.url.searchParams.get(key).split(' ') : [];
		} else return [];
	}
	function setUrlParams(key: string, params: Array<string>): void {
		$page.url.searchParams.set(key, params.join(' '));
		if ($page.url.searchParams) {
			goto(`?${$page.url.searchParams.toString()}`);
		}
	}

	onMount(() => {
		// get tags from search query
		let params = getUrlParams('filter');
		if (params.length != 0) {
			filter = new Set(params);
			tagsFilter.set(filter); // set store
			localTags = localTags; //update each block
		}
	});
</script>

<div
	in:fly={{ y: -50, duration: 150, delay: 300 }}
	class="flex w-100 m-0 p-4 text-left sticky top-0"
	style="transition: 0.4s ease-out;top: {$hideNav
		? '0rem'
		: ' 4.5rem'}; z-index: 1000;background: linear-gradient({$backgroundColor +
		'ff'},{$backgroundColor + '00'});"
>
	<div class="hidden sm:flex sm:flex-grow">
		<div class="flex-grow">
			{#each localTags as tag}
				<button
					class:active={isTagActive(tag.key)}
					class="m-2 tag"
					on:click={() => toggleTag(tag.key)}
				>
					<span style="color: #888"># </span>{tag[$lang]}
				</button>
			{/each}
		</div>
	</div>

	<div class="flex flex-grow flex-row-reverse sm:hidden">
		<button class="m-2 p-2 tagbutton rounded" on:click={() => (showTag = !showTag)}
			>{showTag ? '↑' : '↓'} #</button
		>
		{#if showTag}
			<div class="flex-grow">
				{#each localTags as tag}
					<button
						class:active={isTagActive(tag.key)}
						class="m-2 tag"
						on:click={() => toggleTag(tag.key)}
					>
						<span style="color: #888"># </span>{tag[$lang]}
					</button>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.tag {
		background-color: transparent;
		padding: 0.5rem 1rem 0.5rem 1rem;
		border-radius: 0.25rem;
		color: #aaa;
		border: 3px solid #8888;
		transition: 0.1s ease-out;
	}
	.active {
		background-color: #eeeb;
		color: #111;
		padding: 0.5rem 1rem 0.5rem 1rem;
		border-radius: 0.25rem;
		border: 3px solid #eee0;
	}
	.tagbutton {
		min-width: 3rem;
		background-color: #8888;
	}
</style>
