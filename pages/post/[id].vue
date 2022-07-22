<template>
	<div>
		<SinglePost :post="data" />
	</div>
</template>

<script setup>
import {useAsyncData, useNuxtApp} from "nuxt/app";

  definePageMeta({
		layout: "custom",
	});

	const route = useRoute()
	const id = route.params.id;
  const {$client}=useNuxtApp()
  const {data} =await useAsyncData(id,()=> $client.getEntry(id));

</script>

<style>

</style>
