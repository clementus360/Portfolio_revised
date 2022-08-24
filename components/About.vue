<template>
	<section class="grid w-11/12 sm:w-6/12 m-auto h-max">
		<div class="flex flex-col gap-4 mt-20 sm:mt-40 2xl:mt-80 4xl:mt-96">
			<h1 class="font-semibold text-4xl text-center sm:text-left">Who is me?</h1>
			<p class="text-center sm:text-left font-extralight text-grey w-full sm:w-4/5 text-base">
				I am a Rwanda based web developer with 5 years of experience navigating the treacherous yet fun technologies of the modern internet.
				<br /><br />
				My skillset includes HTML, CSS, Javascript and an ever increasing list of supporting technologies including (but probably not limited to): Typescript, ReactJS, NodeJS, TailwindCSS, GSAP, Socket.io, VueJS, and WebRTC.
				<br /><br />
				Recently I have been planning to improve my skillset by adding Python, Angular, Svelte, ThreeJS, GraphQL and Flutter. If you have any advice on which one I should start with among any of these, feel free to contact me any time😀.
			</p>
			<button class="self-center sm:self-start bg-transparent text-primary-light p-3 pl-12 pr-12 w-max border-2 border-primary-light">Say hello</button>
		</div>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		name: 'About'
	})
</script>
