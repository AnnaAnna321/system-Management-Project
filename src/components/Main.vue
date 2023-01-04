<template>
  <div class="Main">
    <!-- 我是公共部分main -->
    <el-container>
      <el-aside width="200px"> <aside-common> </aside-common></el-aside>
      <el-container>
        <el-header><header-common> </header-common></el-header>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import AsideCommon from "./AsideCommon.vue";
import HeaderCommon from "./HeaderCommon.vue";
export default {
  name: "Main",
  components: { AsideCommon, HeaderCommon }, //注意封装的AsideCommon 在这里是components
  data() {
    return {};
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  padding: 0px;
  /* 覆盖原来element-ui自带的padding:20px */
}
</style>
