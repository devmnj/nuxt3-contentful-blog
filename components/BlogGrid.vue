<template>
	<div class="bg-white py-6 sm:py-8 lg:py-12 ">
		<div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
			<div class="mb-10 md:mb-16">
				<h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
					What's Up !
				</h2>
				<p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
					This is a section of some simple filler text, also known as
					placeholder text. It shares some characteristics of a real written
					text but is random or otherwise generated.
				</p>
			</div>
			<!-- Loading Skelton -->
			  <div v-if="!data"
				class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8 animate-pulse">
				<PostCard  />
				<PostCard  />	
				<PostCard  />
				<PostCard  />
			</div>  
			<!-- Loading Posts -->
			<div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
				<span v-for="post in data?.posts" :key="post.id">
					<PostCard :title="post.title" :image="post.featured_image" :id="post.id" /> 
				</span>
			</div>
		</div>
	</div>
</template>

<script setup>
 const { data, error } =await useAsyncData("posts", () => GqlPosts());
</script>
