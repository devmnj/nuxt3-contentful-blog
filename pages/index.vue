<template>
  <div class="flex justify-center">
    <div class="p-1 h-full w-3/4">
      <Hero2 />
      <Features />
      <!--  {{data}} -->
      <BlogGrid />
      <OurTeam />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>
