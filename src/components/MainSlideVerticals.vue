<template>
	<section class="products">
		<h1>Verticals</h1>
		<div class="tiles">
			<p>Broadsign Control</p>
			<p>Broadsign Direct</p>
			<p>Broadsign Publish</p>
			<p>Broadsign Reach</p>
			<p>Broadsign Ayuda</p>
		</div>
		<button @click="showDrawer()">Open</button>
	</section>
</template>

<script>
//import tile_cinema from "../img/tile_verticals_cinema.png";
//import tile_gas_stations from "../img/tile_verticals_gas_stations.png";
//import tile_healthcare from "../img/tile_verticals_healthcare.png";
//import tile_hospitality from "../img/tile_verticals_hospitality.png";
//import tile_internal_comms from "../img/tile_verticals_internal_comms.png";
//import tile_outdoor from "../img/tile_verticals_outdoor.png";
//import tile_shopping_malls from "../img/tile_verticals_shopping_malls.png";
//import tile_smart_cities from "../img/tile_verticals_smart_cities.png";
//import tile_transit from "../img/tile_verticals_transit.png";

export default {
	name: "MainSlideVerticals",
	data: () => ({}),
	methods: {
		showDrawer() {
			this.$emit("showDrawer");
		},
	},
};
</script>
