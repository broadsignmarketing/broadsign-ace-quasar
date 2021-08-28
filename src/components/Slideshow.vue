<template>
	<section class="client_slides">
		<q-carousel
			swipeable
			animated
			v-model="slidePos"
			infinite
			transition-prev="slide-right"
			transition-next="slide-left"
			class="full-width content-stretch"
			v-touch-swipe.mouse.down="closeDrawer"
		>
			<q-carousel-slide v-for="(slide, k) in filteredSlides" :key="`hero_${k}`" class="client_slide row q-p-a-0" :name="k">
				<div class="gallery col-7 full-height">
					<q-img v-for="(hero, j) in slide.gallery" :key="`hero_${k}_${j}`" :src="thumb" class="hero" />
					<div class="thumbnails row justify-end">
						<q-img v-for="(thumb, j) in slide.gallery" :key="`tb_${k}_${j}`" :src="thumb" class="thumbnail" />
					</div>
				</div>
				<div class="text col-5" v-html="slide.body"></div>
			</q-carousel-slide>
		</q-carousel>
	</section>
</template>

<script>
export default {
	name: "Slideshow",
	data: () => ({ galleryPos: 1, slidePos: 1 }),
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

	.gallery {
		position: relative;
	}

	.hero {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	.text {
	}
}

.thumbnails {
	position: absolute;
	height: 140px;
	bottom: 0;
	right: 0;
	width: 100%;
}

.thumbnail {
	max-width: 140px;
}
</style>
