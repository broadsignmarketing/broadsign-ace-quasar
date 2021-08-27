<template>
	<q-page class="flex flex-center items-stretch full-height full-width">
		<q-carousel
			swipeable
			animated
			v-model="slide"
			infinite
			transition-prev="slide-right"
			transition-next="slide-left"
			class="full-height full-width"
			v-touch-swipe.mouse.up="openDrawer"
		>
			<q-carousel-slide name="products">
				<MainSlideProducts @showDrawer="openDrawer" />
				<div>showDrawer: {{ showDrawer }}</div>
			</q-carousel-slide>
			<q-carousel-slide name="programmatic">
				<MainSlideProgrammatic @showDrawer="openDrawer" />
				<div>showDrawer: {{ showDrawer }}</div>
			</q-carousel-slide>
			<q-carousel-slide name="verticals">
				<MainSlideVerticals @showDrawer="openDrawer" />
				<div>showDrawer: {{ showDrawer }}</div>
			</q-carousel-slide>
		</q-carousel>
		<div :class="['drawer', { active: showDrawer }]" v-touch-swipe.mouse.down="closeDrawer">
			<Slideshow @closeDrawer="closeDrawer" />
		</div>
	</q-page>
</template>

<script>
import MainSlideProducts from "../components/MainSlideProducts.vue";
import MainSlideProgrammatic from "../components/MainSlideProgrammatic.vue";
import MainSlideVerticals from "../components/MainSlideVerticals.vue";
import Slideshow from "../components/Slideshow.vue";

export default {
	name: "PageIndex",
	components: {
		MainSlideProducts,
		MainSlideProgrammatic,
		MainSlideVerticals,
		Slideshow,
	},
	data: () => ({
		slide: "products",
		showDrawer: false,
	}),
	methods: {
		closeDrawer() {
			this.showDrawer = false;
		},
		openDrawer() {
			this.showDrawer = true;
		},
	},
};
</script>

