<template>
	<div class="flex flex-col sm:flex-row items-center col-span-10">
		<div class="relative flex left-7 w-max h-72 justify-center items-center 2xl:top-24">
			<img class="relative h-72 w-[30rem] 2xl:h-[30rem] 2xl:w-[52rem] 2xl:min-w-[52rem] sm:min-w-[32rem] z-20" src="../static/assets/pngkey 1.png" alt="mac">
			<img class="absolute h-[16rem] z-10 left-14 2xl:h-[27rem] 2xl:left-[5rem] 2xl:-top-20" src="../static/assets/MacBook Pro 14_ - 1.png" alt="project">
		</div>
		<div class="relative flex flex-col gap-4 2xl:gap-6 z-0 -left-14 bg-darkgrey shadow-md rounded-sm pb-6 pl-12 pt-6 h-max 2xl:pt-20 2xl:pb-20 2xl:top-24">
			<h2 class="text-primary-light text-lg 2xl:text-5xl font-semibold">Project Name</h2>
			<p class="font-extralight w-11/12 2xl:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, adipisci?
			</p>
			<ul class="flex gap-4 2xl:text-3xl">
				<li>React</li>
				<li>Html</li>
				<li>CSS</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		name: 'Project'
	})
</script>
