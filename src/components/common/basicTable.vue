<template>
  <div class="box">
    <div class="title">
      <i class="el-icon-circle-plus"></i>
      <span> 基础表格 </span>
    </div>
    <el-card class="box-card" v-loading="loading">
      <div>
        <el-form :inline="true" :model="formSearch" class="demo-form-inline">
          <el-form-item>
            <el-button type="primary" size="small" icon="el-icon-delete"
              >批量删除</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-select
              v-model="formSearch.name"
              placeholder="活动区域"
              size="small"
            >
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="formSearch.key"
              placeholder="筛选关键词"
              size="small"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit"
              icon="el-icon-search"
              size="small"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="cardBody">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;font-size:13px"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column label="num" width="120">
            <template slot-scope="scope">{{ scope.row.number }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120"
          ></el-table-column>
          <el-table-column prop="url" label="网址"> </el-table-column>
          <el-table-column prop="email" label="邮箱"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
          <el-table-column prop="string" label="星级"> </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                icon="el-icon-zoom-in"
              ></el-button>
              <el-button type="text" icon="el-icon-edit"></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="end" style="margin-top:20px">
          <el-pagination layout="prev, pager, next" :total="1000">
          </el-pagination>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
import { tableData } from "../../api/index";
export default {
  name: "BasicTable",
  data() {
    return {
      loading: true,
      tableData: [],
      multipleSelection: [],
      formSearch: {
        name: "",
        key: ""
      }
    };
  },
  methods: {
    handleSelectionChange() {},
    handleClick() {},
    onSubmit() {}
  },
  mounted() {
    tableData().then(res => {
      this.tableData = res.data.data.projects;
      this.loading = false;
    });
  }
};
</script>
<style scoped>
@import "../../style/pageHead";
.el-table .el-button,
.el-table .el-button:hover {
  border: none;
  background: none;
}
</style>
