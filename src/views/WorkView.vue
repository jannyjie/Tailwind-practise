<template>
  <div class="work">
    <h1>Work </h1>
    <Test/>
  </div>
</template>
<script>
// @ is an alias to /src
import Test from "@/components/Test.vue";

export default {
  name: "HomeView",
  components: {
    Test,
  },
};
</script>
