<template>
  <div class="employees">
    <div class="control-panel">
      <div class="panel-wrapper"></div>
      <div class="panel-wrapper">
        <button-component
            name="Добавить"
            target="#onCreate"
        />
      </div>
    </div>
    <div class="table-panel">
      <table-component :tableData="dataEmployees" />
      <modal-component
          modalId="onCreate"
          modalTitle="Добавление пользовавтеля"
      >
        <form-component :options="selectEmployees" />
      </modal-component>
    </div>
  </div>
</template>

<script lang="ts" src="./employeesView.ts"></script>
<style lang="scss" src="./employeesView.scss" />
