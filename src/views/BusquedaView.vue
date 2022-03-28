<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <input type="text" v-model="busqueda" />
        </div>
        <TableGames :buscando ="busqueda" />
      </div>
    </div>
  </div>
</template>

<script>
import TableGames from "@/components/TableGames.vue";
export default {
  data() {
    return {
      busqueda: "",
    };
  },
  components: {
    TableGames,
  },
};
</script>

<style lang="scss" scoped></style>
