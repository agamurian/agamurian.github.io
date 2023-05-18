<script lang="ts">
	import { fly } from 'svelte/transition';
	import { backgroundColor, hideNav } from '$lib/stores';
</script>

<div
	in:fly={{ y: -50, duration: 150, delay: 300 }}
	class="flex w-100 m-0 p-5 sticky top-0"
	style="transition: 0.4s ease-out; top: {$hideNav
		? '0rem'
		: ' 4.5rem'}; background: linear-gradient({$backgroundColor + 'ff'},{$backgroundColor + '00'});"
>
	<slot />
</div>
