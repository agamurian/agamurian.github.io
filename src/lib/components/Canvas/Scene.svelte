<script lang="ts">
	import { T, OrbitControls } from '@threlte/core';
	import { BoxGeometry } from 'three';
	import { spring } from 'svelte/motion';
	import { degToRad } from 'three/src/math/MathUtils';
	import { backgroundColor } from '$lib/stores';
	import { colorToRGB, mixRGB, RGBtoColor, mixColor } from '$lib/utils';
	$: boxColors = [
		'#3c42c4',
		'#6e51c8',
		'#a065cd',
		'#ce79d2',
		'#d68fb8',
		'#dda2a3',
		'#eac4ae',
		'#f4dfbe'
	].map((x) => mixColor($backgroundColor, x, 0.35));
	let y = 0;
</script>

<svelte:window bind:scrollY={y} />
<T.PerspectiveCamera makeDefault position={[10, -y / 120 + 12, 10]} fov={24}>
	<OrbitControls
		maxPolarAngle={degToRad(80)}
		enableZoom={false}
		enableRotate={false}
		target={{ x: 2, y: -y / 800, z: 2 }}
	/>
</T.PerspectiveCamera>

{#each { length: 20 } as h, x}
	{#each { length: 20 } as v, y}
		{#if x % 2 == 0 && y % 2 == 0}
			<T.Group position={[x - 4.5, 0.5, y - 4.5]}>
				<T.Mesh>
					<T.BoxGeometry />
					<T.MeshBasicMaterial
						args={[
							{
								color: boxColors[Math.floor(Math.random() * boxColors.length)],
								opacity: 0.35,
								transparent: true
							}
						]}
					/>
				</T.Mesh>
				<T.LineSegments>
					<T.EdgesGeometry args={[new BoxGeometry()]} />

					<T.MeshBasicMaterial
						args={[
							{
								color: mixColor($backgroundColor, '#dddddd', 0.33)
							}
						]}
					/>
				</T.LineSegments>
			</T.Group>
		{/if}
	{/each}
{/each}
