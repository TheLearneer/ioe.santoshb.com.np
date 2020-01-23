<template>
	<div class="pb-4">		
		<b-img fluid :src="programImg" :alt="program.title" class="shadow" />
		<div class="container pt-2">
			<h1 class="text-center pt-5"><u>{{ nameTitle }}</u></h1>
			<component :is="dynamicComponent" />
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: `${this.program.code} - ${this.nameTitle}`
		}
	},
	data() {
		return {
			dynamicComponent: null,
			program: null
		}
	},
	computed: {
		nameTitle() {
			return `Bachelor's Degree in ${this.program.title}`;
		},
		programImg() {
			return require(`@/assets/img/${this.program.image}`);
		}
	},
    created () {
		const post = require(`~/contents/programs/${this.$route.params.program.toUpperCase()}.md`)
		const newData = {};
		for (const attr of Object.keys(post.attributes)) newData[attr] = post.attributes[attr];
		// newData.html = post.html;
		this.dynamicComponent = post.vue.component;
		this.program = newData;
    }
}
</script>

<style scoped>
h1, h2, h3, h4 {
	padding-bottom: 3rem;
}

.frontmatter-markdown >>> h1, .frontmatter-markdown >>> h2, .frontmatter-markdown >>> h3 {
	padding-top: 3rem;
}

.frontmatter-markdown >>> h4, .frontmatter-markdown >>> h5 {
	padding-top: 1.5rem;
}

</style>