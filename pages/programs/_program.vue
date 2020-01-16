<template>
	<div class="container">
		<h1 class="text-center pt-5">{{ nameTitle }}</h1>
		<component :is="dynamicComponent" />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: this.nameTitle
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
			return `${this.program.code} - ${this.program.title}`;
		}
	},
    created () {
		const post = require(`~/contents/programs/${this.$route.params.program}.md`)
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