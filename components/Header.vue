<template>
	<div class="fixed bg-black z-10 flex w-full justify-center m-auto">
		<header class="w-11/12 flex justify-between items-center h-16 2xl:h-24">
			<h2 class="font-bold text-lg 2xl:text-4xl">Ishimwe Clement</h2>
			<h2 class="hidden sm:block">ReactJS</h2>
			<img class="sm:hidden h-6 w-6" src="../static/assets/menu.svg" alt="menu">
			<div class="hidden sm:block">
				<ul class="flex font-thin text-lg 2xl:text-4xl">
					<li class="m-4">About</li>
					<li class="m-4">Portfolio</li>
					<li class="m-4">Contact</li>
				</ul>
			</div>
		</header>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		name: 'Header'
	})
</script>
