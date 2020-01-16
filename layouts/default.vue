<template>
  <div>
	<AppNavbar />
    <nuxt />
  </div>
</template>

<script>
export default {
	components: {
		AppNavbar: () => import('@/components/Navbar')
	}
}
</script>