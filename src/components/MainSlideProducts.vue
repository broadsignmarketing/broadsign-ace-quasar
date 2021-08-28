<template>
	<section class="products">
		<h1>Products</h1>
		<div class="tiles">
			<q-img v-for="tile in tiles" :key="tile" class="tile" @click="setDrawer('products', tile)" :src="`../img/tile_products_${tile}.png`" />
		</div>
	</section>
</template>

<script>
export default {
	name: "MainSlideProducts",
	data: () => ({
		tiles: ["broadsign_control", "broadsign_direct", "broadsign_publish", "broadsign_reach", "ayuda"],
	}),

	methods: {
		setDrawer(type, val) {
			this.$emit("setDrawer", { type, val });
		},
	},
};
</script>

<style lang="scss">
.tiles {
	grid-template-columns: repeat(5, 1fr);
}
</style>
