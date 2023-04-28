<template>
    <div class="screen" :class="{ 'd-none': !show }">
        <section :class="{'show-effect': show}">
            <h1> {{ title }} </h1>
            <div class="content">
                <slot></slot>
            </div>
            <div class="commands">
                <button @click="$emit('ok', 'hehe')">OK</button>
                <button>Cancel</button>
            </div>
        </section>
    </div>
</template>

<script setup>
let props = defineProps({
    title: "",
    show: true,
    type: "confirm"
});

function okHandler() {
    props.show = false;
}

</script>

<style scoped>
@keyframes show-effect {
    from{
        transform: translateY(-300px);
    }
    to{
        transform: translateY(-200px);
    }
}
.d-none {
    display: none !important;
}

.screen {
    background-color: rgba(0, 0, 0, 0.764);

    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;

    display: flex;
    align-items: center;

    justify-content: center;
}

section {
    background-color: #fff;
    display: inline-block;
    border-radius: 0.7em;

}

section.show-effect {
    animation: show-effect 0.5s forwards;
}

section>h1 {
    font-size: 14px;
    padding: 0px 10px;
}

section>.content {
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    padding: 10px 20px;

}

section>.commands {
    padding: 10px 10px;
    display: flex;
    justify-content: center;
}
</style>