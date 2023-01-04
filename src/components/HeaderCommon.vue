<template>
  <div class="header">
    <div class="l-header">
      <el-button
        @click="handleMenu"
        class="left-button"
        type="primary"
        icon="el-icon-menu"
        size="mini"
      >
        <!-- 面包屑 -->
      </el-button>
      <span class="bread">首页</span>
    </div>
    <div class="r-header">
      <el-dropdown>
        <span class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-color: #333;
  height: 50px;
}
.left-button {
  margin-top: 10px;
  margin-left: 10px;
}
.bread {
  color: white;
  font-size: 13px;
}
.el-dropdown-link {
  margin-left: 700px;
  margin-top: 5px;
}
</style>