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
          <span>Tickets</span>
        </div>

        <h2 class="pageTitle"><strong>Tickets</strong></h2>
      </div>
      <!-- //공통 : title-area -->
      
      <!-- step00 -->
      <div class=" tickets-lst">
        <div class="veiw-type1">
          <ul>
            <li>
              <div @click="ticketsLstNext">
                <div class="img">
                  <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
                </div>
                <div class="txt">
                  <ul class="tickets_info">
                    <li>
                      <strong>Title <em>#6</em></strong>
                    </li>
                    <li>
                      <strong>7<i class="xi-coupon"></i><em>Ticket</em></strong>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div @click="ticketsLstNext">
                <div class="img">
                  <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
                </div>
                <div class="txt"> 
                  <ul class="tickets_info">
                    <li>
                      <strong>Title <em>#6</em></strong>
                    </li>
                    <li>
                      <strong>7<i class="xi-coupon"></i><em>Ticket</em></strong>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div @click="ticketsLstNext">
                <div class="img">
                  <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
                </div>
                <div class="txt">
                  <ul class="tickets_info">
                    <li>
                      <strong>Title <em>#6</em></strong>
                    </li>
                    <li>
                      <strong>7<i class="xi-coupon"></i><em>Ticket</em></strong>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="btns">
          <button class="more-btn"><span>More</span></button>
        </div>
      </div>
      <!-- //step00 -->
      
      <!-- step01 -->
      <div class="tickets-detail">
        <div class="veiw-detail-wrap">
            <div class="veiw-detail">
              <div class="img">
                <span :style="{backgroundImage: 'url(' + require(`@/assets/img/main/frctional_img.png`) + ')'}"></span>
              </div>
              <div class="txt_wrap">
                <div class="frm_wrap">
                  <em class="frm1">Ticket <em>#82</em></em>
                  <ul class="tickets-btns">
                    <li>
                      <button class="tickets-btn1"><span>7</span><i class="xi-coupon"></i></button>
                    </li>
                    <li>
                      <button class="tickets-btn2"><i class="xi-globus"></i></button>
                    </li>
                  </ul>
                </div>
                <strong class="tit">Ticket</strong>
                <div class="tbl ac">
                  <table>
                    <caption>my histories</caption>
                    <colgroup>
                      <col style="width:33.333%" span="3">
                    </colgroup>
                    <thead>
                      <tr>
                        <th scope="col">Token ID</th>
                        <th scope="col" class="point">Price</th>
                        <th scope="col">Buy</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td data-label="Token ID">#12</td>
                        <td data-label="Price" class="point">7<i class="xi-coupon"></i></td>
                        <td data-label="Buy">Buy</td>
                      </tr>
                      <tr>
                        <td data-label="Token ID">#12</td>
                        <td data-label="Price" class="point">7<i class="xi-coupon"></i></td>
                        <td data-label="Buy">Buy</td>
                      </tr>
                      <tr>
                        <td data-label="Token ID">#12</td>
                        <td data-label="Price" class="point">7<i class="xi-coupon"></i></td>
                        <td data-label="Buy">Buy</td>
                      </tr>
                      <tr>
                        <td data-label="Token ID">#12</td>
                        <td data-label="Price" class="point">7<i class="xi-coupon"></i></td>
                        <td data-label="Buy">Buy</td>
                      </tr>
                      <tr>
                        <td data-label="Token ID">#12</td>
                        <td data-label="Price" class="point">7<i class="xi-coupon"></i></td>
                        <td data-label="Buy">Buy</td>
                      </tr>
                      <tr>
                        <td data-label="Token ID">#12</td>
                        <td data-label="Price" class="point">7<i class="xi-coupon"></i></td>
                        <td data-label="Buy">Buy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p class="no-result">No Result</p>
              </div>
            </div>
          </div>
        <div class="btns">
          <button class="more-btn" @click="ticketsLstPrev"><span>Back</span></button>
        </div>
      </div>
      <!-- //step01 -->

    </div>
  <!-- //서브내용 -->
  </div>
</template> 

<script>
  export default {
    name: 'Tickets',
    components: {
    },
    data() { 
       return {
       }
    },
    methods: {
      ticketsLstNext() {
        this.ticketsLstNextCheck = !this.ticketsLstNextCheck;
        if (this.ticketsLstNextCheck == true) {
          $(".tickets-lst").slideUp();
          $(".tickets-detail").slideDown();
        } else {
        }
      },ticketsLstPrev() {
        this.ticketsLstNextCheck = !this.ticketsLstNextCheck;
        if (this.ticketsLstNextCheck == true) {
          $(".tickets-lst").slideDown();
          $(".tickets-detail").slideUp();
        } else {
        }
      },
    }
  }
</script>