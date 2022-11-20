<template>
<br/>
<div class="card" style="width: 18rem; margin: 0 auto;">
  <div class="card-body">
    <h5 class="card-title">Empleado: {{emp.apellido}}</h5>
  <hr/>
  </div>
  <div class="card-body">
    <p class="card-text">Oficio: {{emp.oficio}}</p>
    <p class="card-text">Salario: {{emp.salario}}</p>
        <p class="card-text">Director: {{emp.director}}</p>
   <router-link to="/home" class="btn btn-warning">
    <span aria-hidden="true">&larr;</span> Back
   </router-link>
    <!-- <a href="#" class="card-link">Link</a> -->
   <!-- <router-link :to="'/update/'+this.$route.params.idemp" class="btn btn-success">Editar</router-link>
    <button class="btn btn-danger" @click="eliminaremp()">Eliminar</button> -->
  </div>
</div>
</template>
<script>
import ServiceUser from './../services/ServiceUser';
const service = new ServiceUser();
export default {
 name: 'DetallesEmpleado',
 data() {
 return {
    emp: {}, nombrempleado: null
    };
 },
 mounted(){
    service.getDetailsEmp(this.$route.params.id).then(result=>{
        this.emp=result;
    })
 },
// Para que actualice en la pagina, el empleado seleccionado en el "select"
 updated(){
    //  service.getHospital(this.$route.params.idhospital).then(result=>{
    //     this.hospital=result;
    // })
 }
};
</script>