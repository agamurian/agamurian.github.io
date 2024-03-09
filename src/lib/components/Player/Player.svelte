<script lang="js">
	import { PlaySquareTwotone } from 'svelte-ant-design-icons';
	import { PauseCircleTwotone } from 'svelte-ant-design-icons';
	export let audio=''
	export let playing = false
</script>

<div class="black long">
	 
	{#if playing}
	<PlaySquareTwotone style="display:inline; margin-right: 0.3rem;" />
	{:else}
	<PauseCircleTwotone style="display:inline; margin-right: 0.3rem;" />
	{/if}
	==================|-------------------------------------------------
</div>

<style lang="css">

	.long{width: calc(100% - 4rem);margin:auto;display: flex;padding:0.5rem;margin:1.15rem;position: sticky;}
	.black{
		opacity: 0.4;background-color: #032315; border-radius: 1.0rem; box-sizing: border-box; border: 3px solid #8883;
	}
</style>
