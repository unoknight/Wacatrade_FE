<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-analytics">
    <vs-dropdown vs-trigger-click class="mb-4 mr-4 cursor-pointer items-per-page-handler">
      <div class="flex items-center justify-between p-4 font-medium border border-solid rounded-full cursor-pointer d-theme-border-grey-light d-theme-dark-bg">
        <span class="mr-2 text-black">Kiểu tài khoản cần thống kê: {{ typeFilterText }}</span>
        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
      </div>
      <vs-dropdown-menu>
        <vs-dropdown-item @click="updateTypeFilter(0)">
          <span>Tất cả</span>
        </vs-dropdown-item>
        <vs-dropdown-item @click="updateTypeFilter(1)">
          <span>Tài khoản thật</span>
        </vs-dropdown-item>
        <vs-dropdown-item @click="updateTypeFilter(2)">
          <span>Tài khoản demo</span>
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
    <vs-dropdown vs-trigger-click class="mb-4 mr-4 cursor-pointer items-per-page-handler">
      <div class="flex items-center justify-between p-4 font-medium border border-solid rounded-full cursor-pointer d-theme-border-grey-light d-theme-dark-bg">
        <span class="mr-2 text-black">Loại tài khoản cần thống kê: {{ typeAccountFilterText }}</span>
        <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
      </div>
      <vs-dropdown-menu>
        <vs-dropdown-item @click="updateTypeAccountFilter(0)">
          <span>Tất cả</span>
        </vs-dropdown-item>
        <vs-dropdown-item @click="updateTypeAccountFilter(1)">
          <span>Tài khoản thường</span>
        </vs-dropdown-item>
        <vs-dropdown-item @click="updateTypeAccountFilter(2)">
          <span>Tài khoản marketing</span>
        </vs-dropdown-item>
      </vs-dropdown-menu>
    </vs-dropdown>
    <div class="vx-row">
      <div class="w-full vx-col md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
        <div id="loading-corners2" class="vs-con-loading__container">
          <vx-card title="Thống kê lịch sử hoa hồng">
            <div v-if="data.data && data.data.length > 0  && data.data[0].commission_history && data.data[0].commission_history.length > 0">

              <vs-table :data="data.data">
                <vs-tr>
                  <vs-th>Loại hoa hồng</vs-th>
                  <vs-th>Loại tài khoản</vs-th>
                  <vs-th>Tổng số hoa hồng</vs-th>
                </vs-tr>
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data.data[0].commission_history">
                  <vs-td>{{ tr.type }}</vs-td>
                  <vs-td>{{ tr.marketing == 1?'Marketing':'Thường' }}</vs-td>
                  <vs-td>{{ formattedValue(tr.tsHHong) }}</vs-td>
                </vs-tr>
              </vs-table>
            </div>
          </vx-card>
        </div>
      </div>
      <div class="w-full vx-col md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
        <div id="loading-corners2" class="vs-con-loading__container">
          <vx-card title="Thống kê lịch sử nạp rút">
            <div v-if="data.data && data.data.length > 0  && data.data[0].trade_history && data.data[0].trade_history.length > 0">
              <vs-table :data="data.data">
                <vs-tr>
                  <vs-th>Loại giao dịch</vs-th>
                  <vs-th>Tiền tệ</vs-th>
                  <vs-th>Tổng khối lượng</vs-th>
                  <vs-th>Tổng khối lượng thực tế</vs-th>
                </vs-tr>
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data.data[0].trade_history" :class="{ 'red-text': tr.type_key === 'rt', 'green-text': tr.type_key === 'nt' }">
                  <vs-td>{{ tr.type }}</vs-td>
                  <vs-td>{{ tr.currency }}</vs-td>
                  <vs-td>{{ formattedValue(tr.total_amount) }}</vs-td>
                  <vs-td>{{ formattedValue(tr.total_real_amount) }}</vs-td>
                </vs-tr>
              </vs-table>
            </div>
          </vx-card>
        </div>
      </div>
    </div>
    <div class="vx-row">
      <div class="w-full vx-col md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
        <div id="loading-corners2" class="vs-con-loading__container">
          <vx-card title="Thống kê lịch sử copy trade">
            <div v-if="data.data && data.data.length > 0  && data.data[0].copy_trade_history && data.data[0].copy_trade_history.length > 0">
              <vs-table :data="filterCopyTrade">
                <vs-tr>
                  <vs-th>Kiểu tài khoản</vs-th>
                  <vs-th>Loại tài khoản</vs-th>
                  <vs-th>Tổng thắng</vs-th>
                  <vs-th>Tổng thua</vs-th>
                  <vs-th>Tổng cược</vs-th>
                </vs-tr>
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in filterCopyTrade">
                  <vs-td>{{ tr.acc_type == 1?$t('CopyTrade_Setting_LiveAcount'):$t('CopyTrade_Setting_DemoAccount') }}</vs-td>
                  <vs-td>{{ tr.marketing == 1?'Marketing':'Thường' }}</vs-td>
                  <vs-td>{{ formattedValue(tr.amount_win) }}</vs-td>
                  <vs-td>{{ formattedValue(tr.amount_lose) }}</vs-td>
                  <vs-td>{{ formattedValue(tr.amount_bet) }}</vs-td>
                </vs-tr>
              </vs-table>
            </div>
          </vx-card>
        </div>
      </div>
      <div class="w-full vx-col md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
        <div id="loading-corners2" class="vs-con-loading__container">
          <vx-card title="Thống kê lịch sử đặt cược">
            <div v-if="data.data && data.data.length > 0  && data.data[0].bet_history && data.data[0].bet_history.length > 0">
              <vs-table :data="filterBetTrade">
                <vs-tr>
                  <vs-th>Kiểu tài khoản</vs-th>
                  <vs-th>Loại tài khoản</vs-th>
                  <vs-th>Tổng thắng</vs-th>
                  <vs-th>Tổng thua</vs-th>
                  <vs-th>Tổng cược</vs-th>
                </vs-tr>
                <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in filterBetTrade">
                  <vs-td>{{ tr.type_account == 1?$t('CopyTrade_Setting_LiveAcount'):$t('CopyTrade_Setting_DemoAccount') }}</vs-td>
                  <vs-td>{{ tr.marketing == 1?'Marketing':'Thường' }}</vs-td>
                  <vs-td>{{ formattedValue(tr.amount_win) }}</vs-td>
                  <vs-td>{{ formattedValue(tr.amount_lose) }}</vs-td>
                  <vs-td>{{ formattedValue(tr.amount_bet) }}</vs-td>

                </vs-tr>
              </vs-table>
            </div>
          </vx-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      data: {
        data: {},
        type_filter: 1,
        type_account: 0
      }
    };
  },
  computed: {
    typeFilterText() {
      switch (this.data.type_filter) {
        case 0:
          return "Tất cả các loại tài khoản";
        case 1:
          return "Thật";
        case 2:
          return "Demo";
        default:
          return "";
      }
    },
    typeAccountFilterText() {
      switch (this.data.type_account) {
        case 0:
          return "Thường và marketing";
        case 1:
          return "Thường";
        case 2:
          return "Marketing";
        default:
          return "";
      }
    },
    filterCopyTrade() {
      const typeFilterValue = this.data.type_filter;
      const typeAccount = this.data.type_account;

      let copyTradeHistory = this.data.data[0].copy_trade_history;

      if (typeAccount == 1) {
        copyTradeHistory = copyTradeHistory.filter(tr => tr.marketing == 0);
      } else if (typeAccount == 2) {
        copyTradeHistory = copyTradeHistory.filter(tr => tr.marketing == 1);
      }

      if (typeFilterValue == 1) {
        return copyTradeHistory.filter(tr => tr.acc_type == 1);
      } else if (typeFilterValue == 2) {
        return copyTradeHistory.filter(tr => tr.acc_type == 0);
      } else {
        return copyTradeHistory;
      }
    },
    filterBetTrade() {
      const typeFilterValue = this.data.type_filter;
      const typeAccount = this.data.type_account;

      let bet_history = this.data.data[0].bet_history;

      if (typeAccount == 1) {
        bet_history = bet_history.filter(tr => tr.marketing == 0);
      } else if (typeAccount == 2) {
        bet_history = bet_history.filter(tr => tr.marketing == 1);
      }

      if (typeFilterValue == 1) {
        return bet_history.filter(tr => tr.type_account == 1);
      } else if (typeFilterValue == 2) {
        return bet_history.filter(tr => tr.type_account == 0);
      } else {
        return bet_history;
      }
    },
  },
  methods: {
    updateTypeFilter(value) {
      this.data.type_filter = value;
    },
    updateTypeAccountFilter(value) {
      this.data.type_account = value;
    },
    formattedValue(input) {
      const numberValue = parseFloat(input);

      if (isNaN(numberValue)) {
        return "N/A";
      }

      const formattedNumber = numberValue.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

      return `${formattedNumber}`;
    },
    openLoadingInDiv() {
      this.$vs.loading({
        container: "#loading-corners",
        type: "corners",
        scale: 0.6,
      });
      this.$vs.loading({
        container: "#loading-corners2",
        type: "corners",
        scale: 0.6,
      });
    },
    closeLoadingInDiv() {
      this.$vs.loading.close("#loading-corners > .con-vs-loading");
      this.$vs.loading.close("#loading-corners2 > .con-vs-loading");
    },
    async fetchData() {
      try {
        const response = await AuthenticationService.getStatisticTrade();
        this.data.data = [response.data.data];
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
/*! rtl:begin:ignore */

#dashboard-analytics {
  .greet-user {
    position: relative;

    .decore-left {
      position: absolute;
      left: 0;
      top: 0;
    }
    .decore-right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  @media (max-width: 576px) {
    .decore-left,
    .decore-right {
      width: 140px;
    }
  }
}
/*! rtl:end:ignore */
</style>
<style scoped>
  .red-text {
    color: red;
  }

  .green-text {
    color: green;
  }
</style>
<style>
.style-chooser .vs__search::placeholder,
.style-chooser .vs__dropdown-toggle,
.style-chooser .vs__dropdown-menu {
  background: #dfe5fb;
  border: none;
  color: #394066;
  text-transform: lowercase;
  font-variant: small-caps;
}

.style-chooser .vs__clear,
.style-chooser .vs__open-indicator {
  fill: #394066;
}
