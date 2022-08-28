<template>
	<div class="z-0 pt-20 pb-20 flex justify-center bg-darkgrey absolute left-0 top-0 w-full">
		<ul class="flex flex-col items-center font-thin text-lg 2xl:text-4xl">
			<li @click="scroll('about')" class="m-4 cursor-pointer">About</li>
			<li @click="scroll('portfolio')" class="m-4 cursor-pointer">Portfolio</li>
			<li @click="scroll('footer')" class="m-4 cursor-pointer">Contact</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import scroll from './utils/scroller'
	export default Vue.extend({
		name: 'Menu',
		methods: {
			scroll
		}
	})
</script>
