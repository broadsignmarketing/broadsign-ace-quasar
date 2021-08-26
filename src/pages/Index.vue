<template>
  <q-page class="flex flex-center items-stretch full-height full-width">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      infinite
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      class="full-height full-width"
    >
      <q-carousel-slide name="products">
        <MainSlideProducts v-on:showDrawer="openDrawer" />
        <div>showDrawer: {{ showDrawer }}</div>
      </q-carousel-slide>
      <q-carousel-slide name="programmatic">
        <MainSlideProgrammatic v-on:showDrawer="openDrawer" />
        <div>showDrawer: {{ showDrawer }}</div>
      </q-carousel-slide>
      <q-carousel-slide name="verticals">
        <MainSlideVerticals v-on:showDrawer="openDrawer" />
        <div>showDrawer: {{ showDrawer }}</div>
      </q-carousel-slide>
    </q-carousel>
    <div
      :class="['drawer', { active: showDrawer }]"
      v-touch-swipe.mouse.down="closeDrawer"
    >
      <Slideshow v-on:closeDrawer="closeDrawer" />
    </div>
  </q-page>
</template>

<script>
import MainSlideProducts from "../components/MainSlideProducts.vue";
import MainSlideProgrammatic from "../components/MainSlideProgrammatic.vue";
import MainSlideVerticals from "../components/MainSlideVerticals.vue";
import Slideshow from "../components/Slideshow.vue";

export default {
  name: "PageIndex",
  components: {
    MainSlideProducts,
    MainSlideProgrammatic,
    MainSlideVerticals,
    Slideshow
  },
  data: () => ({
    slide: "products",
    showDrawer: false
  }),
  methods: {
    closeDrawer() {
      this.showDrawer = false;
    },
    openDrawer() {
      this.showDrawer = true;
    }
  }
};
</script>

<style lang="scss">
.drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateY(100vh);
  transition: transform 1s;
  background-color: #fff;
  border: 10px solid red;
  pointer-events: none;

  &.active {
    pointer-events: all;
    transform: translateY(0%);
  }
}
</style>
