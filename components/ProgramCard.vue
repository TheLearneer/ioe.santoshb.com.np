<template>
	<div class="container shadow rounded pb-3 mb-3 h-100">
		<div class="image-top">
			<b-img fluid height="512" :src="programImg" :alt="program.title" class="rounded" />
		</div>
		<div align="center">
			<h3>{{ program.title }}</h3>
		</div>
		<hr>
		<p>
			<i>Code</i>: <b>{{ program.code }}</b>
		</p>
		<p>
			<i>Duration</i>: <b>{{ program.info.duration }}</b>
		</p>
		<hr>
		<div align="center">
			<n-link :to="`/programs/${program.code}`">View Details...</n-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		program: {
			type: Object,
			requited: true,
			default: {}
		}
	},
	computed: {
		programImg() {
			return require(`@/assets/img/${this.program.image}`);
		}
	}
}
</script>

<style scoped>
.image-top {
	position: relative;
	top: -20px;
	width: 90%;
	left: 5%
}
</style>
