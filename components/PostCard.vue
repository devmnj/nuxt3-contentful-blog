<template>
  <div>
    <NuxtLink
      :to="`/news/${props.id}`"
      class="group h-48 md:h-64 xl:h-96 flex flex-col bg-gray-100 rounded-lg shadow-lg overflow-hidden relative"
    >
      <img :src="image" />

      <div
        class="bg-gradient-to-t from-gray-800 md:via-transparent to-transparent absolute inset-0 pointer-events-none"
      ></div>

      <div class="relative p-4 mt-auto">
        <span class="block text-gray-200 text-sm">April 07, 2021</span>
        <h2
          class="text-white text-xl font-semibold transition duration-100 mb-2"
        >
          {{ props.title }}
        </h2>

        <span class="text-indigo-300 font-semibold">Read more</span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  image: String,
  id: String,
  date: String,
});
</script>
