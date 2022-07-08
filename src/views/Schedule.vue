<template>
  <div class="flex justify-around h-screen items-center">
    <ul>
      <li>
        <select class="w-[300px] border-4" name="name" id="name">
            <option v-for="doctor of doctors" :key="doctor.id" :value="doctor.name" >{{ doctor.name }}</option>
        </select>
        </li>
    </ul>
  </div>
</template>
<script>

import Doctor from '../services/doctors'

export default {
  name: "Schedule",
  data() {
    return {
      doctors: [],
      id: null,
      names: null,
      health_insurance: null,
      data_query: null,
      hours: null,
      price: null,
      users_query: null,
    };
  },
  mounted(){
    this.listar()
  },
  methods:{
    
    listar(){
        Doctor.listar().then(response => {
        this.doctors = response.data
        console.log(response.data)
      	
    this.names = response
    this.health_insurance = response.health_insurance
    this.data_query = response.data_query
    this.hours = response.hours
    this.price = response.price
    this.users_query = response.users_query


      }).catch(e => {
        console.log(e)
      })
    },
}
};
</script>