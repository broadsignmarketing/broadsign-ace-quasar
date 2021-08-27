<template>
	<q-page-container>
		<q-page class="flex flex-center content-stretch full-height full-width">
			<q-carousel
				swipeable
				animated
				v-model="slide"
				infinite
				transition-prev="slide-right"
				transition-next="slide-left"
				class="full-width content-stretch"
				v-touch-swipe.mouse.up="openDrawer"
			>
				<q-carousel-slide class="page_slide" name="products">
					<MainSlideProducts @showDrawer="openDrawer" />
					<div>showDrawer: {{ showDrawer }}</div>
				</q-carousel-slide>
				<q-carousel-slide class="page_slide" name="programmatic">
					<MainSlideProgrammatic @showDrawer="openDrawer" />
					<div>showDrawer: {{ showDrawer }}</div>
				</q-carousel-slide>
				<q-carousel-slide class="page_slide" name="verticals">
					<MainSlideVerticals @showDrawer="openDrawer" />
					<div>showDrawer: {{ showDrawer }}</div>
				</q-carousel-slide>
			</q-carousel>
			<div :class="['drawer', { active: showDrawer }]" v-touch-swipe.mouse.down="closeDrawer">
				<Slideshow @closeDrawer="closeDrawer" :slides="slides" :filters="filters" />
			</div>
		</q-page>
	</q-page-container>
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
		filters: { product: false, programmatic: false, vertical: false },
	}),
	computed: {
		slides() {
			return this.$store.state.slides;
		},
	},
	methods: {
		closeDrawer() {
			this.showDrawer = false;
		},
		openDrawer() {
			this.showDrawer = true;
		},
		filtersReset() {
			this.filters.product = false;
			this.filters.programmatic = false;
			this.filters.vertical = false;
		},
		setFilter(type, val) {
			this.filtersReset();
			this.filters[type] = val;
		},
	},
};
</script>

