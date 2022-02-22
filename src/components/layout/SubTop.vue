<template>
  <div class="sub-layout">
    <div class="sub-visual">
      <h2 class="pageTitle">{{ $route.name }}</h2>
      <span class="bg-txt">
        <em class="img-txt1">N</em>
        <em class="img-txt2">F</em>
        <em class="img-txt3">T</em>
      </span>
    </div>

    <div class="sub-menu">
      <ul>
        <li v-for="subMenuName in subMenus" v-bind:key="subMenuName" v-bind:class="subMenuName.none">
            <router-link :to="subMenuName.link" ><span>{{ subMenuName.content }}</span></router-link>
        </li>
      </ul>
    </div>
  </div>

  <a href="javascript:void(0);" class="top_btn" v-show="scY > 300" @click="toTop"><i class="xi-angle-up-min"></i></a>
</template>


<script>
  export default {
    name: 'SubTop',
    components: {},
    data: () => ({
        scTimer: 0,
        scY: 0,
        subMenus: [
          {content: 'Create', link: '/sub/Create'},
          {content: 'Explore', link: '/sub/Explore'},
          {content: 'Stake', link: '/sub/Stake'},
          {content: 'Auction', link: '/sub/Auction'},
          {content: 'MyPage', link: '/sub/MyPage'},
          {content: 'Tickets', link: '/sub/Tickets'}
        ]
    }),
    created(){
      this.currentRoute;
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    },
  }   
</script>

<style lang="scss">
  @import '~@/assets/scss/layout/SubTop.scss';
  @import '~@/assets/scss/contents/sub.scss';
</style>