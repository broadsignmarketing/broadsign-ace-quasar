<template>
	<div id="q-app">
		<router-view />
	</div>
</template>
<script>
export default {
	name: "App",
	updated() {
		console.log("should update route");
	},
};
</script>
