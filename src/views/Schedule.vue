<template>
    <div class="flex justify-around h-screen items-center">
        <ul v-for="doctor of doctors" :key="doctor.id" >
            <li>{{ doctor.name }}</li>
            <li>{{ doctor.health_insurance }}</li>
            <li>{{ doctor.data_query }}</li>
            <li>{{ doctor.hours }}</li>
            <li>{{ doctor.price }}</li>
            <li>{{ doctor.users_query }}</li>
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
        this.doctors = response;
    },
}
</script>