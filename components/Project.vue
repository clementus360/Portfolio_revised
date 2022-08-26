<template>
	<div class="flex flex-col justify-self-center justify-items-center sm:flex-row items-center">
		<div class="relative flex sm:left-7 w-[100vw] overflow-hidden sm:overflow-visible sm:w-max h-72 justify-center items-center 2xl:top-24">
			<img class="relative h-48 w-[85vw] sm:left-0 sm:h-72 sm:w-[30rem] 2xl:h-[30rem] 2xl:w-[52rem] 2xl:min-w-[52rem] sm:min-w-[32rem] z-20" src="../static/assets/pngkey 1.png" alt="mac">
			<img class="absolute h-44 w-[16rem] sm:w-[25rem] sm:h-[16rem] z-10 sm:left-14 2xl:h-[27rem] 2xl:left-[5rem] 2xl:-top-20 2xl:w-[41rem]" :src="details.image" alt="project">
		</div>
		<div class="relative w-11/12 flex flex-col items-center sm:items-start text-center sm:text-left gap-4 2xl:gap-6 z-0 sm:-left-14 bg-darkgrey shadow-md rounded-sm pb-6 sm:pl-12 pt-6 h-max 2xl:pt-20 2xl:pb-20 2xl:top-24">
			<h2 class="text-primary-light text-lg 2xl:text-3xl 4xl:text-5xl font-semibold">{{ details.name }}</h2>
			<p class="font-extralight w-11/12 2xl:text-xl 4xl:text-3xl">{{ details.description }}
			</p>
			<ul class="flex flex-wrap justify-center w-11/12 gap-2 sm:gap-4 text-xs sm:text-sm 2xl:text-xl">
				<li class="rounded-3xl p-1 pl-2 pr-2 sm:pl-4 sm:pr-4 bg-black" v-for="stack in details.stack">
					{{ stack }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import type { PropType } from 'vue'

	export default Vue.extend({
		name: 'Project',
		props: {
			details: {
				type: Object
			}
		}
	})
</script>
