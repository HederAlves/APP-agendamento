<template>
    <div>
        <h1>oi</h1>
        <ul v-for="doctor in doctors" :key="doctor.id" >
            <h1>{{ doctor.price }}</h1>
        </ul>
    </div>
</template>
<script>
export default {
    name: "Schedule",
    
     data() {
        return {
            doctors: [],
        };
    },
    async mounted() {
        const resp = await fetch('http://localhost:3000/doctors');
        const response = await resp.json();
        this.doctors = response.data;
        console.log(response)
    },
}
</script>
<style>

 
</style>