<template>
  <div class="box">
    <div class="title">
      <i class="el-icon-circle-plus"></i>
      <span>基础表格</span>
    </div>

    <el-card class="box-card" v-loading="loading">
      <div>
        <el-form :inline="true" :model="formSearch" class="demo-form-inline">
          <el-form-item>
            <el-button type="primary" size="small" icon="el-icon-delete">批量删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-select v-model="formSearch.name" placeholder="活动区域" size="small">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input v-model="formSearch.key" placeholder="筛选关键词" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" icon="el-icon-search" size="small">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 这段模态框不能放在表格内部 -->
      <el-dialog title="提示" :visible.sync="dialogFormVisible" width="30%">
        <el-form :model="dialogForm">
          <el-form-item label="address">
            <el-input v-model="dialogForm.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="email">
            <el-input v-model="dialogForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="number">
            <el-input v-model="dialogForm.number" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="url">
            <el-input v-model="dialogForm.url" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <!-- end -->
      <div class="cardBody">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;font-size:13px"
          @selection-change="handleSelectionChange"
          :default-sort="{ prop: 'number', order: 'descending' }"
          @select="tableSelect"
          @select-all="selectAll"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column sortable prop="number" label="num" width="120"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column sortable prop="url" label="网址"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column prop="string" label="星级"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <!-- 模态框 -->
            <template slot-scope="scope" trigger="click">
              <el-button
                slot="reference"
                @click="handleClick(scope.row)"
                type="text"
                icon=" el-icon-edit"
              ></el-button>&nbsp;&nbsp;
              <el-popover placement="top" width="160">
                <p>您确定删除吗？</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text">取消</el-button>
                  <el-button type="primary" size="mini">确定</el-button>
                </div>
                <el-button type="text" slot="reference" icon=" el-icon-delete"></el-button>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
        <el-row type="flex" justify="end" style="margin-top:20px">
          <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
<script>
import { tableData } from "../../axios/api";
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
      },
      dialogFormVisible: false,
      dialogForm: {}
    };
  },
  methods: {
    handleSelectionChange() {},
    handleClick(row) {
      console.log(row);
      this.dialogFormVisible = !this.dialogFormVisible;
      this.dialogForm = row;
    },
    onSubmit() {},
    tableSelect(selection, row) {
      console.log(selection, row);
    },
    selectAll(selection) {
      console.log(selection);
    }
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
