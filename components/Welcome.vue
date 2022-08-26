<template>
	<section id="welcome" class="grid w-10/12 m-auto h-max sm:h-screen">
		<div class="flex flex-col gap-4 mt-40 mb-40 sm:mb-0 sm:mt-44 2xl:mt-96 4xl:mt-[32rem]">
			<h2 id="subtitle" class="font-extralight text-2xl 2xl:text-5xl 4xl:text-8xl text-primary-light">Wassup, I'm Clement</h2>
			<h1 id="title" class="font-semibold text-4xl xl:text-5xl 2xl:text-6xl 4xl:text-8xl">Freelance UI Designer & <br />Web Developer</h1>
			<p id="description" class="font-extralight text-grey text-base xl:text-xl 2xl:text-2xl 4xl:text-4xl w-full">I will work with you to build the best products that this world <br />has never seen before, and we will have a great time doing it.</p>
			<ul id="socials" class="flex gap-12">
				<li>
					<a href="https://github.com/clementus360" target="_blank"><img src="../static/assets/github-brands.svg" alt="github"></a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/ishimwe-clement-munyaneza-401575176/" target="_blank"><img src="../static/assets/linkedin-brands.svg" alt="github"></a>
				</li>
				<li>
					<a href="https://twitter.com/clementus360" target="_blank"><img src="../static/assets/twitter-brands (1).svg" alt="twitter"></a>
				</li>
				<li>
					<a href="https://www.instagram.com/clementus_360" target="_blank"><img src="../static/assets/instagram-brands.svg" alt="instagram"></a>
				</li>
				<li>
					<a href="https://stackoverflow.com/users/8654504/clement" target="_blank"><img src="../static/assets/stack-overflow-brands.svg" alt="stack overflow"></a>
				</li>
			</ul>
		</div>
		<img id="image" class="hidden sm:block absolute z-0 bottom-0 right-20 2xl:right-48 h-5/6" src="../static/assets/20220317_105842copy-removebg 1.png"/>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue';
	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.config({ limitCallbacks: true });

	export default Vue.extend({
		name: 'Welcome',
		methods: {
			customScrollTrigger() {
				gsap.timeline({
				scrollTrigger: {
					trigger: "#welcome",
					toggleActions: "play reset play reset",
					start: '10%',
					end: '100%',
					scrub: true
				}
				}).fromTo("#subtitle", {y:0}, {y:-250, duration:0.6, lazy: false})

				gsap.timeline({
					scrollTrigger: {
						trigger: "#welcome",
						toggleActions: "play reset play reset",
						start: '10%',
						end: '100%',
						scrub: true
					}
				}).fromTo("#title", {y:0}, {y:-200, duration:0.8, lazy: false})

				gsap.timeline({
					scrollTrigger: {
						trigger: "#welcome",
						toggleActions: "play reset play reset",
						start: '10%',
						end: '100%',
						scrub: true
					}
				}).fromTo("#description", {y:0}, {y:-150, duration:1, lazy: false})

				gsap.timeline({
					scrollTrigger: {
						trigger: "#welcome",
						toggleActions: "play reset play reset",
						start: '10%',
						end: '100%',
						scrub: true
					}
				}).fromTo("#socials", {y:0}, {y:-100, duration:1.2, lazy: false})

				gsap.timeline({
					scrollTrigger: {
						trigger: "#welcome",
						toggleActions: "play reset play reset",
						start: '10%',
						end: '100%',
						scrub: true
					}
				}).fromTo("#image", {x:0}, {x:200, duration:1.6})

			}
		},
		mounted() {
			gsap.fromTo("#subtitle", {opacity:0, y:200}, {opacity:1, y:0, duration:0.8})
			gsap.fromTo("#title", {opacity:0, y:200}, {opacity:1, y:0, duration:1})
			gsap.fromTo("#description", {opacity:0, y:200}, {opacity:1, y:0, duration:1.2})
			gsap.fromTo("#socials", {opacity:0, y:200}, {opacity:1, y:0, duration:1.4})
			gsap.fromTo("#image", {opacity:0, x:200}, {opacity:1, x:0, duration:1.4})

			this.customScrollTrigger()

		}
	})
</script>
