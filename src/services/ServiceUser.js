import axios from "axios";
import Global from './../Global';
// import Cookies from "js-cookie";
export default class ServiceUser {
    obtenerToken(user) {
        var json = JSON.stringify(user);
        var header = {
            "Content-Type": "application/json",
            "responseType": "json"
        }
        return new Promise(function(resolve){
            var request = "/auth/login";
            var url = Global.url+request;
            axios.post(url, json, {headers : header}).then(response=>{
                localStorage.setItem("token", response.data);
                resolve(response.data)
            })
        })
    }
    getUserLogged() {
        return localStorage.getItem();
    }
    // Cookies
    //guardar usuario
    // setUserLogged(userLogged) {
    //     Cookies.set("userLogged", userLogged);
    // }
    //recuperar usuario
    // getUserLogged() {
    //     return Cookies.get("userLogged");
    // }
    // deleteUserLogged() {
    //     Cookies.remove("userLogged");
    // }
    deleteUser(){
        localStorage.clear();
    }
    getEmpleados(){
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        return new Promise(function(resolve){
            var request = "/api/Empleados";
            var url = Global.url+request;
            axios.get(url, { headers: headers }).then(response=>{
                resolve(response.data)
            })
        })
    }

    getDetailsEmp(id){
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        return new Promise(function(resolve){
            var request = "/api/Empleados/"+id;
            var url = Global.url+request;
            axios.get(url, { headers: headers }).then(response=>{
                resolve(response.data)
            })
        })
    }

    getPerfil(){
        const headers = {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        };
        return new Promise(function(resolve){
            var request = "/api/Empleados/PerfilEmpleado";
            var url = Global.url+request;
            axios.get(url, { headers: headers }).then(response=>{
                resolve(response.data)
            })
        })
    }
}