<template>
	<section class="grid w-10/12 m-auto h-max sm:h-screen">
		<div class="flex flex-col gap-4 mt-40 mb-40 sm:mb-0 sm:mt-40 2xl:mt-96 4xl:mt-[32rem]">
			<h2 class="font-extralight text-2xl 2xl:text-5xl 4xl:text-8xl text-primary-light">Wassup, I'm Clement</h2>
			<h1 class="font-semibold text-4xl xl:text-5xl 2xl:text-6xl 4xl:text-8xl">Freelance UI Designer & <br />Web Developer</h1>
			<p class="font-extralight text-grey text-base xl:text-xl 2xl:text-2xl 4xl:text-4xl w-full">I will work with you to build the best products that this world <br />has never seen before, and we will have a great time doing it.</p>
			<ul class="flex gap-12">
				<li>
					<img src="../static/assets/github-brands.svg" alt="github">
				</li>
				<li>
					<img src="../static/assets/linkedin-brands.svg" alt="github">
				</li>
				<li>
					<img src="../static/assets/twitter-brands (1).svg" alt="twitter">
				</li>
				<li>
					<img src="../static/assets/instagram-brands.svg" alt="instagram">
				</li>
				<li>
					<img src="../static/assets/stack-overflow-brands.svg" alt="stack overflow">
				</li>
			</ul>
		</div>
		<img class="hidden sm:block absolute z-0 bottom-0 right-20 2xl:right-48 h-5/6" src="../static/assets/20220317_105842copy-removebg 1.png"/>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'Welcome'
	})
</script>
