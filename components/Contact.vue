<template>
	<section id="contact" class="grid w-11/12 sm:w-6/12 xl:w-full m-auto h-max pb-8">
		<div class="flex flex-col gap-4 2xl:gap-8 items-center mt-20 sm:mt-40 2xl:mt-80 4xl:mt-96">
			<h1 id="contactTitle" class="font-semibold text-4xl xl:text-5xl 2xl:text-6xl">Get in touch</h1>
			<p id="contactText" class="text-center font-extralight text-grey w-10/12 sm:w-4/5 text-base xl:text-xl 2xl:text-2xl 4xl:text-4xl">
				My inbox is always open for everyone. Leave a message and I’ll check it as soon as I can.
			</p>
			<form ref="form" id="contactForm" @submit="sendMail" class="flex flex-col items-center sm:w-6/12 sm:grid grid-cols-2 gap-4 2xl:gap-8">
				<input class="text-grey pl-2 sm:pl-4 h-12 sm:h-16 bg-transparent border border-primary-light text-base xl:text-xl 2xl:text-2xl 4xl:text-4xl" placeholder="Name" type="text" name="user_name" id="name" required>
				<input class="text-grey pl-2 sm:pl-4 h-12 sm:h-16 bg-transparent border border-primary-light text-base xl:text-xl 2xl:text-2xl 4xl:text-4xl" placeholder="E-mail" type="text" name="user_email" id="email" required>
				<textarea class="col-span-2 text-grey pl-2 sm:pl-4 sm:pt-2 w-full h-20 sm:h-32 bg-transparent border border-primary-light text-base xl:text-xl 2xl:text-2xl 4xl:text-4xl" placeholder="Message" type="text" name="message" id="message" required />
				<input type="submit" value="submit" class="justify-self-center col-span-2 bg-transparent text-primary-light p-3 pl-16 pr-16 w-max border-2 border-primary-light cursor-pointer hover:bg-primary-light hover:text-black hover:text-lg">
			</form>
		</div>
		<div id="footer" class="flex flex-col gap-4 2xl:gap-8 sm:gap-2 mt-16 2xl:mt-32 items-center w-max m-auto">
			<ul class="flex gap-12">
				<li>
					<a href="https://github.com/clementus360" target="_blank"><img class="h-8 2xl:h-16" src="../static/assets/github-brands.svg" alt="github"></a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/ishimwe-clement-munyaneza-401575176/" target="_blank"><img class="h-8 2xl:h-16" src="../static/assets/linkedin-brands.svg" alt="github"></a>
				</li>
				<li>
					<a href="https://twitter.com/clementus360" target="_blank"><img class="h-8 2xl:h-16" src="../static/assets/twitter-brands (1).svg" alt="twitter"></a>
				</li>
				<li>
					<a href="https://www.instagram.com/clementus_360" target="_blank"><img class="h-8 2xl:h-16" src="../static/assets/instagram-brands.svg" alt="instagram"></a>
				</li>
				<li>
					<a href="https://stackoverflow.com/users/8654504/clement" target="_blank"><img class="h-8 2xl:h-16" src="../static/assets/stack-overflow-brands.svg" alt="stack overflow"></a>
				</li>
			</ul>
			<address class="flex flex-col items-center gap-2">
				<p><a class="font-thin 2xl:text-2xl not-italic" href="mailto:clementus360@gmail.com">clementus360@gmail.com</a></p>
				<p><a class="font-thin 2xl:text-2xl not-italic" href="tel:+250787316052">+250 787 316 052</a></p>
			</address>
		</div>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue'
	import { gsap } from 'gsap'
	import { ScrollTrigger } from "gsap/ScrollTrigger";
	import emailjs from "@emailjs/browser"

	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.config({ limitCallbacks: true });

	export default Vue.extend({
		name: 'Contact',
		setup() {
			emailjs.init('hDPTYoAvbuETQDnQM');
		},
		methods: {
			sendMail(e: Event) {
				e.preventDefault()
				emailjs.sendForm('service_963rpgd', 'template_izw29yf', "#contactForm")
				.then(() => {
					alert('Message sent successfully')
					const form = <HTMLFormElement>document.getElementById("contactForm")
					if (form) {
						form.reset()
					}
				}).catch(err => {
					alert('There was a problem sending the email')
				})


			},
		}
	})
</script>


