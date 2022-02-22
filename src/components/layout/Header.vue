<template>
  <header id="header">
    <div class="header-contaier">
      <h1 class="logo">
        <router-link to="/">
          <Logo />
        </router-link>
      </h1>
      
      <div class="t-util">
        <ul>
          <li>
            <router-link to="/sub/Explore">Explore</router-link>
          </li>
          <li>
            <router-link to="/sub/Auction">Auction</router-link>
          </li>
          <li>
            <div @click="togglewalletMenu">Wellet</div>
          </li>
          <li>
            <div @click="toggleDisconnect">Disconnect</div>
          </li>
        </ul>
      </div>

      <div class="t-side">
        <ul>
          <li class="search">
            <button class="search-open-btn" @click="toggleSearch"><i class="xi-search"></i></button>
            <div class="search-wrap">
              <input type="text">
              <button type="button"><i class="xi-search" aria-hidden="true"></i></button>
            </div>
          </li>
          <li>
            <button class="lang-btn" @click="toggleLang">Lang</button>
            <ul class="lang-wrap">
              <li><a href=""><span>KOR</span></a></li>
              <li><a href=""><span>ENG</span></a></li>
            </ul>
          </li>
          <li>
            <button class="pull-menu-open-btn" @click="togglePullMenu">
              <i class="xi-bars"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <!-- 전체메뉴 -->
    <div class="pull-menu-wrap">
      <nav id="gnb">
        <ul>
          <li v-for="menuName in menus" v-bind:key="menuName">
            <router-link @click.native="pullMenueRemove" :to="menuName.link">{{ menuName.content }}</router-link>
          </li>
        </ul>
      </nav>
      <div class="t-util-wrap">
        <div class="t-util">
          <ul>
            <li>
              <router-link to="/sub/Explore">Explore</router-link>
            </li>
            <li>
              <router-link to="/sub/Auction">Auction</router-link>
            </li>
            <li>
              <div @click="togglewalletMenu">Wellet</div>
            </li>
            <li>
              <div @click="toggleDisconnect">Disconnect</div>
            </li>
          </ul>
        </div>
      </div>
      <button class="pull-menu-close-btn" @click="togglePullMenu">
        <i class="xi-close"></i>
      </button>
    </div>
    <!-- //전체메뉴 -->
  </header>

  <!-- connent wallet -->
    <div class="h-layer connent-wallet">
      <div>
        <h3>
          <span>connent wallet</span>
          <button class="h-layer-close-btn" @click="togglewalletMenu">
            <i class="xi-close"></i>
          </button>
        </h3>
        <div class="h-layer-cont">
          <ul>
            <li v-for="walletName in wallets" :class="walletName.class" v-bind:key="walletName">
              <router-link :to="walletName.link" >{{ walletName.content }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- //connent wallet -->

    <!-- disconnect wrap -->
    <div class="h-layer disconnect-wrap">
      <div>
        <h3>
          <span>Disconnect</span>
          <button class="h-layer-close-btn" @click="toggleDisconnect">
            <i class="xi-close"></i>
          </button>
        </h3>
        <div class="h-layer-cont">
          <button><span>Disconnect</span></button>
        </div>
      </div>
    </div>
    <!-- //disconnect wrap -->

</template>


<script>
  import Logo from '../../components/Unit/Logo';  //Logo

  export default {
    name: 'Header',
    components:{
      Logo
    },
    data: () => ({
        toggleSearchCheck: false,
        toggleLangCheck: false,
        togglePullMenuCheck: false,
        menus: [
          {content: 'Create', link: '/sub/Create'},
          {content: 'Explore', link: '/sub/Explore'},
          {content: 'Stake', link: '/sub/Stake'},
          {content: 'Auction', link: '/sub/Auction'},
          {content: 'MyPage', link: '/sub/MyPage'},
          {content: 'Tickets', link: '/sub/Tickets'}
        ],
        wallets: [
          {content: 'Ethereum', link: '/sub/Ethereum', class: 'ethereum'},
          {content: 'Bsc', link: '/sub/Bsc', class: 'bsc'},
          {content: 'klaytn', link: '/sub/klaytn', class: 'klaytn'},
          {content: 'Polygon', link: '/sub/Polygon', class: 'polygon'}
        ]
    }),
    methods: {
      toggleSearch() {
        this.toggleSearchCheck = !this.toggleSearchCheck;
        if (this.toggleSearchCheck == true) {
          $(".search-wrap").slideDown();
          $(".lang-wrap").slideUp();
          $(".search-open-btn > i").attr("class","xi-close");
        } else {
          $(".search-wrap").slideUp();
          $(".search-open-btn > i").attr("class","xi-search");
        }
      },
      toggleLang() {
        this.toggleLangCheck = !this.toggleLangCheck;
        if (this.toggleLangCheck == true) {
          $(".lang-wrap").slideDown();
          $(".search-wrap").slideUp();
          $(".search-open-btn > i").attr("class","xi-search");
        } else {
          $(".lang-wrap").slideUp();
        }
      },
      togglePullMenu() {
        this.togglePullMenuCheck = !this.togglePullMenuCheck;
        if (this.togglePullMenuCheck == true) {
          $(".pull-menu-wrap").addClass("active");
        } else {
          $(".pull-menu-wrap").removeClass("active");
        }
      },
      togglewalletMenu() {
        this.togglewalletMenuCheck = !this.togglewalletMenuCheck;
        if (this.togglewalletMenuCheck == true) {
          $(".disconnect-wrap").slideUp();
          $(".connent-wallet").slideDown();
          $("html").addClass("header-layer-active");
          $(".pull-menu-wrap").removeClass("active");
        } else {
          $(".connent-wallet").slideUp();
          $("html").removeClass("header-layer-active");
        }
      },
      toggleDisconnect(){
        this.toggleDisconnectCheck = !this.toggleDisconnectCheck;
        if (this.toggleDisconnectCheck == true) {
          $(".connent-wallet").slideUp();
          $(".disconnect-wrap").slideDown();
          $("html").addClass("header-layer-active");
          $(".pull-menu-wrap").removeClass("active");
        } else {
          $(".disconnect-wrap").slideUp();
          $("html").removeClass("header-layer-active");
        }
      },
      pullMenueRemove(){
        $(".pull-menu-wrap").removeClass("active");
      }
    }
  }  

</script>

<style lang="scss">
  @import '~@/assets/scss/layout/Header.scss';
</style>