<script lang="ts">
	import { lang, backgroundColor } from '$lib/stores';
	import { reveal } from 'svelte-reveal';
	import { home } from '$lib/content/common';
	backgroundColor.set('#a73525');
	const data = {
		skillset: { en: 'Skillset', ru: 'Навыки' },
		programming: { en: 'Programming', ru: 'Программирование' },
		programming_s: [
			{ en: 'html / css', ru: 'html / css', percent: 90 },
			{ en: 'svelte / sveltekit', ru: 'svelte / sveltekit', percent: 80 },
			{ en: 'javascript', ru: 'javascript', percent: 55 },
			{ en: 'typescript', ru: 'typecript', percent: 35 },
			{ en: 'threejs', ru: 'threejs', percent: 30 },
			{ en: 'vue', ru: 'css', percent: 25 },
			{ en: 'react', ru: 'react', percent: 10 },
			{ en: 'linux / bash', ru: 'linux / bash', percent: 75 },
			{ en: 'python', ru: 'python', percent: 60 },
			{ en: 'nodejs', ru: 'nodejs', percent: 25 },
			{ en: 'ruby', ru: 'ruby', percent: 20 },
			{ en: 'architecture / concepts', ru: 'архитектуры и концепты', percent: 35 },
			{ en: 'algorithms / data structures', ru: 'алгоритмы и структуры данных', percent: 16 }
		],
		software: { en: 'Computer Graphics', ru: 'Компьютерная Графика' },
		software_s: [
			{ en: 'blender', ru: 'bledner', percent: 90 },
			{ en: 'gimp', ru: 'gimp', percent: 85 },
			{ en: 'unity', ru: 'unity', percent: 75 },
			{ en: 'threejs', ru: 'threejs', percent: 30 },
			{ en: 'substance', ru: 'substance', percent: 10 },
			{ en: 'houdini', ru: 'houdini', percent: 8 }
		],
		softskills: { en: 'What else', ru: 'Что еще' },
		softskills_s: [
			{ en: 'creativity', ru: 'креативность', percent: 100 },
			{ en: 'design', ru: 'дизайн', percent: 85 },
			{ en: 'managment', ru: 'менеджмент', percent: 65 },
			{ en: 'drawing', ru: 'графика', percent: 50 },
			{ en: 'painting', ru: 'живопись', percent: 35 }
		]
	};
</script>

<section class="p-5 title pointer-events-none" style="min-height: 70vh;">
	{#each home.title[$lang] as string, i}
		<span class="whitespace-pre-wrap pointer-events-none" use:reveal={{ delay: i * 300 }}
			>{string}</span
		>
	{/each}
</section>
<div class="spacer" />
<section class="p-5">
	<h1 style="color: #eeea">{data.skillset[$lang]}:</h1>
	<div class="my-5 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 gap-10 auto-cols-max">
		<div class="col-auto lg:col-start-1 lg:col-end-3 xl:col-auto card">
			<div class="card-header">
				<h4>{data.programming[$lang]}:</h4>
			</div>
			<hr />
			<ul class="p-2 pr-10 column">
				{#each data.programming_s as skill}
					<div class="w-full h-8 rounded-full m-4 relative bg-progress">
						<div class="h-8 rounded-full absolute fg-progress" style="width: {skill.percent}%" />
						<li style="position: absolute;" class="m-1 mx-3">{skill[$lang]}</li>
					</div>
				{/each}
			</ul>
		</div>
		<div class="col-auto card">
			<div class="card-header">
				<h4>{data.software[$lang]}:</h4>
			</div>
			<hr />
			<ul class="p-2 pr-10">
				{#each data.software_s as skill}
					<div class="w-full h-8 rounded-full m-4 relative bg-progress">
						<div class="h-8 rounded-full absolute fg-progress" style="width: {skill.percent}%" />
						<li style="position: absolute;" class="m-1 mx-3">{skill[$lang]}</li>
					</div>
				{/each}
			</ul>
		</div>
		<div class="col-auto card">
			<div class="card-header">
				<h4>{data.softskills[$lang]}:</h4>
			</div>
			<hr />
			<ul class="p-2 pr-10">
				{#each data.softskills_s as skill}
					<div class="w-full h-8 rounded-full m-4 relative bg-progress">
						<div class="h-8 rounded-full absolute fg-progress" style="width: {skill.percent}%" />
						<li style="position: absolute;" class="m-1 mx-3">{skill[$lang]}</li>
					</div>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style>
	.bordered {
		border: 1px solid blue;
	}
	.title {
		line-height: 1;
		font-size: min(15vw, 9rem);
	}

	.spacer {
		width: 100%;
		height: 1rem;
	}

	.card {
		/*
		background-color: #2221;
		border: 0.2rem #eee3 solid;
		*/
		border-radius: 0.25rem;
	}

	.bg-progress {
		transform: translateZ(0);
		outline: 2px solid #eee3;
		background-color: #4444;
	}

	.fg-progress {
		background-color: #0005;
	}

	.card-header {
		/*
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		backdrop-filter: blur(0.5rem);
		border: 2px solid #eee3;
		border-bottom: none;
		*/
		padding: 0.8rem 1.2rem 0.8rem 1.2rem;
	}

	li {
		text-transform: capitalize;
	}

	@media (min-width: 768px) {
		.card {
			transition: 0.4s ease-out;
		}
		.bg-progress {
			transition: 0.4s ease-out;
		}
	}

	hr {
		border-top: 3px dashed #eee7;
		margin: 0;
	}
</style>
