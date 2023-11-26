<template>
	<section id="portfolio" class="flex sm:grid sm:place-items-center flex-col items-center gap-16 w-11/12 m-auto h-max py-40">
		<h1 id="portfolioTitle" class="font-semibold text-4xl xl:text-5xl 2xl:text-6xl">Portfolio</h1>
		<div id="portfolioProject" class="grid grid-cols-12 h-max gap-8 2xl:gap-y-20 sm:items-center">
			<img @click="slider.prev()" class="relative w-10 h-10 hover:w-12 hover:h-12 cursor-pointer transition-all 2xl:top-24" src="../static/assets/arrow-down-solid 2.svg" alt="previous">
				<div ref="container" class="keen-slider col-span-10  2xl:min-h-[40rem]">
					<div class="keen-slider__slide h-max" v-for="project in Projects">
						<Project :details="project"/>
					</div>
				</div>
			<img @click="slider.next()" class="relative w-10 h-10 hover:w-12 hover:h-12 cursor-pointer transition-all 2xl:top-24" src="../static/assets/arrow-down-solid 1.svg" alt="next">
			<div id="portfolioDots" class="col-span-12 justify-self-center">
				<ul class="flex gap-2">
					<li
						v-for="(_slide, idx) in dotHelper"
						@click="slider.moveToIdx(idx)"
        				:key="idx"
					>
						<img class="w-6 h-6 hover:w-8 hover:h-8 transition-all cursor-pointer" :src="`/assets/${current === idx? 'Ellipse9.svg':'Ellipse10.svg' }`" :alt="idx">
					</li>
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
		link: String;
		stack: String[];
	}

	const Projects: Project[] = [
		{
			id: 1,
			name: 'Musica web app',
			description: "From twitter's #coding360challenge, this is an almost fully functional music streaming platform with all the basic capabilities like playing music, browsing songs and albums, liking, creating playlists,...",
			image: 'https://res.cloudinary.com/dpfonnjv3/image/upload/v1666774475/Portfolio/Unknown_uiq9vl.png',
			link: 'https://musica-delta.vercel.app',
			stack: ['ReactJS', 'TailwindCSS']
		},
		{
			id: 2,
			name: 'Mudakikwa Portfolio',
			description: 'Web developer Mudakikwa Julio Fred has a breathtaking personal website and I was lucky to work on it. I created and optimized responsiveness of different React components and added some animations.',
			image: 'https://res.cloudinary.com/dpfonnjv3/image/upload/v1661690542/Portfolio/mudakikwa_ervaah.png',
			link: 'https://mudakikwa.com/',
			stack: ['ReactJS', 'Sass', 'Gsap']
		},
		{
			id: 3,
			name: 'Leerecs Music Platform',
			description: 'Actively engaged in web creative design and development · Developed and implemented the artist page, music page and the compare page · Worked on creating and optimizing user friendly responsive web pages',
			image: 'https://res.cloudinary.com/dpfonnjv3/image/upload/v1661690003/Portfolio/images_4_rrpfco.png',
			link: 'https://leerecs.com/',
			stack: ['ReactJS', 'Sass', 'Keen-Slider']
		},
		{
			id: 4,
			name: 'TikTakToe Online',
			description: 'TikTakToe is an online tic tac toe game with integrated video chat capability which uses WebRTC. This is a personal project on which I have been working for a while using vanilla Javascript and NodeJS and deployed on heroku.',
			image: 'https://res.cloudinary.com/dpfonnjv3/image/upload/v1661689992/Portfolio/Desktop_-_1_a5jyyv.png',
			link: 'https://tiktaktoe-3iym.onrender.com',
			stack: ['HTML', 'CSS', 'Javascript', 'WebRTC', 'SocketIO']
		},
		{
			id: 4,
			name: 'eGamers / Funky Monkey Arcade',
			description: 'eGamers.rw is the official website for Funky monkey arcade located at in Mundi Center Rwandex, Rwanda. It offers a wide selection of games and entertainment for all ages. The website offers a rental platform for renting games and items powered by firebase.',
			image: 'https://res.cloudinary.com/dpfonnjv3/image/upload/v1701023331/Portfolio/cq4yenzevcd5qxzrwcim.png',
			link: 'https://www.egamers.rw',
			stack: ['NextJS', 'TailwindCSS', 'Firebase']
		},



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
			return { container, current, dotHelper, slider }
		},
	})
</script>
