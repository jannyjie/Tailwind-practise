<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
export default({
  setup() {
    const routerArr = ["/about", "/work", "/Courses"];
    const route = useRoute();
    const idx = ref(0);
    watch(
      () => route.path,
      () => {
        routerArr.forEach((item, index) => {
          const rp = route.path.substr(1).split("/")[0];
          console.log(rp);
          if (rp === item) {
            idx.value = index;
            // console.log(index);
          }
        });
      }
    );
    return {idx}
  },
})
</script>

<template>
  <nav>
    <router-link :class="{ active: idx === 0 }" to="/about">About</router-link>
    <router-link :class="{ active: idx === 1 }" to="/work">work</router-link>
    <router-link :class="{ active: idx === 2 }" to="/Courses">Courses</router-link>
  </nav>
  
  <router-view />
</template>

<style lang="scss">
@import "assets/scss/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
