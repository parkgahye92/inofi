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
          <span>EXPLORE</span>
          <span>Upcoming NFT's</span>
        </div>

        <h2 class="pageTitle"><strong>Upcoming NFT's</strong></h2>
      </div>
      <!-- //공통 : title-area -->

      <!-- 탭메뉴 -->
      <div class="tab-menu">
        <ul>
          <li class="upcoming-veiw-btn active">
            <button @click="UpcomingNFTsVeiw"><span>Upcoming NFT's</span></button>
          </li>
          <li class="founded-veiw-btn">
            <button @click="FoundedNFTsVeiw"><span>Founded NFT's</span></button>
          </li>
        </ul>
      </div>
      <!-- //탭메뉴 -->

      <!-- upcoming-veiw -->
      <div class="upcoming-veiw">
        <!-- step01 -->
        <div class="function-step1">
          <!-- 검색폼 -->
          <div class="bbs-search">
            <div class="total">Total <strong>03</strong> Results</div>
            <div class="bbs-frm">
              <em>Sort By</em>
              <div class="select-wrap bbs-select">
                <select v-model="selected" id="bbsSelect">
                  <option v-for="option in options" v-bind:value="option.value" v-bind:key="option">{{ option.text }}</option>
                </select>
                <label for="bbsSelect">{{ selected }}</label>
              </div>
            </div>
          </div>
          <!-- //검색폼 -->

          <!-- 검색결과 -->
          <div class="veiw-type2">
            <ul>
              <li v-for="(VeiwType, VeiwTypeIndex) in VeiwTypeWrap" :key="VeiwTypeIndex" v-bind:class="VeiwType.bookmark">
                <div @click="FunctionStepNextDetail1">
                  <ul class="state-lst">
                    <li><span class="state01"><em>1 NFT</em></span></li>
                    <li><span class="state02"><em><i class="xi-check-circle"></i>verified</em></span></li>
                    <li><span class="state03"><em>Fraction sale live</em></span></li>
                  </ul>
                  <div class="img">
                    <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/${VeiwType.pic}`) + ')'}"></span>
                  </div>
                  <div class="txt_wrapper">
                    <div class="txt_wrap">
                      <heart-btn></heart-btn>
                      <div class="user">
                        <em class="name">divblem Vault [Ethereum]</em>
                        <i v-bind:class="VeiwType.check"></i>
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
                </div>
              </li>
            </ul>
          </div>

          <div class="btns">
            <button class="more-btn"><span>More</span></button>
          </div>
          <!-- //검색결과 -->
        </div>
        <!-- //step01 -->

        <!-- step02 -->
        <div class="function-step function-step2">
          <div class="veiw-detail-wrap">
            <div class="veiw-detail">
              <div class="img">
                <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
              </div>
              <div class="txt_wrap">
                <div class="frm_wrap">
                  <em class="frm1">Cry #82</em>
                  <em class="frm2">Ethereum</em>
                </div>
                <strong class="tit">Owned by</strong>
                <span class="txt1">text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</span>
                <span class="txt2">total 0 FINO Funded</span>
                <span class="txt3">text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</span>
                <a href="" target="_blank" class="link">http://sdsdsdsdsdsd</a>
                <hr class="line">
                <ul class="info_wrap">
                  <li class="info1 info-100">
                    <em>Image</em>
                    <strong>text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</strong>
                  </li>
                  <li class="info2">
                    <em>NFT Contract</em>
                    <strong>text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</strong>
                  </li>
                  <li class="info3">
                    <em>Fino20 Contract</em>
                    <strong>text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</strong>
                  </li>
                  <li class="info4">
                    <em>Total Supply</em>
                    <strong>text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</strong>
                  </li>
                  <li class="info5">
                    <em>Offering Amount</em>
                    <strong>text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</strong>
                  </li>
                </ul>

                <div class="btns">
                  <button class="btn-st2" @click="toggleLayerPop1"><span>Found</span></button>
                  <button class="btn-st3"><span>Refound</span></button>
                </div>
              </div>
            </div>
          </div>
          <div class="btns">
            <button class="more-btn" @click="FunctionStepPrev1"><span>Back</span></button>
          </div>
        </div>
        <!-- //step02 -->

        <!-- 레이어팝업 -->
        <div class="layer-pop">
          <div>
            <h3>
              <span>Found NFT With FINO</span>
              <button class="layer-pop-close-btn" @click="toggleLayerPop1">
                <i class="xi-close"></i>
              </button>
            </h3>
            <div class="layer-pop-cont">
              <h4>FINO</h4>
              <div class="count-frm">
                <!-- max일경우 .count-max가 붙음 -->
                <div class="count" v-bind:class="{'count': count >= MinNumber, 'count-max': count > MaxNumber}">
                    <input type="number" v-model="count">
                    <div class="count-btns">
                      <button @click="increment"><i class="xi-angle-up-min"></i></button>
                      <button @click="decrement"><i class="xi-angle-down-min"></i></button>
                    </div>
                  </div>
                  <div class="count-state">
                    <button @click="MaxNumInsert" v-if="count > MaxNumber" class="max">Max</button>
                    <button @click="MinNumInsert" v-else class="min">Min</button>
                  </div>
              </div>

              <p class="txt-p">dsfdsfsdfsdfsdfsdfsdfsdfsdfsd</p>
              <hr class="line-dash">
              <div class="btns">
                <button class="btn-st2"><span>Found</span></button>
              </div>
            </div>
          </div>
        </div>
        <!-- //레이어팝업 -->
      </div>
      <!-- //upcoming-veiw -->

      <!-- founded-veiw -->
      <div class="founded-veiw">
        <!-- step01 -->
        <div class="function-step1">
          <!-- 검색폼 -->
          <div class="bbs-search">
            <div class="total">Total <strong>03</strong> Results</div>
            <div class="bbs-frm">
              <em>Sort By</em>
              <div class="select-wrap bbs-select">
                <select v-model="selected" id="bbsSelect">
                  <option v-for="option in options" v-bind:value="option.value" v-bind:key="option">{{ option.text }}</option>
                </select>
                <label for="bbsSelect">{{ selected }}</label>
              </div>
            </div>
          </div>
          <!-- //검색폼 -->

          <!-- 검색결과 -->
          <div class="veiw-type2">
            <ul>
              <li v-for="(VeiwType, VeiwTypeIndex) in VeiwTypeWrap" :key="VeiwTypeIndex" v-bind:class="VeiwType.bookmark">
                <div @click="FunctionStepNextDetail2">
                  <ul class="state-lst">
                    <li><span class="state01"><em>1 NFT</em></span></li>
                    <li><span class="state02"><em><i class="xi-check-circle"></i>verified</em></span></li>
                    <li><span class="state03"><em>Fraction sale live</em></span></li>
                  </ul>
                  <div class="img">
                    <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/${VeiwType.pic}`) + ')'}"></span>
                  </div>
                  <div class="txt_wrapper">
                    <div class="txt_wrap">
                      <heart-btn></heart-btn>
                      <div class="user">
                        <em class="name">divblem Vault [Ethereum]</em>
                        <i v-bind:class="VeiwType.check"></i>
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
                </div>
              </li>
            </ul>
          </div>

          <div class="btns">
            <button class="more-btn"><span>More</span></button>
          </div>
          <!-- //검색결과 -->
        </div>
        <!-- //step01 -->

        <!-- step02 -->
        <div class="function-step function-step2">
          <div class="veiw-detail-wrap">
            <div class="veiw-detail">
              <div class="img">
                <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
              </div>
              <div class="txt_wrap">
                <div class="frm_wrap">
                  <em class="frm1">Cry #82</em>
                  <em class="frm2">Ethereum</em>
                </div>
                <strong class="tit">Owned by</strong>
                <span class="txt1">text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</span>
                <span class="txt2">total 0 FINO Funded</span>
                <span class="txt3">text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</span>
                <a href="" target="_blank" class="link">http://sdsdsdsdsdsd</a>
                <hr class="line">
                <ul class="info_wrap">
                  <li class="info1 info-100">
                    <em>Image</em>
                    <strong>text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</strong>
                  </li>
                  <li class="info2">
                    <em>NFT Contract</em>
                    <strong>text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</strong>
                  </li>
                  <li class="info3">
                    <em>Fino20 Contract</em>
                    <strong>text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</strong>
                  </li>
                  <li class="info4">
                    <em>Total Supply</em>
                    <strong>text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</strong>
                  </li>
                  <li class="info5">
                    <em>Offering Amount</em>
                    <strong>text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text text text Text Text Text Text</strong>
                  </li>
                </ul>

                <div class="btns">
                  <button class="btn-st2" @click="toggleLayerPop2"><span>Found</span></button>
                  <button class="btn-st3"><span>Refound</span></button>
                </div>
              </div>
            </div>
          </div>
          <div class="btns">
            <button class="more-btn" @click="FunctionStepPrev2"><span>Back</span></button>
          </div>
        </div>
        <!-- //step02 -->

        <!-- 레이어팝업 -->
        <div class="layer-pop">
          <div>
            <h3>
              <span>Found NFT With FINO</span>
              <button class="layer-pop-close-btn" @click="toggleLayerPop2">
                <i class="xi-close"></i>
              </button>
            </h3>
            <div class="layer-pop-cont">
              <h4>FINO</h4>
              <div class="count-frm">
                <!-- max일경우 .count-max가 붙음 -->
                <div class="count" v-bind:class="{'count': count >= MinNumber, 'count-max': count > MaxNumber}">
                    <input type="number" v-model="count">
                    <div class="count-btns">
                      <button @click="increment"><i class="xi-angle-up-min"></i></button>
                      <button @click="decrement"><i class="xi-angle-down-min"></i></button>
                    </div>
                  </div>
                  <div class="count-state">
                    <button @click="MaxNumInsert" v-if="count > MaxNumber" class="max">Max</button>
                    <button @click="MinNumInsert" v-else class="min">Min</button>
                  </div>
              </div>

              <p class="txt-p ac">dsfdsfsdfsdfsdfsdfsdfsdfsdfsd</p>
              <hr class="line-dash">
              <div class="btns">
                <button class="btn-st2"><span>Found</span></button>
              </div>
            </div>
          </div>
        </div>
        <!-- //레이어팝업 -->
      </div>
      <!-- //founded-veiw -->
    </div>
    <!-- //서브내용 -->
  </div>
</template> 

<script>
  //HeartBtn
  import HeartBtn from '../../components/Unit/Heart';
  import Vue3autocounter from 'vue3-autocounter';

  export default {
    name: 'Explore',
    components: {
      HeartBtn,
      'vue3-autocounter': Vue3autocounter
    },
    data() { 
       return {
          toggle: -1,
          count: 0,
          MaxNumber:100,
          MinNumber:-1,
          selected: 'popular',
          options: [
            { text: 'popular', value: 'popular' },
            { text: 'newest', value: 'newest' },
            { text: 'oldest', value: 'oldest' },
            { text: 'implied valuation', value: 'implied valuation' },
            { text: 'Implied Valuation', value: 'Implied Valuation' },
            { text: 'auction ending soon', value: 'auction ending soon' },
            { text: 'verified by fractional', value: 'verified by fractional' }
          ],
          VeiwTypeWrap : [{
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
          }
        ]
       }
    },
    methods: {
      UpcomingNFTsVeiw() {
        this.UpcomingNFTsVeiwCheck = !this.UpcomingNFTsVeiwCheck;
        if (this.UpcomingNFTsVeiwCheck == true) {
          $(".founded-veiw").slideUp();
          $(".upcoming-veiw").slideDown();
          $(".upcoming-veiw-btn").addClass("active");
          $(".founded-veiw-btn").removeClass("active");

          $(".title-area .location > span:last-of-type").text("Upcoming NFT's");
          $(".pageTitle > strong").text("Upcoming NFT's");
        }
      },
      FoundedNFTsVeiw() {
        this.FoundedNFTsVeiwCheck = !this.FoundedNFTsVeiwCheck;
        if (this.FoundedNFTsVeiwCheck == true) {
          $(".upcoming-veiw").slideUp();
          $(".founded-veiw").slideDown();
          $(".founded-veiw-btn").addClass("active");
          $(".upcoming-veiw-btn").removeClass("active");

          $(".title-area .location > span:last-of-type").text("Founded NFT's");
          $(".pageTitle > strong").text("Founded NFT's");
        }
      },
      FunctionStepNextDetail1() {
        this.FunctionStepNextDetail1Check = !this.FunctionStepNextDetail1Check;
        if (this.FunctionStepNextDetail1Check == true) {
          $(".upcoming-veiw .function-step1").slideUp();
          $(".upcoming-veiw .function-step2").slideDown();

          $(".tab-menu").hide();
        }
      },
      FunctionStepPrev1() {
        this.FunctionStepPrev1Check = !this.FunctionStepPrev1Check;
        if (this.FunctionStepPrev1Check == true) {
          $(".upcoming-veiw .function-step2").slideUp();
          $(".upcoming-veiw .function-step1").slideDown();

          $(".tab-menu").show();
        }
      },
      toggleLayerPop1() {
        this.toggleLayerPop1Check = !this.toggleLayerPop1Check;
        if (this.toggleLayerPop1Check == true) {
          $(".upcoming-veiw .layer-pop").slideDown();
          $("html").addClass("layer-pop-active");
        } else {
          $(".upcoming-veiw .layer-pop").slideUp();
          $("html").removeClass("layer-pop-active");
        }
      },
      FunctionStepNextDetail2() {
        this.FunctionStepNextDetail2Check = !this.FunctionStepNextDetail2Check;
        if (this.FunctionStepNextDetail2Check == true) {
          $(".founded-veiw .function-step1").slideUp();
          $(".founded-veiw .function-step2").slideDown();

          $(".tab-menu").hide();
        }
      },
      FunctionStepPrev2() {
        this.FunctionStepPrev2Check = !this.FunctionStepPrev2Check;
        if (this.FunctionStepPrev2Check == true) {
          $(".founded-veiw .function-step2").slideUp();
          $(".founded-veiw .function-step1").slideDown();

          $(".tab-menu").show();
        }
      },
      toggleLayerPop2() {
        this.toggleLayerPop2Check = !this.toggleLayerPop2Check;
        if (this.toggleLayerPop2Check == true) {
          $(".founded-veiw .layer-pop").slideDown();
          $("html").addClass("layer-pop-active");
        } else {
          $(".founded-veiw .layer-pop").slideUp();
          $("html").removeClass("layer-pop-active");
        }
      },
      MaxNumInsert(){
        this.count = 100;
      },
      MinNumInsert(){
        this.count = -1;
      },
      increment () {
        this.count += 1;
      },
      decrement () {
        this.count -= 1;
      }
    }
  }
</script>
