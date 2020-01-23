<template>
	<div class="container pb-5">
		<component :is="dynamicComponent" />
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: `${this.course.title} | Syllabus, Course Objective, Notes, Reference and more!`
		}
	},
	data() {
		return {
			dynamicComponent: null,
			course: null
		}
	},
    created() {
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
/*
.frontmatter-markdown >>> ol {
    counter-reset: item;
}
.frontmatter-markdown >>> ol > li {
    counter-increment: item;
}
.frontmatter-markdown >>> ol ol > li {
    display: block;
}
.frontmatter-markdown >>> ol ol > li:before {
    content: counters(item, ".") " ";
    margin-left: -20px;
	margin-right: 10px;
}*/
</style>
