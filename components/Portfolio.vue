<template>
	<section id="portfolio" class="flex flex-col items-center gap-16 pt-40 w-11/12 m-auto h-max">
		<h1 id="portfolioTitle" class="font-semibold text-4xl xl:text-5xl 2xl:text-6xl">Portfolio</h1>
		<div id="portfolioProject" class="grid grid-cols-12 gap-8 2xl:gap-y-20 sm:items-center">
			<img @click="slider.prev()" class="relative w-10 h-10 2xl:top-24" src="../static/assets/arrow-down-solid 2.svg" alt="previous">
				<div ref="container" class="keen-slider col-span-10  2xl:min-h-[40rem] 4xl:">
					<div class="keen-slider__slide" v-for="project in Projects">
						<Project :details="project"/>
					</div>
				</div>
			<img @click="slider.next()" class="relative w-10 h-10 2xl:top-24" src="../static/assets/arrow-down-solid 1.svg" alt="next">
			<div id="portfolioDots" class="col-span-12 justify-self-center">
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
	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import { computed,ref } from 'vue'
	import { useKeenSlider } from 'keen-slider/vue.es'
	import 'keen-slider/keen-slider.min.css'

	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.config({ limitCallbacks: true });

	interface Project {
		id: Number;
		name: String;
		description: String;
		image: String;
		stack: String[];
	}

	const Projects: Project[] = [
		{
			id: 1,
			name: 'Leerecs Music Platform',
			description: 'Actively engaged in web creative design and development · Developed and implemented the artist page, music page and the compare page · Worked on creating and optimizing user friendly responsive web pages',
			image: '../static/assets/images (4).png',
			stack: ['ReactJS', 'Sass', 'Keen-Slider']
		},
		{
			id: 2,
			name: 'Mudakikwa Portfolio',
			description: 'Web developer Mudakikwa Julio Fred has a breathtaking personal website and I was lucky to work on it. I created and optimized responsiveness of different React components and added some animations.',
			image: '../static/assets/d48d3d140230831.623db088d76a0.png',
			stack: ['ReactJS', 'Sass', 'Gsap']
		},
		{
			id: 3,
			name: 'TikTakToe Online',
			description: 'TikTakToe is an online tic tac toe game with integrated video chat capability which uses WebRTC. This is a personal project on which I have been working for a while using vanilla Javascript and NodeJS and deployed on heroku.',
			image: '../static/assets/Desktop - 1.png',
			stack: ['HTML', 'CSS', 'Javascript', 'WebRTC', 'SocketIO']
		}
	]

	export default Vue.extend({
		name: 'Portfolio',
		data() {
			return {
				Projects
			}
		},
		setup() {
			const current = ref(1)
			const [container, slider] = useKeenSlider({
				initial: current.value,
				loop: true,
				slideChanged: (s) => {
					current.value = s.track.details.rel
		    	},
			})

			const dotHelper = computed(() => slider.value ? [...Array(slider.value.track.details.slides.length).keys()] : [])
    		console.log(slider)

			return { container, current, dotHelper, slider }
		},
		methods: {
			customScrollTrigger() {
				gsap.timeline({
				scrollTrigger: {
					trigger: "#portfolio",
					toggleActions: "play reset play reset",
					start: 'top bottom',
					end: '10%',
					scrub: true
				}
				}).fromTo("#portfolioTitle", {y:200}, {y:0, duration:0.2, lazy: false})

				gsap.timeline({
				scrollTrigger: {
					trigger: "#portfolio",
					toggleActions: "play reset play reset",
					start: 'top bottom',
					end: '10%',
					scrub: true
				}
				}).fromTo("#portfolioProject", {y:400}, {y:0, duration:0.2, lazy: false})

				gsap.timeline({
				scrollTrigger: {
					trigger: "#portfolio",
					toggleActions: "play reset play reset",
					start: 'top bottom',
					end: '10%',
					scrub: true
				}
				}).fromTo("#portfolioDots", {y:600}, {y:0, duration:0.2, lazy: false})
			}
		},
		mounted() {
			this.customScrollTrigger()
		}
	})
</script>
