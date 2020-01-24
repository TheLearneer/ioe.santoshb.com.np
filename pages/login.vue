<template>
	<div>
		<b-button @click="login()" v-if="!$auth.loggedIn">LOGIN</b-button>
		<div v-if="$auth.loggedIn">
			{{ $auth.user }}
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		login() {
			this.$auth.loginWith('github');
		}
	}
}
</script>
