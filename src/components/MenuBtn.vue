<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    const handClickMenu = () => {
      // dispatch 打一個事件
      store.dispatch("handMenuOpen");
    };

    return { handClickMenu };
  },
};
</script>
<template>
  <a class="menuBtn" @click="handClickMenu">
    <i>X</i>
  </a>
</template>
<style lang="scss" scoped>
a.menuBtn {
  cursor: pointer;
  position: absolute;
  color: #000;
  font-size: 30px;
  z-index: 30;
  top: 50px;
  right: 50px;
}
</style>
