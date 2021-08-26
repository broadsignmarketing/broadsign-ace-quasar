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
export default {
  name: "MainSlideProgrammatic",
  data: () => ({}),
  methods: {
    showDrawer() {
      this.$emit("showDrawer");
    }
  }
};
</script>
