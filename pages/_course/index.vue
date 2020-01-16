<template>
	<div class="container">
		<component :is="dynamicComponent" />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: `${this.course.code} - ${this.course.title}`
		}
	},
	data() {
		return {
			dynamicComponent: null,
			course: null
		}
	},
    created () {
		const post = require(`~/contents/courses/${this.$route.params.course}.md`)
		const newData = {};
		for (const attr of Object.keys(post.attributes)) newData[attr] = post.attributes[attr];
		// newData.html = post.html;
		this.dynamicComponent = post.vue.component;
		this.course = newData;
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
</style>