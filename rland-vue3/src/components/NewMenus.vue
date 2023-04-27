<template>
<section>
    <h1> {{title}} </h1>
    <ul>
        <li v-for= "m in props.list">{{ m.name }}</li>
    </ul>
</section>    
</template>
<script setup>
    let props = defineProps({
        list : [],
        title : ""
});

</script>

<style scoped>
    section{
        border: 1px solid gray;
        padding: 20px;
    }

</style>