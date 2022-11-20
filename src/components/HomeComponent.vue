<template>
<h1>Empleados</h1>
<div class="row">
  <div v-for="emp in empleados" :key="emp" class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Id: {{emp.idEmpleado}}</h5>
        <p class="card-text">Apellido {{emp.apellido}}</p>
        <p class="card-text">Oficio: {{emp.oficio}}</p>
        <router-link class="btn btn-primary" :to="'/detallesempleado/'+emp.idEmpleado">Detalles</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ServiceUser from './../services/ServiceUser'
const service = new ServiceUser()
export default {
 name: 'HomeComponent',
 data() {
 return {
    empleados: []
 };
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