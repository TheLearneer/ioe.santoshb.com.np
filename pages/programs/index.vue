<template>
	<div class="container pt-5">
		<b-row>
			<b-col v-for="program in programs" :key="program.code" class="pt-3 pb-5" :lg="program.flex" sm="12">
				<ProgramCard :program="program" />
			</b-col>
		</b-row>
	</div>
</template>

<script>
export default {
	components: {
		ProgramCard: () => import('@/components/ProgramCard')
	},
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