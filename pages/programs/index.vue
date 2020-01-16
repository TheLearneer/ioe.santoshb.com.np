<template>
	<div class="container">
		<div v-for="program in programs" :key="program.code" class="pt-3 pb-3">
			<nuxt-link :to="`/programs/${program.code}`">{{ program.code }} - {{ program.title }}</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData() {
		const resolve = require.context('@/contents/programs/', true, /\.md$/);
		let imports = resolve.keys().map(key => {
			const [, name] = key.match(/\/(.+)\.md$/);
			const file = resolve(key);
			const newData = {};
			for (const attr of Object.keys(file.attributes)) newData[attr] = file.attributes[attr];
			// newData.html = file.html;
			return newData;
		});
		return { programs: imports };
	}
}
</script>