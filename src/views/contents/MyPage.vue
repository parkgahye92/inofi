<template>
  <div id="contents">
  <!-- 서브내용 -->
    <div class="container">
      <!-- 공통 : title-area -->
      <div class="title-area">
        <div class="location">
          <a href="/" class="home">
            <i class="xi-home"></i>
          </a>
          <span>MY PAGE</span>
          <span>NFT</span>
        </div>

        <h2 class="pageTitle"><strong>NFT</strong></h2>
      </div>
      <!-- //공통 : title-area -->

      <!-- 탭메뉴 -->
      <div class="tab-menu2">
        <ul>
          <li class="my-page-nft-veiw-btn active">
            <button @click="MypageNFTVeiw"><span>NFT</span></button>
          </li>
          <li class="my-page-auction-veiw-btn">
            <button @click="MypageAuctionVeiw"><span>Auction</span></button>
          </li>
        </ul>
      </div>
      <!-- //탭메뉴 -->

      <!-- my-page-nft-veiw-->
      <div class="my-page my-page-nft active">
        <h4 class="heading3">my bidding NFT's</h4>
        <div class="my-page-nft-veiw">
          <Swiper :effect="'flip'" :grabCursor="true" :loop="true" :slidesPerView="1" :spaceBetween="40" :navigation="true" class="veiw-detail-wrap">
            <swiper-slide v-for="(mypage, mypageIndex) in slideshow01" :key="mypageIndex" class="veiw-detail">
              <div class="img">
                <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/${mypage.pic}`) + ')'}"></span>
              </div>
              <div class="txt_wrap">
                <div class="frm_wrap">
                  <em class="frm1">Cry #82</em>
                </div>
                <span class="txt2">total 0 FINO Funded</span>
                <span class="txt3">text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</span>
                <a href="" target="_blank" class="link">http://sdsdsdsdsdsd</a>
                
                <div class="btns">
                  <button class="btn-st2" @click="toggleLayerPop1"><span>Detail</span></button>
                </div>
              </div>
            </swiper-slide>
          </Swiper>

          <div class="tbl_wrap">
            <h4 class="heading3">my histories</h4>
            <div class="tbl ac">
                <table>
                  <caption>my histories</caption>
                  <colgroup>
                    <col style="width:25%" span="4">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">NFT</th>
                      <th scope="col">Event</th>
                      <th scope="col">Bid Amount</th>
                      <th scope="col">TXID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="NFT">Main #12</td>
                      <td data-label="Event">Bid</td>
                      <td data-label="Bid Amount">2 FINO</td>
                      <td data-label="TXID">TXID</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
      <!-- //my-page-nft-veiw-->

      <!-- my-page-auction-veiw -->
      <div class="my-page my-page-auction">
        <h4 class="heading3">my bidding NFT's</h4>
        <div class="my-page-auction-veiw">
          <Swiper :effect="'flip'" :grabCursor="true" :loop="true" :slidesPerView="1" :spaceBetween="40" :navigation="true" class="veiw-detail-wrap">
            <swiper-slide v-for="(mypage, mypageIndex) in slideshow01" :key="mypageIndex" class="veiw-detail">
              <div class="img">
                <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/${mypage.pic}`) + ')'}"></span>
              </div>
              <div class="txt_wrap">
                <div class="frm_wrap">
                  <em class="frm1">Cry #82</em>
                </div>
                <span class="txt2">total 0 FINO Funded</span>
                <span class="txt3">text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</span>
                <a href="" target="_blank" class="link">http://sdsdsdsdsdsd</a>
                
                <div class="btns">
                  <button class="btn-st2" @click="toggleLayerPop1"><span>Detail</span></button>
                </div>
              </div>
            </swiper-slide>
          </Swiper>

          <div class="tbl_wrap">
            <h4 class="heading3">my histories</h4>
            <div class="tbl ac">
                <table>
                  <caption>my histories</caption>
                  <colgroup>
                    <col style="width:25%" span="4">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">NFT</th>
                      <th scope="col">Event</th>
                      <th scope="col">Bid Amount</th>
                      <th scope="col">TXID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td data-label="NFT">Main #12</td>
                      <td data-label="Event">Bid</td>
                      <td data-label="Bid Amount">2 FINO</td>
                      <td data-label="TXID">TXID</td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
      <!-- //my-page-auction-veiw -->
    </div>
    <!-- //서브내용 -->
  </div>
</template> 

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/swiper.scss';
  // import Swiper core and required modules
  import SwiperCore, {
    Mousewheel,
    Navigation,
    EffectFlip
  } from 'swiper/core';

  // install Swiper modules
  SwiperCore.use([Mousewheel, Navigation, EffectFlip]);

  export default {
    name: 'MyPage',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() { 
       return {
        slideshow01 : [{
            pic: 'frctional_img.png'
          },{
            pic: 'frctional_img.png'
          }
        ]
       }
    },
    methods: {
      MypageNFTVeiw() {
        this.MypageNFTVeiwCheck = !this.MypageNFTVeiwCheck;
        if (this.MypageNFTVeiwCheck == true) {
          $(".my-page").addClass("active");
          $(".my-page-nft").removeClass("active");
          $(".my-page-nft-veiw-btn").addClass("active");
          $(".my-page-auction-veiw-btn").removeClass("active");

          $(".title-area .location > span:last-of-type").text("NFT");
          $(".pageTitle > strong").text("NFT");
        }
      },
      MypageAuctionVeiw() {
        this.NewNFTAuctionsVeiwCheck = !this.NewNFTAuctionsVeiwCheck;
        if (this.NewNFTAuctionsVeiwCheck == true) {
          $(".my-page").addClass("active");
          $(".my-page-auction").removeClass("active");
          $(".my-page-auction-veiw-btn").addClass("active");
          $(".my-page-nft-veiw-btn").removeClass("active");

          $(".title-area .location > span:last-of-type").text("Auction");
          $(".pageTitle > strong").text("Auction");
        }
      }
    }
  }
</script>