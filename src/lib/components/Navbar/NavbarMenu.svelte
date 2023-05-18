<script>
	import { page } from '$app/stores';
	import LangSwitcher from './LangSwitcher.svelte';
	import { lang, backgroundColor } from '$lib/stores';
	import { menu } from '$lib/content/common';
	import { fade } from 'svelte/transition';
	import { MenuOutlined } from 'svelte-ant-design-icons';
	let showMenu = false;
	let menuButtonElement;
</script>

<button bind:this={menuButtonElement} class="m-0" on:click={() => (showMenu = !showMenu)}>
	<MenuOutlined style="display:inline; margin-right: 0.3rem;" />
</button>

{#if showMenu}
	<div transition:fade={{ duration: 250 }} class="outclick" on:click={() => (showMenu = false)}>
		<div class="menu">
			<menu>
				{#each menu as item}
					<li class="my-2">
						<a
							on:click={() => (showMenu = false)}
							class="mx-5"
							class:active-route={item.href == $page.route.id}
							href={item.href}>{item[$lang]}</a
						>
					</li>
				{/each}
			</menu>
			<hr />
			<div class="mx-5">
				<LangSwitcher />
			</div>
		</div>
	</div>
{/if}

<style>
	.menu {
		position: fixed;
		z-index: 1000;
		top: 5rem;
		right: 1.6rem;
		background-color: #eeee;
		padding: 2.5rem;
		color: black;
		border-radius: 0.25rem;
	}
	hr {
		margin-top: 1.5rem;
		margin-bottom: 1.25rem;
		border-top: 3px solid #1115;
	}
	.outclick {
		z-index: 900;
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: #0044;
	}
	.active-route {
		text-decoration: underline 4px #111;
	}
</style>
