<template>
  <div class="contaner">
    <p>404 error</p>

    <el-dialog title="提示" :visible.sync="dialogFormVisible" width="30%">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "Error404",
  data() {
    return {
      dialogFormVisible:true
    };
  }
};
</script>
<style scoped>
</style>
