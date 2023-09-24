<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Đức Nguyễn
  Author URL: @skydn93
========================================================================================== -->

<template>
  <div id="list-verify-account" class="data-list-container">

    <!-- <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" /> -->
    <div id="loading-corners" class="vs-con-loading__container">
      <vs-table ref="table" :data="products">
        <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

          <div class="flex flex-wrap-reverse items-center data-list-btn-container">

            <!-- ACTION - DROPDOWN -->
            <vs-dropdown vs-trigger-click class="dd-actions cursor-pointer mr-4 mb-4">

              <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full">
                <span class="mr-2">Tác vụ</span>
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
              </div>

              <vs-dropdown-menu>

                <!-- <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Xóa</span>
                  </span>
                </vs-dropdown-item> -->

                <!-- <vs-dropdown-item>
                  <span class="flex items-center">
                    <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Archive</span>
                  </span>
                </vs-dropdown-item> -->

                <vs-dropdown-item>
                  <span class="flex items-center">
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

            <!-- ADD NEW -->
            <!-- <div class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
                <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                <span class="ml-2 text-base text-primary">Add New</span>
            </div> -->
            
          </div>

          <!-- ITEMS PER PAGE -->
          <div class="flex items-center">
          <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
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
          <vs-th sort-key="email">Email</vs-th>
          <vs-th sort-key="name">Tên</vs-th>
          <vs-th sort-key="id_front">CMND mặt trước</vs-th>
          <vs-th sort-key="id_back">CMND mặt sau</vs-th>
          <vs-th sort-key="verify">Xác minh</vs-th>
          <vs-th>Tác vụ</vs-th>
        </template>

          <template slot-scope="{data}">
            <tbody>
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                <vs-td>
                    <p class="verify-email font-medium truncate">{{ tr.email }}<br>Số căn cước (CMT): {{ tr.so_cmnd ? tr.so_cmnd : 'Không rõ' }}</p>
                </vs-td>

                <vs-td>
                  <p class="verify-name font-medium truncate">{{ tr.first_name }}<br>Biệt danh: {{ tr.nick_name }}</p>
                </vs-td>

                <vs-td>
                  <p class="verify-id_front" @click="getPopupViewImg(tr.id_front)" color="primary" type="border"><img width="50" :src="`${mediaType(tr.id_front)}`"></p>
                </vs-td>

                <vs-td>
                  <p class="verify-id_back" @click="getPopupViewImg(tr.id_back)"><img width="50" :src="`${mediaType(tr.id_back)}`"></p>
                </vs-td>

                <vs-td>
                  <vs-chip :color="getOrderStatusColor(tr.verified)" class="verify-ac">{{ getOrderStatusColorText(tr.verified) | title }}</vs-chip>
                </vs-td>

                <vs-td class="whitespace-no-wrap text-center">
                  <vx-tooltip :title="tr.nick_name" color="success" class="hover:text-success" text="Xác minh tài khoản">
                    <!-- <vs-button color="dark" type="line" icon-pack="feather" icon="icon-check" @click.stop="doneVerify(tr.id)"></vs-button> -->
                    <div @click.stop="doneVerify(tr.id, 1, indextr)">
                          <feather-icon icon="CheckIcon" svgClasses="w-5 h-5 stroke-current" /> Đồng ý
                    </div>
                  </vx-tooltip>
                  <vx-tooltip :title="tr.nick_name" color="danger" class="hover:text-danger" text="Hủy xác minh">
                    <div @click.stop="doneVerify(tr.id, 0, indextr)">
                          <feather-icon icon="XIcon" svgClasses="w-5 h-5 stroke-current" /> Hủy
                    </div>
                  </vx-tooltip>
                </vs-td>
              </vs-tr>
            </tbody>
          </template>
      </vs-table>
      <vs-pagination :total="totalPage" v-model="currentPage" class="con-pagination-table vs-table--pagination"></vs-pagination>

    </div>

    <vs-popup class="holamundo" title="Hình ảnh chi tiết" :active.sync="popupViewImg">
      <p class="text-center"><img class="responsive" :src="imgLink"></p>
    </vs-popup>
  </div>
</template>

<script>
//import DataViewSidebar from '@/views/ui-elements/data-list/DataViewSidebar.vue'
import AuthenticationService from '@/services/AuthenticationService'
import config from '@/config.json';
import { debounce } from "debounce";

export default {
  // components: {
  //   DataViewSidebar
  // },
  data() {
    return {
      dm: config.domain,
      imgLinkDef: require("@/assets/images/profile/sfp.png"),
      imgLink: require("@/assets/images/profile/sfp.png"),
      popupViewImg: false,
      selected: [],
      productsFake: [
            {
              "id": 1,
              "email": "manhduc@gmail.com",
              "nick_name": "SkyPlaza",
              "first_name": "Ares",
              "id_front": null,
              "id_back": null,
              "verified": 0,
            },
            {
              "id": 2,
              "email": "manhduc23@gmail.com",
              "nick_name": "SkyPlaza 2",
              "first_name": "Tùng",
              "id_front": null,
              "id_back": null,
              "verified": 1,
            },
        ],
      itemsPerPage: 10,
      isMounted: false,

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
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
    async doneVerify(id, val, index) {
      const check = await this.$store.dispatch("check2fa");
      if(!check){
        return;
      };
      const obj = {
        id: id,
        verified: val
      }
      if(val){
        this.productsFake[index].verified = 1
      }else{
        this.productsFake[index].verified = 0
      }

      AuthenticationService.verifiedUser(obj)
      .then((resq) => {
        if(resq.data.success){
         
          return this.$vs.notify({
            text: val ? 'Xác minh thành công' : 'Hủy xác minh thành công',
            color:'success',
            iconPack: 'feather',
            icon:'icon-check'});
        }else{
          return this.$vs.notify({
              text: 'Xác minh tài khoản thất bại',
              color:'danger',
              iconPack: 'feather',
              icon:'icon-alert-circle'});
        }
      })
      
    },
    mediaType(img) {
      if(img != null) {
        return this.dm + 'api/auth/me/photo/passport/' + img
      }else{
        return this.imgLinkDef
      }
    },
    getPopupViewImg(link){

      if(link != null){
        this.imgLink = this.dm + 'api/auth/me/photo/passport/' + link
      }else{
        this.imgLink = this.imgLinkDef
      }
      this.popupViewImg = true;
    },
    getOrderStatusColor(status) {
      if(status == 0) return "warning"
      if(status == 1) return "success"
      //if(status == 2) return "danger"
      return "warning"
    },
    getOrderStatusColorText(status) {
      if(status == 0) return "Chưa xác minh"
      if(status == 1) return "Đã xác minh"
      //if(status == 2) return "danger"
      return "Chưa xác minh"
    },

    openLoadingInDiv(){
            this.$vs.loading({
                container: '#loading-corners',
                type: 'corners',
                scale: 0.6
            })
    },
    getData(){
      if(this.isMounted){
         this.openLoadingInDiv();
      }

      const offset = (this.currentPage - 1 ) * this.itemsPerPage;
      const limit = this.itemsPerPage
      const params = {offset, limit}

      if(this.searchText){
        params.s = this.searchText;
      }
      // this.openLoadingInDiv();
      AuthenticationService.getAllMember(params)
      .then((resp) => {

        this.$vs.loading.close('#loading-corners > .con-vs-loading');

        if(resp.data.success == 4){
            localStorage.removeItem('token');
            this.$router.push('/pages/login').catch(() => {})
        }else{
            this.totalItems = resp.data.data.count;
            this.productsFake = resp.data.data.items;
        }
      })
    },

    search: debounce(function () {
        this.getData()
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

    //let token = localStorage.getItem('token')
    //this.$store.dispatch('setToken', token)

    this.getData()

  },
  mounted() {
    this.isMounted = true;
    this.openLoadingInDiv();
  },

  watch:{
    currentPage(){
      this.getData()
    },

    searchText(){
      this.currentPage = 1;
      this.search()
    }

  }
}
</script>

<style lang="scss">
#list-verify-account {
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
