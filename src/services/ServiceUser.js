import axios from "axios";
import Global from './../Global';

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
                resolve(response.data)
            })
        })
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