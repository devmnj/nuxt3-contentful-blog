<template>
	<div>
		<News />
	</div>
</template>

<script setup>
	definePageMeta({
		layout: "custom",
	});

	const route = useRoute()
	const id = route.params.id;
</script>

<style>

</style>
