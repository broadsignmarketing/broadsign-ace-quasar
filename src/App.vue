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
				const slideID = m.replace(/^\.\//, "");
				const slide = require(`../slides/${slideID}`).default;
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
