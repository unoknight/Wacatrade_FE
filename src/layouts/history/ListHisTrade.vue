<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Đức Nguyễn
  Author URL: @skydn93
========================================================================================== -->

<template>
  <div id="list-trade-member" class="data-list-container">
   
    <vs-prompt title="Export To Excel" class="export-options" @cancle="clearFields" @accept="exportToExcel" accept-text="Export" @close="clearFields" :active.sync="activePrompt">
        <vs-input v-model="fileName" placeholder="Enter File Name.." class="w-full" />
        <v-select v-model="selectedFormat" :options="formats" class="my-4" />
        <div class="flex">
          <span class="mr-4">Cell Auto Width:</span>
          <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
        </div>
    </vs-prompt>

    <div id="loading-corners" class="vs-con-loading__container">
      <div class="mb-2">
          <p>
            <span class="mr-4" style="color: #ffb0b0;">Tổng tiền nạp: <b>{{ formatPrice(dtUSD, 2) }} USDT</b></span> 
            <!-- <span class="mr-4" style="color: #00ffad;">Tổng tiền BNB nhận: <b>{{ formatPrice(dtBNB, 10) }} BNB</b></span>  -->
            <span class="mr-4" style="color: #ffa500;">Phí: <b>{{ formatPrice(feeBNB, 10) }} BNB</b></span> 
          </p>
          <p>
            <span class="mr-4" style="color: #ffb0b0;">Tổng tiền rút: <b>{{ formatPrice(dtUSDR, 2) }} USDT</b></span> 
            <!-- <span class="mr-4" style="color: #00ffad;">Tổng tiền BNB rút: <b>{{ formatPrice(dtBNBR, 10) }} BNB</b></span>  -->
            <span class="mr-4" style="color: #ffa500;">Phí: <b>{{ formatPrice(feeBNBR, 10) }} BNB</b></span> 
          </p>
          <p>
            <span class="mr-4" style="color: #ffb0b0;">Tổng: <b>{{ formatPrice(dtUSD - dtUSDR, 2) }} USDT</b></span> 
            <!-- <span class="mr-4" style="color: #00ffad;">Tổng BNB: <b>{{ formatPrice(dtBNB - dtBNBR, 10) }} BNB</b></span>  -->
            <span class="mr-4" style="color: #ffa500;">Tổng Phí: <b>{{ formatPrice(feeBNB - feeBNBR, 10) }} BNB</b></span> 
          </p>
      </div>
      <vs-table ref="table" multiple v-model="selectedUser" :data="products">
              
        <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

          <div class="flex flex-wrap-reverse items-center data-list-btn-container">
             
            <!-- ACTION - DROPDOWN -->
            <vs-dropdown vs-trigger-click class="dd-actions cursor-pointer mr-4 mb-4">

              <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full">
                <span class="mr-2">Tác vụ</span>
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
              </div>

              <vs-dropdown-menu>

                <vs-dropdown-item>
                  <span v-if="showDeleteMultiBt" class="flex items-center" @click="deleteMultiple">
                    <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Xóa</span>
                  </span>
                </vs-dropdown-item>

                <!-- <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Archive</span>
                  </span>
                </vs-dropdown-item> -->

                <vs-dropdown-item>
                  <span class="flex items-center" @click="activePrompt=true">
                    <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>In</span>
                  </span>
                </vs-dropdown-item>
                

                <!-- <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Another Action</span>
                  </span>
                </vs-dropdown-item> -->

              </vs-dropdown-menu>
            </vs-dropdown>

            
            <!-- TRASH -->
            <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-danger border border-solid border-danger" @click.stop="currentPage = 1; getTrashTrade()">
                <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" />
                <span class="ml-2 text-base text-danger">Thùng rác</span>
            </div> -->

            <!-- RELOAD -->
            <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-success border border-solid border-success" @click="currentPage = 1; reloadList()">
                <feather-icon icon="ArrowLeftIcon" svgClasses="h-4 w-4" />
                <span class="ml-2 text-base text-sucess">Trở về</span>
            </div> -->
            
          </div>
          
          <!-- ITEMS PER PAGE -->
            <div class="flex items-center">
            <vs-dropdown vs-trigger-click class="cursor-pointer mr-4 items-per-page-handler">
              <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                <span class="mr-2 text-black">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ (currentPage - 1) * itemsPerPage + itemsPerPage }} trong {{ totalItems }}</span>
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
              </div>
              <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
              <vs-dropdown-menu>

                <vs-dropdown-item @click="itemsPerPage=4">
                  <span>4</span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="itemsPerPage=10">
                  <span>10</span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="itemsPerPage=15">
                  <span>15</span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="itemsPerPage=20">
                  <span>20</span>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
            <div
              class="con-input-search vs-table--search">
              <input
                v-model="searchText"
                class="input-search vs-table--search-input"
                type="text">
              <vs-icon icon="search"></vs-icon>
            </div>
          </div>
      
        </div>  
        
          <template slot="thead">
              <vs-th sort-key="account">Tài khoản</vs-th>
              <vs-th sort-key="amount">Số tiền</vs-th>
              <vs-th sort-key="note">Ghi chú</vs-th>
              <vs-th sort-key="status">Trạng thái</vs-th>
              <vs-th sort-key="datecreate">Thời gian</vs-th>
              <vs-th>Tác vụ</vs-th>
          </template>
        
          <template slot-scope="{data}">
            <tbody>
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                  <vs-td>
                      <p class="trade-account font-medium truncate">Từ: {{ tr.from_u }}<br>Đến: {{ tr.to_u }}<br><br>Mô tả: {{ tr.type }}</p>
                  </vs-td>

                  <vs-td>
                      <p class="trade-amount">
                          
                          <IconCrypto style="width: 20px" :coinname="getIconType(tr.currency)" color="color" format="svg" v-if="tr.paypal == null"/> 
                          <img width="20" :src="require('@/assets/images/sky/icon_bank/paypal-mini.png')" v-else> 

                          {{ getAmountDecimal(tr.currency, tr.amount) }}

                      </p>
                  </vs-td>

                  <vs-td>
                      <p class="trade-note">{{  tr.note }}</p>
                  </vs-td>

                <vs-td>
                  <vs-chip :color="getOrderStatusColor(tr.status)" class="de-status">{{ getOrderStatusColorText(tr.status) | title }}</vs-chip>
                </vs-td>

                <vs-td>
                  <p class="trade-create">{{ formatDate(tr.created_at) }}</p>
                </vs-td>

                <vs-td  class="whitespace-no-wrap text-center">
                      
                </vs-td>
                <vs-td  class="whitespace-no-wrap text-center">
                      <vx-tooltip v-if="tr.delete_status == 0" style="float: left" color="danger" text="Xóa">
                          <vs-button color="dark" type="line" icon-pack="feather" icon="icon-trash" @click.stop="deleteTrade(tr.id, indextr, 1)"></vs-button>
                      </vx-tooltip>
                      <vx-tooltip v-else style="float: left" color="warning" text="Thu hồi">
                          <vs-button color="dark" type="line" icon-pack="feather" icon="icon-arrow-up-left" @click.stop="deleteTrade(tr.id, indextr, 0)"></vs-button>
                      </vx-tooltip>
                </vs-td>
              </vs-tr>
            </tbody>
          </template>
      </vs-table>
      <vs-pagination :total="totalPage" v-model="currentPage" class="con-pagination-table vs-table--pagination"></vs-pagination>


    </div>

  
  </div>
</template>

<script>

import vSelect from 'vue-select'
import AuthenticationService from '@/services/AuthenticationService'
import moment from 'moment'
import Vue from 'vue'
//import LoadingTypeVue from '../../views/components/vuesax/loading/LoadingType.vue'
import { debounce } from "debounce";

export default {
  components: {
    vSelect
  },



  data() {
    return {
      showDeleteMultiBt: true,
      activePrompt: false,
      selectedUser: [],
      fileName: "",
      formats:["xlsx", "csv", "txt"],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: ["ID", "Mô tả", "Số Tiền", "Ghi Chú", "Ngày Giao Dịch" ],
      headerVal: ["id", "account", "amount", "note", "datecreate" ],
      productsFake: [
            {
              "id": 1,
              "from_u": "123",
              "to_u": "5344",
              "type_key": "hh", 
              "type": "Hoa hồng Giao dịch",
              "currency": "sys",
              "amount": 100.00,
              "note": "",
              "status": 1,
              "created_at": "00:00:00 02-04-2021"
            },
            {
              "id": 2,
              "from_u": "123",
              "to_u": "0x9459287648927947298453",
              "type_key": "rt", 
              "type": "Rút tiền Onchain",
              "currency": "BTC",
              "amount": 100.00,
              "note": "",
              "status": 0,
              "created_at": "00:00:00 02-04-2021"
            },
            {
              "id": 3,
              "from_u": "123",
              "to_u": "0x9459287648927947298453",
              "type_key": "rt", 
              "type": "Rút tiền ERC20",
              "currency": "ETH",
              "amount": 100.00,
              "note": "",
              "status": 0,
              "created_at": "00:00:00 02-04-2021"
            },
            {
              "id": 4,
              "from_u": "123",
              "to_u": "skyNice",
              "type_key": "rt", 
              "type": "Rút tiền (Nội bộ)",
              "currency": "sys",
              "amount": 100.00,
              "note": "",
              "status": 1,
              "created_at": "00:00:00 02-04-2021"
            },
            {
              "id": 5,
              "from_u": "5436434",
              "to_u": "skyNice",
              "type_key": "ct", 
              "type": "Chuyển tiền từ Live Account -> (Nội bộ)",
              "currency": "sys",
              "amount": 100.00,
              "note": "",
              "status": 1,
              "created_at": "00:00:00 02-04-2021"
            },
            {
              "id": 6,
              "from_u": "skyNice",
              "to_u": "431344",
              "type_key": "rt", 
              "type": "Chuyển tiền từ (Nội bộ) -> Live Account",
              "currency": "sys",
              "amount": 100.00,
              "note": "",
              "status": 1,
              "created_at": "00:00:00 02-04-2021"
            },
        ],
      itemsPerPage: 10,
      isMounted: false,
      dtUSD: 0,
      dtBNB: 0,
      feeBNB: 0,
      dtUSDR: 0,
      dtBNBR: 0,
      feeBNBR: 0,

      currentPage: 1,
      totalItems: 0,
      searchText: "",
    }
  },
  computed: {
    totalPage(){
      return Math.ceil(this.totalItems / this.itemsPerPage)
    },
    products() {
      return this.productsFake
    },
    queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.productsFake.length
    }
  },
  methods: {
    async deleteMultiple(){
      const check = await this.$store.dispatch("check2fa");
      if(!check){
        return;
      };
      
      let token = localStorage.getItem('token')
      this.$store.dispatch('setToken', token)

      if(this.selectedUser.length == 0){
        return this.$vs.notify({
          text:'Hãy chọn đối tượng cần xóa',
          color:'warning',
          iconPack: 'feather',
          icon:'icon-check'});
      }
      for(var i = this.selectedUser.length - 1; i >= 0 ;i--){
          let id = this.selectedUser[i]['id'];
          let obj = {
            id: id,
            val: 1
          }
          AuthenticationService.deleteTrashByID(obj)
          .then((resp) => {
            if(!resp.data.success){
              localStorage.removeItem('token');
              this.$router.push('/pages/login').catch(() => {})
            }
          })
          Vue.delete(this.productsFake, i)
      }
      this.selectedUser = []
      return this.$vs.notify({
          text:'Đã xóa thành công',
          color:'success',
          iconPack: 'feather',
          icon:'icon-check'});
    },
    async deleteTrade(id, index, val) {
      const check = await this.$store.dispatch("check2fa");
      if(!check){
        return;
      };
      let token = localStorage.getItem('token')
      this.$store.dispatch('setToken', token)
      let obj = {
        id: id,
        val: val
      }
      AuthenticationService.deleteTrashByID(obj)
        .then((resp) => {
          if(resp.data.success){
              Vue.delete(this.productsFake, index)
              this.popupDeleteActive = false
              return this.$vs.notify({
                  text:'Đã xóa thành công',
                  color:'success',
                  iconPack: 'feather',
                  icon:'icon-check'});
          }else{
            localStorage.removeItem('token');
            this.$router.push('/pages/login').catch(() => {})
          }
        })
    },

    getOrderStatusColor(status) {
      if(status == 0) return "warning"
      if(status == 1) return "success"
      if(status == 3) return "danger"
      //if(status == 2) return "danger"
      return "warning"
    },
    getOrderStatusColorText(status) {
      if(status == 0) return "Chờ xử lý"
      if(status == 1) return "Hoàn thành"
      if(status == 3) return "Không giải quyết"
      //if(status == 2) return "danger"
      return "Chờ xử lý"
    },

    getIconType(type){
      let cur = type;
      if(cur == null) cur = 'usdt'
      return cur
    },

    formatDate(value){
      if (value) {
          return moment(String(value)).format('MM/DD/YYYY hh:mm:ss')
      }
    },

    formatPrice(value, minimum){
      if(void 0 === value) value = 0;
      var formatter = new Intl.NumberFormat('en-US', {
          //style: 'currency',
          //currency: '',
          minimumFractionDigits: minimum
      });
      
      return formatter.format(value);
    },

    getAmountDecimal(type, value){
      
      if(type == null){
        type = 'usdt'
      }

      let cur = '$'
      let coin = type.toUpperCase();
      let minimum = 2
      if(coin == 'BTC') minimum = 6
      
      if(coin == 'ETH') minimum = 4

      if(coin == 'USDT') minimum = 2

      //if(coin == 'VN') minimum = 0

     

      var formatter = new Intl.NumberFormat('en-US', {
          //style: 'currency',
          //currency: '',
          minimumFractionDigits: minimum
      });
      
      return cur+formatter.format(value);
    },

    toggleDataSidebar(val=false) {
      this.addNewDataSidebar = val
    },


    getTrashTrade(){
      this.showDeleteMultiBt = false
      let token = localStorage.getItem('token')
      this.$store.dispatch('setToken', token)

      if(this.isMounted){
        this.openLoadingInDiv();
      }

      const offset = (this.currentPage - 1 ) * this.itemsPerPage;
      const limit = this.itemsPerPage
      const params = {offset, limit}

      if(this.searchText){
        params.s = this.searchText;
      }
    
      AuthenticationService.gethistoryAllTrash(params)
      .then((resp) => {
        this.$vs.loading.close('#loading-corners > .con-vs-loading');
        if(!resp.data.success){
            localStorage.removeItem('token');
            this.$router.push('/pages/login').catch(() => {})
        }else{
            this.totalItems = resp.data.data.count;
            this.productsFake = resp.data.data.items;
        }
      })
      
    },




    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    // export ra file
    //==================================================================
    exportToExcel() {
        // kiểm tra nếu chưa chọn đối tượng thình sẽ không hiện bản xuất file
      if(this.selectedUser.length == 0){
        return this.$vs.notify({
            title:'Xuất dữ liệu',
            text:'Vui lòng chọn nội dung để hoàn thành',
            color:'danger',
            iconPack: 'feather',
            icon:'icon-heart'});
      } 
      import('@/vendor/Export2Excel').then(excel => {
        const list = this.selectedUser
        const data = this.formatJson(this.headerVal, list)
        excel.export_json_to_excel({
          header: this.headerTitle,
          data,
          filename: this.fileName,
          autoWidth: this.cellAutoWidth,
          bookType: this.selectedFormat
        })
        this.clearFields()
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        // Add col name which needs to be translated
        // if (j === 'timestamp') {
        //   return parseTime(v[j])
        // } else {
        //   return v[j]
        // }

        return v[j]
      }))
    },
    clearFields() {
      this.fileName = ""
      this.cellAutoWidth = true
      this.selectedFormat = "xlsx"
    },

    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
    //==================================================================
      openLoadingInDiv(){
        this.$vs.loading({
            container: '#loading-corners',
            type: 'corners',
            scale: 0.6
        })
    },

       reloadList(){
          this.showDeleteMultiBt = true
          let token = localStorage.getItem('token')
          this.$store.dispatch('setToken', token)

          if(this.isMounted){
            this.openLoadingInDiv();
          }

          const offset = (this.currentPage - 1 ) * this.itemsPerPage;
          const limit = this.itemsPerPage
          const params = {offset, limit}

          if(this.searchText){
            params.s = this.searchText;
          }
          
          AuthenticationService.getTradeListHistory(params)
          .then((resp) => {
            
            this.$vs.loading.close('#loading-corners > .con-vs-loading');

            if(!resp.data.success){
                localStorage.removeItem('token');
                this.$router.push('/pages/login').catch(() => {})
            }else{
                this.totalItems = resp.data.data.count;
                this.productsFake = resp.data.data.items;
            }
          })
    },

    getDTNap(){
            AuthenticationService.getRevenueNap()
            .then((resp) => {
                let g = resp.data;
                if(g.success == 1){
                  this.dtUSD = g.data.dtUSD;
                  this.dtBNB = g.data.dtBNB;
                  this.feeBNB = g.data.freeBNB;
                }
                
            })
      },

      getDTRut(){
            AuthenticationService.getRevenueRut()
            .then((resp) => {
                let g = resp.data;
                if(g.success == 1){
                  this.dtUSDR = g.data.dtUSD;
                  this.dtBNBR = g.data.dtBNB;
                  this.feeBNBR = g.data.freeBNB;
                }
                
            })
      },

    search: debounce(function () {
      if(this.showDeleteMultiBt){
         this.reloadList()
      }
      else{
        this.getTrashTrade()
      }
  }, 500), 

  },
  created() {
    // if(!moduleDataList.isRegistered) {
    //   this.$store.registerModule('dataList', moduleDataList)
    //   moduleDataList.isRegistered = true
    // }

    //this.$store.registerModule('dataList', this.productsFake);
    
    //this.$store.dispatch("dataList/fetchDataListItems")
    //console.log(this.productsFake);
    //console.log(this.$store.state.dataList);
    this.reloadList();
    this.getDTNap();
    this.getDTRut();

  },
  mounted() {
    this.isMounted = true;
    this.openLoadingInDiv();
  },

  watch:{
     currentPage(){
      if(this.showDeleteMultiBt){
         this.reloadList()
      }
      else{
        this.getTrashTrade()
      }
    },

    searchText(){
      this.currentPage = 1;
      this.search()
    }
  }
}
</script>

<style lang="scss">
#data-list-list-view {
  .vs-con-table {

    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
