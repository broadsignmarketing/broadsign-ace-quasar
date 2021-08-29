<template>
	<div class="row full-width">
		<!-- <div class="gallery col-6" v-touch-swipe.mouse.down="closeDrawer">
			<q-img v-for="(hero, k) in content.gallery" :key="`hero_${k}`" :src="hero" :class="['hero', { active: galleryPos === k }]" />
			<div class="thumbnails row justify-end">
				<q-img
					v-for="(thumb, j) in content.gallery"
					:key="`tb_${j}`"
					:src="thumb"
					:class="['thumbnail', `tb_${j}`, { active: galleryPos === j }]"
					@click="galleryPos = j"
				/>
			</div>
		</div> -->
		<q-carousel animated v-model="galleryPos" thumbnails infinite class="col-6">
			<q-carousel-slide v-for="(hero, k) in content.gallery" :key="`hero_${k}`" :name="k" :img-src="hero" />
		</q-carousel>
		<div class="content column col-6">
			<q-scroll-area>
				<h1>{{ content.title }}</h1>
				<div class="text client_slide_body" v-html="content.body" />
				<h2>Products</h2>
				<p class="products">
					<q-chip size="md" color="secondary" text-color="black" v-for="product in content.products" :key="product">{{ $t(product) }}</q-chip>
				</p>
				<h2>Verticals</h2>
				<p class="verticals">
					<q-chip size="md" color="secondary" text-color="black" v-for="vertical in content.verticals" :key="vertical">{{ $t(vertical) }}</q-chip>
				</p>
			</q-scroll-area>
		</div>
	</div>
</template>

<script>
export default {
	name: "Slide",
	data: () => ({ galleryPos: 0 }),
	props: { content: { type: Object, default: () => {} }, name: { type: String, default: "" } },
	computed: {},
	methods: {
		closeDrawer() {
			this.$emit("closeDrawer");
		},
	},
};
</script>

<style lang="scss" scoped>
.gallery {
	position: relative;
	height: 100vmin;
}

.hero {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	opacity: 0;
	overflow: hidden;
	transition: opacity 1s ease-out;
	z-index: 1;

	&.active {
		opacity: 1;
	}
}

.thumbnails {
	position: absolute;
	height: 72px;
	bottom: 10px;
	right: 10px;
	width: 100%;
	z-index: 10;
}

.thumbnail {
	background-color: #000;
	background-size: cover;
	border: 3px solid #000;
	border-radius: calc(min(2vw, 20px));
	display: inline-block;
	flex: 1 1 100%;
	height: 72px;
	margin-left: 10px;
	cursor: pointer;
	max-height: 7vmax;
	max-width: 8vmax;
	opacity: 1;
	overflow: hidden;
	padding: 0;
	pointer-events: all;
	width: 90px;

	&.active {
		border-color: #7bc;
	}
}

h1 {
	color: #83dbe7;
	display: inline-block;
	font-family: "Roboto Black", Arial Black, Helvetica, sans-serif;
	font-size: 0.6em;
	font-variant: small-caps;
	left: -2px;
	line-height: 80%;
	margin: 0 0 0.5em;
	position: relative;
	text-transform: lowercase;
	top: 0;
	transform: none;
	width: fit-content;
}

.content {
	font-size: 100px;
	padding: 6vmin 0 6vmin 3%;
}

.text {
	color: inherit;
	display: flex;
	flex-flow: column nowrap;
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
}
</style>

<style lang="scss">
.thumbnail .q-img__image {
	border-radius: 0;
}

.client_slide {
	user-select: none;

	.q-scrollarea {
		height: 88vh;
		max-width: 100%;
		padding-right: 6%;

		.scroll .absolute {
			display: flex;
			flex-flow: column nowrap;
			justify-content: flex-start;
		}
	}
	blockquote {
		color: #83dbe7;
		display: inline-block;
		font-family: "Roboto Black", Arial Black, Helvetica, sans-serif;
		font-size: 0.22em;
		line-height: 120%;
		margin: -20px 0 25px;

		& > p {
			color: inherit;
			display: flex;
			flex-flow: column nowrap;
			font-family: inherit;
			font-size: inherit;
			font-size: 100%;
			font-weight: inherit;
			line-height: 140%;
			margin: 0;
			padding: 0;
		}
	}

	h2 {
		color: #fff;
		display: inline-block;
		font-family: "Roboto Black", Arial Black, Helvetica, sans-serif;
		font-size: 0.16em;
		margin: 0 0 0.5em;
		line-height: 140%;
		text-transform: uppercase;
	}

	p {
		color: #fff;
		display: inline-block;
		font-family: "Roboto", Arial, Helvetica, sans-serif;
		font-size: 0.13em;
		line-height: 150%;
		margin: 0 0 2.4em;

		&.slides_count {
			bottom: 15px;
			margin: 0;
			pointer-events: none;
			position: absolute;
			right: 15px;
		}
	}

	&.products {
		p {
			text-transform: capitalize;
		}
	}
}

.client_slide_body {
	font-size: 1rem;
}
</style>
