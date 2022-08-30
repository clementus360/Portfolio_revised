<template>
	<div class="fixed bg-black z-50 flex w-full justify-center m-auto">
		<header class="w-11/12 flex justify-between items-center h-16 2xl:h-24">
			<h2 @click="scroll('welcome')" class="font-bold text-lg 2xl:text-4xl cursor-pointer">Ishimwe Clement</h2>
			<div ref="container" class="sm:relative hidden keen-slider items-center w-max max-w-[6rem] max-h-[40%]" >
				<h2 class="keen-slider__slide">ReactJS</h2>
				<h2 class="keen-slider__slide">VueJS</h2>
				<h2 class="keen-slider__slide">Javascript</h2>
				<h2 class="keen-slider__slide">Typescript</h2>
				<h2 class="keen-slider__slide">NodeJS</h2>
				<h2 class="keen-slider__slide">TailwindCSS</h2>
				<h2 class="keen-slider__slide">Gsap</h2>
				<h2 class="keen-slider__slide">WebRTC</h2>
			</div>
			<img @click="toggleMenu" class="z-10 sm:hidden h-6 w-6" src="../static/assets/menu.svg" alt="menu">
			<div class="hidden sm:block">
				<ul class="flex font-thin text-lg 2xl:text-4xl">
					<li @click="scroll('about')" class="m-4 cursor-pointer">About</li>
					<li @click="scroll('portfolio')" class="m-4 cursor-pointer">Portfolio</li>
					<li @click="scroll('footer')" class="m-4 cursor-pointer">Contact</li>
				</ul>
			</div>
			<Menu v-if="isMenu" />

		</header>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import { computed,ref } from 'vue'
	import { useKeenSlider } from 'keen-slider/vue.es'
	import 'keen-slider/keen-slider.min.css'
	import scroll from './utils/scroller'
	import Menu from './Menu.vue';

	export default Vue.extend({
    name: "Header",
	data() {
		return {
			isMenu: false
		}
	},
	setup() {
		const current = ref(1)
		const [container, slider] = useKeenSlider({
			initial: current.value,
			vertical: true,
			loop: true,
			slideChanged: (s) => {
				current.value = s.track.details.rel
	    	},
		},
		[
        (slider) => {
          let timeout: string | number | NodeJS.Timeout | undefined
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
          },
        ])
		return { container, current, slider }
	},
    methods: {
        scroll,
		toggleMenu() {
			this.isMenu = this.isMenu? false:true
		}
    },
    components: { Menu }
})
</script>

