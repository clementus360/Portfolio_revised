export default function scroll(comp: string) {
	const component = document.getElementById(comp)

	if (component) {
		component.scrollIntoView({
		behavior: 'smooth'
		})
	}
}
