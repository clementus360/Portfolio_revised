<template>
	<div class="fixed bg-black z-30 flex w-full justify-center m-auto">
		<header class="w-11/12 flex justify-between items-center h-16 2xl:h-24">
			<h2 @click="scroll('welcome')" class="font-bold text-lg 2xl:text-4xl cursor-pointer">Ishimwe Clement</h2>
			<h2 class="hidden sm:block">ReactJS</h2>
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
	import scroll from './utils/scroller'
import Menu from './Menu.vue';
	export default Vue.extend({
    name: "Header",
	data() {
		return {
			isMenu: false
		}
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

