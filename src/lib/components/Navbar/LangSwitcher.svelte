<script lang="ts">
	import { GlobalOutlined } from 'svelte-ant-design-icons';
	import { lang } from '$lib/stores';
	const changeLang = () => {
		if ($lang === 'en') {
			lang.set('ru');
		} else if ($lang === 'ru') {
			lang.set('en');
		}
	};
</script>

<button class="m-0 mr-2" on:click={changeLang}>
	<GlobalOutlined style="display:inline; margin-right: 0.3rem;" />{$lang}
</button>
