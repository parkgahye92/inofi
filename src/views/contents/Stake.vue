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
          <span>Stake</span>
          <span>Stake And Earn FINO</span>
        </div>

        <h2 class="pageTitle"><strong>Stake And Earn FINO</strong></h2>
      </div>
      <!-- //공통 : title-area -->
      
      <!-- step00 -->
      <div class="veiw-type3">
        <ul>
          <li>
            <div>
              <div class="ico">
                <img src="@/assets/img/sub/stake_logo_eth.png">
              </div>
              <strong class="tit">Deposit ETH</strong>
              <span class="txt">earn fino</span>
              <em class="rewards"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='count' :duration='1' prefix='' suffix='' separator=',' decimalSeparator='.'  :autoinit='true' />% of rewards given</em>

              <div class="txt_wrap">
                <div class="total">Total <strong><vue3-autocounter ref='counter' :startAmount='0' :endAmount='count' :duration='1' prefix='' suffix='' separator=',' decimalSeparator='.'  :autoinit='true' /></strong><em>ETH</em> Staked</div>
                <ul class="btns">
                  <li><button class="btn-st4" @click="toggleLayerPop1"><span>Stake</span></button></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="ico">
                <img src="@/assets/img/sub/stake_logo_usdt.png">
              </div>
              <strong class="tit">Deposit USDT</strong>
              <span class="txt">earn fino</span>
              <em class="rewards"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='count' :duration='1' prefix='' suffix='' separator=',' decimalSeparator='.'  :autoinit='true' />% of rewards given</em>

              <div class="txt_wrap">
                <div class="total">Total <strong><vue3-autocounter ref='counter' :startAmount='0' :endAmount='count' :duration='1' prefix='' suffix='' separator=',' decimalSeparator='.'  :autoinit='true' /></strong><em>USDT</em> Staked</div>
                <ul class="btns">
                  <li><button class="btn-st4" @click="toggleLayerPop2"><span>Approve</span></button></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="ico">
                <img src="@/assets/img/sub/stake_logo_fino.png">
              </div>
              <strong class="tit">Deposit ETH</strong>
              <span class="txt">earn fino</span>
              <em class="rewards"><vue3-autocounter ref='counter' :startAmount='0' :endAmount='count' :duration='1' prefix='' suffix='' separator=',' decimalSeparator='.'  :autoinit='true' />% of rewards given</em>

              <div class="txt_wrap">
                <div class="total">Total <strong><vue3-autocounter ref='counter' :startAmount='0' :endAmount='count' :duration='1' prefix='' suffix='' separator=',' decimalSeparator='.'  :autoinit='true' /></strong><em>FINO</em> Staked</div>
                <ul class="btns">
                  <li><button class="btn-st4" @click="toggleLayerPop3"><span>Approve</span></button></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- //step00 -->

      <!-- 레이어팝업1 -->
      <div class="layer-pop layer-pop1">
        <div>
          <h3>
            <span>Stake / Unstake ETH, Claim FINO</span>
            <button class="layer-pop-close-btn" @click="toggleLayerPop1">
              <i class="xi-close"></i>
            </button>
          </h3>
          <div class="layer-pop-cont"> 
            <!-- 탭메뉴 -->
            <div class="tab-menu">
              <ul>
                <li class="tab-toggle1 active">
                  <button @click="tabToggleOne1"><span>Stake</span></button>
                </li>
                <li class="tab-toggle2">
                  <button @click="tabToggleOne2"><span>Unstake</span></button>
                </li>
                <li class="tab-toggle3">
                  <button @click="tabToggleOne3"><span>clame</span></button>
                </li>
              </ul>
            </div>
            <!-- //탭메뉴 -->

            <div class="tab-con tab-con1">
              <h4>Title</h4>
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

              <p class="txt-p">0.4343 ETH Available</p>
              <hr class="line-dash">
              <div class="btns">
                <button class="btn-st4"><span>Stake</span></button>
              </div>
            </div>

            <div class="tab-con tab-con2">
              <h4>Title</h4>
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

              <p class="txt-p">0.4343 ETH Available</p>
              <hr class="line-dash">
              <div class="btns">
                <button class="btn-st4"><span>Unstake</span></button>
              </div>
            </div>

            <div class="tab-con tab-con3">
              <h4 class="ac">You will receive 5653468 FINO</h4>
              <hr class="line-dash">
              <div class="btns">
                <button class="btn-st4"><span>clame</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //레이어팝업1 -->

      <!-- 레이어팝업2 -->
      <div class="layer-pop layer-pop2">
        <div>
          <h3>
            <span>Stake / Unstake ETH, Claim FINO</span>
            <button class="layer-pop-close-btn" @click="toggleLayerPop2">
              <i class="xi-close"></i>
            </button>
          </h3>
          <div class="layer-pop-cont"> 
            <!-- 탭메뉴 -->
            <div class="tab-menu">
              <ul>
                <li class="tab-toggle1 active">
                  <button @click="tabToggleTwo1"><span>Stake</span></button>
                </li>
                <li class="tab-toggle2">
                  <button @click="tabToggleTwo2"><span>Unstake</span></button>
                </li>
                <li class="tab-toggle3">
                  <button @click="tabToggleTwo3"><span>clame</span></button>
                </li>
              </ul>
            </div>
            <!-- //탭메뉴 -->

            <div class="tab-con tab-con1">
              <h4>Title</h4>
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

              <p class="txt-p">0.4343 ETH Available</p>
              <hr class="line-dash">
              <div class="btns">
                <button class="btn-st4"><span>Stake</span></button>
              </div>
            </div>

            <div class="tab-con tab-con2">
              <h4>Title</h4>
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

              <p class="txt-p">0.4343 ETH Available</p>
              <hr class="line-dash">
              <div class="btns">
                <button class="btn-st4"><span>Unstake</span></button>
              </div>
            </div>

            <div class="tab-con tab-con3">
              <h4 class="ac">You will receive 5653468 FINO</h4>
              <hr class="line-dash">
              <div class="btns">
                <button class="btn-st4"><span>clame</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //레이어팝업2 -->

      <!-- 레이어팝업3 -->
      <div class="layer-pop layer-pop3">
        <div>
          <h3>
            <span>Stake / Unstake FINO</span>
            <button class="layer-pop-close-btn" @click="toggleLayerPop3">
              <i class="xi-close"></i>
            </button>
          </h3>
          <div class="layer-pop-cont"> 
            <!-- 탭메뉴 -->
            <div class="tab-menu">
              <ul>
                <li class="tab-toggle1 active">
                  <button @click="tabToggleThree1"><span>Stake</span></button>
                </li>
                <li class="tab-toggle2">
                  <button @click="tabToggleThree2"><span>Unstake</span></button>
                </li>
              </ul>
            </div>
            <!-- //탭메뉴 -->

            <div class="tab-con tab-con1">
              <h4>Title</h4>
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

              <p class="txt-p">0.4343 ETH Available</p>
              <hr class="line-dash">
              <div class="btns">
                <button class="btn-st4"><span>Stake</span></button>
              </div>
            </div>

            <div class="tab-con tab-con2">
              <h4>Title</h4>
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

              <p class="txt-p">0.4343 ETH Available</p>
              <hr class="line-dash">
              <p class="txt-p al">You will receive O FINO</p>
              <div class="btns mgt20">
                <button class="btn-st4"><span>Refound</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- //레이어팝업3 -->

    </div>
  <!-- //서브내용 -->
  </div>
</template> 

<script>
  import Vue3autocounter from 'vue3-autocounter';

  export default {
    name: 'Create',
    components: {
      'vue3-autocounter': Vue3autocounter
    },
    data() { 
       return {
          toggle: -1,
          count: 0,
          MaxNumber:100,
          MinNumber:-1,
          active: false
       }
    },
    methods: {
      toggleLayerPop1() {
        this.toggleLayerPop1Check = !this.toggleLayerPop1Check;
        if (this.toggleLayerPop1Check == true) {
          $(".layer-pop").slideUp();
          $(".layer-pop1").slideDown();
          $("html").addClass("layer-pop-active");
        } else {
          $(".layer-pop").slideUp();
          $("html").removeClass("layer-pop-active");
        }
      },
      toggleLayerPop2() {
        this.toggleLayerPop2Check = !this.toggleLayerPop2Check;
        if (this.toggleLayerPop2Check == true) {
          $(".layer-pop").slideUp();
          $(".layer-pop2").slideDown();
          $("html").addClass("layer-pop-active");
        } else {
          $(".layer-pop").slideUp();
          $("html").removeClass("layer-pop-active");
        }
      },
      toggleLayerPop3() {
        this.toggleLayerPop3Check = !this.toggleLayerPop3Check;
        if (this.toggleLayerPop3Check == true) {
          $(".layer-pop").slideUp();
          $(".layer-pop3").slideDown();
          $("html").addClass("layer-pop-active");
        } else {
          $(".layer-pop").slideUp();
          $("html").removeClass("layer-pop-active");
        }
      },
      tabToggleOne1() {
        this.tabToggleOne1Check = !this.tabToggleOne1Check;
        if (this.tabToggleOne1Check == true) {
          $(".layer-pop1 .tab-con").slideUp();
          $(".layer-pop1 .tab-con1").slideDown();
          $(".layer-pop1 .tab-menu ul > li").removeClass("active");
          $(".layer-pop1 .tab-toggle1").addClass("active");
        } else {
          //$(".layer-pop1 .tab-con1").slideUp();
        }
      },
      tabToggleOne2() {
        this.tabToggleOne2Check = !this.tabToggleOne2Check;
        if (this.tabToggleOne2Check == true) {
          $(".layer-pop1 .tab-con").slideUp();
          $(".layer-pop1 .tab-con2").slideDown();
          $(".layer-pop1 .tab-menu ul > li").removeClass("active");
          $(".layer-pop1 .tab-toggle2").addClass("active");
        } else {
          //$(".layer-pop1 .tab-con2").slideUp();
        }
      },
      tabToggleOne3() {
        this.tabToggleOne3Check = !this.tabToggleOne3Check;
        if (this.tabToggleOne3Check == true) {
          $(".layer-pop1 .tab-con").slideUp();
          $(".layer-pop1 .tab-con3").slideDown();
          $(".layer-pop1 .tab-menu ul > li").removeClass("active");
          $(".layer-pop1 .tab-toggle3").addClass("active");
        } else {
          //$(".layer-pop1 .tab-con3").slideUp();
        }
      },
      tabToggleTwo1() {
        this.tabToggleTwo1Check = !this.tabToggleTwo1Check;
        if (this.tabToggleTwo1Check == true) {
          $(".layer-pop2 .tab-con").slideUp();
          $(".layer-pop2 .tab-con1").slideDown();
          $(".layer-pop2 .tab-menu ul > li").removeClass("active");
          $(".layer-pop2 .tab-toggle1").addClass("active");
        } else {
          //$(".layer-pop2 .tab-con1").slideUp();
        }
      },
      tabToggleTwo2() {
        this.tabToggleTwo2Check = !this.tabToggleTwo2Check;
        if (this.tabToggleTwo2Check == true) {
          $(".layer-pop2 .tab-con").slideUp();
          $(".layer-pop2 .tab-con2").slideDown();
          $(".layer-pop2 .tab-menu ul > li").removeClass("active");
          $(".layer-pop2 .tab-toggle2").addClass("active");
        } else {
          //$(".layer-pop2 .tab-con2").slideUp();
        }
      },
      tabToggleTwo3() {
        this.tabToggleTwo3Check = !this.tabToggleTwo3Check;
        if (this.tabToggleTwo3Check == true) {
          $(".layer-pop2 .tab-con").slideUp();
          $(".layer-pop2 .tab-con3").slideDown();
          $(".layer-pop2 .tab-menu ul > li").removeClass("active");
          $(".layer-pop2 .tab-toggle3").addClass("active");
        } else {
          //$(".layer-pop2 .tab-con3").slideUp();
        }
      },
      tabToggleThree1() {
        this.tabToggleThree1Check = !this.tabToggleThree1Check;
        if (this.tabToggleThree1Check == true) {
          $(".layer-pop3 .tab-con").slideUp();
          $(".layer-pop3 .tab-con1").slideDown();
          $(".layer-pop3 .tab-menu ul > li").removeClass("active");
          $(".layer-pop3 .tab-toggle1").addClass("active");
        } else {
          //$(".layer-pop3 .tab-con1").slideUp();
        }
      },
      tabToggleThree2() {
        this.tabToggleThree2Check = !this.tabToggleThree2Check;
        if (this.tabToggleThree2Check == true) {
          $(".layer-pop3 .tab-con").slideUp();
          $(".layer-pop3 .tab-con2").slideDown();
          $(".layer-pop3 .tab-menu ul > li").removeClass("active");
          $(".layer-pop3 .tab-toggle2").addClass("active");
        } else {
          //$(".layer-pop3 .tab-con2").slideUp();
        }
      },
      tabActive() {
        return this.active ? 'active' : '';
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