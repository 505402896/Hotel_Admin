<!--  -->
<template>
  <div id="layout">
    <slider-bar />
    <nav-bar />
    <keep-alive>
      <router-view class="app-container"/>
    </keep-alive>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import SliderBar from "./SliderBar";
export default {
  data() {
    return {};
  },

  components: { SliderBar, NavBar },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.app-container{
  /* width: calc( 100vw - 200px );
  height: calc( 100vh - 50px ); */
  margin-left: 200px;
  margin-top: 50px;
}
</style>
