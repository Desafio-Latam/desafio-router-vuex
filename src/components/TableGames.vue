<template>
    <div>      
          <table class="table">
      <thead>
        <tr>
          <th scope="col">Codigo</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <th scope="col">Color</th>
          <th scope="col">Destacado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="producto in filtrarTienda(buscando)" :key="producto.nombre" :style="{'background-color':producto.color}">          
          <td>{{producto.codigo}}</td>
          <td>{{producto.nombre}}</td>
          <td>{{producto.stock}}</td>
          <td>{{producto.precio}}</td>
          <td>{{producto.color}}</td>
          <td>{{producto.destacado}}</td>
          
        </tr>
        
      </tbody>
    </table>
    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
    export default {
        computed: {
          ...mapState(
            ["tienda"]
          ),
          ...mapGetters(
            ["filtrarTienda"]
          ) 
        },
        props: {
          buscando: {
            type: String,
            default: "" 
          },
        },

    }
</script>

