<script setup>
import { reactive } from 'vue';
// import userDetails from '../stores/UserDetails.js'
import { UseUserDetailsStore } from '../stores/UseUserDetailsStore.js';
import {useRouter, useRoute} from 'vue-router';

let userDetails = UseUserDetailsStore();
let router = useRouter();
let route = useRoute();

let user = reactive({
  username: "newlec",
  password: "111",
  role: ""
});

async function loginHandler() {
  console.log(user);
  let response = await fetch("http://localhost:8080/members/login",{
    method: "POST",
    headers:{
      "Accept":"application/json",
      "Content-type" : "application/x-www-form-urlencoded"
    },
    body:`username=${user.username}&password=${user.password}`

  });
  let json = await response.json();
  console.log(json);

  userDetails.username = json.result.userName;
  userDetails.email = json.result.email;
  userDetails.roles = json.roles;

  let returnURL = route.query.returnURL;

  if(returnURL){
    router.push(returnURL);
  }else{
    router.push("/index");
  }

  
  // this.$router.push("/index");
  // this.$router.go('/index')
}


</script>


<template>
  <main>
    <div class="sign-in">
      <div class="sign-in-logo">
        <img src="/image/logo-black.svg" alt="Rland" />
      </div>
      <form class="sign-in-form">
        <div class="sign-in-form-input">
          <div>
            <input type="text" class="input-bottom-line" placeholder="아이디" required v-model="user.username"/>
          </div>
          <div>
            <input type="password" class="input-bottom-line" placeholder="비밀번호" required v-model="user.password" />
          </div>
        </div>

        <div class="sign-in-form-button">
          <div class="wd-100">
            <input type="submit" value="로그인" class="btn btn-default" @click.prevent="loginHandler" />
          </div>
          <div class="font-14">또는</div>
          <div class="wd-100">
            <a href="" class="deco icon-logo-google btn btn-outline">구글로 로그인</a>
          </div>
        </div>
      </form>
      <div class="sign-in-find-user font-14">
        <a href="./sign-up.html">회원가입</a> |
        <a href="">비밀번호 찾기</a>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('/css/sign-in.css');
</style>