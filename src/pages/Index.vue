<template>
  <q-page class="flex flex-center">
    <q-carousel
      swipeable
      animated
      fullscreen
      v-model="slide"
      navigation
      infinite
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
    >
      <q-carousel-slide name="products">
        <MainSlideProducts />
      </q-carousel-slide>
      <q-carousel-slide name="programmatic">
        <MainSlideProgrammatic />
      </q-carousel-slide>
      <q-carousel-slide name="verticals">
        <MainSlideVerticals />
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
import MainSlideProducts from "../components/MainSlideProducts.vue";
import MainSlideProgrammatic from "../components/MainSlideProgrammatic.vue";
import MainSlideVerticals from "../components/MainSlideVerticals.vue";

export default {
  name: "PageIndex",
  components: { MainSlideProducts, MainSlideProgrammatic, MainSlideVerticals },
  data: () => ({
    slide: "products"
  })
};
</script>
