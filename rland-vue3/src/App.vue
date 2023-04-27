


<script>
// import Header from './components/Header.vue';

export default {
    components: {
        Header,
    },
    data() {

        return {
            a: 10
        };
    },
    methods: {
        // clickHandler(){
        //     console.log("clicked");
        // }
    },
    // computed:{
    //     total(){
    //         return this.a+10;
    //     }

    // }
}
</script>


<!----------------------------------------------------------------->


<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import Header from './components/Header.vue';
// ------------------------------------------------------------------
let b = ref(30);
let menu = reactive({
    id: 1,
    name: "아메리카노",
    price: 3000,
});
// let list = reactive([]);
let model = reactive({
    newList: [],
    list: []
}
);
let q = ref('');
console.log(q);
watch(q, ()=>{
    console.log(q.value);
    model.list = model.list.filter(m => m.name.includes(q.value));
    
})

let total2 = computed(() => model.list.map((m) => m.price).reduce((p, c) => p + c, 0)); //객체 뱅렬의 값을 map을 이용해 price 배열만 생성
watch(model, ()=>{
    console.log("왓치");
}

)

let total = computed(() => { //리스트 불러올 때 총합
    let result = 0;
    for (let m of model.list) {
        result += m.price;
    }
    return result;
});
// -----------------------------------------------------------------
onMounted(() => {
    console.log("mouted");
    console.log(b.value); //ref
    console.log(menu.price); //reactive
});
//  ------------------------------------------------------------------
async function load() {

    let rep = await fetch("http://192.168.0.33:8080/menus");
    let json = await rep.json();
    model.list = json.list;

    // let list = reactive([]); 의 reactive까지 덮는다 
    // let model = reactive({ 모델의 속성으로 변경하여 reactive 유지
    // newList:[],
    // list:[]

}

function clickHandler() {
    console.log("클릭");
    load();
    // console.log(list);
}

function menuDelHandler(e){
    console.log(e);
    let idx = model.list.findIndex(m=>m.id=e);
    model.list.splice(idx,1);
}

</script>

<template>
    <Header />
    
    <div>
        <div>
            <label>검색어</label>
            <input type="text" v-model="q"/>
        </div>
        hello
        {{ a }}
        {{ b }}
    </div>
    <div>
        {{ total }} <br>
        {{ total2 }} <br>
        a:<span v-text="a"></span><input v-model.number="a"> <br> <!--string to number-->
        b:<span v-text="b"></span><input v-model.number="b"> <br>
        price:<span v-text="menu.price"></span><input v-model="menu.price" /><br>
    </div>
    <div @click="clickHandler"> 클릭</div>

    <div>
        <ul>
            <li v-for="(m, i) in model.list">
                <span>{{ m.name }}</span><input type="button" value="del" @click="menuDelHandler(m.id)"/>
            </li>
        </ul>
    </div>
</template>