<template>
  <div id="copy-trade">
    <div class="vg-dard tab-margin">
      <vs-tabs alignment="fixed" color="#e3b602" v-model="tab">
        <vs-tab :label="this.$t('CopyTrade_Tab_Trade')" class="transaction">
          <vs-col vs-w="4" vs-sm="12">
            <div class="sodu">
              <h4>{{ $t('CopyTrade_Amount') || "Amount" }}</h4>
              <div class="flex">
                <span>$ {{ formatPrice(getData.blLive, 0, 2) }}</span>
                <div class="icon">
                  <img src="@/assets/icon/bank.svg" alt="Icon Bank" />
                </div>
              </div>
            </div>
          </vs-col>

          <vs-col vs-w="4" vs-sm="12">
            <div class="win-lose">
              <h4>{{ $t('Win') || "Win" }} / {{ $t('Lose') || "Lose" }}</h4>
              <div class="flex">
                <div class="wl">
                  <span class="wl-1">{{ winTotal }}W</span>
                  <span class="wl-2">/</span>
                  <span class="wl-3">{{ loseTotal }}L</span>
                </div>
                <div class="icon" style="background-color: #f57c00">
                  <img src="@/assets/icon/win.svg" alt="Icon Win" />
                </div>
              </div>
            </div>
          </vs-col>
          <vs-col vs-w="4" vs-sm="12">
            <div class="sodu">
              <h4>{{ $t('TodayProfit') || "Today Profit" }}</h4>
              <div class="flex"  >
                <span style="font-style: normal" :style="{
                  color: moneyAllToday >= 0 ? '#4caf50' : 'rgb(245, 86, 86)',
                  'font-weight': 'bold'
                }">$ {{ formatPrice(moneyAllToday, 0, 2) }}</span>
                <div class="icon" style="background-color: rgb(56, 142, 60)">
                  <img src="@/assets/icon/dollar.svg" alt="Icon Dollar" />
                </div>
              </div>
            </div>
          </vs-col>

          <vs-col vs-w="3" vs-sm="12">
            <div class="sp-only" style="height: 5px"></div>
            <div class="info">
              <h4>{{ $t('CopyTrade_Info') || "Infomation" }}</h4>
              <div class="body-card">
                <li>
                  <div class="icon">
                    <img src="@/assets/icon/layer.svg" alt="Icon Layer" />
                  </div>
                  <div class="text">
                    <span>{{ $t('CopyTrade_Status') || "Status" }}</span><br />
                    <span style="color: #4caf50; " v-if="isRun || isRunAi">{{ $t('CopyTrade_Status_On') || "On" }}</span>
                    <span style="color: #f55656; " v-else>{{ $t('CopyTrade_Status_Off') || "Off" }}</span>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <img src="@/assets/icon/layer.svg" alt="Icon Layer" />
                  </div>
                  <div class="text">
                    <span>{{ $t('CopyTrade_Allow_Expert') || "Follow Expert" }}</span><br />
                    <span style="color: #4caf50; " v-if="rateExperts">{{ $t('CopyTrade_Status_On') || "On" }}</span>
                    <span style="color: #f55656; " v-else>{{ $t('CopyTrade_Status_Off') || "Off" }}</span>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <img src="@/assets/icon/account.svg" alt="Icon Account" />
                  </div>
                  <div class="text">
                    <span>{{ $t('CopyTrade_Trade_Account') || "Trade Account" }}</span><br />
                    <span style="color: #4caf50; " v-if="account_type">{{ $t('CopyTrade_Trade_AccountLive') || "Live Account" }}</span>
                    <span style="color: #f55656; " v-else>{{ $t('CopyTrade_Trade_AccountDemo') || "Demo Account" }}</span>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <img src="@/assets/icon/user.svg" alt="Icon User" />
                  </div>
                  <div class="text">
                    <span>{{ $t('CopyTrade_Follwed_Expert') || "Your's Followed Expert" }}</span><br />
                    <span style="color: #ea00f9; ">{{ this.expert || 'N/A' }}</span>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <img src="@/assets/icon/dollar.svg" alt="Icon Dollar" />
                  </div>
                  <div class="text">
                    <span>{{ $t('CopyTrade_Follwed_Amount') || "Amount per command" }}</span><br />
                    <span style="color: #ea00f9; ">${{ amount || 0 }}</span>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <img src="@/assets/icon/tick.svg" alt="Icon Tick" />
                  </div>
                  <div class="text">
                    <span>{{ $t('CopyTrade_Day_Win') || "Day win amount" }}</span><br />
                    <span style="color: #4caf50; ">{{
                      win_amount ? "$" + win_amount : $t('CopyTrade_Day_NotUse')
                    }}</span>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <img src="@/assets/icon/close.svg" alt="Icon Close" />
                  </div>
                  <div class="text">
                    <span>{{ $t('CopyTrade_Day_Lose') || "Day lose amount" }}</span><br />
                    <span style="color: #f55656; ">{{
                      lose_amount ? "$" + lose_amount : $t('CopyTrade_Day_NotUse')
                    }}</span>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <img src="@/assets/icon/dollar.svg" alt="Icon Dollar" />
                  </div>
                  <div class="text">
                    <span>{{ $t('CopyTrade_Amount_Today') || "Amount per command" }}</span><br />
                    <span style="color: #ea00f9; ">${{ moneyToday || 0 }}</span>
                  </div>
                </li>
              </div>
              <div style="margin-top: 10px;text-align: center;padding-bottom: 10px;">
                    <vs-button color="warning" type="border" style="width: 150px;" @click="resetMoneyPerDay">{{ $t('CopyTrade_Setting_ResetMoney') || "Save" }}</vs-button>
                  </div>
            </div>
          </vs-col>

          <vs-col vs-w="9" vs-sm="12">
            <div class="sp-only" style="height: 10px"></div>
            <div class="calendar">
              <div class="body-card">
                <div class="selection" style="display: inline-block;">
                  <vs-select  v-model="statistic">
                    <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="item, index in optionDatetime" />
                  </vs-select>
                </div>
                <span class="total">
                  <span style="font-weight: bold;cursor: pointer;" @click="printProfileToday">
                    {{ formatPrice(totalProfit, 0, 2) }} $</span>
                </span>
                <div style="margin-top: 10px">
                  <vs-row>
                    <vs-col vs-w="2" vs-sm="3" vs-xs="4" v-for="(e, index) in statisticData" :key="index">
                      <div class="item">{{ index + 1 }}
                        <p style="color: #4caf50;" v-if="e > 0">{{ formatPrice(e, 0, 2) }} $</p>
                        <p style="color: rgb(245, 86, 86);" v-if="e < 0">{{ formatPrice(e, 0, 2) }} $</p>
                      </div>
                    </vs-col>
                  </vs-row>
                </div>
              </div>
            </div>
          </vs-col>
        </vs-tab>
        <vs-tab :label="this.$t('CopyTrade_TopExpert_Title')">
          <div style="width: 100%">
            <div class="latest-winner-list" :class="{ 'ld-loading': tableLoading }">
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

              <vs-table :data="topExperts" :hoverFlat="true" max-items="20" pagination >
                <template slot="thead">
                  <vs-th> {{ $t('CopyTrade_TopExpert_No') || "No" }} </vs-th>
                  <vs-th> {{ $t('CopyTrade_TopExpert_Name') || "Name" }} </vs-th>
                  <vs-th> {{ $t('CopyTrade_TopExpert_Win') || "Win" }} </vs-th>
                  <vs-th> {{ $t('CopyTrade_TopExpert_Lose') || "Lose" }} </vs-th>
                  <vs-th> {{ $t('CopyTrade_TopExpert_WinRate') || "Win Rate" }}</vs-th>
                  <vs-th> {{ $t('CopyTrade_TopExpert_FollowCount') || "Followed users" }} </vs-th>
                  <vs-th> {{ $t('CopyTrade_TopExpert_FollowAmount') || "Followed amount" }} </vs-th>
                  
                </template>

                <template slot-scope="{ data }">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td>
                      {{ indextr + 1 }}
                    </vs-td>

                    <vs-td>
                      {{ tr.nick_name }}
                    </vs-td>

                    <vs-td>
                      {{ tr.win_count }}
                    </vs-td>

                    <vs-td>
                      {{ tr.lose_count }}
                    </vs-td>
                    <vs-td>
                      {{ tr.percentage }}%
                    </vs-td>

                    <vs-td>
                      {{ tr.follow }}
                    </vs-td>

                    <vs-td>
                      {{ tr.balance }}$
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
        </vs-tab>
        <vs-tab :label="this.$t('CopyTrade_History_Title')">
          <div style="width: 100%">
            <div class="latest-winner-list" :class="{ 'ld-loading': tableLoading }">
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

              <vs-table :data="tableDataHis" :hoverFlat="true" max-items="10" pagination >
                <template slot="thead">
                  <vs-th> OrderID </vs-th>
                  <vs-th> {{ $t('CopyTrade_History_StartTime') || "Start time" }} </vs-th>
                  <vs-th> {{ $t('CopyTrade_History_Expert') || "Expert" }} </vs-th>
                  <vs-th> {{ $t('CopyTrade_History_Selected') || "Type" }} </vs-th>
                  <vs-th> {{ $t('CopyTrade_History_OpenedPrice') || "Opend Price" }}</vs-th>
                  <vs-th> {{ $t('CopyTrade_History_ClosedPrice') || "Closed Price" }}</vs-th>
                  <vs-th> {{ $t('CopyTrade_History_Amount') || "Bet Amount" }} </vs-th>
                  <vs-th> {{ $t('CopyTrade_History_Result') || "Result" }} </vs-th>
                </template>

                <template slot-scope="{ data }">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td>
                      {{ tr.order_id }}
                    </vs-td>

                    <vs-td>
                      {{ formatDate(tr.created_at) }}
                    </vs-td>

                    <vs-td>
                      {{ tr.experts }}
                    </vs-td>

                    <vs-td>
                      {{ tr.trend == "buy" ? $t('Buy') : $t('Sell') }}
                    </vs-td>
                    <vs-td>
                      {{ formatPrice(tr.open, 2, 2) }}
                    </vs-td>

                    <vs-td>
                      {{ formatPrice(tr.close, 2, 2) }}
                    </vs-td>

                    <vs-td>
                      {{ formatPrice(tr.value, 2, 2) }}
                    </vs-td>

                    <vs-td>
                      {{ formatPrice(tr.sum, 2, 2) }}
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
        </vs-tab>
        <vs-tab v-if="showSettings" :label="this.$t('CopyTrade_Setting_TabTitle')">
          <div style="width: 100%" class="setting">
            <h3 class="setting-title">{{ $t('CopyTrade_Setting_Title') || "FOLLOW EXPERT" }}</h3>
            <vs-row>
              <vs-col vs-w="6" vs-sm="12">
                <div class="setting-warp">
                  <div class="setting-input">
                    <span>{{ $t('CopyTrade_Setting_ExpertName') || "Expert Name" }}</span>
                    <v-select v-model="expert" :options="optionsExperts" :reduce="(e) => e.nick_name" label="nick_name"
                      class="select-setting" />
                  </div>
                  <div class="setting-input" style="margin-top: 25px">
                    <span>{{ $t('CopyTrade_Setting_Account') || "Account Type" }}</span>
                    <v-select v-model="account_type" :options="accountOptions" :reduce="(e) => e.value" label="text"
                      class="select-setting" />
                  </div>
                  <div class="setting-input" style="margin-top: 25px">
                    <span>{{ $t('CopyTrade_Setting_BetAmount') || "Amount bet" }}</span>
                    <label>
                      <div class="input-container">
                        <img src="@/assets/icon/dollar.svg" alt="Icon Dollar" />
                        <input type="text" v-model="amount" />
                      </div>
                    </label>
                  </div>
                  <div class="setting-input" style="margin-top: 25px">
                    <span>{{ $t('CopyTrade_Setting_DayWin') || "Day Win Amount" }}</span>
                    <label>
                      <div class="input-container">
                        <img src="@/assets/icon/dollar.svg" alt="Icon Dollar" />
                        <input type="text" v-model="win_amount" />
                      </div>
                    </label>
                  </div>
                  <div class="setting-input" style="margin-top: 25px">
                    <span>{{ $t('CopyTrade_Setting_DayLose') || "Day Lose Amount" }}</span>
                    <label>
                      <div class="input-container">
                        <img src="@/assets/icon/dollar.svg" alt="Icon Dollar" />
                        <input type="text" v-model="lose_amount" />
                      </div>
                    </label>
                  </div>
                  <div class="switch-wrap">
                    <vs-switch color="#389a11" vs-icon-on="check_circle_outline" vs-icon-off="block" v-model="rateExperts"
                      class="custom-switch">
                      <span slot="on">{{ $t('CopyTrade_Setitng_PercenOn') || "On" }}</span>
                      <span slot="off">{{ $t('CopyTrade_Setting_PercenOff') || "Off" }}</span>
                    </vs-switch>
                    <span class="text">{{ $t('CopyTrade_Setting_ActivePercen') || "Bet % with experted" }}</span>
                  </div>
                  <div class="switch-wrap" style="margin-top: 20px">
                    <vs-switch color="#389a11" vs-icon-on="check_circle_outline" vs-icon-off="block" v-model="isRun"
                      class="custom-switch">
                      <span slot="on">{{ $t('CopyTrade_Setting_StatusOn') || "Actived" }} </span>
                      <span slot="off">{{ $t('CopyTrade_Setting_StatusOff') || "Not Actived" }}</span>
                    </vs-switch>
                    <span class="text">{{ $t('CopyTrade_Setting_Status') || "Status" }}</span>
                  </div>
                  <div style="margin-top: 30px">
                    <vs-button color="warning" type="border" style="width: 100%" @click="saveExpertSettings">{{ $t('CopyTrade_Setting_Save') || "Save" }}</vs-button>
                  </div>
                  <div style="margin-top: 10px">
                    <vs-button @click="logOut" color="#c2c6dc" type="border" style="width: 100%">{{ $t('CopyTrade_Setting_Logout') || "Logout to save" }}</vs-button>
                  </div>
                </div>
              </vs-col>
              <vs-col vs-w="6" vs-sm="12">
                <div class="content-1">
                  <div class="content-1-flex">
                    <img src="@/assets/icon/tick_1.svg" alt="Icon Tick 1" style="height: 21px" />
                    <span>{{ $t('CopyTrade_Setting_Help1') }}</span>
                  </div>
                  <div class="content-1-flex">
                    <img src="@/assets/icon/tick_1.svg" alt="Icon Tick 1" style="height: 21px" />
                    <span>{{ $t('CopyTrade_Setting_Help2')  }}</span>
                  </div>
                  <div class="content-1-flex" style="align-items: flex-start">
                    <img src="@/assets/icon/tick_1.svg" alt="Icon Tick 1" style="height: 21px" />
                    <span v-html="this.$t('CopyTrade_Setting_Help3')"></span>
                  </div>
                  <div class="content-1-flex" style="align-items: flex-start">
                    <img src="@/assets/icon/tick_1.svg" alt="Icon Tick 1" style="height: 21px" />
                    <span v-html="this.$t('CopyTrade_Setting_Help4')"></span>
                  </div>
                </div>

                <div class="content-1">
                  <div class="content-1-flex">
                    <img src="@/assets/icon/tick_1.svg" alt="Icon Tick 1" style="height: 21px" />
                    <span v-html="this.$t('CopyTrade_Setting_Attention')"></span>
                  </div>
                </div>
              </vs-col>
            </vs-row>
          </div>
        </vs-tab>
        <vs-tab v-if="showChild" :label="this.$t('CopyTrade_Follow_Title')">
          <div style="width: 100%">
            <div class="latest-winner-list" :class="{ 'ld-loading': tableLoading }">
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

              <vs-table :data="followedUsers" :hoverFlat="true" max-items="30" pagination >
                <template slot="thead">
                  <vs-th> {{ $t('CopyTrade_Follow_NickName')}} </vs-th>
                  <vs-th> {{ $t('CopyTrade_Follow_Amount')}} </vs-th>
                  <vs-th> {{ $t('CopyTrade_Follow_Type') }} </vs-th>
                  <vs-th> {{ $t('CopyTrade_Follow_Date')}}</vs-th>
                  <vs-th> {{ $t('CopyTrade_Follow_Active')}}</vs-th>
                  <vs-th> {{ $t('CopyTrade_Follow_Action') }}</vs-th>
                </template>

                <template slot-scope="{ data }">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td>
                      {{ tr.nick_name }}
                    </vs-td>
                    <vs-td>
                      $
                      {{ formatPrice(tr.amount) }}
                      {{ tr.rate==1  ? "(%)":""}}
                    </vs-td>
                    <vs-td>
                     {{ tr.acc_type == 1?$t('CopyTrade_Setting_LiveAcount'):$t('CopyTrade_Setting_DemoAccount') }}
                    </vs-td>
                    <vs-td>
                      {{ formatDate(tr.created_at) }}
                    </vs-td>
                    <vs-td>
                      <span style="color: #4caf50; " v-if="tr.is_active && tr.run">{{ $t('CopyTrade_Status_On') || "On" }}</span>
                      <span style="color: #f55656; " v-else>{{ $t('CopyTrade_Status_Off') || "Off" }}</span>
                    </vs-td>
                    <vs-td>
                      <vs-button v-if="tr.is_active && tr.run" size="small"
                        style="background: #389a11 !important; color: #fff !important"
                        type="filled" @click="confirmDeleteRecord(tr)" >{{ $t('CopyTrade_Follow_Cancel') }}</vs-button>
                        <vs-button v-else :active="false"  size="small"
                        style="background: #102e05 !important; color: #fff !important; cursor: default;"
                        type="filled" >{{ $t('CopyTrade_Follow_Cancel') }}</vs-button>
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
        </vs-tab>
      </vs-tabs>

    </div>
    <vs-popup  title="Profit" :active.sync="popupPrint">
      <div class="print-proffit" id="print-profit">
        <img :src="require('@/assets/images/bangbot.png')" id="imgBg" style="display: none;"   />
        <img id="imageToday"  />
       
      </div>
     
    </vs-popup>
  </div>
</template>

<script>
import Api from "@/services/CopyTrade";
import getData from "@/pages/trade/navbar/components/data.json";
import moment from "moment";
import vSelect from 'vue-select'
import domtoimage from 'dom-to-image';
import AuthenticationService from "@/services/AuthenticationService";

export default {
  components: {
    vSelect
  },

  data() {
    return {
      getData,
      tableDataHis: [],
      colorxChangePass: "#def1d1",
      popupActiveChangePass: false,
      popupPrint:false,
      optionDatetime: [
      ],
      optionsExperts: [
      ],
      followedUsers:[

      ],
      topExperts: [],
      accountOptions: [
        { text: "Live Account", value: 1 },
        { text: "Demo Account", value: 0 },
      ],
      expert: "",
      bot: "BotAI6",
      switchRate: false,
      switchRun: false,
      amount: 10,
      win_amount: 50,
      lose_amount: 50,
      account_type: 0,
      rateExperts: 0,
      isRun: 0,
      isRunAi: 0,
      moblie: false,
      hisTab: 0,
      tab: 0,
      settingTab: 0,
      tableLoading: false,
      moneyToday: 0,
      winTotal: 0,
      loseTotal: 0,
      statistic: 0,
      statisticData: [],
      percentToday:0,
      showImage:true,
      showSettings:true,
      showChild:false,
      cancelAccount:{},
      winAmount:0,
      loseAmount:0,
      moneyAllToday:0,   
    };
  },
  computed: {
    statisticText() {
      const current = new Date();
      if (this.statistic == 0) {
        return this.$t('CopyTrade_Setting_Month') + (current.getMonth() + 1);
      }
      return this.$t('CopyTrade_Setting_Year') + current.getFullYear();
    },

    
    totalProfit() {
      return this.statisticData.reduce((prev, curr) => prev + +curr, 0);
    },
  },

  methods: {
    confirmDeleteRecord(tr) {
      this.cancelAccount = tr;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: `Confirm Cancel`,
        text: `You are about to cancel follow account "${tr.nick_name}"`,
        acceptText: "Accept",
        accept: this.deleteRecord,
      })
    },
    deleteRecord(tr){
     
      const data = {
        email: this.cancelAccount.email
      };

      Api.removeFollow(data).then((res) => {
        if (res.data.success == 1) {
          this.isRunAi = false;
          this.cancelAccount.is_active = 0;
          this.cancelAccount = {};
          this.$vs.notify({
          color:'danger',
          title:'Cancel follow account',
          text:'The selected account was successfully cancel'
        })
        }
      });
    },
    textToBitmap(){
      const canvas = window.document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = 720;
      canvas.height = 843;
      
      const img = document.getElementById("imgBg");
      ctx.drawImage(img, 0, 0)
      this.showImage = false;

      ctx.font = `bold 36px Arial`;
      ctx.textBaseline = "top";
      ctx.fillStyle ="white";
      ctx.fillText("BTC / USDT", 45, 200);

      ctx.font = `bold 36px Arial`;
      ctx.textBaseline = "top";
      ctx.fillStyle ="white";
      ctx.fillText("Total Profit", 45, 250);

      let totalProfileSelected = this.statisticData.reduce((prev, curr) => prev + +curr, 0);
      let sodu = this.getData.blLive;

      //console.log("Current",totalProfileSelected);
      
      let startSodu = parseFloat(sodu) - parseFloat(totalProfileSelected);

      //console.log("After",startSodu);

      let percen = parseFloat(totalProfileSelected) * 100 /startSodu;
      let percenDisplay = this.formatPrice(percen,2);

      if(percen>0){
        percenDisplay = "+"+percenDisplay;
      }
      
      ctx.font = `bold 60px Arial`;
      ctx.textBaseline = "top";
      ctx.fillStyle ="rgb(76, 175, 80)";
      ctx.fillText(percenDisplay+"%", 45, 310);

      let expertName = this.expert;
      if(expertName===""){
        expertName="N/A";
      }

      ctx.font = `bold 24px Arial`;
      ctx.textBaseline = "top";
      ctx.fillStyle ="white";
      ctx.fillText("Copy Trade: "+expertName, 45, 680);

      ctx.font = `bold 24px Arial`;
      ctx.textBaseline = "top";
      ctx.fillStyle ="white";
      ctx.fillText("Ref Id: "+this.getData.ref, 500, 680);

      ctx.font = `bold 24px Arial`;
      ctx.textBaseline = "top";
      ctx.fillStyle ="white";
      ctx.fillText(this.getData.displayName, 45, 730);

      const today = new Date();
      const date = today.getFullYear() + '-' + ("0"+(today.getMonth()+1)).slice(-2) + '-' + ("0"+today.getDate()).slice(-2);

      
      const time = ("0"+today.getHours()).slice(-2) + ":" + ("0"+today.getMinutes()).slice(-2) + ":" + ("0"+today.getSeconds()).slice(-2);
      const timestamp = date + ' ' + time;
   
      ctx.font = `bold 24px Arial`;
      ctx.textBaseline = "top";
      ctx.fillStyle ="white";
      ctx.fillText(timestamp, 45, 780);

      return new Promise((resolve) => {
      canvas.toBlob(resolve);
      });

    },
    async printProfileToday(){
      const imageBlob = await this.textToBitmap();
      const imageUrl = URL.createObjectURL(imageBlob);

      const image = document.getElementById("imageToday");
      image.src=imageUrl;

      this.popupPrint = true;
    },
    staticYear() {
      const current = new Date();
      return current.getFullYear();
    },

    staticMonth() {
      const current = new Date();
      return (current.getMonth() + 1);
    },
    getInfoLogin() {
      AuthenticationService.getInfoUser().then((res) => {
        if (res.data.success == 1) {
          let dt = res.data.data;

          getData.uid = dt.id;
          getData.email = dt.email;
          getData.profile_image = dt.profile_image;
          getData.displayName = dt.nick_name;
          getData.uidLive = dt.order[1].u_id;
          getData.uidDemo = (dt.order[0] || {}).u_id || 0;
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
          getData.blDemo = (dt.order[0] || {}).balance || 0;
          getData.balance = dt.balance;

          this.showSettings = getData.is_expert === 0;
          this.showChild = getData.is_expert === 1;
          //localStorage.setItem("INFO", JSON.stringify(dt));
          //localStorage.removeItem('isLog')

          //this.$router.push("/trading").catch(() => {});
        }
      });
    },
    fetchAnalytics() {

      Api.getConfig().then((res) => {
        if (res.data.success == 1) {
          const resData = res.data.data;
          this.amount = Number(resData.amount || 10);
          this.win_amount = Number(resData.day_win || 50);
          this.lose_amount = Number(resData.day_lose || 50);
          this.expert = resData.experts || "";
          this.isRun = resData.run || 0;
          this.isRunAi = resData.ai || 0;
          this.rateExperts = resData.rate || 0;
          this.account_type = resData.acc_type || 0;
          this.settingTab = this.isRunAi;
          this.moneyToday = resData.money_per_day || 0;
          this.winTotal = resData.winTotal;
          this.loseTotal = resData.loseTotal;

          this.winAmount = resData.win_amount;
          this.loseAmount = resData.lose_amount;
          this.moneyAllToday = Number(resData.win_amount) - (Number(resData.lose_amount)*-1);

          //console.log(this.getData);

          this.percentToday = parseFloat(this.moneyToday) / ( parseFloat(this.getData.blLive) + parseFloat(this.moneyToday) )
          
         
        }
      });

      Api.getExpertsList().then((res) => {
        if (res.data.success == 1) {
          this.optionsExperts = res.data.data;
        }
      });

      
      Api.getFollowersList().then((res) => {
        if (res.data.success == 1) {
          this.followedUsers = res.data.data;
        }
      });

      Api.getTopExpertsList().then((res) => {
        if (res.data.success == 1) {
          res.data.data.forEach(element => {
            let total = element.win_count + element.lose_count;
            let percentage = 0;

            if (total != 0) {
              percentage = element.win_count * 100 / total;
            }
            element.percentage = percentage.toFixed(2);

            let balance = parseFloat(element.balance);

            element.balance = balance.toFixed(2);
          });

          this.topExperts = res.data.data;
        }
      });
      Api.getRevenue().then((res) => {
        if (res.data.success == 1) {
          this.statisticData = res.data.data;
        }
      });
    },
    logOut() {
      Api.logout().then((res) => {
        localStorage.removeItem("tokenUser");
        localStorage.removeItem("INFO");
        // xóa notice = 0
        getData.Notify = 0;
        localStorage.removeItem("stateOpen");
        // This is just for demo Purpose. If user clicks on logout -> redirect
        //this.$router.push('/login').catch(() => {})
        window.location.href = window.location.origin + "/login";
      });
    },
    saveExpertSettings() {
      const data = {
        amount: this.amount,
        cLaiDay: this.win_amount,
        cLoDay: this.lose_amount,
        experts: this.expert,
        ai: 0,
        rate: Number(this.rateExperts),
        run: Number(this.isRun),
        acc_type: Number(this.account_type),
      };
      Api.saveConfig(data).then((res) => {
        if (res.data.success == 1) {
          this.isRunAi = false;
          // if (data.run) {
          //   this.logOut();
          // }
          return this.$vs.notify({
            position: "top-right",
            text: this.$t('CopyTrade_Setting_SaveSuccesFull'),
            // iconPack: 'feather',
            icon: "check_box",
            color: "success",
          });
        }
      });
    },

    saveAiSettings() {
      const data = {
        amount: this.amount,
        cLaiDay: this.win_amount,
        cLoDay: this.lose_amount,
        experts: this.expert,
        ai: Number(this.isRunAi),
        acc_type: Number(this.account_type),
      };

      Api.saveAiConfig(data).then((res) => {
        if (res.data.success == 1) {
          this.isRun = false;
          // if (data.ai) {
          //   this.logOut();
          // }
          return this.$vs.notify({
            position: "top-right",
            text: this.$t('CopyTrade_Setting_SaveSuccesFull'),
            // iconPack: 'feather',
            icon: "check_box",
            color: "success",
          });
        }
      });
    },
    resetMoneyPerDay(){
      Api.resetMoneyPerDay().then((res) => {
        if (res.data.success == 1) {
          this.moneyToday = 0;
          return this.$vs.notify({
            position: "top-right",
            text: this.$t('CopyTrade_Setting_SaveSuccesFull'),
            icon: "check_box",
            color: "success",
          });
        }
      });
    },
    saveProfitImage(){
      var node = document.getElementById('print-profit');
      domtoimage.toJpeg(node, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'profit.jpeg';
        link.href = dataUrl;
        link.click();
    });
    },
    resizeWindow() {
      if (window.innerWidth >= 900) {
        this.moblie = false;
      } else {
        this.moblie = true;
      }
    },
    getTradeHistory() {
      this.tableLoading = true;
      Api.getProfitList()
        .then((res) => {
         
          if (res.data.success == 1) {
            
            this.tableDataHis = res.data.data;
            console.log(this.tableDataHis);
          }
        })
        .finally(() => {
          this.tableLoading = false;
        });
    },

    getAiTradeHistory() {
      this.tableLoading = true;
      Api.getAiProfitList()
        .then((res) => {
          if (res.data.success == 1) {
            //this.tableData = res.data.data;
          }
        })
        .finally(() => {
          this.tableLoading = false;
        });
    },

    formatPrice(value, minimum, maxmimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum,
        maximumFractionDigits: maxmimum,
      });
      return formatter.format(value);
    },

    formatDate(d) {
      return moment(d).format("DD-MM-YYYY HH:mm:ss");
    },
  },

  created() {
    this.getInfoLogin();
    this.fetchAnalytics();
    
    

  },
  mounted() {
    this.optionDatetime.push({
      text: this.$t('CopyTrade_Setting_Month') + " " + this.staticMonth(),
      value: 0,
    });

    this.optionDatetime.push({
      text: this.$t('CopyTrade_Setting_Year') + " " + this.staticYear(),
      value: 1,
    });

    //console.log(optionDatetime);
    
    this.resizeWindow();
    window.addEventListener("resize", this.resizeWindow);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resizeWindow);
  },

  watch: {
    tab(t) {
      if (t === 0) {
        this.fetchAnalytics();
      }
      if (t == 2) {
        if (this.hisTab == 1) {
          this.getAiTradeHistory();
        } else {
          this.getTradeHistory();
        }
      }
    },

    hisTab(t) {
      if (t == 2) {
        this.getAiTradeHistory();
      } else {
        this.getTradeHistory();
      }
    },

    statistic(type) {
      if (type == 0) {
        Api.getRevenue().then((res) => {
          if (res.data.success == 1) {
            this.statisticData = res.data.data;
          }
        });
      } else {
        Api.getRevenue({ type: "month" }).then((res) => {
          if (res.data.success == 1) {
            this.statisticData = res.data.data;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss">

  .print-proffit .text-btc{
    position: absolute;
    top:120px;
    left:40px;
    color:white;
    font-size: 32px;
    font-weight: bold;
    width: 200px;
  }

  .print-proffit .text-profit{
    position: absolute;
    top:160px;
    left:40px;
    color:white;
    font-size: 24px;
    width: 200px;
  }

  .print-proffit .text-cg{
    position: absolute;
    top:400px;
    left:40px;
    color:white;
    font-size: 24px;
    width: 200px;
  }

  .print-proffit .text-value-profit{
    position: absolute;
    top:190px;
    left:40px;
    color:rgb(76, 175, 80);
    font-size: 32px;
    width: 200px;
    font-weight: bold;
  }

  .print-proffit .btn-print{
    position: absolute;
    bottom: 20px;
    right: 20px;
    color: white;
  }
  //

  .print-proffit img{
    width: 100%;
  }

  .print-proffit{
    position: relative;
  }
#copy-trade {
  .con-select{
    width: 150px;
  }
  .con-select .vs-select--input{
    border: 1px solid #fff !important;
  }

  .vs__dropdown-toggle {
    height: 48px;
    border-radius: 8px;
  }

  .v-select .vs__selected {
    color: #ffffff;
    font-size: 14px;
  }

  .vs__dropdown-menu {
    .vs__dropdown-option--highlight {
      background: #389a11;
    }
  }

}

.vs-dropdown--menu--after {
  background-color: #011022 !important;
}

.vs-dropdown--menu {
  background-color: #011022 !important;
}

.vs-con-table {
  background-color: #02142b !important;
  border: 1px solid #142545 !important;
  border-radius: 8px;
  padding: 10px;
}

.vs-table--tbody-table tr {
  background-color: #02142b !important;
  color: #b8c2cc !important;
}

.vs-table--not-data {
  color: #b8c2cc !important;
  font-size: 14px;
  margin-top: 20px;
}

.select-setting {
  margin-top: 5px;
  width: 100% !important;

  .input-select-con {
    padding: 3px 0px;
    background-color: #011022;
    border-radius: 8px;

    .vs-select--input {
      background-color: #011022;
    }

    i {
      font-size: 18px;
    }
  }
}

.vs-select--options {
  background-color: #011022 !important;

  .vs-select--item {
    background-color: #011022 !important;
    border: none;

    &:hover {
      background-color: #e3b602 !important;
    }
  }

  .vs-component {
    span {
      color: #fff;
    }
  }
}

.custom-switch {
  .material-icons {
    font-size: 12px;
  }
}
</style>
<style lang="scss">
@media only screen and (max-width: 900px) {

  .print-proffit .text-btc{
   
    left:24px;
  
  }

  .print-proffit .text-profit{
   
    left:24px;
  
  }
  .print-proffit .text-value-profit{
  
    left:24px;
    
  }

  .tab-margin{
    margin-top: 60px;
  }

  .sp-only {
    display: block !important;
  }

  .pc-only {
    display: none !important;
  }

  .transaction .sodu .flex span, .transaction .win-lose .flex span{
    font-size: 24px !important;
  }
}

@media only screen and (min-width: 900px) {
  .sp-only {
    display: none;
  }

  .pc-only {
    display: block;
  }
}

#copy-trade {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #011022;
  min-height: 100vh;
  padding: 20px;
}

.transaction {

  .sodu,
  .win-lose {
    margin: 7px 14px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 6px;

    h4 {
      box-shadow: rgba(255, 255, 255, 0.4) 0px 6px 15px -7px;
      font-size: 20px;
      color: #ebeefd;
      padding: 8px 12px;
    }

    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;

      span {
        font-size: 36px;
      }

      .icon {
        background-color: rgb(25, 118, 210);
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .win-lose {
    .wl {
      .wl-1 {
        font-style: normal;
        color: #4caf50;
        font-weight: bold;
      }

      .wl-2 {
        color: rgb(117, 117, 117);
        font-weight: bold;
        padding: 0 6px;
      }

      .wl-3 {
        font-style: normal;
        color: rgb(245, 86, 86);
        font-weight: bold;
      }
    }
  }

  .info {
    margin: 0px 14px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 6px;

    h4 {
      font-size: 18.46px;
      color: #ebeefd;
      font-weight: 500;
      padding: 21px 21px 0 21px;
    }

    .body-card {
      padding: 7px 21px 21px 21px;

      li {
        display: flex;
        list-style: none;
        margin: 10px 0;

        .icon {
          background-color: #389a11;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 16px;

          img {
            width: 20px;
            height: 20px;
          }
        }

        .text {
          font-size: 14px;

          span {
            line-height: 21px;
          }
        }
      }
    }
  }

  .calendar {
    margin: 0px 14px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 6px;

    h4 {
      font-size: 18.46px;
      color: #ebeefd;
      font-weight: 500;
      padding: 21px 21px 0 21px;
    }

    .body-card {
      padding: 21px;

      .total {
        margin-left: 20px;
        margin-right: 30px;
        background-color: #389a11 !important;
        color: white;
        font-size: 14px;
        border-radius: 8px;
        padding: 11px 10px;
        cursor: default;
        float: right;
        text-align: center;
        min-width: 140px !important;
      }

      @media only screen and (max-width: 900px) {
        .total {
          display: block;
          margin-left: 0;
          margin-right: 0 !important;
          width: 80px;
        }
      }

      .item {
        height: 65px;
        margin: 10px 28px 0 0;
        border: 1px solid #eee;
        color: #fff;
        text-align: center;
        padding-top: 10px;
        border-radius: 8px;

        p {
          font-size: 18px;
        }
      }
    }
  }
}

.setting {
  .setting-title {
    margin-top: 10px;
    font-size: 21px;
    font-weight: 500;
    text-decoration: underline;
    margin-left: 14px;
  }

  .setting-warp {
    background-color: #2f3946;
    padding: 15px;
    margin: 14px;
    border-radius: 8px;

    .setting-input {
      span {
        color: #c2c6dc;
        font-size: 11.9px;
      }

      .input-container {
        background-color: #011022;
        padding: 10px 5px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        margin-top: 5px;

        img {
          width: 18px;
          height: 18px;
        }

        input {
          border: none;
          outline: none;
          background-color: #011022;
          color: #fff;
          margin-left: 15px;
        }
      }
    }
  }

  .switch-wrap {
    display: flex;
    margin-top: 30px;
    align-items: center;

    .text {
      color: #c2c6dc;
      font-size: 14px;
      margin-left: 10px;
    }
  }

  .content-1 {
    background-color: #2f3946;
    padding: 21px;
    margin: 14px;
    border-radius: 8px;

    .content-1-flex {
      display: flex;
      align-items: center;

      span {
        font-size: 14px;
        margin-left: 5px;
        line-height: 20px;

        a {
          color: #e3b602;
          text-decoration: none;
        }
      }
    }
  }
}

.custom-dropdowm {
  color: #fff;

  span {
    display: block;
    padding: 5px 10px;
    line-height: 22px;
    font-size: 13.125px;
    color: #c2c6dc;

    &:hover {
      cursor: pointer;
      color: #8982ea;
    }
  }
}


@media screen and (max-width: 767.98px) {
  .transaction .calendar .body-card .item {
   margin:0px !important;
   border-radius: 0px;
  }
}
</style>
