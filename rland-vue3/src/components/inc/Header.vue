<script setup>
// import UserDetails from '../../stores/UserDetails';
import { isNavigationFailure, useRouter } from 'vue-router';
import { UseUserDetailsStore } from '../../stores/UseUserDetailsStore';
import {googleLogout} from 'vue3-google-login';


let userDetails = UseUserDetailsStore();
let router = useRouter();

function logoutHandler(){
   
    userDetails.logout();
    googleLogout();
    router.push("/index");
}

</script>

<template>
    <header class="header-container">
        <h1 class="d-none">알랜드</h1>
        <div>
            <router-link to="/index"><img src="/image/logo.svg" /></router-link>
            <!-- <a href="/" title="index페이지로 이동합니다.">
                <img src="/image/logo.svg" />
            </a> -->
            <a class="icon icon-menu">메뉴</a>
        </div>
        <nav class="nav-wrap">
            <h1 class="d-none">네비게이션 목록</h1>
            <ul>
                <li>
                    <a href="index.html" class="icon icon-home" title="index페이지로 이동합니다.">홈</a>
                    <router-link to="/admin/menu/list" class="icon icon-setting" title="메뉴관리로 이동합니다.">메뉴관리</router-link>
                </li>
                <li>
                    <router-link v-if="!userDetails.isAuthenticated" to="/login" class="icon icon-sign-on" title="로그인">로그인</router-link>
                    <router-link v-else to="/logout" class="icon icon-sign-out" title="로그아웃" @click.prevent="logoutHandler">로그아웃</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>