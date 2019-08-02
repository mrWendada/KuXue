<template>
  <div id="c4-index">
    my
    <router-link to="/login">点击登录</router-link>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Nav />
  </div>
</template>

<script>
import Nav from "../../nav/index";
export default {
  data() {
    return {};
  },
  components: {
    Nav
  }
};
</script>

<style>
</style>
