<template>
	<section class="grid w-11/12 sm:w-6/12 m-auto h-max pb-8">
		<div class="flex flex-col gap-4 items-center mt-20 sm:mt-40 2xl:mt-80 4xl:mt-96">
			<h1 class="font-semibold text-4xl">Get in touch</h1>
			<p class="text-center font-extralight text-grey w-full sm:w-4/5 text-base">
				My inbox is always open for everyone. Leave a message and I’ll check it as soon as I can.
			</p>
			<div class="flex flex-col items-center sm:grid grid-cols-2 gap-4">
				<input class="text-grey pl-2 h-12 bg-transparent border border-primary-light" placeholder="Name" type="text" name="name" id="name">
				<input class="text-grey pl-2 h-12 bg-transparent border border-primary-light" placeholder="E-mail" type="text" name="email" id="email">
				<textarea class="col-span-2 text-grey pl-2 w-full h-20 bg-transparent border border-primary-light" placeholder="Message" type="text" name="message" id="message" />
				<input class="justify-self-center col-span-2 bg-transparent text-primary-light p-3 pl-16 pr-16 w-max border-2 border-primary-light" type="submit" value="submit">
			</div>
		</div>
		<div class="flex flex-col gap-4 sm:gap-2 mt-16 items-center w-max m-auto">
			<ul class="flex gap-12">
				<li>
					<img class="h-8" src="../static/assets/github-brands.svg" alt="github">
				</li>
				<li>
					<img class="h-8" src="../static/assets/twitter-brands (1).svg" alt="twitter">
				</li>
				<li>
					<img class="h-8" src="../static/assets/instagram-brands.svg" alt="instagram">
				</li>
				<li>
					<img class="h-8" src="../static/assets/stack-overflow-brands.svg" alt="stack overflow">
				</li>
			</ul>
			<p class="font-thin">clementus360@gmail.com</p>
			<p class="font-thin">+250 787 316 052</p>
		</div>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue'
	export default Vue.extend({
		name: 'Contact'
	})
</script>
