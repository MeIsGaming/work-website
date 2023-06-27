<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Kontakt</router-link> |
    <router-link to="/impressum">Impressum</router-link> |
    <router-link to="/test">Test</router-link>
  </nav>
  <router-view />
</template>
<style scoped>
nav {
  background-color: red;
}
</style>

