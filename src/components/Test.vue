<template>
  <h3>test</h3>
</template>

<script>
  import { onMounted } from "vue";
  import { getName } from '../api/axios.js';
  export default {
    setup() {
      onMounted(() => {
        getName().then((res) => {
          console.log(res);
        });
      });
      return {}
    },
  }
</script>

<style>

</style>