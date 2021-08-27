<template>
	<section class="products">
		<h1>Products</h1>
		<div class="tiles">
			<q-img class="tile" src="../img/tile_products_broadsign_control.png" />
			<q-img class="tile" src="../img/tile_products_broadsign_direct.png" />
			<q-img class="tile" src="../img/tile_products_broadsign_publish.png" />
			<q-img class="tile" src="../img/tile_products_broadsign_reach.png" />
			<q-img class="tile" src="../img/tile_products_others_ayuda.png" />
		</div>
		<button @click="showDrawer()">Open</button>
	</section>
</template>

<script>
//import tile_broadsign_control from "../img/tile_products_broadsign_control.png";
//import tile_broadsign_direct from "../img/tile_products_broadsign_direct.png";
//import tile_broadsign_publish from "../img/tile_products_broadsign_publish.png";
//import tile_broadsign_reach from "../img/tile_products_broadsign_reach.png";
//import tile_ayuda from "../img/tile_products_ayuda.png";

export default {
	name: "MainSlideProducts",
	data: () => ({}),

	methods: {
		showDrawer() {
			this.$emit("showDrawer");
		},
	},
};
</script>

<style lang="scss">
.tiles {
	grid-template-columns: repeat(5, 1fr);
}
</style>
