<template>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">TOKEN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">Home/Empleados</router-link>
        </li>
        <li class="nav-item" v-if="this.usuario">
          <h style="color: green" >Usuario logueado</h>
          <button class="btn btn-outline-warning" @click="cerrarSesion()">Cerrar sesión</button>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="/detallesempleados/:id">Empleados</a>
        </li> -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <!-- <li v-for="empleado in empleados" :key="empleado" >
              <router-link class="dropdown-item" :to="'/perfil/'+perfil">{{empleado.oficio}}</router-link>
            </li> -->
          </ul>
        </li>
        <!-- <form class="d-flex" role="search" @submit.prevent="buscarHospital()">
          <input class="form-control me-2" v-model="search" type="search" placeholder="Nombre" aria-label="Search">
           <router-link class="btn btn-outline-success" :to="'/titulo/'+search">Buscar</router-link>
        </form> -->
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import ServiceUser from './../services/ServiceUser'
const service = new ServiceUser();

export default {
 name: 'MenuComponent',
 data() {
 return {
   empleados: [],
   usuario: null
 };
 },
 methods: {
    cerrarSesion(){
        service.deleteUser()
    }
 },
 mounted(){
   service.getEmpleados().then(resu=>{
     this.empleados=resu;
   })
 }
};
</script>

<style scoped>

</style>