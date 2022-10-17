<template>
  <div class="container">
    <div class="main">
      <div class="panel-wrapper">
        <nav>
          <router-link to="/employees">Employees List</router-link>
        </nav>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" src="./App.scss" />
