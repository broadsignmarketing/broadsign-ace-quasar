<template>
	<section class="verticals">
		<h1>Verticals</h1>
		<div class="tiles">
			<q-img v-for="tile in tiles" :key="tile" class="tile" @click="setDrawer(tile)" :src="require(`../img/tile_verticals_${tile}.png`)" />
		</div>
	</section>
</template>

<script>
export default {
	name: "MainSlideVerticals",
	data: () => ({
		tiles: ["cinema", "gas_stations", "healthcare", "hospitality", "internal_comms", "outdoor", "shopping_malls", "smart_cities", "transit"],
	}),

	methods: {
		setDrawer(val) {
			this.$emit("setDrawer", { type: "verticals", val });
		},
	},
};
</script>

<style lang="scss" scoped>
.verticals {
	padding: 0 10%;
}

.tile {
	flex: 0 0 33%;
}
</style>
