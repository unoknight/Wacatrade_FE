<!-- =========================================================================================
  Description: Data List - List View
  ----------------------------------------------------------------------------------------
  Item Name: Admin
  Author: Ares
  Author Telegram: @skydn93
========================================================================================== -->

<template>
  <div id="list-all-account" class="data-list-container">

    <vs-prompt title="Export To Excel" class="export-options" @cancle="clearFields" @accept="exportToExcel"
      accept-text="Export" @close="clearFields" :active.sync="activePrompt">
      <vs-input v-model="fileName" placeholder="Enter File Name.." class="w-full" />
      <v-select v-model="selectedFormat" :options="formats" class="my-4" />
      <div class="flex">
        <span class="mr-4">Cell Auto Width:</span>
        <vs-switch v-model="cellAutoWidth">Cell Auto Width</vs-switch>
      </div>
    </vs-prompt>

    <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" />
    <div id="loading-corners" class="vs-con-loading__container">
      <vs-table ref="table" v-model="selectedUser" :data="products">

        <div slot="header" class="flex flex-wrap-reverse items-center justify-between flex-grow">

          <div class="flex flex-wrap-reverse items-center data-list-btn-container">

          </div>

          <!-- ITEMS PER PAGE -->
          <vs-dropdown vs-trigger-click class="mb-4 mr-4 cursor-pointer items-per-page-handler">
            <div
              class="flex items-center justify-between p-4 font-medium border border-solid rounded-full cursor-pointer d-theme-border-grey-light d-theme-dark-bg">
              <span class="mr-2 text-black">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ (currentPage - 1) *
                itemsPerPage + itemsPerPage }} trong {{ totalItems }}</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>

              <vs-dropdown-item @click="itemsPerPage = 4">
                <span>4</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage = 10">
                <span>10</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage = 15">
                <span>15</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage = 20">
                <span>20</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
          <div class="con-input-search vs-table--search">
            <input v-model="searchText" class="input-search vs-table--search-input" type="text">
            <vs-icon icon="search"></vs-icon>
          </div>
        </div>

        <template slot="thead">
          <vs-th sort-key="email">Email</vs-th>
          <vs-th sort-key="nickname">Tên</vs-th>
          <vs-th sort-key="wallet">Wallet USDT</vs-th>
          <vs-th sort-key="wallet">Live</vs-th>
          <vs-th sort-key="pending_commission">Hoa Hồng</vs-th>
          <vs-th sort-key="secury2fa">Bảo mật 2FA</vs-th>
          <vs-th sort-key="datecreate">Ngày tạo</vs-th>
          <vs-th>Tác vụ</vs-th>
        </template>

        <template slot-scope="{data}">
          <tbody>
            <vs-tr :data="tr" :key="tr.id" v-for="(tr, indextr) in data">

              <vs-td>
                <p class="font-medium truncate user-name">{{ tr.email }}</p>
                <p>
                  <!--Địa chỉ BTC: <span style="color: #f8a037" @click="clickGetAddress(tr.address_BTC, tr.privateKey_BTC, tr.wif_BTC)">{{ tr.address_BTC }}</span><br>
                          Địa chỉ ETH: <span style="color: #627eea" @click="clickGetAddress(tr.address_ETH, tr.privateKey_ETH, '')">{{ tr.address_ETH }}</span><br>-->
                  -- Địa chỉ USDT: <span style="color: #26a17b"
                    @click="clickGetAddress(tr.address_USDT, tr.privateKey_USDT, '')">{{ tr.address_USDT }}</span>
                  <br>
                  *** Tổng CHƠI: <span class="italic" style="color: #ff9900">${{ formatPrice(tr.pricePlay, 2)
                  }}</span><br>
                  *** Tổng THẮNG: <span class="italic" style="color: #10ff00">${{ formatPrice(tr.priceWin, 2)
                  }}</span><br>
                  *** Tổng THUA: <span class="italic" style="color: #ff5c5c">${{ formatPrice(tr.priceLose, 2)
                  }}</span><br>
                  *** Lời: <span class="italic font-bold" style="color: #00ff89">${{ formatPrice(tr.priceWin -
                    tr.priceLose, 2) }}</span><br>
                  <vx-tooltip v-if="!tr.active" style="float: left" text="Kích hoạt tài khoản">
                    <vs-button color="warning" class="px-3 py-2 text-sm" style="border-radius: 20px;"
                      @click.stop.prevent="activeAccount(tr)"> Kích hoạt tài khoản</vs-button>
                  </vx-tooltip>
                  <vs-chip v-else color="success" class="cursor-default"> Đã kích hoạt</vs-chip>
                </p>
              </vs-td>

              <vs-td>
                <p class="font-medium truncate user-name">
                  {{ tr.first_name + ' ' + tr.last_name }}<br>
                  Biệt danh: {{ tr.nick_name }}<br>
                 
                </p>
                <p>Loại tài khoản: {{ tr.marketing == 0 ?"Thường":"Marketing" }}</p>
                <p>
                  <vs-button color="dark" type="line" icon-pack="feather" icon="icon-eye"
                    @click="showF1F7(tr.nick_name, tr.ref_code, tr.email)"> F1-F7</vs-button>
                  <vs-button color="success" icon-pack="feather" icon="icon-zap" @click="showCapTren(tr.upline_id)">Xem
                    cấp trên</vs-button>
                  <br>
                  <vs-button @click="showTKLive(tr.ref_code)">Số dư tài khoản</vs-button>
                </p>
              </vs-td>

              <vs-td>
                <p class="user-price">
                  ${{ formatPrice(tr.money_usdt, 2) }}
                </p>
              </vs-td>
              <vs-td>
                <p class="user-price">
                  ${{ formatPrice(tr.real_balance, 2) }}
                </p>
              </vs-td>
              <vs-td>
                <p class="user-commission">{{ formatPrice(tr.pending_commission, 2) }}</p>
              </vs-td>

              <vs-td>
                <p>Mã xác nhận 2FA:<br>{{ tr.code_secure != null ? tr.code_secure : 'Chưa tạo' }}</p>
                <vs-chip :color="getOrderStatusColor(tr.active_2fa)" class="user-order-status">{{
                  getOrderStatusColorText(tr.active_2fa) | title }}</vs-chip>
                <vs-button size="small" v-if="tr.active_2fa" @click="turnOff2fa(tr)">Tắt</vs-button>
              </vs-td>

              <vs-td>
                <p class="user-create">{{ formatDate(tr.created_at) }}</p>
              </vs-td>

              <vs-td class="text-center whitespace-no-wrap">
               
                <vx-tooltip style="float: left" :title="tr.nick_name" color="info" text="Khôi phục tài khoản">
                  <vs-button color="dark" type="line" icon-pack="feather" icon="icon-refresh-cw"
                    @click="openPopRefresh({ id: tr.id, email: tr.email, index: indextr })"></vs-button>
                </vx-tooltip>


                <!-- <feather-icon icon="DollarSignIcon" svgClasses="w-5 h-5 hover:text-success stroke-current" @click.stop="addMoneyUser({id: tr.id, type: 'addMoney'})" />
                    <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current" @click.stop="editUser(tr)" />
                    <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteUser(tr.id)" /> -->
              </vs-td>
            </vs-tr>
          </tbody>
        </template>
      </vs-table>
      <vs-pagination :total="totalPage" v-model="currentPage"
        class="con-pagination-table vs-table--pagination"></vs-pagination>

    </div>
    <vs-popup background-color="rgba(255,255,255,.6)" class="" title="Background" :active.sync="popupDeleteActive">
      <p> Bạn đồng ý xóa tài khoản {{ UserInfo.email }} này.</p>
      <vs-button icon="icon-trash" icon-pack="feather" type="gradient"
        @click.stop="deleteUser(UserInfo.id, UserInfo.index)">Đồng ý</vs-button>
    </vs-popup>
    <vs-popup background-color="rgba(255,255,255,.6)" class="" title="Background" :active.sync="popupRefreshActive">
      <p> Bạn đồng ý khôi phục tài khoản {{ UserInfo.email }} này.</p>
      <vs-button icon="icon-refresh-cw" icon-pack="feather" type="gradient"
        @click.stop="refreshUser(UserInfo.id, UserInfo.index)">Đồng ý</vs-button>
    </vs-popup>
    <vs-popup title="Address Wallet" :active.sync="popupAdressWallet">
      <p>
        Address: {{ getAdress }} <feather-icon icon="CopyIcon" v-clipboard:copy="getAdress" v-clipboard:success="onCopy"
          class="cursor-pointer"></feather-icon><br>
        Private Key: {{ getPrivateKey }} <feather-icon icon="CopyIcon" v-clipboard:copy="getPrivateKey"
          v-clipboard:success="onCopy" class="cursor-pointer"></feather-icon><br>
        WFI BTC Address: {{ getWfiKey }} <feather-icon icon="CopyIcon" v-clipboard:copy="getWfiKey"
          v-clipboard:success="onCopy" class="cursor-pointer"></feather-icon>
      </p>
    </vs-popup>
    <vs-popup title="Danh sách thành viên F1 - F7" :active.sync="popupF1F7">
      <div id="loading-corners2" class="vs-con-loading__container">
        <p>
          <span class="mr-2">Khối lượng GH tháng này: ${{ formatPrice(tslgdCD1, 2) }}</span><br>
          <span class="mr-2">Khối lượng GH tháng trước: ${{ formatPrice(tslgdCD2, 2) }}</span><br>
          <span class="mr-2">Khối lượng GH 2 tháng trước: ${{ formatPrice(tslgdCD3, 2) }}</span><br>
          <span class="mr-2">Khối lượng GH 3 tháng trước: ${{ formatPrice(tslgdCD4, 2) }}</span><br>
        </p>
        <v-tree ref='tree' :data='treeData' :draggable='true' />
      </div>

      <!--<v-tree ref='tree' :canDeleteRoot="true" :data='treeData' :draggable='true' :tpl='tpl' :halfcheck='true' :multiple="true"/>-->
    </vs-popup>
    <vs-popup title="Xem cấp trên" :active.sync="popupCapTren">
      <div id="loading-corners3" class="vs-con-loading__container">
        <div v-if="!dataSuperior">Nick này không có cấp trên!</div>
        <div v-else>
          <div>Chi tiết cấp trên</div>
          <div>Email: {{ dataSuperior.email }}</div>
          <div>Nickname: {{ dataSuperior.nick_name }}</div>
          <div>Tên đầy đủ: {{ dataSuperior.first_name }} {{ dataSuperior.last_name }}</div>
          <div>Refcode: {{ dataSuperior.ref_code }}</div>
          <div>Upline ID: {{ dataSuperior.upline_id || 'null' }}</div>
          <div>Xác minh: {{ dataSuperior.verified == 1 ? "Yes" : "No" }}</div>
          <div>Vip: {{ dataSuperior.vip_user }}</div>
        </div>
      </div>
    </vs-popup>
    <vs-popup title="Xem chi tiết tài khoản" :active.sync="popupTKLive">
      <div id="loading-corners3" class="vs-con-loading__container">
        <div v-if="!dataMoneyAccount">Đợi xíu nhé</div>
        <div v-else-if="dataMoneyAccount.demo || dataMoneyAccount.live">
          <div>Tài khoản LIVE</div>
          <div>Số tiền: {{ dataMoneyAccount.live.balance }}$</div>
          <div>Tổng thắng: {{ dataMoneyAccount.live.win }}$</div>
          <div>Tổng thua: {{ dataMoneyAccount.live.lose }}$</div>
          <br>
          <div>Tài khoản DEMO</div>
          <div>Số tiền: {{ dataMoneyAccount.demo.balance }}$</div>
          <div>Tổng thắng: {{ dataMoneyAccount.demo.win }}$</div>
          <div>Tổng thua: {{ dataMoneyAccount.demo.lose }}$</div>
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import DataViewSidebar from '@/layouts/account/slidebar/DataViewSidebar.vue'
import vSelect from 'vue-select'
import AuthenticationService from '@/services/AuthenticationService'
import moment from 'moment'
import Vue from 'vue'
import { VTree, VSelectTree } from 'vue-tree-halower';
import { debounce } from "debounce";

export default {
  components: {
    DataViewSidebar,
    vSelect,
    VTree,
    //VSelectTree
  },
  data() {
    return {
      tslgdCD1: 0,
      tslgdCD2: 0,
      tslgdCD3: 0,
      tslgdCD4: 0,

      treeData: [
        {
          title: 'node1',
          expanded: true,
          children: [
            {
              title: "<span style='color: red'>node 1-1</span>",
              expanded: true,
              children: [
                {
                  title: 'node 1-1-1'
                }, {
                  title: 'node 1-1-2'
                }, {
                  title: 'node 1-1-3'
                }
              ]
            },
            {
              title: "<span style='color: red'>node 1-2</span>",
              children: [
                {
                  title: "node 1-2-1"
                }, {
                  title: "node 1-2-2"
                }
              ]
            }
          ]
        }
      ],
      dataSuperior: null,
      dataMoneyAccount: null,
      popupF1F7: false,
      popupCapTren: false,
      popupTKLive: false,
      getAdress: '',
      getPrivateKey: '',
      getWfiKey: '',
      popupAdressWallet: false,

      UserInfo: {},
      popupDeleteActive: false,
      popupRefreshActive:false,
      activePrompt: false,
      selectedUser: [],
      fileName: "",
      formats: ["xlsx", "csv", "txt"],
      cellAutoWidth: true,
      selectedFormat: "xlsx",
      headerTitle: ["Id", "Email", "Nick", "Money", "Commission", "Date Create"],
      headerVal: ["id", "email", "nickname", "wallet", "pending_commission", "created_at"],
      productsFake: [
        {
          "id": 1,
          "email": "abc@gmail.com",
          "nick_name": "SkyPlaza",
          "first_name": "Ares",
          "last_name": "BO",
          "profile_image": "https://vi.vuejs.org/images/logo.png",
          "money_vn": 100.00,
          "money_btc": 0.000000,
          "money_eth": 0.0100,
          "money_usdt": 1.00,
          "money_paypal": 0.00,
          "manage_supers": 1,
          "pending_commission": 0.00,
          "active_2fa": 0,
          "created_at": "00:00:00 02-04-2021"
        },
        {
          "id": 2,
          "email": "abc@gmail.com",
          "nick_name": "SkyPlaza 3",
          "first_name": "KK",
          "last_name": "Ares",
          "profile_image": "https://vi.vuejs.org/images/logo.png",
          "money_vn": 100.00,
          "money_btc": 0.000000,
          "money_eth": 0.0100,
          "money_usdt": 1.00,
          "money_paypal": 0.00,
          "manage_supers": 0,
          "pending_commission": 0.00,
          "active_2fa": 1,
          "created_at": "01:00:00 02-04-2021"
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
    // currentPage() {
    //   if(this.isMounted) {
    //     return this.$refs.table.currentx
    //   }
    //   return 0
    // },
    totalPage() {
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

    activeAccount(tr) {
      let data = {
        email: tr.email
      }

      AuthenticationService.activeUser(data).then((req) => {
        if (req.data.success == 1) {
          let index = this.productsFake.findIndex(e => e.email === tr.email);
          this.$set(this.productsFake[index], 'active', 1);
          return this.$vs.notify({
            text: 'Kích hoạt tài khoản thành công!',
            color: 'success',
            iconPack: 'feather',
            position: 'top-right',
            icon: 'icon-check'
          });
        }
        else {
          return this.$vs.notify({
            text: req.data.message,
            color: 'danger',
            iconPack: 'feather',
            position: 'top-right',
            icon: 'icon-x'
          });
        }

      }).catch((error) => {
        console.log(error);
      });
    },

    turnOff2fa(tr) {
      AuthenticationService.adminDisable2fa({ email: tr.email })
        .then((resp) => {
          if (resp.data.success) {
            tr.active_2fa = false;
            return this.$vs.notify({
              text: 'Xoá 2FA tài khoản thành công',
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-check'
            });
          }
        })
    },

    showCapTren(ref) {
      this.popupCapTren = true;
      this.openLoadingInDiv3();

      AuthenticationService.getSuperior(ref)
        .then((resp) => {
          this.$vs.loading.close('#loading-corners3 > .con-vs-loading');
          if (resp.data.success) {
            this.dataSuperior = resp.data.data;
          }
        })
    },

    showTKLive(ref) {
      this.popupTKLive = true;
      this.openLoadingInDiv3();

      AuthenticationService.getLiveAccount(ref)
        .then((resp) => {
          this.$vs.loading.close('#loading-corners3 > .con-vs-loading');
          if (resp.data.success) {
            this.dataMoneyAccount = {
              demo: resp.data.data.find((e) => e.type == 0),
              live: resp.data.data.find((e) => e.type == 1),
            };
          }
        })
    },
    showF1F7(nick, ref, email) {


      this.popupF1F7 = true;

      this.openLoadingInDiv2();

      this.treeData = [{
        title: nick,
        expanded: true,
        children: []
      }];

      let obj = {
        nick: nick,
        ref: ref,
        email: email
      }

      //console.log(Object.keys(test).length);

      AuthenticationService.getListF1F7(obj)
        .then((resp) => {

          this.$vs.loading.close('#loading-corners2 > .con-vs-loading');

          if (resp.data.success) {

            let data = resp.data.data;
            let obj = resp.data.obj;
            this.tslgdCD1 = obj.tslgdCD1;
            this.tslgdCD2 = obj.tslgdCD2;
            this.tslgdCD3 = obj.tslgdCD3;
            this.tslgdCD4 = obj.tslgdCD4;

            let c = 0;
            for (let obj in data) {
              c++;
              for (let i = 0; i < data[obj].length; i++) {
                this.treeData[0].children.push({ title: `<span style='color: white'>Cấp ${c} - ${data[obj][i].nick_name} - Khối lượng Giao Dịch: ${this.formatPrice(data[obj][i].tklgd, 2)}</span> - Tổng tiền nạp: ${this.formatPrice(data[obj][i].amt, 2)}` })
              }
            }
          }
        })

    },

    openLoadingInDiv2() {
      this.$vs.loading({
        container: '#loading-corners2',
        type: 'corners',
        scale: 0.6
      })
    },

    openLoadingInDiv3() {
      this.$vs.loading({
        container: '#loading-corners3',
        type: 'corners',
        scale: 0.6
      })
    },

    openLoadingInDiv() {
      this.$vs.loading({
        container: '#loading-corners',
        type: 'corners',
        scale: 0.6
      })
    },

    async changeAccType(tr) {
      const check = await this.$store.dispatch("check2fa");
      if (!check) {
        tr.marketing = !tr.marketing;
        return;
      };
      const { id } = tr;
      let obj = {
        id: id,
        type: tr.marketing ? 0 : 1
      }

      AuthenticationService.changeAccMarketing(obj)
        .then((resp) => {
          if (resp.data.success === -1) {
            tr.marketing = false;
            return this.$vs.notify({
              text: resp.data.message,
              color: 'warning',
              iconPack: 'feather',
              icon: 'icon-check'
            });
          } else {
            if (resp.data.success) {
              return this.$vs.notify({
                text: 'Đã thay đổi thành công tài khoản!',
                color: 'success',
                iconPack: 'feather',
                icon: 'icon-check'
              });
            } else {
              localStorage.removeItem('token');
              this.$router.push('/pages/login').catch(() => { })
            }
          }
        })

    },

    clickGetAddress(a, p, w) {
      this.popupAdressWallet = true
      if (w != '') {
        this.getWfiKey = w
      } else {
        this.getWfiKey = 'N/A'
      }
      this.getAdress = a
      this.getPrivateKey = p
    },

    onCopy() {
      this.$vs.notify({
        text: 'Đã sao chép vào bộ nhớ',
        color: 'success',
        iconPack: 'feather',
        position: 'top-center',
        icon: 'icon-check-circle'
      })
    },
    async deleteMultiple() {
      const check = await this.$store.dispatch("set");
      if (!check) {
        return;
      };
      for (var i = this.selectedUser.length - 1; i >= 0; i--) {
        let id = this.selectedUser[i]['id'];
        AuthenticationService.deleteMember(id)
        Vue.delete(this.productsFake, i)
      }
      this.selectedUser = []
      return this.$vs.notify({
        text: 'Đã xóa thành công',
        color: 'success',
        iconPack: 'feather',
        icon: 'icon-check'
      });
    },
    async openPopDelete(data) {
      const check = await this.$store.dispatch("check2fa");
      if (!check) {
        return;
      };
      this.UserInfo = data
      this.popupDeleteActive = true
    },
    async openPopRefresh(data){
      const check = await this.$store.dispatch("check2fa");
      if (!check) {
        return;
      };
      this.UserInfo = data
      this.popupRefreshActive = true
    },

    deleteUser(id, index) {
      let token = localStorage.getItem('token')
      this.$store.dispatch('setToken', token)

      AuthenticationService.deleteMember(id)
        .then((resp) => {
          if (resp.data.success) {
            Vue.delete(this.productsFake, index)
            this.popupDeleteActive = false
            return this.$vs.notify({
              text: 'Đã xóa thành công',
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-check'
            });
          } else {
            localStorage.removeItem('token');
            this.$router.push('/pages/login').catch(() => { })
          }
        })
    },
    refreshUser(id, index) {
      let token = localStorage.getItem('token')
      this.$store.dispatch('setToken', token)

      AuthenticationService.recoverMember(id)
        .then((resp) => {
          if (resp.data.success) {
            Vue.delete(this.productsFake, index)
            this.popupRefreshActive = false
            return this.$vs.notify({
              text: 'Đã khôi phục thành công',
              color: 'success',
              iconPack: 'feather',
              icon: 'icon-check'
            });
          } else {
            localStorage.removeItem('token');
            this.$router.push('/pages/login').catch(() => { })
          }
        })
    },
    
    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat('en-US', {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum
      });
      return formatter.format(value);
    },
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm:ss')
      }
    },
    async addMoneyUser(data) {
      const check = await this.$store.dispatch("check2fa");
      if (!check) {
        return;
      };
      data["type"] = 'addMoney'
      this.sidebarData = data
      this.toggleDataSidebar(true)
    },
    addNewAccount() {
      this.sidebarData = {}
      this.toggleDataSidebar(true)
    },
    async editUser(data) {
      const check = await this.$store.dispatch("check2fa");
      if (!check) {
        return;
      };
      delete data["type"]
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data
      this.toggleDataSidebar(true)

    },
    getOrderStatusColor(status) {
      if (status == 0) return "warning"
      if (status == 1) return "success"
      //if(status == 2) return "danger"
      return "warning"
    },
    getOrderStatusColorText(status) {
      if (status == 0) return "Chưa bật"
      if (status == 1) return "Đã bật"
      //if(status == 2) return "danger"
      return "Chưa bật"
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val
    },




    // export ra file
    exportToExcel() {
      // kiểm tra nếu chưa chọn đối tượng thình sẽ không hiện bản xuất file
      if (this.selectedUser.length == 0) {
        return this.$vs.notify({
          title: 'Xuất dữ liệu',
          text: 'Vui lòng chọn nội dung để hoàn thành',
          color: 'danger',
          iconPack: 'feather',
          icon: 'icon-heart'
        });
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

    getData() {
      if (this.isMounted) {
        this.openLoadingInDiv();
      }

      const offset = (this.currentPage - 1) * this.itemsPerPage;
      const limit = this.itemsPerPage
      const params = { offset, limit }

      if (this.searchText) {
        params.s = this.searchText;
      }
      params.delete = "1";
      // this.openLoadingInDiv();
      AuthenticationService.getAllDeletedMember(params)
        .then((resp) => {


          this.$vs.loading.close('#loading-corners > .con-vs-loading');

          if (resp.data.success == 4) {
            localStorage.removeItem('token');
            this.$router.push('/pages/login').catch(() => { })
          } else {
            this.totalItems = resp.data.data.count;
            this.productsFake = resp.data.data.items;
          }
        })
    },

    search: debounce(function () {
      this.getData()
    }, 500)
  },
  created() {
    // if(!moduleDataList.isRegistered) {
    //   this.$store.registerModule('dataList', moduleDataList)
    //   moduleDataList.isRegistered = true
    // }

    //this.$store.registerModule('dataList', this.productsFake);

    //this.$store.dispatch("dataList/fetchDataListItems")

    //console.log(this.$store.state.dataList);
    let token = localStorage.getItem('token')
    this.$store.dispatch('setToken', token)
    this.getData();

  },
  mounted() {
    this.isMounted = true;
    this.openLoadingInDiv();
  },

  watch: {
    currentPage() {
      this.getData()
    },

    searchText() {
      this.currentPage = 1;
      this.search()
    }

  }
}
</script>

<style lang="scss">
@import "@/assets/scss/vuexy/extraComponents/tree.scss";

button.btn-async {
  background: rgba(var(--vs-warning), 0.15);
}

button.btn-delete {
  background: rgba(var(--vs-danger), 0.15);
}
</style>

<style lang="scss">
#list-all-account {
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

      >span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search {
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

      tr {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .05);

        td {
          padding: 20px;

          &:first-child {
            border-top-left-radius: .5rem;
            border-bottom-left-radius: .5rem;
          }

          &:last-child {
            border-top-right-radius: .5rem;
            border-bottom-right-radius: .5rem;
          }
        }

        td.td-check {
          padding: 20px !important;
        }
      }
    }

    .vs-table--thead {
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text {
          text-transform: uppercase;
          font-weight: 600;
        }
      }

      th.td-check {
        padding: 0 15px !important;
      }

      tr {
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}</style>
