<script>
	import { Fog, Canvas, InteractiveObject, OrbitControls, T } from '@threlte/core';
	import { spring } from 'svelte/motion';
	import { backgroundColor } from '$lib/stores';
	import { colorToHex, hexToColor } from '$lib/utils';
	import { Pass } from '@threlte/core';
	import { AdaptiveToneMappingPass } from 'three/examples/jsm/postprocessing/AdaptiveToneMappingPass';

	import SceneWrapper from './Scene.svelte';

	const scale = spring(1);
</script>

<div style="background-color: {$backgroundColor}; transition: 0.4s ease-out;">
	<Canvas>
		<!--<Fog color={colorToHex($backgroundColor)} near={1.2} far={50} />-->
		<!--<Pass pass={new AdaptiveToneMappingPass()} />-->

		<SceneWrapper />
	</Canvas>
</div>

<style>
	div {
		z-index: -1;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
</style>
