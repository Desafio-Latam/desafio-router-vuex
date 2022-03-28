<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container-fluid">
        <ul class="navbar-nav">
          <li class="nav-item pe-3">
            <router-link class="nav-link active" to="/inicio">Inicio</router-link>
          </li>
          <li class="nav-item pe-3">
            <router-link class="nav-link active" to="/busqueda">Busqueda</router-link>
          </li>
          <li class="nav-item pe-3">            
            <a class="nav-link active" href="#">Venta</a>
          </li>
          <li class="nav-item pe-3">
            <a class="nav-link active" href="#">Total</a>
          </li>
        </ul>
      </div>
    </nav>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getData"]),
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
.vista-enter-active,
.vista-leave-active {
  transition: opacity 0.1s;
}
.vista-enter,
.vista-leave-to {
  opacity: 0;
}
</style>
