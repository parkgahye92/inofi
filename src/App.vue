<template>
    <div id="wrap">
      <Loading/>
      <Header/>
      <div id="container">
        <router-view v-slot="{ Component, route }">
          <transition name="slide-fade" mode="out-in">
            <div :key="route.name">
              <SubTop v-if="$route.path.includes('/sub/')"/>  
              <component :is="Component"></component>
            </div>
          </transition>
        </router-view>
      </div>
      <Footer/>
    </div>
</template>

<script>
import Loading from './components/Unit/Loading'; //import 랜딩 페이지 추가
import Header from './components/layout/Header'; //import 헤더 추가
import Footer from './components/layout/Footer'; //import 풋터 추가
import SubTop from './components/layout/SubTop.vue';//import 서브top 추가


export default {
  name: 'app',
  components: {
    Loading, // 로딩 컴포넌트 추가
    Header, //헤더 컴포넌트 추가
    Footer, //풋터 컴포넌트 추가
    SubTop, //import 서브top 추가
  }
}
</script>


