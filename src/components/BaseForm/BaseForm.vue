<template>
  <div class="panel-wrapper">
    <div class="form-employees">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-group
          id="input-name"
          label="Имя"
          label-for="input-name"
        >
          <b-form-input
            v-model="form.name"
            id="input-name"
            name="trip-start"
            type="input"
            class="form-control"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-phone"
          label="Телефон"
          label-for="input-phone"
        >
          <b-form-input
            v-model="form.phone"
            id="input-phone"
            name="trip-start"
            type="phone"
            class="form-control"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-select
          v-model="form.staff"
          :options="options"
        >
        </b-form-select>
        <div class="mt-4">
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Сохранить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" src="./BaseForm.ts"></script>
