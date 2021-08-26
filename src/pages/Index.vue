<template>
  <q-page class="flex flex-center">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide name="products">
        <h1>Products</h1>
      </q-carousel-slide>
      <q-carousel-slide name="programmatic">
        <h1>Programmatic</h1>
      </q-carousel-slide>
      <q-carousel-slide name="verticals">
        <h1>Verticals</h1>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
  data: () => ({
    slide: "products",
    autoplay: true
  })
});
</script>
