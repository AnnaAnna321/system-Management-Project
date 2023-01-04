<template>
  <div class="Home">
    <!-- 我是home -->
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <div class="user">用户</div>
              <div class="user-info">admin</div>
            </div>
            <div>
              <span>上次登录时间</span>
            </div>
          </el-card>
          <el-card style="margin-top: 20px">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期"> </el-table-column>
              <el-table-column prop="name" label="姓名"> </el-table-column>
              <!-- 固定的width 去掉，让他自己自适应 -->
              <el-table-column prop="address" label="地址">
              </el-table-column> </el-table
          ></el-card></div
      ></el-col>
      <el-col :span="16">
        <div class="num">
          <el-card
            :body-style="{ display: 'flex' }"
            v-for="item in countData"
            :key="item.name"
            ><i class="icon" :class="`el-icon-${item.icon}`"></i>
            <div>
              <p>{{ item.value }}</p>
              <p>{{ item.name }}</p>
            </div></el-card
          >
        </div>
        <div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import { getData } from "../api";
export default {
  name: "Home",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      countData: [
        {
          name: "今日支付订单",
          value: "1234",
          icon: "success",
          color: "#2ec79c",
        },
        {
          name: "昨天支付订单",
          value: "4567",
          icon: "success",
          color: "#2ec79c",
        },
        {
          name: "今支付订单",
          value: "3333333",
          icon: "success",
          color: "#2ec79c",
        },
        {
          name: "日支付订单",
          value: "6666",
          icon: "success",
          color: "#2ec79c",
        },
        {
          name: "1支付订单",
          value: "777777777",
          icon: "success",
          color: "#2ec79c",
        },
        {
          name: "订单",
          value: "888888",
          icon: "success",
          color: "#2ec79c",
        },
      ],
    };
  },
  methods: {},
  mounted() {
    getData().then((data) => {
      console.log(data);
    });
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clearfix {
  align-items: center;
}
.user-info {
  margin-left: 20px;
}
.num {
  display: flex;
}
</style>
