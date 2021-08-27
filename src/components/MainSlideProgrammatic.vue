<template>
	<section class="products">
		<h1>Programmatic</h1>
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
//import tile_climate_strike from "tile_programmatic_climate_strike.png";
//import tile_flix_media from "tile_programmatic_flix_media.png";
//import tile_foodora from "tile_programmatic_foodora.png";
//import tile_indeed from "tile_programmatic_indeed.png";
//import tile_kylie from "tile_programmatic_kylie.png";
//import tile_nokia from "tile_programmatic_nokia.png";
//import tile_peugeot from "tile_programmatic_peugeot.png";
//import tile_public_mobile from "tile_programmatic_public_mobile.png";
//import tile_seat from "tile_programmatic_seat.png";
//import tile_ufc from "tile_programmatic_ufc.png";
//import tile_xite from "tile_programmatic_xite.png";

export default {
	name: "MainSlideProgrammatic",
	data: () => ({}),
	methods: {
		showDrawer() {
			this.$emit("showDrawer");
		},
	},
};
</script>
