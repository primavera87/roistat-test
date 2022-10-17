<template>
  <div class="panel-wrapper">
    <b-table
        striped
        responsive="sm"
        :items="tableData"
        :fields="fieldsTable"
    >
      <template #cell(show_details)="row">
        <b-button size="sm" @click="row.toggleDetails" class="mr-2">
          {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
        </b-button>
      </template>
      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col>{{ row.item.staff.name }}</b-col>
            <b-col>{{ row.item.staff.phone }}</b-col>
          </b-row>
        </b-card>
      </template>
    </b-table>
  </div>
</template>

<script lang="ts" src="./BaseTable.ts"></script>
<style lang="scss" src="./BaseTable.scss" />
