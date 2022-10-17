<template>
  <div class="buttons-panel">
    <button type="button"
            class="btn w-100 btn-success"
            data-bs-toggle="modal"
            :data-bs-target="target"
            @click="$emit('onClick')"
    >
      {{ name }}
    </button>
  </div>
</template>

<script lang="ts" src="./BaseButton.ts"></script>
<style lang="scss" src="./BaseButton.scss" />
