<script lang="ts">
	import { page } from '$app/stores';
	import { backgroundColor, lang, hideNav } from '$lib/stores';
	import { menu } from '$lib/content/common';
	import LangSwitcher from './LangSwitcher.svelte';
	import NavbarMenu from './NavbarMenu.svelte';
	let lastScrollTop = 0;
</script>

<svelte:window
	on:scroll={() => {
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		if (scrollTop > lastScrollTop) {
			hideNav.set(true);
		} else hideNav.set(false);
		lastScrollTop = scrollTop;
	}}
/>

<nav
	class="sticky top-0 p-5 navbar flex"
	class:hide-nav={$hideNav}
	style="background-color: {$backgroundColor}; height:4.5rem"
>
	<section class="text-left w-15">
		<a class="m-0" href="/#">
			<img
				src="/cat_avatar_white_trimmed.webp"
				style="max-height:1.3rem;margin-top:0.3rem; margin-left: 0.3rem;"
				alt="cat logo"
			/>
		</a>
	</section>

	<div class="hidden sm:flex sm:flex-grow">
		<section class="text-center flex-grow">
			{#each menu as item}
				<a class="mx-5" class:active-route={item.href == $page.route.id} href={item.href}
					>{item[$lang]}</a
				>
			{/each}
		</section>
		<section class="w-15">
			<LangSwitcher />
		</section>
	</div>

	<div class="flex flex-grow flex-row-reverse sm:hidden">
		<NavbarMenu />
	</div>
</nav>

<style>
	.navbar {
		z-index: 2000;
		color: #eee;
		font-size: 1.3rem;
		top: 0;
		transition: 0.4s ease-out;
	}
	.hide-nav {
		top: -4.5rem;
		transition: 0.4s ease-out;
	}
	.active-route {
		text-decoration: underline 4px whitesmoke;
	}
</style>
