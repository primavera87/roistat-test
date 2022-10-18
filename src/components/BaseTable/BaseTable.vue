<template>
  <div class="panel-wrapper">
    <el-table
        :data="tableData"
        style="width: 100%"
    >
      <el-table-column type="expand">
        <template #default="props">
          <p m="t-0 b-2">Name: {{ props.row.staff.name }}</p>
          <p m="t-0 b-2">Phone: {{ props.row.staff.phone }}</p>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" sortable />
      <el-table-column label="Phone" prop="phone" sortable />
    </el-table>
  </div>
</template>

<script lang="ts" src="./BaseTable.ts"></script>
<style lang="scss" src="./BaseTable.scss" />
