<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/Autores">Autores</RouterLink>
        <RouterLink to="/Catalogo">Catalogo de livros</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
  @import "@/assets/base.css";

  .livros {
    margin-left: 20px;
    margin-top: 30px;
  }
</style>
