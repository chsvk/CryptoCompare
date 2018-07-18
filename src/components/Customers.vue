<template>
    <div class="customers container">
        <alerts></alerts>
        <h1 class="page-header">Customers</h1>
        <input type="text" placeholder="Enter First Name" v-model="filterInput">
        <hr>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email ID</th>
                    <th>Cell Number</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in filterBy(c,filterInput)">
                    <td>{{customer.name.first}}</td>
                    <td>{{customer.name.last}}</td>
                    <td>{{customer.email}}</td>
                    <td>{{customer.cell}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import Alerts from './Alert.vue'
export default {
    name: 'Customers',
    components: {
        Alerts
    },
    data() {
        return{
            c: [],
            fetched: false,
            filterInput: '',
        }
    },
    methods: {
        fetchCustomers(){
            axios.get('https://randomuser.me/api/?results=15')
            .then(Response=>{
                this.c    = Response.data.results;
                this.fetched = true;
                // console.log(Response);
            })
        },
        filterBy(list, value){
            return list.filter(function(customer){
                return customer.name.first.indexOf(value) > -1;
            });
        }
    },
    created() {
        this.fetchCustomers();
    }
}
</script>

<style scoped>
body{
    background: white;
}

</style>
