<template>

  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="max-w-screen-md px-4 md:px-8 mx-auto">
      <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">{{ props.post.fields.title }}
      </h1>
      <div class="bg-gray-100 overflow-hidden rounded-lg shadow-lg relative mb-6 md:mb-8">
        <img :src="props.post.fields.featuredImage.fields.file.url"
             loading="lazy" alt="Photo by Minh Pham" class="w-full h-full object-cover object-center"/>
      </div>
      <blockquote class="text-gray-500 sm:text-lg italic border-l-4 pl-4 md:pl-6 mb-6 md:mb-8">“
        {{ props.post.fields.summary }}”
      </blockquote>
      <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
        {{ props.post.fields.content.content[0].content[0].value }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({post: Object})
</script>

<style>
</style>
