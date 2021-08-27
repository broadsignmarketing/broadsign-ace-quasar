<template>
	<section class="slides">
		<h2>Some slide ?</h2>
		<p>dfldsjlkfsdjd;sflkjdfjdfskl;jfdlkjdfslk;jsdfakl;</p>
		<button @click="closeDrawer()">X</button>
	</section>
</template>

<script>
export default {
	name: "Slideshow",
	data: () => ({}),
	methods: {
		closeDrawer() {
			this.$emit("closeDrawer");
		},
	},
};
</script>
