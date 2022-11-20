<template>
<h3 style="color: green" v-if="userLogged">Usuario logueado</h3>
<div class="d-flex justify-content-center align-items-center" v-else>
    <div class="col-md-4 p-5 shadow-sm border rounded-5 border-primary">
        <h2 class="text-center mb-4 text-primary">Login Form</h2>
        <form method="post" v-on:submit.prevent="login()">
            <div class="mb-3">
                <label class="form-label">Username</label>
                <input type="text" class="form-control border border-primary" placeholder="Sancha" v-model="user.userName">
            </div>
            <div class="mb-3">
                <label class="form-label">Password</label>
                <input type="password" class="form-control border border-primary" placeholder="7369" v-model="user.password">
            </div>
            <div class="d-grid">
                <button class="btn btn-primary" type="submit">Login</button>
            </div>
        </form>
        <!-- <div class="mt-3">
            <p class="mb-0  text-center">Don't have an account? <a href="signup.html" class="text-primary fw-bold">Sign Up</a></p>
        </div> -->
    </div>
</div>
</template>

<script>
import ServiceUser from './../services/ServiceUser'
const service = new ServiceUser()

export default {
 name: 'LoginComponent',
 data() {
 return {
    user: {
        "userName": "",
        "password": ""
    },
    token: "",
    userLogged : {
        "userName": "",
        "password": ""
    }
 };
 },
 mounted(){

 },
 methods: {
    login(){
        service.obtenerToken(this.user).then(result=> {
        try {
            this.token=result;
            localStorage.setItem('token', result.response);
            service.setUserLogged(this.user);
            console.log(localStorage)
            this.$router.push("/home");
            this.userLogged = service.getUserLogged()
            console.log(this.userLogged)
        } catch (error) {
            console.log(error);
            this.error = true;
        }
    })
    }
 }
};
</script>

<style scoped>

</style>