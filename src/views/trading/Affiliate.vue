<template>
  <div id="AffiliatePage">
    <div v-if="!isVip" class="bodyContent affiliatePage">
      <div class="banner">
        <div class="content">
          <div class="container h-full">
            <div class="items-center h-full vx-row">
              <div class="vx-col lg:w-6/12">
                <p class="mb-4 text-4xl font-bold white line-height-normal">
                  {{ $t("Affiliate_Requirement")}}
                </p>
                <vs-button size="large"
                  style="background: #389a11 !important; color: #fff !important"
                  type="filled" @click="popupBuyThamGiaVip = true">{{ $t("Buy_now")}} $100</vs-button>
              </div>
              <div class="w-full vx-col lg:w-6/12">
                <div class="affiliateInfo bgSecondary borderPrimary">
                  <div class="linkGroup">
                    <div class="flex-col justify-center vx-col">
                      <div class="w-full">
                        <p class="mb-2 color-gray colorSecondary label">
                          {{ $t("Affiliate_RegisterLink")}}
                        </p>
                        <div class="relative flex mb-4 groupButton">
                          <div class="leftControl">
                            <input type="text" v-model="linkDk" readonly="readonly" disabled
                              class="w-full pl-2 text-base form-control" />
                          </div>
                          <div class="rightControl">
                            <button class="cursor-pointer btn button primary" v-clipboard:copy="linkDk" @click="saoChep">
                              {{ $t("Affiliate_Coppy")}}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="w-6/12">
                        <p class="mb-2 color-light-gray colorSecondary label">
                          {{ $t("Affiliate_General_ReferralCode")}}
                        </p>
                        <div class="relative flex mb-4 groupButton">
                          <div class="leftControl">
                            <input type="text" v-model="codeGioiThieu" readonly="readonly" disabled
                              class="w-full pl-2 text-base form-control" />
                          </div>
                          <div class="rightControl">
                            <button class="cursor-pointer btn button primary" v-clipboard:copy="codeGioiThieu"
                              @click="saoChep">
                              {{ $t("Affiliate_Coppy")}}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center subBanner bgSecondary">
        <div class="container">
          <div class="items-center vx-row">
            <div class="col">
              <div class="flex items-center h-full boxContent">
                <div class="flex items-center">
                  <div>
                    <div class="icon iconInvite"></div>
                  </div>
                  <div>
                    <div class="textContent">
                      <p class="mb-1 title">{{ $t("Affiliate_Invite")}}</p>
                      <p class="mb-0 color-white-50 des">
                        {{ $t("Affiliate_Invite1")}} {{ domain }} {{ $t("Affiliate_Invite2")}}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="borderSubBanner"></div>
                <div class="flex items-center">
                  <div>
                    <div class="icon iconSign"></div>
                  </div>
                  <div>
                    <div class="textContent">
                      <p class="mb-1 title">{{ $t("Affiliate_FriendRegister")}}</p>
                      <p class="mb-0 color-white-50 des">
                        {{ $t("Affiliate_AcceptInvite")}}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="borderSubBanner"></div>
                <div class="flex items-center">
                  <div>
                    <div class="icon iconCommission"></div>
                  </div>
                  <div>
                    <div class="textContent">
                      <p class="mb-1 title">{{ $t("Affiliate_commissionReceive")}}</p>
                      <p class="mb-0 color-white-50 des">
                        {{ $t("Affiliate_commissionEasy")}}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <vs-popup class="text-center" :title="this.$t('Affiliate_BecomeVIP')" :active.sync="popupBuyThamGiaVip">
        <div class="contentWrapper" :class="{ 'ld-loading': loading }">
          <div class="loading">
            <div class="loading__ring">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100" xml:space="preserve">
                <path
                  d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                </path>
              </svg>
            </div>
            <div class="loading__ring">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100" xml:space="preserve">
                <path
                  d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                </path>
              </svg>
            </div>
          </div>
          <div class="header borderBtSecondary">
            <span class="text-2xl font-bold capitalize modal-title">{{ $t("Affiliate_AcceptJoin")}}</span>
          </div>
          <div class="body">
            <div class="mb-3 imgShake"></div>
            <div class="mb-3 textContent colorSecondary">
              {{ $t("Affiliate_AgentRights")}}
            </div>
            <div class="flex items-center justify-center mb-3 checkbox">
              <vs-checkbox color="success" :value="dongYMua" @change="isDongY = !isDongY"></vs-checkbox>
              <span for="customControlInline" class="accept">
                {{ $t("Affiliate_UserAgree")}}
                <a target="_blank" href="/faqs" class="term">
                  {{ $t("Affiliate_ServiceRules")}}
                </a>
              </span>
            </div>
            <vs-button class="w-full" color="warning" type="filled" :disabled="!isDongY" @click="OkBuyVip">{{ $t("Affiliate_Accept")}}</vs-button>
          </div>
        </div>
      </vs-popup>
      <vs-popup class="text-center" :title="this.$t('Notification')" :active.sync="popupThongBao">
        <div class="contentWrapper">
          <div class="header borderBtSecondary">
            <span class="text-2xl font-bold capitalize modal-title">{{ $t("Affiliate_NotEnoughMoney")}}</span>
          </div>
          <div class="body">
            <img :src="require('@/assets/images/sky/not_enought_balance.svg')" alt="" />

            <vs-button class="w-full" color="warning" type="filled" @click="OkNapNgay">{{ $t("Affiliate_DepositNow")}}</vs-button>
          </div>
        </div>
      </vs-popup>
    </div>
    <div v-else class="affiliatePage">
      <div class="w-full">
        <div class="bg-dard tab-margin">
          <vs-tabs alignment="left">
            <vs-tab :label="this.$t('Affiliate_General')"  @click="
              showGobal = true;
            showCom = false;
            showqlHt = false;
            ">
            </vs-tab>
            <vs-tab :label="this.$t('Affiliate_Commission')" @click="chiTietLoiNhuanHoaHong;
            showGobal = false;
            showCom = true;
            showqlHt = false;">
            </vs-tab>
            <vs-tab :label="this.$t('Affiliate_Management')" @click="
              showGobal = false;
              showCom = false;
              showqlHt = true;
            ">
            </vs-tab>
          </vs-tabs>
        </div>

        <div class="m-6">
          <div class="gobal" :class=" { block: showGobal } ">
            <div class="container" :class=" { 'ld-loading': loading } ">
              <div class="loading">
                <div class="loading__ring">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                    y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100" xml:space="preserve">
                    <path
                      d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                    </path>
                  </svg>
                </div>
                <div class="loading__ring">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px"
                    y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100" xml:space="preserve">
                    <path
                      d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                    </path>
                  </svg>
                </div>
              </div>
              <div class="mt-4 dashboard-page dashboard-page--pc">
                <div class="vx-row">
                  <div class="w-full mb-4 vx-col lg:w-1/3">
                    <div class="boxBasic bgSecondary borderSecondary">
                      <div class="flex items-center pb-3 mb-3 heading borderBtSecondary">
                        <div class="flex items-center boxRank">
                          <div class="rank-number">
                            <div class="backgroundImd iconRank" :class=" `rank${vip_lv}` "></div>
                          </div>
                          <div class="rank-text">
                            <p class="cursor-pointer textRank noselect bgPrimary">
                              <span class="text">{{ $t('Affiliate_General_Level') || "Level" }}</span>
                              <span class="q" @click="popupActiveRank = true">
                                <feather-icon icon="HelpCircleIcon" svgClasses="h-6 w-6 ml-1 c-question" />
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="body">
                        <h4 class="mb-3 nextRankCondition colorWhite">
                          {{ $t('Affiliate_General_Level') || "Rank Conditions" }}
                        </h4>
                        <div class="vx-row">
                          <div class="w-1/2 vx-col">
                            <p class="mb-2 text-base white-50 name">
                              {{ $t('Affiliate_General_F1Volume') || "F1 volume (This Week)" }}
                            </p>
                            <p class="m-0 text-xl font-size-18 value">
                              <span class="colorWhite">{{ formatPrice(hhMeF1isWeek, 2) }} /
                              </span>
                              <span class="colorGray" v-if=" vip_lv == 1 ">2,000</span>
                              <span class="colorGray" v-if=" vip_lv == 2 ">4,000</span>
                              <span class="colorGray" v-if=" vip_lv == 3 ">8,000</span>
                              <span class="colorGray" v-if=" vip_lv == 4 ">16,000</span>
                              <span class="colorGray" v-if=" vip_lv == 5 ">32,000</span>
                              <span class="colorGray" v-if=" vip_lv == 6 ">64,000</span>
                              <span class="colorGray" v-if=" vip_lv >= 7 ">64,000</span>
                            </p>
                          </div>
                          <div class="w-1/2 vx-col">
                            <p class="mb-2 text-base white-50 name">
                              {{ $t('Affiliate_General_F1VIP') || "F1 VIP" }}
                            </p>
                            <p class="m-0 text-xl font-size-18 value">
                              <span class="colorWhite">{{ totalDlisMe }} /
                              </span>
                              <span class="colorGray" v-if=" vip_lv == 1 ">3</span>
                              <span class="colorGray" v-if=" vip_lv == 2 ">4</span>
                              <span class="colorGray" v-if=" vip_lv == 3 ">5</span>
                              <span class="colorGray" v-if=" vip_lv == 4 ">6</span>
                              <span class="colorGray" v-if=" vip_lv == 5 ">7</span>
                              <span class="colorGray" v-if=" vip_lv == 6 ">8</span>
                              <span class="colorGray" v-if=" vip_lv >= 7 ">8</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full mb-4 vx-col lg:w-1/3">
                    <div class="affiliateInfo bgSecondary borderSecondary">
                      <div class="referralSponsor">
                        <p class="mb-0">
                          <span class="mb-2 text-xs colorSecondary">{{ $t('Affiliate_General_ReferralSponsor') || "Referral sponsor" }}</span>
                        </p>
                        <p>
                          <span class="mb-2 colorWhite value">{{
                            f1cuaminh != "" ? f1cuaminh : "-----"
                            }}</span>
                        </p>
                      </div>
                      <hr class="borderBottom" />
                      <div class="m-0 linkGroup">
                        <div class="vx-row">
                          <div class="w-1/2 mb-2 vx-col">
                            <p class="mb-2 text-xs colorSecondary2">
                              {{ $t('Affiliate_General_TotalReferral') || "Total referrals" }}
                            </p>
                            <p class="text-2xl totalReferral colorSuccess">
                              {{ totalNGD }}
                            </p>
                          </div>
                          <div class="w-1/2 mb-2 vx-col">
                            <p class="mb-2 text-xs colorSecondary2">
                              {{ $t('Affiliate_General_TotalAgencies') || "Total agencies" }}
                            </p>
                            <p class="text-2xl totalAgency colorPrimary">
                              {{ totalDaiLy }}
                            </p>
                          </div>
                          <div class="w-1/2 vx-col">
                            <p class="mb-2 text-xs colorSecondary2">
                              {{ $t('Affiliate_General_TradingCommission') || "Trading commission" }}
                            </p>
                            <p class="m-0 text-2xl colorDanger">
                              {{ commissGD.toFixed(2) }}
                            </p>
                          </div>
                          <div class="w-1/2 vx-col">
                            <p class="mb-2 text-xs colorSecondary2">
                              {{ $t('Affiliate_General_VIPCommission') || "VIP Commission" }}
                            </p>
                            <p class="m-0 text-2xl colorPrimary">
                              {{ pen_commiss }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full mb-4 vx-col lg:w-1/3">
                    <div class="affiliateInfo bgSecondary borderSecondary">
                      <p class="mb-3 text-base font-bold white affiliateInfo-title" style="vertical-align: middle">
                        <svg id="unlink" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          viewBox="0 0 15.885 15.885" class="mr-1">
                          <path id="Path_34840" data-name="Path 34840"
                            d="M13.347,9.63l1.191-1.191a4.961,4.961,0,0,0,1.39-3.475,4.657,4.657,0,0,0-1.489-3.475A4.657,4.657,0,0,0,10.964,0,4.657,4.657,0,0,0,7.489,1.489L6.3,2.581a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0L8.879,2.78a3.063,3.063,0,0,1,4.17,0,3.08,3.08,0,0,1,.894,2.184,2.7,2.7,0,0,1-.894,2.085L11.957,8.24a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0Z"
                            transform="translate(-0.043)" fill="#389a11"></path>
                          <path id="Path_34841" data-name="Path 34841"
                            d="M8.24,11.957,7.049,13.148a3.063,3.063,0,0,1-4.17,0,3.08,3.08,0,0,1-.894-2.184,2.7,2.7,0,0,1,.894-2.085L3.971,7.688a.96.96,0,0,0,0-1.39.96.96,0,0,0-1.39,0L1.489,7.489A4.657,4.657,0,0,0,0,10.964a4.657,4.657,0,0,0,1.489,3.475,4.657,4.657,0,0,0,3.475,1.489,4.657,4.657,0,0,0,3.475-1.489L9.63,13.247a.951.951,0,1,0-1.39-1.291Z"
                            transform="translate(0 -0.043)" fill="#389a11"></path>
                          <path id="Path_34842" data-name="Path 34842"
                            d="M9.368,5.2,5.2,9.368a.96.96,0,0,0,0,1.39,1.072,1.072,0,0,0,.695.3,1.072,1.072,0,0,0,.695-.3l4.17-4.17A.983.983,0,1,0,9.368,5.2Z"
                            transform="translate(-0.035 -0.035)" fill="#389a11"></path>
                          <path id="Path_34843" data-name="Path 34843"
                            d="M2.283,3.673a.9.9,0,0,0,.695.3.9.9,0,0,0,.695-.3.96.96,0,0,0,0-1.39L1.688.3A.96.96,0,0,0,.3.3a.96.96,0,0,0,0,1.39Z"
                            transform="translate(0 0)" fill="#389a11"></path>
                          <path id="Path_34844" data-name="Path 34844"
                            d="M13.688,12.3a.983.983,0,1,0-1.39,1.39l1.986,1.986a.96.96,0,0,0,1.39,0,.96.96,0,0,0,0-1.39Z"
                            transform="translate(-0.087 -0.087)" fill="#389a11"></path>
                        </svg>

                        {{ $t('Affiliate_General_RegistrationLink') || "Registration link" }}
                      </p>
                      <div class="relative flex mb-4 groupButton">
                        <div class="leftControl">
                          <input type="text" readonly="readonly" v-model=" linkDk "
                            class="w-full pl-2 text-base form-control" />
                        </div>
                        <div class="rightControl">
                          <button class="cursor-pointer btn button primary" v-clipboard:copy=" linkDk "
                            @click=" saoChep ">
                            {{ $t('Affiliate_General_Coppy') || "Sao chép" }}
                          </button>
                        </div>
                      </div>
                      <p class="mb-3 text-base font-bold white affiliateInfo-title" style="vertical-align: middle">
                        <svg id="unlink" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                          viewBox="0 0 15.885 15.885" class="mr-1">
                          <path id="Path_34840" data-name="Path 34840"
                            d="M13.347,9.63l1.191-1.191a4.961,4.961,0,0,0,1.39-3.475,4.657,4.657,0,0,0-1.489-3.475A4.657,4.657,0,0,0,10.964,0,4.657,4.657,0,0,0,7.489,1.489L6.3,2.581a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0L8.879,2.78a3.063,3.063,0,0,1,4.17,0,3.08,3.08,0,0,1,.894,2.184,2.7,2.7,0,0,1-.894,2.085L11.957,8.24a.96.96,0,0,0,0,1.39.96.96,0,0,0,1.39,0Z"
                            transform="translate(-0.043)" fill="#389a11"></path>
                          <path id="Path_34841" data-name="Path 34841"
                            d="M8.24,11.957,7.049,13.148a3.063,3.063,0,0,1-4.17,0,3.08,3.08,0,0,1-.894-2.184,2.7,2.7,0,0,1,.894-2.085L3.971,7.688a.96.96,0,0,0,0-1.39.96.96,0,0,0-1.39,0L1.489,7.489A4.657,4.657,0,0,0,0,10.964a4.657,4.657,0,0,0,1.489,3.475,4.657,4.657,0,0,0,3.475,1.489,4.657,4.657,0,0,0,3.475-1.489L9.63,13.247a.951.951,0,1,0-1.39-1.291Z"
                            transform="translate(0 -0.043)" fill="#389a11"></path>
                          <path id="Path_34842" data-name="Path 34842"
                            d="M9.368,5.2,5.2,9.368a.96.96,0,0,0,0,1.39,1.072,1.072,0,0,0,.695.3,1.072,1.072,0,0,0,.695-.3l4.17-4.17A.983.983,0,1,0,9.368,5.2Z"
                            transform="translate(-0.035 -0.035)" fill="#389a11"></path>
                          <path id="Path_34843" data-name="Path 34843"
                            d="M2.283,3.673a.9.9,0,0,0,.695.3.9.9,0,0,0,.695-.3.96.96,0,0,0,0-1.39L1.688.3A.96.96,0,0,0,.3.3a.96.96,0,0,0,0,1.39Z"
                            transform="translate(0 0)" fill="#389a11"></path>
                          <path id="Path_34844" data-name="Path 34844"
                            d="M13.688,12.3a.983.983,0,1,0-1.39,1.39l1.986,1.986a.96.96,0,0,0,1.39,0,.96.96,0,0,0,0-1.39Z"
                            transform="translate(-0.087 -0.087)" fill="#389a11"></path>
                        </svg>

                        {{ $t('Affiliate_General_ReferralCode') || "Referral code" }}
                      </p>
                      <div class="flex mb-3 groupButton">
                        <div class="leftControl">
                          <input type="text" readonly="readonly" v-model=" codeGioiThieu "
                            class="w-full pl-2 text-base form-control" />
                        </div>
                        <div class="rightControl">
                          <button class="cursor-pointer btn button primary" v-clipboard:copy=" codeGioiThieu "
                            @click=" saoChep ">
                            {{ $t('Affiliate_General_Coppy') || "Sao chép" }}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full mb-4 vx-col lg:w-2/3 affiliateAnalize">
                    <div class=" wrap-chart bgSecondary borderSecondary recent-statistics">
                      <vs-tabs>
                        <vs-tab :label="this.$t('Affiliate_General_ThisMonth') || 'This month'" @click="(showTN = true), (showTT = false)">
                        </vs-tab>
                        <vs-tab :label="this.$t('Affiliate_General_LastMonth') || 'Last month'" @click="(showTT = true), (showTN = false)">
                        </vs-tab>
                      </vs-tabs>
                      <div class="p-2">
                        <div class="tn" :class=" { block: showTN, hidden: !showTN } ">
                          <div class="content">
                            <div class="vx-row">
                              <div class="w-full vx-col lg:w-1/3">
                                <p class="my-4 text-xl font-bold white recent-statistics-title">
                                  {{ $t('Affiliate_General_RecentStatistics') || "Recent Statistics" }}
                                </p>
                                <p class="mb-4 totalReferral colorSuccess">
                                  {{ $t('Affiliate_General_TotalNewReferrals') || "Total new referrals" }} ({{ tslgdmtn }})
                                </p>
                                <p class="mb-4 totalAgency colorBlue">
                                  {{ $t('Affiliate_General_TotalNewAgencies') || "Total new agencies" }} ({{ tsdlmtn }})
                                </p>
                                <p class="colorDanger">
                                  {{ $t('Affiliate_General_TotalNewCommission') || "Total new Commission" }} ({{
                                  tshhmtn.toFixed(3)
                                  }})
                                </p>
                              </div>
                              <div class="w-full vx-col lg:w-2/3">
                                <div class="wrap-chart bgPrimary">
                                  <highcharts ref="chartSpline" :options=" optionsSpline "></highcharts>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tt" :class=" { show: showTT, hidden: !showTT } ">
                          <div class="content">
                            <div class="vx-row">
                              <div class="w-full vx-col lg:w-1/3">
                                <p class="my-4 text-xl font-bold white recent-statistics-title">
                                  {{ $t('Affiliate_General_RecentStatistics') || "Recent Statistics" }}
                                </p>
                                <p class="mb-4 totalReferral colorSuccess">
                                  {{ $t('Affiliate_General_TotalNewReferrals') || "Total new referrals" }} ({{ tslgdmtt }})
                                </p>
                                <p class="mb-4 totalAgency colorBlue">
                                  {{ $t('Affiliate_General_TotalNewAgencies') || "Total new agencies" }}  ({{ tsdlmtt }})
                                </p>
                                <p class="colorDanger">
                                  {{ $t('Affiliate_General_TotalNewCommission') || "Total new Commission" }} ({{ tshhmtt }})
                                </p>
                              </div>
                              <div class="w-full vx-col lg:w-2/3">
                                <div class="wrap-chart bgPrimary">
                                  <highcharts ref="chartSplineTwo" :options=" optionsSpline2 "></highcharts>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full mb-4 vx-col lg:w-1/3">
                    <div class="networkVolumeStats bgSecondary borderSecondary">
                      <div class="flex items-center cardHeader">
                        <svg id="b-chart" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20"
                          class="mr-2">
                          <rect id="Rectangle_4604" data-name="Rectangle 4604" width="24" height="2"
                            transform="translate(0 18)" fill="#389a11"></rect>
                          <path id="Path_34533" data-name="Path 34533"
                            d="M4,18H6a1,1,0,0,0,1-1V8A1,1,0,0,0,6,7H4A1,1,0,0,0,3,8v9A1,1,0,0,0,4,18Z"
                            transform="translate(0 -2)" fill="#389a11"></path>
                          <path id="Path_34534" data-name="Path 34534"
                            d="M11,18h2a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H11a1,1,0,0,0-1,1V17A1,1,0,0,0,11,18Z"
                            transform="translate(0 -2)" fill="#389a11"></path>
                          <path id="Path_34535" data-name="Path 34535"
                            d="M17,12v5a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H18A1,1,0,0,0,17,12Z"
                            transform="translate(0 -2)" fill="#389a11"></path>
                        </svg>
                        <span class="text-xl font-bold white networkVolumeStats-title">{{ $t('Affiliate_General_NetworkVolStats') || "Network Vol Stats" }}</span>
                        <vs-dropdown vs-custom-content vs-trigger-click>
                          <a class="flex items-center" href.prevent>
                            <feather-icon icon="HelpCircleIcon" svgClasses="h-6 w-6 ml-1 c-question" />
                          </a>
                          <vs-dropdown-menu class="dropdown-question">
                            <p class="m-0 text-sm"> 
                              {{ $t('Affiliate_General_NetworkVolStatsGuide') || "Network Vol Stats" }}
                            </p>
                          </vs-dropdown-menu>
                        </vs-dropdown>
                      </div>
                      <div class="cardBody">
                        <div class="vx-row head border-bottom border-top" style="width: 360px">
                          <div class="vx-col lg:w-5/12">
                            <p class="m-0 text-sm capitalize texthead">{{ $t('Affiliate_General_Month') || "Month" }}</p>
                          </div>
                          <div class="vx-col lg:w-7/12">
                            <p class="m-0 text-sm capitalize texthead">{{ $t('Affiliate_General_Total') || "Total" }}</p>
                          </div>
                        </div>
                        <div class="dataContent">
                          <div class="vx-row border-bottom" style="
                              margin-left: -5px;
                              margin-right: -5px;
                              width: 360px;
                            ">
                            <div class="vx-col lg:w-5/12">
                              <p class="m-0">{{ formatDateAff(t1) }}</p>
                            </div>
                            <div class="vx-col lg:w-7/12">
                              <p class="m-0">${{ formatPrice(klgdtc1, 2) }}</p>
                            </div>
                          </div>
                          <div class="vx-row border-bottom" style="
                              margin-left: -5px;
                              margin-right: -5px;
                              width: 360px;
                            ">
                            <div class="vx-col lg:w-5/12">
                              <p class="m-0">{{ formatDateAff(t2) }}</p>
                            </div>
                            <div class="vx-col lg:w-7/12">
                              <p class="m-0">${{ formatPrice(klgdtc2, 2) }}</p>
                            </div>
                          </div>
                          <div class="vx-row border-bottom" style="
                              margin-left: -5px;
                              margin-right: -5px;
                              width: 360px;
                            ">
                            <div class="vx-col lg:w-5/12">
                              <p class="m-0">{{ formatDateAff(t3) }}</p>
                            </div>
                            <div class="vx-col lg:w-7/12">
                              <p class="m-0">${{ formatPrice(klgdtc3, 2) }}</p>
                            </div>
                          </div>
                          <div class="vx-row" style="
                              margin-left: -5px;
                              margin-right: -5px;
                              width: 360px;
                            ">
                            <div class="vx-col lg:w-5/12">
                              <p class="m-0">{{ formatDateAff(t4) }}</p>
                            </div>
                            <div class="vx-col lg:w-7/12">
                              <p class="m-0">${{ formatPrice(klgdtc4, 2) }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="cardFooter">
                        <div class="vx-row">
                          <div class="vx-col lg:w-5/12">
                            <p class="m-0"><b>{{ $t('Affiliate_General_Total') || "Total" }}</b></p>
                          </div>
                          <div class="vx-col lg:w-7/12">
                            <p class="m-0">
                              <b>${{
                                formatPrice(
                                klgdtc1 + klgdtc2 + klgdtc3 + klgdtc4,
                                2
                                )
                                }}</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="w-full mb-4 vx-col lg:w-1/3">
                    <div class="getIntouch bgSecondary borderSecondary">
                      <div class="flex items-center cardHeader">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22.678" height="22.678" viewBox="0 0 22.678 22.678"
                          class="mr-2">
                          <g id="headphones-mic" transform="translate(0.5 0.5)">
                            <path id="Path_29605" data-name="Path 29605"
                              d="M1.5,9.826V6.014A5.515,5.515,0,0,1,7.014.5h6.893a5.515,5.515,0,0,1,5.514,5.514V9.826"
                              transform="translate(0.379)" fill="none" stroke="#389a11" stroke-linecap="round"
                              stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path>
                            <path id="Path_29606" data-name="Path 29606"
                              d="M6.014,14.771H4.636A4.135,4.135,0,0,1,.5,10.636h0A4.135,4.135,0,0,1,4.636,6.5H6.014Z"
                              transform="translate(0 2.271)" fill="none" stroke="#389a11" stroke-linecap="round"
                              stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path>
                            <path id="Path_29607" data-name="Path 29607"
                              d="M11.5,14.771h1.379a4.135,4.135,0,0,0,4.136-4.136h0A4.135,4.135,0,0,0,12.879,6.5H11.5Z"
                              transform="translate(4.164 2.271)" fill="none" stroke="#389a11" stroke-linecap="round"
                              stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path>
                            <path id="Path_29608" data-name="Path 29608"
                              d="M12.15,16.636H5.257A2.756,2.756,0,0,1,2.5,13.879V12.5" transform="translate(0.757 4.543)"
                              fill="none" stroke="#389a11" stroke-linecap="round" stroke-linejoin="round"
                              stroke-miterlimit="10" stroke-width="2"></path>
                          </g>
                        </svg><span class="text-xl font-bold white getIntouch-title">{{ $t('Affiliate_General_Contact') || "Contact" }}</span>
                      </div>
                      <div class="cardBody">
                        <div class="vx-row">
                          <div class="text-center vx-col lg:w-4/12">
                            <img :src=" require('@/assets/images/sky/bot.svg') " alt="" class="mb-3" />
                            <p class="mb-2 text-base elipText white getIntouch-sub-title">
                              {{ domain }}
                            </p>
                          </div>
                          <div class="vx-col lg:w-8/12">
                            <p class="mb-2 text-base white-50 getIntouch-label">
                              {{ $t('Affiliate_General_Email') || "Email" }}
                            </p>
                            <p class="flex items-center">
                              <feather-icon icon="MailIcon" svgClasses="h-6 w-6 ml-1 c-mail" />
                              <a :href=" `mailto:${config.support.mail}` "
                                class="ml-2 text-base elipText white getIntouch-value">Email support</a>
                              <!-- <a :href="`mailto:contact@${hostName}`" class="ml-2 text-base elipText white getIntouch-value">contact@{{hostName}}</a> -->
                            </p>
                            <!-- <p class="mb-2 text-base white-50 getIntouch-label">
                              24/7 Support
                            </p> -->
                            <!-- <p
                              v-if="config.support.telegram"
                              class="flex items-center"
                            >
                              <svg
                                class="w-6 h-6 ml-1 c-mail"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 512 512"
                                style="enable-background: new 0 0 512 512"
                                xml:space="preserve"
                              >
                                <g>
                                  <linearGradient
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Oval_00000153700382965497781030000014141664724916521630_"
                                    gradientTransform="matrix(1000 0 0 -1000 1981017 6242157)"
                                    gradientUnits="userSpaceOnUse"
                                    x1="-1980.761"
                                    x2="-1980.761"
                                    y1="6242.157"
                                    y2="6241.649"
                                  >
                                    <stop
                                      offset="0"
                                      stop-color="#2aabee"
                                    ></stop>
                                    <stop
                                      offset="1"
                                      stop-color="#229ed9"
                                    ></stop>
                                  </linearGradient>
                                  <g
                                    xmlns="http://www.w3.org/2000/svg"
                                    id="Artboard"
                                    clip-rule="evenodd"
                                    fill-rule="evenodd"
                                  >
                                    <circle
                                      id="Oval"
                                      cx="256"
                                      cy="256"
                                      fill="url(#Oval_00000153700382965497781030000014141664724916521630_)"
                                      r="256"
                                      data-original="url(#Oval_00000153700382965497781030000014141664724916521630_)"
                                    ></circle>
                                    <path
                                      id="Path-3"
                                      d="m115.88 253.298c74.629-32.515 124.394-53.951 149.293-64.307 71.094-29.57 85.867-34.707 95.495-34.877 2.118-.037 6.853.488 9.92 2.977 4.55 3.692 4.576 11.706 4.071 17.01-3.853 40.48-20.523 138.713-29.004 184.051-3.589 19.184-10.655 25.617-17.495 26.246-14.866 1.368-26.155-9.825-40.554-19.263-22.531-14.77-35.26-23.964-57.131-38.376-25.275-16.656-8.89-25.81 5.514-40.771 3.77-3.915 69.271-63.494 70.539-68.899.159-.676.306-3.196-1.191-4.526s-3.706-.876-5.3-.514c-2.26.513-38.254 24.304-107.982 71.372-10.217 7.016-19.471 10.434-27.762 10.255-9.141-.197-26.723-5.168-39.794-9.417-16.032-5.211-28.774-7.967-27.664-16.817.578-4.611 6.926-9.325 19.045-14.144z"
                                      fill="#ffffff"
                                      data-original="#ffffff"
                                    ></path>
                                  </g>
                                </g>
                              </svg>
                              <a
                                :href="config.support.telegram"
                                target="_blank"
                                class="ml-2 text-base elipText white getIntouch-value"
                                >Telegram support</a
                              >
                            </p>
                            <p
                              v-if="config.support.zalo"
                              class="flex items-center mt-2"
                            >
                              <svg
                                class="w-6 h-6 ml-1 c-mail"
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                xmlns:svgjs="http://svgjs.com/svgjs"
                                width="512"
                                height="512"
                                x="0"
                                y="0"
                                viewBox="0 0 512.007 512.007"
                                style="enable-background: new 0 0 512 512"
                                xml:space="preserve"
                              >
                                <g>
                                  <circle
                                    xmlns="http://www.w3.org/2000/svg"
                                    style=""
                                    cx="256.003"
                                    cy="256.003"
                                    r="256.003"
                                    fill="#e6eff4"
                                    data-original="#e6eff4"
                                  ></circle>
                                  <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    style=""
                                    d="M385.581,107.256L385.581,107.256c-5.101-5.102-12.148-8.258-19.932-8.258H146.354  c-15.567,0-28.187,12.619-28.187,28.187v219.295c0,7.785,3.156,14.832,8.258,19.933l0,0l145.105,145.105  C405.682,503.489,512.001,392.169,512.001,256c0-8.086-0.393-16.081-1.126-23.976L385.581,107.256z"
                                    fill="#b6d1dd"
                                    data-original="#b6d1dd"
                                  ></path>
                                  <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    style=""
                                    d="M365.647,98.999H146.353c-15.567,0-28.187,12.619-28.187,28.187v219.294  c0,15.567,12.619,28.187,28.187,28.187h43.971v38.334l53.377-38.334h121.946c15.567,0,28.187-12.619,28.187-28.187V127.185  C393.834,111.618,381.215,98.999,365.647,98.999z"
                                    fill="#41a0d7"
                                    data-original="#41a0d7"
                                  ></path>
                                  <path
                                    xmlns="http://www.w3.org/2000/svg"
                                    style=""
                                    d="M393.834,340.942v-44.17c-5.73-5.85-13.714-9.484-22.55-9.484h-64.188l86.738-118.175V131.24  c-4.466-3.988-10.304-6.31-16.5-6.31h-131.2c-17.435,0-31.57,14.135-31.57,31.57s14.135,31.57,31.57,31.57h55.168L212,311.089  c-5.474,7.539-6.255,17.512-2.024,25.812c4.231,8.3,12.76,13.526,22.077,13.526h139.232  C380.121,350.426,388.104,346.792,393.834,340.942z"
                                    fill="#ffffff"
                                    data-original="#ffffff"
                                  ></path>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                  <g xmlns="http://www.w3.org/2000/svg"></g>
                                </g>
                              </svg>
                              <a
                                :href="config.support.zalo"
                                target="_blank"
                                class="ml-2 text-base elipText white getIntouch-value"
                                >Zalo support</a
                              >
                            </p> -->
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="commission" :class=" { block: showCom } ">
            <div class="wraperContent">
              <div class="flex flex-col items-center justify-between mb-4 headerContent lg:flex-row">
                <h1 class="text-2xl font-bold white text-capitalize pointer affiliateCommission-title">
                  {{ $t('Affiliate_Commission') || "Commission" }}
                  <span class="q">
                    <feather-icon icon="HelpCircleIcon" svgClasses="h-6 w-6 ml-1 c-question" />
                  </span>
                </h1>
                <div class="flex flex-wrap items-end affCommissionControl">
                  <div class="flex flex-col mr-3 blockLine">
                    <span class="type">{{ $t('Affiliate_Commission_Type') || "Commission type" }}</span>
                    <v-select class="relative w-64" v-model=" selectedHoaHong " :options=" optionsHoaHong "
                      :dir=" $vs.rtl ? 'rtl' : 'ltr' " />
                  </div>
                  <div class="relative flex flex-col mr-8 blockLine">
                    <div class="dateRange">
                      <datepicker class="customeTradeHistory startDate" :format=" formatDate " :disabled=" true "
                        :value=" startDate "></datepicker>
                      <span class="seperate">-</span>
                      <datepicker class="customeTradeHistory endDate" :format=" formatDate " :disabled=" true "
                        :value=" endDate "></datepicker>
                    </div>
                  </div>
                  <vs-button class="w-32" color="rgb(62, 201, 214)" type="filled"
                    @click=" clickSearchDateTimeHoaHong ">{{ $t('Affiliate_Commission_SearchType') || "Search" }}</vs-button>
                </div>
              </div>
              <div class="mb-4 notice-comission">
                <p>
                  <span style="color: #f02769">{{ $t('Affiliate_Commission_Note') || "Note:" }} </span>
                  <span style="color: #8d97a0">{{ $t('Affiliate_Commission_NoteContent') || "You will receive trading commission from your downline immediately." }}</span>
                </p>
              </div>
              <div class="body vx-row">
                <!-- <div class="w-full vx-col lg:w-4/12 lg:mb-5 lg:pr-0">Mỗi ngày mới, bạn sẽ nhận hoa hồng giao dịch từ tuyến dưới của ngày hôm trước.
                                        <div class="wrap-chart bgSecondary boxShadowDashBoard commission-chart">
                                            <div class="header">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19.135" height="16.02" viewBox="0 0 19.135 16.02"><g id="edit-curves" transform="translate(0 -2)"><path id="Path_29616" data-name="Path 29616" d="M5,13.9C14.346,13.9,9.673,3,19.02,3" transform="translate(-0.885 0)" fill="none" stroke="#389a11" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path><path id="Path_29617" data-name="Path 29617" d="M18.135,17.02H1V3" transform="translate(0 0)" fill="none" stroke="#389a11" stroke-linecap="square" stroke-miterlimit="10" stroke-width="2"></path></g></svg>
                                                <span class="mb-0 ml-2 text-lg font-bold colorSecondary header-title">Biểu đồ Hoa hồng Giao dịch</span>
                                                <div class="flex items-center control">

                                                </div>
                                            </div>
                                            <div class="wrap-chart-below bgPrimary">
                                                <div id="chartCommisst" class="chart-instance chartHight">
                                                    <highcharts ref="chartSplineThree" :options="optionsSpline3"></highcharts>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                <div class="w-full mt-4 vx-col lg:mt-0">
                  <div class="relative tableBackground bgSecondary trading-detail" v-if=" selectedHoaHong.id == 1 ">
                    <table class="table w-full table-dark tableComission bgSecondary"
                      :class=" { 'ld-loading': isLoading } ">
                      <div class="loading">
                        <div class="loading__ring">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                            x="0px" y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100"
                            xml:space="preserve">
                            <path
                              d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                            </path>
                          </svg>
                        </div>
                        <div class="loading__ring">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                            x="0px" y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100"
                            xml:space="preserve">
                            <path
                              d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <thead>
                        <tr>
                          <th colspan="5">
                            <div class="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14"
                                class="mr-2">
                                <g id="single-copy-06" transform="translate(-1.278)">
                                  <rect id="Rectangle_4166" data-name="Rectangle 4166" width="10" height="11"
                                    transform="translate(1.778 2.5)" stroke-width="1" stroke="#389a11"
                                    stroke-linecap="round" stroke-linejoin="round" fill="none"></rect>
                                  <line id="Line_1332" data-name="Line 1332" x2="6" transform="translate(3.778 0.5)"
                                    fill="none" stroke="#389a11" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1"></line>
                                </g>
                              </svg><span class="text-lg font-bold white trading-detail-title">{{ $t('Affiliate_Commission_TradingPayoutDetails') || "Trading Payout Details" }}</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th class="colorSecondary2">{{ $t('Affiliate_Commission_Time') || "Time" }}</th>
                          <th class="colorSecondary2">{{ $t('Affiliate_Commission_Payout') || "Payout" }}</th>
                          <th class="colorSecondary2">{{ $t('Affiliate_Commission_TradeCount') || "Trade count" }}</th>
                          <!--<th class="colorSecondary2">Số nhà Giao dịch</th>-->
                          <th class="colorSecondary2">{{ $t('Affiliate_Commission_TradeVolume') || "Trade volume" }}</th>
                        </tr>
                      </thead>
                      <tbody class="text-center table-content" v-if=" listChiTietKLGD.length == 0 ">
                        <tr>
                          <td colspan="5"><span>{{ $t('Affiliate_Commission_NoData') || "No Data" }}</span></td>
                        </tr>
                      </tbody>
                      <tbody class="table-content" v-else>
                        <tr :key=" indextr " v-for="(   tr, indextr   ) in    listChiTietKLGD   ">
                          <td class="colorSecondary">
                            {{ formatDateAff2(tr.dt) }}
                          </td>
                          <td class="colorSecondary">
                            {{ formatPrice(tr.thanhtoan, 2) }}
                          </td>
                          <td class="colorSecondary">{{ tr.soluongGD }}</td>
                          <!--<td class="colorSecondary">{{ tr.soluongGD }}</td>-->
                          <td class="colorSecondary">
                            {{ formatPrice(tr.klgd, 2) }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <!--<vs-pagination v-if="countPageHH > 0" class="mt-4 mb-2" :total="countPageHH" v-model="currentxHH"  @input="clickPageHH"></vs-pagination>
                                            -->
                  </div>
                  <div class="relative tableBackground bgSecondary trading-detail" v-else>
                    <table class="table w-full table-dark tableComission bgSecondary"
                      :class=" { 'ld-loading': isLoading } ">
                      <div class="loading">
                        <div class="loading__ring">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                            x="0px" y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100"
                            xml:space="preserve">
                            <path
                              d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                            </path>
                          </svg>
                        </div>
                        <div class="loading__ring">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                            x="0px" y="0px" viewBox="0 0 100 100" style="enable-background: new 0 0 100 100"
                            xml:space="preserve">
                            <path
                              d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                            </path>
                          </svg>
                        </div>
                      </div>
                      <thead>
                        <tr>
                          <th colspan="5">
                            <div class="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14"
                                class="mr-2">
                                <g id="single-copy-06" transform="translate(-1.278)">
                                  <rect id="Rectangle_4166" data-name="Rectangle 4166" width="10" height="11"
                                    transform="translate(1.778 2.5)" stroke-width="1" stroke="#389a11"
                                    stroke-linecap="round" stroke-linejoin="round" fill="none"></rect>
                                  <line id="Line_1332" data-name="Line 1332" x2="6" transform="translate(3.778 0.5)"
                                    fill="none" stroke="#389a11" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1"></line>
                                </g>
                              </svg><span class="text-lg font-bold white trading-detail-title">{{ $t("Affiliate_ProfitDetail")}}</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <thead>
                        <tr>
                          <th class="colorSecondary2">{{ $t("Affiliate_Time")}}</th>
                          <th class="colorSecondary2">{{ $t("Affiliate_Payment")}}</th>
                          <th class="colorSecondary2">{{ $t("Affiliate_Sale")}}</th>
                        </tr>
                      </thead>
                      <tbody class="text-center table-content" v-if=" listChiTietKLVip.length == 0 ">
                        <tr>
                          <td colspan="5"><span>{{ $t("No_data")}}</span></td>
                        </tr>
                      </tbody>
                      <tbody class="table-content" v-else>
                        <tr :key=" indextr " v-for="(   tr, indextr   ) in    listChiTietKLVip   ">
                          <td class="colorSecondary">
                            {{ formatDateAff2(tr.dt) }}
                          </td>
                          <td class="colorSecondary">
                            {{ formatPrice(100, 2) }}
                          </td>
                          <td class="colorSecondary">{{ tr.doanhso }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <!--<vs-pagination v-if="countPageHHVip > 0" class="mt-4 mb-2" :total="countPageHHVip" v-model="currentxHHVip"  @input="clickPageHHVip"></vs-pagination>
                                            -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="qlht" :class=" { block: showqlHt } ">
            <div class="w-full px-0 lg:pl-0">
              <div>
                <div class="filterDiv">
                  <h1 class="mb-4 text-2xl font-bold capitalize white">
                    {{ $t('Affiliate_Management_ManageYourAffiliate') || "Manage Your Affiliate" }}
                  </h1>
                  <div class="flex flex-wrap">
                    <div class="relative align-middle colFirst lg:mr-5">
                      <p class="mb-1 color-white-50 aff-test-type">
                        {{ $t('Affiliate_Management_SearchType') || "Search Type" }}
                      </p>
                      <button class="cursor-pointer btn search btnSearchType lg:mr-3 button"
                        :class=" { active: showActiveLv, primary: showActiveLv } "
                        @click="(showActiveLv = true), (showActiveBD = false)">
                        {{ $t('Affiliate_Management_ByLevel') || "Level" }}
                      </button>
                      <button class="cursor-pointer btn search btnSearchType button"
                        :class=" { active: showActiveBD, primary: showActiveBD } "
                        @click="(showActiveBD = true), (showActiveLv = false)">
                        {{ $t('Affiliate_Management_UserName') || "Username" }}
                      </button>
                    </div>
                    <div class="align-middle md:w-1/2">
                      <div class="lg:ml-8">
                        <div class="mb-1 color-white-50 aff-text-type">
                          {{ $t('Affiliate_Management_ReferralLevel') || "Watch Friend Referred By" }}
                          {{ showActiveLv ? $t('Affiliate_Level') : $t('Affiliate_Name') }}
                        </div>
                        <div class="flex">
                          <v-select :class="
                            {
                              block: showActiveLv,
                                hidden: showActiveBD,
                                                                                                          }
                          " class="relative w-32 mr-4" v-model=" selectedLevel " :options=" optionsLevel "
                            :dir=" $vs.rtl ? 'rtl' : 'ltr' " />
                          <vs-input :class="
                            {
                              block: showActiveBD,
                                hidden: showActiveLv,
                                                                                                          }
                          " class="mr-4 inputx TnD" :placeholder="this.$t('Aff_InputName')" v-model=" EnterNameUser " />
                          <vs-button v-if=" showActiveLv " color="rgb(62, 201, 214)" type="filled"
                            @click=" searchCapBac ">{{ $t('Affiliate_Management_SearchLevel') || "Search" }}</vs-button>
                          <vs-button v-else color="rgb(62, 201, 214)" type="filled" @click=" searchName ">{{ $t('Affiliate_Management_SearchLevel') || "Search" }}</vs-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="paddingResult">
                  <div class="flex flex-wrap mb-3">
                    <h1 class="text-2xl font-bold capitalize white">
                      {{ $t('Affiliate_Management_Result') || "Search result" }}
                    </h1>
                    <div class="flex flex-wrap items-center ml-auto scrollRange">
                      <span class="mr-4 textTime">{{ $t('Affiliate_Management_TimeRange') || "Time range" }}</span>
                      <button class="mr-3 cursor-pointer btn btnTime" :class=" { 'button primary active': oneday } "
                        @click="changeDateSelect(1)">
                        {{ $t('Affiliate_Management_Yesterday') || "Yesterday" }}
                      </button>
                      <button class="mr-3 cursor-pointer btn btnTime" :class=" { 'button primary active': twoday } "
                        @click="changeDateSelect(7)">
                        {{ $t('Affiliate_Management_Last7Days') || "Last 7 days" }}
                      </button>
                      <button class="mr-3 cursor-pointer btn btnTime" :class=" { 'button primary active': threeday } "
                        @click="changeDateSelect(30)">
                        {{ $t('Affiliate_Management_Last30Days') || "Last 30 days" }}
                      </button>
                      <button class="cursor-pointer btn btnTime" :class=" { 'button primary active': allday } "
                        @click="changeDateSelect(0)">
                        {{ $t('Affiliate_Management_AllTime') || "All time" }}
                      </button>
                    </div>
                  </div>
                  <div class="search-result">
                    <div class="relative table-responsive table-pc">
                      <table class="table w-full mb-0 overflow-hidden text-center table-bordered"
                        :class=" { 'ld-loading': isLoading } ">
                        <div class="loading">
                          <div class="loading__ring">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                              version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
                              style="enable-background: new 0 0 100 100" xml:space="preserve">
                              <path
                                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                              </path>
                            </svg>
                          </div>
                          <div class="loading__ring">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                              version="1.1" x="0px" y="0px" viewBox="0 0 100 100"
                              style="enable-background: new 0 0 100 100" xml:space="preserve">
                              <path
                                d="M85.5,42c-0.2-0.8-0.5-1.7-0.8-2.5c-0.3-0.9-0.7-1.6-1-2.3c-0.3-0.7-0.6-1.3-1-1.9c0.3,0.5,0.5,1.1,0.8,1.7  c0.2,0.7,0.6,1.5,0.8,2.3s0.5,1.7,0.8,2.5c0.8,3.5,1.3,7.5,0.8,12c-0.4,4.3-1.8,9-4.2,13.4c-2.4,4.2-5.9,8.2-10.5,11.2  c-1.1,0.7-2.2,1.5-3.4,2c-0.5,0.2-1.2,0.6-1.8,0.8s-1.3,0.5-1.9,0.8c-2.6,1-5.3,1.7-8.1,1.8l-1.1,0.1L53.8,84c-0.7,0-1.4,0-2.1,0  c-1.4-0.1-2.9-0.1-4.2-0.5c-1.4-0.1-2.8-0.6-4.1-0.8c-1.4-0.5-2.7-0.9-3.9-1.5c-1.2-0.6-2.4-1.2-3.7-1.9c-0.6-0.3-1.2-0.7-1.7-1.1  l-0.8-0.6c-0.3-0.1-0.6-0.4-0.8-0.6l-0.8-0.6L31.3,76l-0.2-0.2L31,75.7l-0.1-0.1l0,0l-1.5-1.5c-1.2-1-1.9-2.1-2.7-3.1  c-0.4-0.4-0.7-1.1-1.1-1.7l-1.1-1.7c-0.3-0.6-0.6-1.2-0.9-1.8c-0.2-0.5-0.6-1.2-0.8-1.8c-0.4-1.2-1-2.4-1.2-3.7  c-0.2-0.6-0.4-1.2-0.5-1.9c-0.1-0.6-0.2-1.2-0.3-1.8c-0.3-1.2-0.3-2.4-0.4-3.7c-0.1-1.2,0-2.5,0.1-3.7c0.2-1.2,0.3-2.4,0.6-3.5  c0.1-0.6,0.3-1.1,0.4-1.7l0.1-0.8l0.3-0.8c1.5-4.3,3.8-8,6.5-11c0.8-0.8,1.4-1.5,2.1-2.1c0.9-0.9,1.4-1.3,2.2-1.8  c1.4-1.2,2.9-2,4.3-2.8c2.8-1.5,5.5-2.3,7.7-2.8s4-0.7,5.2-0.6c0.6-0.1,1.1,0,1.4,0s0.4,0,0.4,0h0.1c2.7,0.1,5-2.2,5-5  c0.1-2.7-2.2-5-5-5c-0.2,0-0.2,0-0.3,0c0,0-0.2,0.1-0.6,0.1c-0.4,0-1,0-1.8,0.1c-1.6,0.1-4,0.4-6.9,1.2c-2.9,0.8-6.4,2-9.9,4.1  c-1.8,1-3.6,2.3-5.4,3.8C26,21.4,25,22.2,24.4,23c-0.2,0.2-0.4,0.4-0.6,0.6c-0.2,0.2-0.5,0.4-0.6,0.7c-0.5,0.4-0.8,0.9-1.3,1.4  c-3.2,3.9-5.9,8.8-7.5,14.3l-0.3,1l-0.2,1.1c-0.1,0.7-0.3,1.4-0.4,2.1c-0.3,1.5-0.4,2.9-0.5,4.5c0,1.5-0.1,3,0.1,4.5  c0.2,1.5,0.2,3,0.6,4.6c0.1,0.7,0.3,1.5,0.4,2.3c0.2,0.8,0.5,1.5,0.7,2.3c0.4,1.6,1.1,3,1.7,4.4c0.3,0.7,0.7,1.4,1.1,2.1  c0.4,0.8,0.8,1.4,1.2,2.1c0.5,0.7,0.9,1.4,1.4,2s0.9,1.3,1.5,1.9c1.1,1.3,2.2,2.7,3.3,3.5l1.7,1.6c0,0,0.1,0.1,0.1,0.1c0,0,0,0,0,0  c0,0,0,0,0,0l0.1,0.1l0.1,0.1h0.2l0.5,0.4l1,0.7c0.4,0.2,0.6,0.5,1,0.7l1.1,0.6c0.8,0.4,1.4,0.9,2.1,1.2c1.4,0.7,2.9,1.5,4.4,2  c1.5,0.7,3.1,1,4.6,1.5c1.5,0.3,3.1,0.7,4.7,0.8c1.6,0.2,3.1,0.2,4.7,0.2c0.8,0,1.6-0.1,2.4-0.1l1.2-0.1l1.1-0.1  c3.1-0.4,6.1-1.3,8.9-2.4c0.8-0.3,1.4-0.6,2.1-0.9s1.3-0.7,2-1.1c1.3-0.7,2.6-1.7,3.7-2.5c0.5-0.4,1-0.9,1.6-1.3l0.8-0.6l0.2-0.2  c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0,0,0,0v0.1l0.1-0.1l0.4-0.4c0.5-0.5,1-1,1.5-1.5c0.3-0.3,0.5-0.5,0.8-0.8l0.7-0.8  c0.9-1.1,1.8-2.2,2.5-3.3c0.4-0.6,0.7-1.1,1.1-1.7c0.3-0.7,0.6-1.2,0.9-1.8c2.4-4.9,3.5-9.8,3.7-14.4C87.3,49.7,86.6,45.5,85.5,42z">
                              </path>
                            </svg>
                          </div>
                        </div>
                        <thead>
                          <tr>
                            <th>{{ $t('Affiliate_Management_UserName') || "Username" }}</th>
                            <th>{{ $t('Affiliate_Management_ByLevel') || "Level" }}</th>
                            <th>{{ $t('Affiliate_Management_TotalVolume') || "Total Volume" }}</th>
                            <th>{{ $t('Affiliate_Management_ComEarned') || "Com. Earned" }}</th>
                          </tr>
                        </thead>
                        <tbody v-if=" datalistAgency.length == 0 ">
                          <tr>
                            <td colspan="4"><span>{{ $t('Affiliate_Management_NoData') || "No data" }}</span></td>
                          </tr>
                        </tbody>
                        <tbody v-else>
                          <tr :key=" itr " v-for="(   tr, itr   ) in    datalistAgency   ">
                            <td>
                              <a href.prevent class="underline color-yellow">{{
                                tr.nick_name
                                }}</a>
                            </td>
                            <td>{{ tr.level_vip }}</td>
                            <td>{{ formatPrice(tr.tklgd, 2) }}</td>
                            <td>{{ formatPrice(tr.thhn, 2) }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <ThongKeCapDuoi v-if="showTuyenDuoi" /> -->
        </div>
      </div>

      <vs-popup :title="this.$t('Affiliate_Levels')" :active.sync=" popupActiveRank ">
        <img width="100%" :src=" require('@/assets/images/sky/aff_rank.png') " />
      </vs-popup>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import VueApexCharts from "vue-apexcharts";
import Datepicker from "vuejs-datepicker";
import vSelect from "vue-select";
import moment from "moment";
import getData from "@/pages/trade/navbar/components/data.json";
import config from "@/config.json";

import { Chart } from "highcharts-vue";
import Highcharts from "highcharts";
import More from "highcharts/highcharts-more";
// import ThongKeCapDuoi from "./ThongKeCapDuoi.vue";
//import FormValidationCustomErrorMessagesVue from '../forms/form-validation/FormValidationCustomErrorMessages.vue'

More(Highcharts);

const chartOne = {
  chart: {
    type: "areaspline",
    backgroundColor: "transparent",
    height: "250px",
  },
  title: {
    text: "",
  },
  legend: {
    enabled: false,
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
  },
  xAxis: {
    categories: ["Week1", "Week2", "Week3","Week4"],
    plotBands: [
      {
        // visualize the weekend
        from: 4.5,
        to: 6.5,
        color: "rgba(68, 170, 213, .2)",
      },
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
    grid: {
      cellHeight: 10,
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: " ",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      color: "#31baa0",
      name: " ",
      data: [0, 0, 0, 0],
    },
    {
      color: "#389a11",
      name: " ",
      data: [0, 0, 0, 0],
    },
    {
      color: "#f46273",
      name: " ",
      data: [0, 0, 0, 0],
    },
  ],
};

const chartTwo = {
  chart: {
    type: "areaspline",
    backgroundColor: "transparent",
    height: "250px",
  },
  title: {
    text: "",
  },
  legend: {
    enabled: false,
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
  },
  xAxis: {
    categories:  ["Week1", "Week2", "Week3","Week4"],
    plotBands: [
      {
        // visualize the weekend
        from: 4.5,
        to: 6.5,
        color: "rgba(68, 170, 213, .2)",
      },
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: " ",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      color: "#31baa0",
      name: " ",
      data: [0, 0, 0, 0],
    },
    {
      color: "#389a11",
      name: " ",
      data: [0, 0, 0, 0],
    },
    {
      color: "#f46273",
      name: " ",
      data: [0, 0, 0, 0],
    },
  ],
};

const chartThree = {
  chart: {
    type: "areaspline",
    backgroundColor: "transparent",
  },
  title: {
    text: "",
  },
  legend: {
    enabled: false,
    layout: "vertical",
    align: "left",
    verticalAlign: "top",
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || "#FFFFFF",
  },
  xAxis: {
    categories: ["Week1", "Week2", "Week3","Week4"],
    plotBands: [
      {
        // visualize the weekend
        from: 4.5,
        to: 6.5,
        color: "rgba(68, 170, 213, .2)",
      },
    ],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  tooltip: {
    shared: true,
    valueSuffix: " ",
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5,
    },
  },
  series: [
    {
      color: "#31baa0",
      name: " ",
      data: [0, 0, 0, 0],
    },
    {
      color: "#389a11",
      name: " ",
      data: [0, 0, 0, 0],
    },
    {
      color: "#f46273",
      name: " ",
      data: [0, 0, 0, 0],
    },
  ],
};

export default {
  components: {
    highcharts: Chart,
    VueApexCharts,
    Datepicker,
    "v-select": vSelect,
    // ThongKeCapDuoi,
  },
  data() {
    return {
      hostName: window.location.hostname,
      showGobal: true,
      showCom: false,
      showqlHt: false,
      showTT: false,
      showTN: true,
      // showTuyenDuoi: false,

      optionsSpline: chartOne,
      optionsSpline2: chartTwo,
      optionsSpline3: chartThree,

      isLoading: false,

      popupThongBao: false,
      loading: false,
      linkDk: "",
      codeGioiThieu: "",
      isDongY: false,
      dongYMua: false,
      popupBuyThamGiaVip: false,
      isVip: false,
      showActiveLv: true,
      showActiveBD: false,
      EnterNameUser: "",
      currentxHH: 1,
      currentxHHVip: 1,
      f1cuaminh: "-------",
      optionsLevel: [
        { id: 1, label: this.$t('Affiliate_Level1') },
        { id: 2, label: this.$t('Affiliate_Level2') },
        { id: 3, label: this.$t('Affiliate_Level3') },
        { id: 4, label: this.$t('Affiliate_Level4') },
        { id: 5, label: this.$t('Affiliate_Level5') },
        { id: 6, label: this.$t('Affiliate_Level6') },
        { id: 7, label: this.$t('Affiliate_Level7') },
        // { id: 8, label: "Cấp 8" },
      ],
      selectedLevel: { id: 1, label: this.$t('Affiliate_Level1') },
      optionsHoaHong: [
        { id: 1, label: this.$t('Trading_Commissions') },
        { id: 2, label: this.$t('Commission_type_vip') },
      ],
      selectedHoaHong: { id: 1, label: this.$t('Trading_Commissions') },
      popupActiveRank: false,
      formatDate: "dd/MM/yyyy",
      startDate: null,
      endDate: null,

      hhMeF1isWeek: 0,
      totalDlisMe: 0,

      totalDaiLy: 0,
      vip_lv: 1,
      pen_commiss: 0,
      totalNGD: 0,
      commissGD: 0,

      klgdtc1: 0,
      klgdtc2: 0,
      klgdtc3: 0,
      klgdtc4: 0,

      t1: "",
      t2: "",
      t3: "",
      t4: "",

      tslgdmtn: 0,
      tshhmtn: 0,
      tslgdmtt: 0,
      tshhmtt: 0,
      tsdlmtn: 0,
      tsdlmtt: 0,

      listChiTietKLGD: [],
      listChiTietKLVip: [],
      countPageHH: 0,
      countPageHHVip: 0,

      dateListDLSearch: 1,

      oneday: true,
      twoday: false,
      threeday: false,
      allday: false,

      datalistAgency: [],

      showhhGD: true,
      domain:
        config.domainRealName.charAt(0).toUpperCase() +
        config.domainRealName.slice(1),
      config,
    };
  },

  methods: {
    saoChep() {
      return this.$vs.notify({
        text: this.$t('Affiliate_Saved'),
        color: "success",
        position: "top-right",
        iconPack: "feather",
        icon: "icon-check",
      });
    },

    OkBuyVip() {
      this.loading = true;
      AuthenticationService.UserBuyVip().then((res) => {
        this.loading = false;
        if (res.data.success == 1) {
          this.isVip = true;
          this.vip_lv = 1;
          this.popupBuyThamGiaVip = false;
          this.$vs.notify({
            text: this.$t('Affiliate_BuyedVIP'),
            color: "success",
            position: "top-right",
            iconPack: "feather",
            icon: "icon-check",
          });
        } else if (res.data.success == 2) {
          this.popupBuyThamGiaVip = false;
          this.popupThongBao = true;
        }
      });
    },

    OkNapNgay() {
      this.popupThongBao = false;
      setTimeout(() => {
        this.$router.push("/user/balance").catch(() => { });
      }, 500);
    },

    f1ForUser() {
      this.loading = true;
      AuthenticationService.getNguoiGioiThieu().then((res) => {
        this.loading = false;
        if (res.data.success) {
          let d = res.data.data;
          this.hhMeF1isWeek = d.hhttisMe;
          this.totalDlisMe = d.tsdlisMe;

          if(this.vip_lv === 7){
            this.hhMeF1isWeek = 64000;
            this.totalDlisMe = 8;
          }
          
          this.f1cuaminh = d.nick;
          this.totalDaiLy = d.tsdl;
          this.totalNGD = d.tsngd;
          this.commissGD = d.hhgd;
          this.pen_commiss = d.hhdl;

         

          this.klgdtc1 = d.tslgdCD1;
          this.klgdtc2 = d.tslgdCD2;
          this.klgdtc3 = d.tslgdCD3;
          this.klgdtc4 = d.tslgdCD4;

          this.t1 = d.t1;
          this.t2 = d.t2;
          this.t3 = d.t3;
          this.t4 = d.t4;

          this.tslgdmtn = d.tslgdmtn ? d.tslgdmtn : 0;
          this.tshhmtn = d.tshhmtn ? d.tshhmtn : 0;
          this.tslgdmtt = d.tslgdmtt ? d.tslgdmtt : 0;
          this.tshhmtt = d.tshhmtt ? d.tshhmtt : 0;

          this.tsdlmtn = d.tsdlmtn ? d.tsdlmtn : 0;
          this.tsdlmtt = d.tsdlmtt ? d.tsdlmtt : 0;

          try {
            let cS1 = this.$refs.chartSpline.chart;
            let cS2 = this.$refs.chartSplineTwo.chart;

            // if (d.tsngdMoi0) {
            let TSNGDM = cS1.series[0]; // Tổng số nhà giao dịch mới
            let pA0 = TSNGDM.points[0];
            let pA1 = TSNGDM.points[1];
            let pA2 = TSNGDM.points[2];
            let pA3 = TSNGDM.points[3];
            pA0.update({ y: d.tsngdMoi0 }, true);
            pA1.update({ y: d.tsngdMoi1 }, true);
            pA2.update({ y: d.tsngdMoi2 }, true);
            pA3.update({ y: d.tsngdMoi3 }, true);
            // }

            // if (d.tsdlMoi0) {
            let TSTTVM = cS1.series[1]; // Tổng số đại lý mới
            let pB0 = TSTTVM.points[0];
            let pB1 = TSTTVM.points[1];
            let pB2 = TSTTVM.points[2];
            let pB3 = TSTTVM.points[3];
            pB0.update({ y: d.tsdlMoi0 }, true);
            pB1.update({ y: d.tsdlMoi1 }, true);
            pB2.update({ y: d.tsdlMoi2 }, true);
            pB3.update({ y: d.tsdlMoi3 }, true);
            // }

            // if (d.tshhMoi0) {
            let TSHHM = cS1.series[2]; // Tổng số hoa hồng mới
            let pC0 = TSHHM.points[0];
            let pC1 = TSHHM.points[1];
            let pC2 = TSHHM.points[2];
            let pC3 = TSHHM.points[3];
            pC0.update({ y: d.tshhMoi0 }, true);
            pC1.update({ y: d.tshhMoi1 }, true);
            pC2.update({ y: d.tshhMoi2 }, true);
            pC3.update({ y: d.tshhMoi3 }, true);
            // }

            //================================

            // if (d.tsngdTTMoi0) {
            let TSNGTTDM = cS2.series[0]; // Tổng số nhà giao dịch mới
            let nA0 = TSNGTTDM.points[0];
            let nA1 = TSNGTTDM.points[1];
            let nA2 = TSNGTTDM.points[2];
            let nA3 = TSNGTTDM.points[3];
            nA0.update({ y: d.tsngdTTMoi0 }, true);
            nA1.update({ y: d.tsngdTTMoi0 }, true);
            nA2.update({ y: d.tsngdTTMoi0 }, true);
            nA3.update({ y: d.tsngdTTMoi0 }, true);
            // }

            // if (d.tsdlTTMoi0) {
            let TSTTTTVM = cS2.series[1]; // Tổng số đại lý mới
            let nB0 = TSTTTTVM.points[0];
            let nB1 = TSTTTTVM.points[1];
            let nB2 = TSTTTTVM.points[2];
            let nB3 = TSTTTTVM.points[3];
            nB0.update({ y: d.tsdlTTMoi0 }, true);
            nB1.update({ y: d.tsdlTTMoi1 }, true);
            nB2.update({ y: d.tsdlTTMoi2 }, true);
            nB3.update({ y: d.tsdlTTMoi3 }, true);
            // }

            // if (d.tshhTTMoi0) {
            let TSTTHHM = cS2.series[2]; // Tổng số hoa hồng mới
            let nC0 = TSTTHHM.points[0];
            let nC1 = TSTTHHM.points[1];
            let nC2 = TSTTHHM.points[2];
            let nC3 = TSTTHHM.points[3];
            nC0.update({ y: d.tshhTTMoi0 }, true);
            nC1.update({ y: d.tshhTTMoi1 }, true);
            nC2.update({ y: d.tshhTTMoi2 }, true);
            nC3.update({ y: d.tshhTTMoi3 }, true);
            // }
          } catch { }

          //let cS3 = this.$refs.chartSplineThree.chart
        }
      });
    },

    chiTietLoiNhuanHoaHong() {
      this.isLoading = true;
      AuthenticationService.chiTietLoiNhuanHoaHong().then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.listChiTietKLGD = res.data.data;
          let c = (res.data.count / 10).toString();
          this.countPageHH = Number(c.split(".")[0]);
        }
      });
    },

    clickPageHH(page) {
      this.isLoading = true;
      AuthenticationService.chiTietLoiNhuanHoaHongPage(page).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.listChiTietKLGD = res.data.data;
        }
      });
    },

    clickPageHHVip(page) {
      this.isLoading = true;
      AuthenticationService.chiTietLoiNhuanHoaHongVipPage(page).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.listChiTietKLVip = res.data.data;
        }
      });
    },

    clickSearchDateTimeHoaHong() {
      this.isLoading = true;

      let start = this.formatDateHis(this.startDate);
      let end = this.formatDateHis(this.endDate);

      let t = this.selectedHoaHong.id;

      let obj = {
        t: t,
        s: start,
        e: end,
      };

      AuthenticationService.getSeachListChiTietHH(obj).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          if (t == 1) {
            this.listChiTietKLGD = res.data.data;
          } else {
            this.listChiTietKLVip = res.data.data;
          }
        }
      });
    },

    changeDateSelect(val) {
      // if (val == 30) {
      //   this.oneday = false;
      //   this.twoday = false;
      //   this.threeday = true;
      //   this.allday = false;
      // } else if (val == 7) {
      //   this.oneday = false;
      //   this.twoday = true;
      //   this.threeday = false;
      //   this.allday = false;
      // } else if (val == 1) {
      //   this.oneday = true;
      //   this.twoday = false;
      //   this.threeday = false;
      //   this.allday = false;
      // } else if (val == 0) {
      //   this.oneday = false;
      //   this.twoday = false;
      //   this.threeday = false;
      //   this.allday = true;
      // }

      // this.dateListDLSearch = val;
    },

    searchCapBac() {
      let id = this.selectedLevel.id;
      this.isLoading = true;

      let obj = {
        id: id,
        kc: this.dateListDLSearch,
      };

      AuthenticationService.getSeachListLvAgency(obj).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.datalistAgency = res.data.data;
        } else {
          this.datalistAgency = [];
        }
      });
    },

    searchName() {
      let n = this.EnterNameUser;
      this.isLoading = true;

      let obj = {
        name: n,
        kc: this.dateListDLSearch,
      };

      AuthenticationService.getSeachListNameAgency(obj).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.datalistAgency = res.data.data;
        } else {
          this.datalistAgency = [];
        }
      });
    },

    formatDateHis(value) {
      if (value) {
        return moment(String(value)).format("YYYY-MM-DD");
      }
    },

    formatDateAff(value) {
      if (value) {
        return moment(String(value)).format("MM-YYYY");
      }
    },

    formatDateAff2(value) {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },

    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
      });
      return formatter.format(value);
    },

    replaceAll(str, find, replace) {
      return Number(str.replace(new RegExp(find, "g"), replace));
    },

    isNumber(value) {
      return typeof value === "number" && isFinite(value);
    },
  },

  async created() {
    let token = localStorage.hasOwnProperty("tokenUser");
    if (token) {
      const res = await AuthenticationService.getInfoUser();
      if (res.data.success == 1) {
        let dt = res.data.data;
        getData.uid = dt.id;
        getData.email = dt.email;
        getData.profile_image = dt.profile_image;
        getData.displayName = dt.nick_name;
        getData.uidLive = dt.order[1].u_id;
        getData.uidDemo = dt.order[0].u_id;
        getData.am_usdt = dt.b;
        getData.is_expert = dt.is_expert;
        getData.vip = dt.vip;
        getData.vip_lv = dt.level_vip;
        getData.pen_commiss = dt.pending_commission;
        getData.ref = dt.ref;
        getData.upid = dt.upid;
        getData.c2fa = dt.fa2;
        getData.id_front = dt.id_front;
        (getData.id_back = dt.id_back), (getData.first_name = dt.first_name);
        getData.last_name = dt.last_name;
        getData.verify = dt.verify;
        getData.num_secu = dt.num_secury;
        getData.country = dt.c;
        getData.so_cmnd = dt.so_cmnd;

        getData.blLive = dt.order[1].balance;
        getData.blDemo = dt.order[0].balance;
        getData.balance = dt.balance;

        localStorage.setItem("INFO", JSON.stringify(dt));
      } else if (res.data.success == 4) {
        localStorage.removeItem("INFO");
        localStorage.removeItem("tokenUser");
        window.location.href = window.location.origin + "/login";
      }
    }

    // get f1 của mình
    this.f1ForUser();

    var currentDate = new Date();
    // var day = currentDate.getDate();
    // var month = currentDate.getMonth();
    // var year = currentDate.getFullYear();

    // var last_week = new Date(year, currentDate.getMonth(), day - 7);

    this.startDate = moment(currentDate).format("MM/DD/YYYY");

    // let end_date = new Date(year, month, day);

    this.endDate = moment(currentDate).format("MM/DD/YYYY");

    let Ref = getData.ref;
    this.linkDk = window.location.origin + "/register?r=" + Ref;
    this.codeGioiThieu = Ref;

    this.isVip = getData.vip;

    this.vip_lv = getData.vip_lv;

    this.pen_commiss = getData.pen_commiss;
  },
};
</script>

<style scoped>
#AffiliatePage>>>.vdp-datepicker input[disabled] {
  opacity: 1;
}

/*#AffiliatePage{
    margin: -2.2rem;
}*/

.affiliatePage .gobal,
.affiliatePage .commission,
.affiliatePage .qlht {
  display: none;
}

.contentWrapper .header {
  padding: 1rem;
  text-align: center;
}

.lsHH {
  display: none;
}

.contentWrapper .body {
  padding: 2rem 3rem;
  text-align: center;
}

.contentWrapper .body .imgShake {
  width: 211px;
  height: 205px;
  margin: 0 auto;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("~@/assets/images/sky/shake.svg");
}

.icon {
  width: 52px;
  height: 55px;
  margin-right: 1rem;
  background-size: cover;
  background-repeat: no-repeat;
}

.borderSubBanner {
  margin: auto;
  width: 90px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.19);
}

.icon.iconCommission {
  background-image: url("~@/assets/images/sky/affi/3.svg");
}

.icon.iconSign {
  background-image: url("~@/assets/images/sky/affi/2.svg");
}

.icon.iconInvite {
  background-image: url("~@/assets/images/sky/affi/1.svg");
}

.affiliatePage .subBanner {
  color: #fff;
  height: 120px;
  background-color: #02142b !important;
}

.affiliatePage .banner .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.affiliatePage .banner {
  background-image: url("~@/assets/images/sky/bitono_affiliate_bg.png");
}

.affiliatePage .banner {
  position: relative;
  width: 100%;
  min-height: calc(100vh - 200px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}

.color-yellow {
  color: #389a11;
}

.table-bordered thead th {
  color: hsla(0, 0%, 100%, 0.5);
  font-weight: 400;
  border-bottom-width: 1px;
  border-color: unset;
}

.btnTime.active {
  background: #389a11;
  ;
  color: #fff;
}

.btnTime {
  padding: 5px 11px;
  margin-bottom: 5px;
  border-radius: 5px;
  border: 1px solid #D4B600;
  color: #389a11;
  background-color: transparent;
  white-space: nowrap;
}

.textTime {
  color: #389a11;
}

.v-select .vs__dropdown-toggle {
  background: transparent;
}

.btnSearchType {
  background-color: #414141;
  color: #fff;
  border: 1px solid #D4B600;
  border-radius: 10px;
  min-width: 162px;
  padding: 9px 0;
}

.filterDiv .colFirst:before {
  content: "";
  background-color: #41416f;
  width: 1px;
  height: 45px;
  position: absolute;
  z-index: 898888;
  right: -25px;
  top: 22px;
  opacity: 0.6;
}

.filterDiv {
  background-color: #13263e;
  padding: 37px 42px;
  margin-bottom: 33px;
}

.tableBackground .table-dark td:first-child:after {
  width: calc(100% - 1.5rem);
  left: 1.5rem;
}

.tableBackground .table-dark td:last-child:after {
  width: calc(100% - 1.5rem);
  right: 1.5rem;
  left: auto;
}

.tableBackground .table-dark td,
.tableBackground .table-dark th {
  position: relative;
  border: none;
  padding: 0.75rem 1.5rem;
}

.tableBackground .table-dark td:after,
.tableBackground .table-dark th:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* border-bottom: 1px solid #389a11; */
}

.tableBackground .table-dark thead th {
  font-weight: 400;
  font-size: 0.75rem;
  color: #389a11;
}

.tableBackground {
  border-radius: 20px;
  /* border: 1px solid #389a11; */
  height: 100%;
  overflow: hidden;
}

.wrap-chart .chartHight {
  height: 400px;
}

.wrap-chart .chart-instance {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.wrap-chart-below {
  border: none;
}

.c-question,
.c-mail {
  stroke: #D4B600;
}

.elipText {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.getIntouch .cardBody {
  padding: 1.25rem 1.25rem 1rem;
}

.getIntouch .cardHeader {
  padding: 1rem 1.25rem;
}

.getIntouch {
  border-radius: 20px;
  height: 100%;
}

.networkVolumeStats .cardFooter p {
  line-height: 45px;
  font-size: 18px;
}

.networkVolumeStats .cardFooter {
  background: #389a11;
  ;
  color: #000;
}

.networkVolumeStats .cardFooter {
  padding: 0 1.25rem;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.networkVolumeStats .cardBody p {
  line-height: 40px;
}

.networkVolumeStats .cardBody .dataContent {
  margin-right: -10px;
  margin-left: -10px;
  color: #fff;
}

.networkVolumeStats .texthead {
  color: #389a11;
}

.networkVolumeStats .cardBody .head p {
  line-height: 26px;
}

.networkVolumeStats .cardBody .border-bottom,
.networkVolumeStats .cardBody .border-top {
  border-color: #389a11 !important;
}

.networkVolumeStats .cardBody {
  padding: 0 1.25rem 1rem;
  height: 205px;
  overflow: hidden;
}

.networkVolumeStats .cardHeader {
  padding: 1rem 1.25rem;
}

.networkVolumeStats {
  background-color: #000;
  border-radius: 20px;
  height: 100%;
  position: relative;
  padding-bottom: 45px;
}

.wrap-chart {
  border-radius: 20px;
}

.wrap-chart {
  z-index: 2;
  border-radius: 10px;
  overflow: hidden;
  -webkit-box-shadow: none;
  box-shadow: none;
  position: relative;
  /* border: 1px solid #389a11; */
}

.wrap-chart .header {
  padding: 15px;
  border-bottom: 1px solid #D4B600;
}

.groupButton .leftControl {
  width: 90%;
}

.groupButton .rightControl {
  width: auto;
}

.groupButton .form-control {
  color: #333;
  font-size: 0.875rem;
  background-color: #fafafa;
  border: 1px solid;
  border-radius: 4px;
  border-color: #389a11;
  height: 40px;
  line-height: 40px;
}

.button.primary,
.button.primary:hover {
  background: #389a11 !important;
  color: #fff !important;
}

.groupButton .btn {
  line-height: 37px;
  height: 100%;
  border-radius: 0 3px 3px 0;
  border: none;
  width: 90px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  white-space: nowrap;
}

.colorSuccess {
  color: #31baa0;
}

.colorDanger {
  color: #f46273;
}

.colorPrimary {
  color: #389a11;
}

.affiliatePage .affiliateInfo {
  padding: 1.25rem;
  border-radius: 18px;
  height: 100%;
  overflow: hidden;
  border: 1px solid;
  border-color: #389a11;
}

.borderBottom {
  border-color: #389a11;
}

.white-50 {
  color: hsla(0, 0%, 100%, 0.5) !important;
}

.colorSecondary {
  color: #8b8d96 !important;
}

.boxBasic .heading .textRank .q {
  vertical-align: middle;
  display: inline-block;
}

.bgPrimary-hover:hover,
.bgPrimary {
  background-color: #000 !important;
}

.boxBasic .heading .textRank {
  font-size: 17px;
  color: #389a11;
  border: 1px solid #D4B600;
  border-radius: 14px;
  padding: 1rem 1rem 1rem 80px;
  margin-bottom: 0;
  min-width: 220px;
  width: 100%;
  max-width: 250px;
}

.boxBasic .heading .textRank .text {
  vertical-align: middle;
}

.rank-text {
  margin-left: -62px;
  width: auto !important;
}

.bgSecondary {
  background-color: #02142b !important;
}

.borderSecondary {
  border: 1px solid;
  border-color: #389a11;
}

.boxRank {
  margin: 0 auto;
}

.borderBtSecondary {
  border-bottom: 1px solid;
  border-color: #389a11;
}

.boxBasic .heading {
  position: relative;
  height: 100px;
  text-align: center;
}

.boxBasic {
  width: 100%;
  padding: 1.25rem;
  border-radius: 20px;
}

.iconRank {
  position: relative;
  height: 100px;
  width: 100px;
  z-index: 1;
}

.iconRank.rank8 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank8.png");
}

.iconRank.rank7 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank7.png");
}

.iconRank.rank6 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank6.png");
}

.iconRank.rank5 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank5.png");
}

.iconRank.rank4 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank4.png");
}

.iconRank.rank3 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank3.png");
}

.iconRank.rank2 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank2.png");
}

.iconRank.rank1 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("~@/assets/images/sky/rank/rank1.png");
}

.dateRange {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 300px;
}

.dateRange>span {
  text-align: center;
}

.dateRange>span {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 40px;
  flex: 0 0 40px;
  line-height: 40px;
  color: #fff;
}

@media only screen and (max-width: 646px) {
  .btnSearchType {
    width: 100%;
    margin-bottom: 5px;
  }

  .filterDiv .colFirst:before {
    right: 0;
    opacity: 0;
  }

  .tab-margin{
  margin-top: 60px;
}
}
</style>

<style>
.TnD input {
  color: #000;
  background: #fff;
}

.table td,
.table th {
  padding: 0.75rem;
  vertical-align: top;
  /* border-top: 1px solid #dee2e6; */
}

.table-bordered,
.table-bordered td,
.table-bordered th {
  /* border: 1px solid #dee2e6; */
  text-align: center;
}

.vs--single .vs__selected {
  position: absolute;
  z-index: 111;
}

.vs__dropdown-toggle input {
  background: transparent;
}

.vdp-datepicker input {
  padding: 11px !important;
}

.v-select .vs__dropdown-toggle {
  border: 0;
  border-bottom: 1px solid #fff;
  border-radius: 5px;
}

.vs__dropdown-option--highlight {
  background: #363b56;
}

.con-vs-popup .vs-popup {
  width: 800px;
}

.vs-popup--content {
  padding: 0;
  margin: 0;
  width: calc(100%);
}

.colorBlue {
  color: #389a11;
}

.content .inputGroup input {
  background: #fff;
  color: #545454;
}

.dateRange input {
  background: transparent;
  border-bottom: 1px solid #fff !important;
}
</style>
