<template>
	<section class="flex flex-col items-center gap-16 pt-40 w-11/12 m-auto h-max">
		<h1 class="font-semibold text-4xl xl:text-5xl 2xl:text-6xl">Portfolio</h1>
		<div class="grid grid-cols-12 gap-8 2xl:gap-y-56 sm:items-center">
			<img class="relative w-10 h-10 2xl:top-24" src="../static/assets/arrow-down-solid 2.svg" alt="previous">
				<Project />
			<img class="relative w-10 h-10 2xl:top-24" src="../static/assets/arrow-down-solid 1.svg" alt="next">
			<div class="col-span-12 justify-self-center">
				<ul class="flex gap-2">
					<li><img src="../static/assets/Ellipse 9.svg" alt=""></li>
					<li><img src="../static/assets/Ellipse 10.svg" alt=""></li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		name: 'Portfolio'
	})
</script>
