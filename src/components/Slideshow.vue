<template>
	<section class="client_slides">
		<q-carousel
			swipeable
			animated
			v-model="carouselPos"
			infinite
			transition-prev="slide-right"
			transition-next="slide-left"
			class="full-width content-stretch"
		>
			<q-carousel-slide v-for="(slide, k) in filteredSlides" :key="`hero_${k}`" :name="k" class="client_slide row no-padding">
				<Slide :content="slide" @closeDrawer="closeDrawer" />
			</q-carousel-slide>
		</q-carousel>
	</section>
</template>

<script>
import Slide from "../components/Slide.vue";

export default {
	name: "Slideshow",
	components: { Slide },
	data: () => ({ carouselPos: 0 }),
	props: { filters: { type: Object, default: () => {} }, slides: { type: Array, default: () => [] } },
	computed: {
		filteredSlides() {
			if (this.filters) {
				if (this.filters.products !== false) {
					return this.slides
						.map((slide) => {
							if (slide.attributes.categories.products && slide.attributes.categories.products.includes(this.filters.products)) {
								return this.singleSlide(slide);
							}
						})
						.filter(Boolean);
				} else if (this.filters.programmatic !== false) {
					return this.slides
						.map((slide) => {
							if (slide.attributes.categories.programmatic && slide.attributes.categories.programmatic.includes(this.filters.programmatic)) {
								return this.singleSlide(slide);
							}
						})
						.filter(Boolean);
				} else if (this.filters.verticals !== false) {
					return this.slides
						.map((slide) => {
							if (slide.attributes.categories.verticals && slide.attributes.categories.verticals.includes(this.filters.verticals)) {
								return this.singleSlide(slide);
							}
						})
						.filter(Boolean);
				}
			}
			return [];
		},
	},
	methods: {
		closeDrawer() {
			this.$emit("closeDrawer");
		},
		singleSlide(base) {
			return {
				gallery: base.attributes.gallery,
				products: base.attributes.categories.products,
				verticals: base.attributes.categories.verticals,
				title: base.attributes.title,
				body: base.body,
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.client_slides {
	height: 100vmin;
	width: 100vw;
	left: 0;
	top: 0;
}

.client_slide {
	height: 100vmin;
	width: 100vw;
	left: 0;
	top: 0;
	cursor: default;
}
</style>
