<template>
	<section id="about" class="grid w-11/12 sm:w-6/12 m-auto h-max py-40 overflow-hidden">
		<div class="flex flex-col gap-6">
			<h1 id="aboutTitle" class="font-semibold text-center sm:text-left text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl">Who is me?</h1>
			<p id="aboutText" class="text-center sm:text-left font-extralight text-grey w-full sm:w-4/5 md:w-full text-base md:text-xl xl:text-base 2xl:text-2xl 4xl:text-4xl">
				I am a Rwanda based web developer with 5 years of experience navigating the treacherous yet fun technologies of the modern internet.
				<br /><br />
				My skillset includes HTML, CSS, Javascript and an ever increasing list of supporting technologies including (but probably not limited to): Typescript, ReactJS, NodeJS, TailwindCSS, GSAP, Socket.io, VueJS, and WebRTC.
				<br /><br />
				Recently I have been planning to improve my skillset by adding Python, Angular, Svelte, ThreeJS, GraphQL and Flutter. If you have any advice on which one I should start with among any of these, feel free to contact me any time😀.
			</p>
			<button @click="scroll('footer')" id="aboutButton" class="self-center sm:self-start bg-transparent text-primary-light p-3 pl-12 pr-12 w-max border-2 border-primary-light hover:bg-primary-light hover:text-black hover:text-lg">Say hello</button>
		</div>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue'
	import scroll from './utils/scroller'
	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	gsap.registerPlugin(ScrollTrigger);

	export default Vue.extend({
		name: 'About',
		methods: {
			scroll,
		},
	})
</script>
