<template>
  <div>   
    <h1 class="display-4 text-center">
      Tienda de Juegos <strong>32 BITS</strong>
    </h1>
  </div>
</template>
<script>
//import {mapState} from 'vuex'
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
