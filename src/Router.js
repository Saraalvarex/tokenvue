import { createRouter, createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue';
import LoginComponent from './components/LoginComponent.vue';
import DetallesEmpleado from './components/DetallesEmpleado.vue';

const routes = [
    {
        path: "/", component: LoginComponent      
    },
    // {
    //     path: "/hospital/:idhospital", component: HospitalComponent
    // },
    {
        path: "/home/", component: HomeComponent
    },
    {
        path: "/detallesempleado/:id", component: DetallesEmpleado
    }
    // {
    //     path: "/update/:idhospital/", component: UpdateHospital
    // }
    // {
    //     path: "/delete/:id", component: DeleteDepartamento
    // }
]

const router = createRouter ({
    history: createWebHistory(),
    routes: routes
});

export default router;