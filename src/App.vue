<template>
	<div id="q-app">
		<router-view />
	</div>
</template>
<script>
import fm from "front-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export default {
	name: "App",
	methods: {},
	mounted() {
		require
			.context("../slides", false, /\.md$/)
			.keys()
			.map((m) => {
				const slideFile = m.replace(/^\.\//, "");
				const slideID = m.replace(/^\.\/|\.md$/g, ""); // Yes, looking for the ./ at the start has to repeat
				const slide = require(`../slides/${slideFile}`).default;
				const slideData = fm(slide);

				remark()
					.use(remarkHtml)
					.process(slideData.body)
					.then((slideContent) => {
						this.$store.commit("slides/addSlide", { id: slideID, attributes: slideData.attributes, body: String(slideContent) });
					});
			});
	},
};
</script>
