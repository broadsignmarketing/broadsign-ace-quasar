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
				v-touch-swipe.mouse.up="setDrawer"
			>
				<q-carousel-slide class="page_slide" name="products">
					<MainSlideProducts @setDrawer="(filters) => setFilter(filters)" />
				</q-carousel-slide>
				<q-carousel-slide class="page_slide" name="programmatic">
					<MainSlideProgrammatic @showDrawer="setDrawer" />
					<div>showDrawer: {{ showDrawer }}</div>
				</q-carousel-slide>
				<q-carousel-slide class="page_slide" name="verticals">
					<MainSlideVerticals @showDrawer="setDrawer" />
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
		filters: { products: false, programmatic: false, verticals: false },
	}),
	computed: {
		slides() {
			return Object.values(this.$store.state.slides);
		},
	},
	methods: {
		closeDrawer() {
			this.showDrawer = false;
		},
		setDrawer() {
			this.showDrawer = true;
		},
		filtersReset() {
			this.filters.products = false;
			this.filters.programmatic = false;
			this.filters.verticals = false;
		},
		setFilter(params) {
			this.filtersReset();
			this.filters[params.type] = params.val;
		},
	},
	watch: {
		filters: {
			deep: true,
			handler(val) {
				Object.values(this.filters).forEach((v) => {
					if (v !== false && v.length > 0) {
						console.log(v);
						this.setDrawer();
					}
				});
			},
		},
	},
};
</script>

