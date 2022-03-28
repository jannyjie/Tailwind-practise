<template>
  <div class="work">
    <MenuBtn/>
    <h1>Work </h1>
    <MenuSlid/>
  </div>
</template>
<script>
// import { onMounted } from "vue";
import { useStore } from "vuex";
import MenuBtn from "../components/MenuBtn.vue";
import MenuSlid from "../components/MenuSlid.vue";
export default {
  components: {
    MenuBtn,
    MenuSlid,
  },
  setup() {
    const store = useStore();
    return {};
  },
};
</script>
