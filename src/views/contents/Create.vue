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
          <span>CREATE</span>
          <span>MY COLLECTION</span>
        </div>

        <h2 class="pageTitle"><strong>My Collections</strong></h2>
      </div>
      <!-- //공통 : title-area -->

      <p class="txt-p">Fractional enables NFT owners to create new communities surrounding their NFTs</p>
      
      <!-- step00 -->
      <div class="veiw-type1 function-next">
        <ul>
          <li>
            <div>
              <div class="img">
                <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
              </div>
              <div class="txt">
                <ul class="btns">
                  <li><button @click="FunctionStepNextAdd01"><span>Add FINO NFT (with shares)</span></button></li>
                  <li><button @click="FunctionStepNextNew01"><span>New FINO NFT (with shares)</span></button></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="img">
                <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
              </div>
              <div class="txt">
                <ul class="btns">
                  <li><button @click="FunctionStepNextAdd01"><span>Add FINO NFT (with shares)</span></button></li>
                  <li><button @click="FunctionStepNextNew01"><span>New FINO NFT (with shares)</span></button></li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div class="img">
                <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
              </div>
              <div class="txt">
                <ul class="btns">
                  <li><button @click="FunctionStepNextAdd01"><span>Add FINO NFT (with shares)</span></button></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!-- //step00 -->

      <!-- step01 -->
      <!-- step01 : Add -->
      <div class="function-step function-step1-add">
        <div class="step-lst">
          <ul>
            <li class="step01 on">
              <div>
                <strong>01. NFT Setting</strong>
              </div>
            </li>
            <li class="step02">
              <div>
                <strong>02. fino20 setting</strong>
              </div>
            </li>
            <li class="step03">
              <div>
                <strong>03. confirmation</strong>
              </div>
            </li>
          </ul>
        </div>

        <div class="function-step-form-wrapper">
          <div class="function-step-box">
            <ul class="function-step-form">
              <li>
                <div class="tit"><span>new nft address</span></div>
                <div class="input-wrap wrong">
                  <input type="text" value="input의 입력값이 조건에 충족되지 않을 경우 .input-wrap에 .wrong 붙습니다.">
                </div>
              </li>
              <li>
                <div class="tit essential"><span>new token id</span></div>
                <div class="input-wrap complete">
                  <input type="text" value="input의 입력값이 조건에 충족될 경우 .input-wrap에 .complete가 붙습니다.">
                </div>
              </li>
            </ul>
            <hr class="line-dash">
            <button class="btn-st1"><span>Create Test External NFT</span></button>
          </div>
          <div class="function-step-box">
            <ul class="function-step-form">
              <li>
                <div class="tit essential"><span>nft contract address</span></div>
                <div class="input-wrap">
                  <input type="text">
                </div>
              </li>
              <li>
                <div class="tit essential"><span>nft identifier</span></div>
                <div class="input-wrap complete">
                  <input type="text" value="input의 입력값이 조건에 충족될 경우 .input-wrap에 .complete가 붙습니다.">
                </div>
              </li>
            </ul>
            <hr class="line-dash">
            <button class="btn-st1"><span>Sumit</span></button>
          </div>
        </div>
        <div class="btns">
          <button class="btn-st2" @click="FunctionStepPrev02"><span>Prev</span></button>
          <button class="btn-st3" @click="FunctionStepNextAdd02"><span>Next</span></button>
        </div>
      </div>
      <!-- //step01 : Add -->

      <!-- step01 : new -->
      <div class="function-step function-step1-new">
        <div class="step-lst">
          <ul>
            <li class="step01 on">
              <div>
                <strong>01. NFT Setting</strong>
              </div>
            </li>
            <li class="step02">
              <div>
                <strong>02. fino20 setting</strong>
              </div>
            </li>
            <li class="step03">
              <div>
                <strong>03. confirmation</strong>
              </div>
            </li>
          </ul>
        </div>

        <div class="function-step-form-wrapper">
          <div class="function-step-box">
            <ul class="function-step-form">
              <li>
                <div class="tit"><span>new nft address</span></div>
                <div class="input-wrap wrong">
                  <input type="text" value="input의 입력값이 조건에 충족되지 않을 경우 .input-wrap에 .wrong 붙습니다.">
                </div>
              </li>
              <li>
                <div class="tit essential"><span>new token id</span></div>
                <div class="input-wrap complete">
                  <input type="text" value="input의 입력값이 조건에 충족될 경우 .input-wrap에 .complete가 붙습니다.">
                </div>
              </li>
            </ul>
            <hr class="line-dash">
            <button class="btn-st1"><span>Create Test External NFT</span></button>
          </div>
          <div class="function-step-box">
            <ul class="function-step-form">
              <li>
                <div class="tit essential"><span>nft contract address</span></div>
                <div class="input-wrap">
                  <input type="text">
                </div>
              </li>
              <li>
                <div class="tit essential"><span>nft identifier</span></div>
                <div class="input-wrap complete">
                  <input type="text" value="input의 입력값이 조건에 충족될 경우 .input-wrap에 .complete가 붙습니다.">
                </div>
              </li>
            </ul>
            <hr class="line-dash">
            <button class="btn-st1"><span>Sumit</span></button>
          </div>
        </div>
        <div class="btns">
          <button class="btn-st2" @click="FunctionStepPrev02"><span>Prev</span></button>
          <button class="btn-st3" @click="FunctionStepNextNew02"><span>Next</span></button>
        </div>
      </div>
      <!-- //step01 : new -->
      <!-- //step01 -->

      <!-- step02 -->
      <!-- step02 : Add -->
      <div class="function-step function-step2-add">
        <div class="step-lst">
          <ul>
            <li class="step01">
              <div>
                <strong>01. NFT Setting</strong>
              </div>
            </li>
            <li class="step02 on">
              <div>
                <strong>02. fino20 setting</strong>
              </div>
            </li>
            <li class="step03">
              <div>
                <strong>03. confirmation</strong>
              </div>
            </li>
          </ul>
        </div>

        <div class="function-step-form-wrapper">
          <div class="function-step-box">
            <ul class="function-step-form">
              <li>
                <div class="tit"><span>new nft address</span></div>
                <div class="input-wrap wrong">
                  <input type="text" value="input의 입력값이 조건에 충족되지 않을 경우 .input-wrap에 .wrong 붙습니다.">
                </div>
              </li>
              <li>
                <div class="tit essential"><span>new token id</span></div>
                <div class="input-wrap complete">
                  <input type="text" value="input의 입력값이 조건에 충족될 경우 .input-wrap에 .complete가 붙습니다.">
                </div>
              </li>
            </ul>
            <hr class="line-dash">
            <button class="btn-st1"><span>Create Test External NFT</span></button>
          </div>
          <div class="function-step-box">
            <ul class="function-step-form">
              <li>
                <div class="tit essential"><span>nft contract address</span></div>
                <div class="input-wrap">
                  <input type="text">
                </div>
              </li>
              <li>
                <div class="tit essential"><span>nft identifier</span></div>
                <div class="input-wrap complete">
                  <input type="text" value="input의 입력값이 조건에 충족될 경우 .input-wrap에 .complete가 붙습니다.">
                </div>
              </li>
            </ul>
            <hr class="line-dash">
            <button class="btn-st1"><span>Sumit</span></button>
          </div>
        </div>
        <div class="btns">
          <button class="btn-st2" @click="FunctionStepPrevAdd03"><span>Prev</span></button>
          <button class="btn-st3" @click="FunctionStepNextAdd03"><span>Next</span></button>
        </div>
      </div>
      <!-- //step02 : Add -->

      <!-- step02 : new -->
      <div class="function-step function-step2-new">
        <div class="step-lst">
          <ul>
            <li class="step01">
              <div>
                <strong>01. NFT Setting</strong>
              </div>
            </li>
            <li class="step02 on">
              <div>
                <strong>02. fino20 setting</strong>
              </div>
            </li>
            <li class="step03">
              <div>
                <strong>03. confirmation</strong>
              </div>
            </li>
          </ul>
        </div>

        <div class="function-step-form-wrapper">
          <div class="function-step-box">
            <ul class="function-step-form">
              <li class="input-btns-wrap1">
                <div class="tit"><span>new nft address</span></div>
                <div class="input-wrap complete">
                  <input type="text" value="input의 입력값이 조건에 충족될 경우 .input-wrap에 .complete가 붙습니다.">
                </div>
                <ul class="btns">
                  <li><button class="btn-st5" v-bind:class="{ 'active': toggle === 'btnFINO' }" @click="toggle = toggle !== 'btnFINO' ? 'btnFINO' : active"><span>FINO</span></button></li>
                  <li><button class="btn-st5" v-bind:class="{ 'active': toggle === 'btnETH' }" @click="toggle = toggle !== 'btnETH' ? 'btnETH' : null"><span>ETH</span></button></li>
                  <li><button class="btn-st5" v-bind:class="{ 'active': toggle === 'btnUSDT' }" @click="toggle = toggle !== 'btnUSDT' ? 'btnUSDT' : null"><span>USDT</span></button></li>
                </ul>
              </li>
            </ul>
            <hr class="line-dash">
            <button class="btn-st1"><span>check</span></button>
          </div>
          <div class="function-step-box">
            <ul class="function-step-form">
              <li class="input-btns-wrap2">
                <div class="tit essential"><span>Beneficiary</span></div>
                <div class="input-wrap wrong">
                  <input type="text" placeholder="beneficiary address">
                </div>
                <ul class="btns">
                  <li><button class="btn-st6"><span>SELF</span></button></li>
                </ul>
              </li>
              <li>
                <div class="tit"><span>mainnet</span></div>
                <div class="input-wrap">
                  <input type="text" placeholder="Ethereum" readonly>
                </div>
              </li>
              <li>
                <div class="tit essential"><span>minimum budding amount</span></div>
                <div class="input-wrap">
                  <input type="text" placeholder="text..." readonly>
                </div>
                <span class="atte">enter at most 100000000000000000 VANILLA</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="btns">
          <button class="btn-st2" @click="FunctionStepPrevNew03"><span>Prev</span></button>
          <button class="btn-st3" @click="FunctionStepNextNew03"><span>Next</span></button>
        </div>
      </div>
      <!-- //step02 : new -->
      <!-- //step02 -->

      <!-- step03 -->
      <!-- step03 : add -->
      <div class="function-step function-step3-add">
        <div class="step-lst">
          <ul>
            <li class="step01">
              <div>
                <strong>01. NFT Setting</strong>
              </div>
            </li>
            <li class="step02">
              <div>
                <strong>02. fino20 setting</strong>
              </div>
            </li>
            <li class="step03 on">
              <div>
                <strong>03. confirmation</strong>
              </div>
            </li>
          </ul>
        </div>

        <div class="function-step-form-wrapper">
          <div class="function-step-box">
            <div class="info-wrap">
              <h3 class="heading2">information</h3>
              <div class="info-box">
                <div class="img">
                  <span :style="{ backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
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
              </div>
            </div>
            <div class="info-detail-wrap">
              <ul class="info-detail-lst">
                <li>
                  <h3 class="heading2">precautions</h3>
                  <ul class="precautions-lst">
                    <li>text text Text Text Text Text text Text Text Text Text text Text Text Text Text text Text Text Text Text</li>
                    <li>text text Text Text Text Text text Text Text Text Text text Text Text Text Text text Text Text Text Text</li>
                    <li>text text Text Text Text Text text Text Text Text Text text Text Text Text Text text Text Text Text Text</li>
                    <li>text text Text Text Text Text text Text Text Text Text text Text Text Text Text text Text Text Text Text</li>
                    <li>text text Text Text Text Text text Text Text Text Text text Text Text Text Text text Text Text Text Text</li>
                  </ul>
                </li>
                <li>
                  <h3 class="heading2">payment account</h3>
                  <div class="input-wrap">
                    <input type="text" readonly>
                  </div>
                </li>
                <li>
                  <h3 class="heading2">payment account</h3>
                  <div class="input-wrap">
                    <input type="text" readonly>
                  </div>
                </li>
                <li>
                  <h3 class="heading2">payment account</h3>
                  <div class="input-wrap wrong">
                    <input type="text" value="input의 입력값이 조건에 충족되지 않을 경우 .input-wrap에 .wrong 붙습니다.">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="btns">
          <button class="btn-st2" @click="FunctionStepPrevAdd04"><span>Prev</span></button>
          <button class="btn-st4" @click="FunctionAlert"><span>create</span></button>
        </div>
      </div>
      <!-- //step03 : add -->

      <!-- step03 : new -->
      <div class="function-step function-step3-new">
        <div class="step-lst">
          <ul>
            <li class="step01">
              <div>
                <strong>01. NFT Setting</strong>
              </div>
            </li>
            <li class="step02">
              <div>
                <strong>02. fino20 setting</strong>
              </div>
            </li>
            <li class="step03 on">
              <div>
                <strong>03. confirmation</strong>
              </div>
            </li>
          </ul>
        </div>

        <div class="function-step-form-wrapper">
          <div class="function-step-box">
            <div class="info-wrap">
              <h3 class="heading2">information</h3>
              <div class="info-box">
                <div class="img">
                  <span :style="{ backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
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
              </div>
            </div>
            <div class="info-detail-wrap">
              <ul class="info-detail-lst">
                <li>
                  <h3 class="heading2">precautions</h3>
                  <ul class="precautions-lst">
                    <li>text text Text Text Text Text text Text Text Text Text text Text Text Text Text text Text Text Text Text</li>
                    <li>text text Text Text Text Text text Text Text Text Text text Text Text Text Text text Text Text Text Text</li>
                    <li>text text Text Text Text Text text Text Text Text Text text Text Text Text Text text Text Text Text Text</li>
                    <li>text text Text Text Text Text text Text Text Text Text text Text Text Text Text text Text Text Text Text</li>
                    <li>text text Text Text Text Text text Text Text Text Text text Text Text Text Text text Text Text Text Text</li>
                  </ul>
                </li>
                <li>
                  <h3 class="heading2">payment account</h3>
                  <div class="input-wrap">
                    <input type="text" readonly>
                  </div>
                </li>
                <li>
                  <h3 class="heading2">payment account</h3>
                  <div class="input-wrap">
                    <input type="text" readonly>
                  </div>
                </li>
                <li>
                  <h3 class="heading2">payment account</h3>
                  <div class="input-wrap wrong">
                    <input type="text" value="input의 입력값이 조건에 충족되지 않을 경우 .input-wrap에 .wrong 붙습니다.">
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="btns">
          <button class="btn-st2" @click="FunctionStepPrevNew04"><span>Prev</span></button>
          <button class="btn-st4" @click="FunctionAlert"><span>create</span></button>
        </div>
      </div>
      <!-- //step03 : new -->
      <!-- //step03 -->
    </div>
  <!-- //서브내용 -->
  </div>

  <!-- alert -->
  <div class="stauts-alert-box"><span>successfully logged in with metamask!</span></div>
  <!-- //alert -->
</template> 

<script>
  export default {
    name: 'Create',
    components: {
    },
    data() { 
       return {
          toggle: -1
       }
    },
    methods: {
      FunctionStepNextAdd01() {
        this.FunctionStepNextAddCheck01 = !this.FunctionStepNextAddCheck01;
        if (this.FunctionStepNextAddCheck01 == true) {
          $(".veiw-type1").slideUp();
          $(".function-step1-add").slideDown();
        }
      },
      FunctionStepNextNew01() {
        this.FunctionStepNextNewCheck01 = !this.FunctionStepNextNewCheck01;
        if (this.FunctionStepNextNewCheck01 == true) {
          $(".veiw-type1").slideUp();
          $(".function-step1-new").slideDown();
        }
      },
      FunctionStepPrev02() {
        this.FunctionStepPrevCheck02 = !this.FunctionStepPrevCheck02;
        if (this.FunctionStepPrevCheck02 == true) {
          $(".veiw-type1").slideDown();
          $(".function-step").slideUp();
        }
      },
      FunctionStepNextAdd02() {
        this.FunctionStepNextAddCheck02 = !this.FunctionStepNextAddCheck02;
        if (this.FunctionStepNextAddCheck02 == true) {
          $(".function-step1-add").slideUp();
          $(".function-step2-add").slideDown();
        }
      },
      FunctionStepNextNew02() {
        this.FunctionStepNextNewCheck02 = !this.FunctionStepNextNewCheck02;
        if (this.FunctionStepNextNewCheck02 == true) {
          $(".function-step1-new").slideUp();
          $(".function-step2-new").slideDown();
        }
      },
      FunctionStepPrevAdd03() {
        this.FunctionStepPrevAddCheck03 = !this.FunctionStepPrevAddCheck03;
        if (this.FunctionStepPrevAddCheck03 == true) {
          $(".function-step2-add").slideUp();
          $(".function-step1-add").slideDown();
        }
      },
      FunctionStepNextAdd03() {
        this.FunctionStepNextAddCheck03 = !this.FunctionStepNextAddCheck03;
        if (this.FunctionStepNextAddCheck03 == true) {
          $(".function-step2-add").slideUp();
          $(".function-step3-add").slideDown();
        }
      },
      FunctionStepPrevNew03() {
        this.FunctionStepPrevNewCheck03 = !this.FunctionStepPrevNewCheck03;
        if (this.FunctionStepPrevNewCheck03 == true) {
          $(".function-step2-new").slideUp();
          $(".function-step1-new").slideDown();
        }
      },
      FunctionStepNextNew03() {
        this.FunctionStepNextNewCheck03 = !this.FunctionStepNextNewCheck03;
        if (this.FunctionStepNextNewCheck03 == true) {
          $(".function-step2-new").slideUp();
          $(".function-step3-new").slideDown();
        }
      },
      FunctionStepPrevAdd04() {
        this.FunctionStepPrevAddCheck04 = !this.FunctionStepPrevAddCheck04;
        if (this.FunctionStepPrevAddCheck04 == true) {
          $(".function-step3-add").slideUp();
          $(".function-step2-add").slideDown();
        }
      },
      FunctionStepPrevNew04() {
        this.FunctionStepPrevNewCheck04 = !this.FunctionStepPrevNewCheck04;
        if (this.FunctionStepPrevNewCheck04 == true) {
          $(".function-step3-new").slideUp();
          $(".function-step2-new").slideDown();
        }
      },
      FunctionAlert() {
        this.FunctionAlertCheck = !this.FunctionAlertCheck;
        if (this.FunctionAlertCheck == true) {
          $(".stauts-alert-box").slideDown();
          setTimeout(function() {
             $(".stauts-alert-box").slideUp();
          }, 3000);
        }
      }
    }
  }
</script>