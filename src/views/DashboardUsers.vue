<!-- =========================================================================================
  File Name: DashboardAnalytics.vue
  Description: Dashboard Analytics
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="dashboard-users">
    <vs-table :data="data">
      <vs-tr>
        <vs-th colspan="3">Thống kê so sánh dữ liệu hôm nay so với ngày {{ getYesterdayDate() }}</vs-th>
      </vs-tr>

      <!-- Row 1 -->
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td>Mức lợi nhuận</vs-td>
        <vs-td>{{ getRevenue(tr.yesterday.betAmount.winToday, tr.yesterday.betAmount.loseToday) }}</vs-td>
        <vs-td v-html="displayWithPercentageColor(
          getRevenue(tr.today.betAmount.winToday, tr.today.betAmount.loseToday), 
          getpercent(getRevenue(tr.yesterday.betAmount.winToday, tr.yesterday.betAmount.loseToday),
            getRevenue(tr.today.betAmount.winToday, tr.today.betAmount.loseToday)), '')"></vs-td>
      </vs-tr>
    </vs-table>

    <vs-table :data="data" class="users-table"
        style="min-height: 300px"
        ref="table"
        v-model="selectedUser"
        pagination
        :max-items="itemsPerPage"
        >
      <template slot="thead">
        <vs-th colspan="2" class="center-header">Người đăng ký</vs-th>
        <vs-th colspan="2" class="center-header">Nạp</vs-th>
        <vs-th colspan="2" class="center-header">Rút</vs-th>
        <vs-th colspan="2" class="center-header">Volumn</vs-th>
        <vs-th colspan="2" class="center-header">Thắng</vs-th>
        <vs-th colspan="2" class="center-header">Thua</vs-th>
      </template>
      <!-- Body content with sample data -->
      <template slot-scope="{data}">
        <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
          <vs-td>{{ round(tr.yesterday.createdUsers)}}</vs-td>
          <vs-td v-html="displayWithPercentageColor(round(tr.today.createdUsers), getpercent(tr.yesterday.createdUsers, tr.today.createdUsers), '')"></vs-td>
          <vs-td>{{ "VND "+round(tr.yesterday.tradeAmount.nt.vnd) }} <br>
                  {{ "USDT "+round(tr.yesterday.tradeAmount.nt.usdt) }}
          </vs-td>
          <vs-td v-html="displayWithPercentageColor(round(tr.today.tradeAmount.nt.vnd), 
            getpercent(tr.yesterday.tradeAmount.nt.vnd, tr.today.tradeAmount.nt.vnd), 
            'VND ',
            displayWithPercentageColor(round(tr.today.tradeAmount.nt.usdt), getpercent(tr.yesterday.tradeAmount.nt.usdt, tr.today.tradeAmount.nt.usdt), 'USDT '))"></vs-td>
          <vs-td>{{ "VND "+round(tr.yesterday.tradeAmount.rt.vnd) }}<br>
                  {{ "USDT "+round(tr.yesterday.tradeAmount.rt.usdt) }}
          </vs-td>
          <vs-td v-html="displayWithPercentageColor(round(tr.today.tradeAmount.rt.vnd), 
            getpercent(tr.yesterday.tradeAmount.rt.vnd, tr.today.tradeAmount.rt.vnd), 
            'VND ',
            displayWithPercentageColor(round(tr.today.tradeAmount.rt.usdt), getpercent(tr.yesterday.tradeAmount.rt.usdt, tr.today.tradeAmount.rt.usdt), 'USDT '))"></vs-td>
          <vs-td>{{ round(tr.yesterday.betAmount.amount) }}</vs-td>
          <vs-td v-html="displayWithPercentageColor(round(tr.today.betAmount.amount), getpercent(tr.yesterday.betAmount.amount, tr.today.betAmount.amount), '')"></vs-td>
          <vs-td>{{ round(tr.yesterday.betAmount.winToday) }}</vs-td>
          <vs-td v-html="displayWithPercentageColor(round(tr.today.betAmount.winToday), getpercent(tr.yesterday.betAmount.winToday, tr.today.betAmount.winToday),'')"></vs-td>
          <vs-td>{{ round(tr.yesterday.betAmount.loseToday) }}</vs-td>
          <vs-td v-html="displayWithPercentageColor(round(tr.today.betAmount.loseToday), getpercent(tr.yesterday.betAmount.loseToday, tr.today.betAmount.loseToday),'')"></vs-td>
        </vs-tr>
    </template>
    </vs-table>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    getYesterdayDate() {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      const year = yesterday.getFullYear();
      const month = String(yesterday.getMonth() + 1).padStart(2, '0');
      const day = String(yesterday.getDate()).padStart(2, '0');

      return `${year}-${month}-${day}`;
    },
    getRevenue(win, lose) {
      if (win == null || win == undefined || lose == null || lose == undefined) {
        return "--"
      }
      return Number(lose - win).toFixed(2);
    },
    round(number) {
      if (number == null || number == undefined) {
        return "--"
      }
      var rounded = Number(number).toFixed(2);
      if (rounded == number) {
        return number
      }
      return rounded;
    },
    getpercent(devided, devide) {
      if (devided == null || devided == undefined || devided == 0 || devide == null || devide == undefined) {
        return null
      }
      var result = Number((devide-devided)/devided*100).toFixed(2);
      return result;
    },
    displayWithPercentageColor(value, percentage, type, option="") {
      if (percentage === null) {
        return `${type}${value} <span style="color: yellow;">(-- %)</span><br>${option}`;
      } else if (percentage > 0) {
        return `${type}${value} <span style="color: rgb(44, 223, 44);">(${percentage}%)</span><br>${option}`;
      } else {
        return `${type}${value} <span style="color: red;">(${percentage}%)</span><br>${option}`;
      }
    },

    async fetchData() {
      try {
        const response = await AuthenticationService.getAnalizeByDay();
        console.log(response);
        this.data = [response.data.success];
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

#dashboard-users {
  .vs-table-text {
    justify-content: center;
  }
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

.users-table .center-header {
  text-align: center;
}
