<template>
  <div class="main-wrap">
    <section class="section1">
      <div class="mSwiper-wrap">
        <Swiper :autoplay='{"delay":8000,"disableOnInteraction": false}' :pagination='{"clickable": true}' :navigation="false" class="mSwiper">
          <swiper-slide>
              <span class="img"></span>
              <span class="bg-txt">
                <em class="img-txt1">N</em>
                <em class="img-txt2">F</em>
                <em class="img-txt3">T</em>
              </span>
              <div class="txt">
                  <p class="txt1"><span>Everything <br>About NFT</span></p>
                  <p class="txt2">we are NFT digital business group that helps people increase better incomes, help with branding for faster business growing</p>

                  <div class="btns">
                      <router-link to="/sub/Explore">Explore</router-link>
                      <router-link to="/sub/Create">Create</router-link>
                  </div>
              </div>
          </swiper-slide>
          <swiper-slide>
              <span class="img"></span>
              <span class="bg-txt">
                <em class="img-txt1">N</em>
                <em class="img-txt2">F</em>
                <em class="img-txt3">T</em>
              </span>
              <div class="txt">
                  <p class="txt1"><span>Everything <br>About NFT</span></p>
                  <p class="txt2">we are NFT digital business group that helps people increase better incomes, help with branding for faster business growing</p>

                  <div class="btns">
                      <router-link to="/sub/Explore">Explore</router-link>
                      <router-link to="/sub/Create">Create</router-link>
                  </div>
              </div>
          </swiper-slide>
        </Swiper>

        <button v-on:click="scrollToElement({behavior: 'smooth'})" class="scroll-down">
          <i class="xi-mouse"></i>
        </button>
      </div>

      <div class="mSCardwiper-wrap">
          <Swiper :autoplay='{"delay":8000,"disableOnInteraction": false}' :pagination='{"renderBullet": function(index, className){return "<span class=" + className + ">" + (index + 1) + "</span>"}, "clickable": true}' :navigation="false" class="mSCardwiper">
            <swiper-slide v-for="(image, imageIndex) in slideshow01" :key="imageIndex">
                <router-link to="/">
                  <div class="img">
                    <span :style="{ backgroundImage: 'url(' + require(`@/assets/img/main/${image}`) + ')'}"></span>
                  </div>
                  <div class="txt_wrap">
                    <div class="frm_wrap">
                      <em class="frm1">Cry #82</em>
                      <em class="frm2">Ethereum</em>
                    </div>
                    <strong class="tit">Owned by</strong>
                    <span class="txt">text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</span>
                    <hr class="line"/>
                    <div class="info_wrap">
                      <div class="info1">
                        <em>total supply</em>
                        <strong>50,000 CRY</strong>
                      </div>
                      <div class="info2">
                        <em>purchasable supply</em>
                        <strong>42.00% / 21,000 CRY</strong>
                      </div>
                    </div>
                  </div>
                </router-link>
            </swiper-slide>
          </Swiper>
      </div>
    </section>

    <section class="section2" id="section2">
      <div class="container">
        <div class="m-link">
          <div class="tit-wrap">
            <h2 class="heading1">Why fractional ?</h2>
            <p class="heading-txt">we are NFT digital business group <br>that helps people increase...</p>
          </div>

          <ul class="m-link-lst">
            <li class="m-link01">
              <router-link to="">
                <strong>Strategic Planning</strong>
                <span>Our goal is to maximize liquidity by leading he global NFT market.</span>
              </router-link>
            </li>
            <li class="m-link02">
              <router-link to="">
                <strong>Consulting &amp; Marketing</strong>
                <span>We plan to advance into consulting and marketing in the global NFT's market.</span>
              </router-link>
            </li>
            <li class="m-link03">
              <router-link to="">
                <strong>Financial</strong>
                <span>By combining digital assets with existing asset management, we plan to create a platform...</span>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="news">
          <h2 class="heading1">New NFTs</h2>

          <Swiper :autoplay='{"delay":8000,"disableOnInteraction": false}' :loop="true" :slidesPerView="1" :spaceBetween="40" :pagination='{"type": "progressbar"}' :navigation="true" :breakpoints='{"768": {"slidesPerView": 2, "spaceBetween": 30, "centeredSlides": false}, "1200": {"slidesPerView": 3, "spaceBetween": 30, "centeredSlides": true}, "1600": {"slidesPerView": 3, "spaceBetween": 40, "centeredSlides": true}}' class="mNewswiper">
            <swiper-slide v-for="(news, newsIndex) in slideshow02" :key="newsIndex">
                <router-link to="/">
                  <ul class="state-lst">
                    <li><span class="state01"><em>1 NFT</em></span></li>
                    <li><span class="state02"><em><i class="xi-check-circle"></i>verified</em></span></li>
                    <li><span class="state03"><em>auction live</em></span></li>
                  </ul>
                  <div class="img">
                    <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/${news.pic}`) + ')'}"></span>
                  </div>
                  <div class="txt_wrap">
                    <heart-btn></heart-btn>
                    <strong class="tit">Owned by</strong>
                    <span class="txt">text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</span>
                    <div class="goal-frm">
                      <em v-bind:data-count="news.count"></em>
                    </div>
                    <div class="info_wrap">
                      <em>total supply</em>
                      <strong>50,000 CRY</strong>
                    </div>
                  </div>
                </router-link>
            </swiper-slide>
          </Swiper>
        </div>

        <div class="m-link2">
          <div class="tit-wrap">
            <h2 class="heading1">How It Works</h2>
            <p class="heading-txt">Fractional enables NFT owners to create new <br>communities surrounding their NFTs, <br>discover NFT market value, and create new <br>ways of engaging their existing communities</p>
            <ul class="btns">
              <li><router-link to="" class="btn01"><span>Buyers</span></router-link></li>
              <li><router-link to="" class="btn02"><span>curators</span></router-link></li>
            </ul>
          </div>
          <ul class="m-link-lst2">
            <li>
              <em>1</em>
              <strong>BUY</strong>
              <span>Purchase fractions to collect and own part of your favorite NFTs</span>
            </li>
            <li>
              <em>2</em>
              <strong>VOTE</strong>
              <span>Contribute to the reserve price of the NFT collections you buy</span>
            </li>
            <li>
              <em>3</em>
              <strong>DECIDE TO TRANSFER OR HOLD</strong>
              <span>Control what to do with your fractions</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section3">
      <div class="container">
        <div class="frctional">
          <h2 class="heading1">Frctional</h2>
          <Swiper :autoplay='{"delay":8000,"disableOnInteraction": false}' :loop="true" :slidesPerView="1" :spaceBetween="40" :pagination='{"type": "progressbar"}' :navigation="true" :breakpoints='{"768": {"slidesPerView": 2, "spaceBetween": 30, "centeredSlides": false}, "1200": {"slidesPerView": 3, "spaceBetween": 30, "centeredSlides": true}, "1600": {"slidesPerView": 3, "spaceBetween": 40, "centeredSlides": true}}' class="mfrctionalswiper">
            <swiper-slide v-for="(Frctional, FrctionalIndex) in slideshow03" :key="FrctionalIndex" v-bind:class="Frctional.bookmark">
              <router-link to="/">
                <ul class="state-lst">
                  <li><span class="state01"><em>1 NFT</em></span></li>
                  <li><span class="state02"><em><i class="xi-check-circle"></i>verified</em></span></li>
                  <li><span class="state03"><em>Fraction sale live</em></span></li>
                </ul>
                <div class="img">
                  <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/${Frctional.pic}`) + ')'}"></span>
                </div>
                <div class="txt_wrapper">
                  <div class="txt_wrap">
                    <heart-btn></heart-btn>
                    <div class="user">
                      <em class="name">divblem Vault [Ethereum]</em>
                      <i  v-bind:class="Frctional.check"></i>
                    </div>
                    <strong class="tit">Owned by</strong>
                    <em class="link"><i class="xi-spinner-5"></i>sisyphus.eth</em>
                  </div>
                  <div class="info_wrap">
                    <ul>
                      <li>
                        <em>FRACTIONS</em>
                        <strong>0.5B</strong>
                      </li>
                      <li>
                        <em>COLLECTABLE SUPPLY</em>
                        <strong>17.73%</strong>
                      </li>
                      <li>
                        <em>Implied valuation</em>
                        <strong>$14,326,221</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </router-link>
            </swiper-slide>
          </Swiper>

          <router-link to="/" class="more-btn"><span>View all</span></router-link>
        </div>
      </div>
    </section>

    <section class="section4">
      <div class="container">
        <div class="m-link3">
          <h2 class="heading1">Frequently asked <em>QUESTIONS</em></h2>
          <p class="heading-txt">Answers to the top questions asked by the fractional community.</p>

          <ul class="m-link3-lst">
            <li v-for="item in faq" :key="item">
              <button class="faq-item-question" :class="{ toggle: item.show }" @click="item.show = !item.show">
                <div>{{ item.q }}</div>
              </button>
              <div :class="['faq-item-answer', {'is-visible': item.show, 'is-hide': !item.show }]">
                <p>{{ item.a }}</p>
              </div>
            </li>
          </ul>
          <router-link to="/" class="more-btn"><span>Read the docs</span></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  //Scrollmagic
  import ScrollMagic from 'scrollmagic';
  //HeartBtn
  import HeartBtn from '../../components/Unit/Heart';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/swiper.scss';
  // import Swiper core and required modules
  import SwiperCore, {
    Pagination,
    Mousewheel,
    Autoplay,
    Navigation,
  } from 'swiper/core';
  // install Swiper modules
  SwiperCore.use([Pagination, Mousewheel, Autoplay, Navigation]);
  export default {
    components: {
      Swiper,
      SwiperSlide,
      HeartBtn,
    },
    data() {
      return {
        slideshow01 : [
          "Mvisual.png",
          "Mvisual.png"
        ],
        slideshow02 : [{
            count: '0',
            pic: 'news_img01.png'
          },{
            count: '100',
            pic: 'news_img02.png'
          },{
            count: '30',
            pic: 'news_img03.png'
          },{
            count: '60',
            pic: 'news_img04.png'
          }
        ],
        slideshow03 : [{
            bookmark: 'book-mark',
            check: 'xi-check-square',
            pic: 'frctional_img.png'
          },{
            bookmark: '',
            check: 'xi-check-square-o',
            pic: 'frctional_img.png'
          },{
            bookmark: '',
            check: 'xi-check-square-o',
            pic: 'frctional_img.png'
          },{
            bookmark: 'book-mark',
            check: 'xi-check-square',
            pic: 'frctional_img.png'
          }
        ],
         faq: [
          {
            q: "Who is the custodian of a vault?",
            a:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            show: false
          },
          {
            q: "What are the curator fees?",
            a:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            show: false
          },
          {
            q: "What is the reserve price?",
            a:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            show: false
          },
          {
            q: "What is a buyout?",
            a:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            show: false
          },
          {
            q: "How is the reserve price set?",
            a:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            show: false
          },
          {
            q: "What is an auction?",
            a:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            show: false
          }
        ]
      }
    },
    mounted() {
      let controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
        triggerElement: ".section1",
        offset: -400
      })
      .setClassToggle(".section1", "active")
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: ".m-link",
        offset: -200
      })
      .on("enter", function() {
        animateNumber();
      })
      .on("leave", function() {
        animateNumberReset();
      })
      .setClassToggle(".m-link", "active")
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: ".news",
        offset: -200
      })
      .setClassToggle(".news", "active")
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: ".m-link2",
        offset: -200
      })
      .setClassToggle(".m-link2", "active")
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: ".frctional",
        offset: -200
      })
      .setClassToggle(".frctional", "active")
      .addTo(controller);
      new ScrollMagic.Scene({
        triggerElement: ".m-link3",
        offset: -200
      })
      .setClassToggle(".m-link3", "active")
      .addTo(controller);
    }, 
    methods: {
      scrollToElement(options) {
          const el = document.querySelector('.section2');
          
          el.scrollIntoView(options);
      }
    }
  }
  //counting number
  function animateNumber() {
    $(".section2 .container .news .mNewswiper .swiper-slide > a .txt_wrap .goal-frm > em").each(function(i) {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text()
      }).delay(1300).animate({
        countNum: countTo
      }, {
        duration: 300,
        easing: "linear",
        step: function() {
          $this.css("width", Math.floor(this.countNum) + "%");
        },
        complete: function() {
          $this.css("width",this.countNum + "%");
        }
      });
    });
  }
  //counting number reset
  function animateNumberReset() {
    $(".section2 .container .news .mNewswiper .swiper-slide > a .txt_wrap .goal-frm > em").each(function() {
      $(this).css("width", "0");
    });
  }
  
</script>

<style lang="scss">
  @import '~@/assets/scss/main/Main.scss';
</style>