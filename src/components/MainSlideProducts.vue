<template>
	<section class="products">
		<h1>Products</h1>
		<div class="tiles">
			<q-img v-for="tile in tiles" :key="tile" class="tile" @click="setDrawer(tile)" :src="require(`../img/tile_products_${tile}.png`)" fit="contain" />
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
			this.$emit("setDrawer", { type: "products", val });
		},
	},
};
</script>

<style lang="scss" scoped>
.tile {
	flex: 0 0 18%;
}
</style>
