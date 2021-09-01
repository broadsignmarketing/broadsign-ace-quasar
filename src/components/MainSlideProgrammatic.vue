<template>
	<section class="programmatic">
		<h1>Programmatic</h1>
		<div class="tiles">
			<q-img
				v-for="tile in tiles"
				:key="tile"
				class="tile"
				@click="setDrawer(tile)"
				:src="require(`../img/tile_programmatic_${tile}.png`)"
				fit="contain"
			/>
		</div>
	</section>
</template>

<script>
export default {
	name: "MainSlideProgrammatic",
	data: () => ({
		tiles: ["broadsign_climate_change_march", "flix_media", "foodora", "indeed", "kylie", "nokia", "peugeot", "public_mobile", "seat", "ufc", "xite"],
	}),

	methods: {
		setDrawer(val) {
			this.$emit("setDrawer", { type: "programmatic", val });
		},
	},
};
</script>

<style lang="scss" scoped>
.tile {
	flex: 0 0 15%;
}
</style>
