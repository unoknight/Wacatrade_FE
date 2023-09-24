<template>
  <div id="userInfoPage" class="userInfoPage">
    <div class="container mt-5">
      <div class="vx-row">
        <div class="w-full ">
          <div class="panel">
            <div class="panel-header">
              <h3 class="colorWhite">
                {{ $t('Profile_PersonalData') || "Personal data" }}
              </h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <did class="col-md-6 col-lg-4">
                  <div class="flex mb-3 uploadAvatar align-items-center">
                    <div>
                      <vs-avatar v-if="!avatar" :src="require('@/assets/images/avatar/da.jpg')" size="80px"
                        class="mr-4" />
                      <!--<vs-avatar v-else-if="url_avatar!=''" :src="url_avatar" size="80px" class="mr-4" /> -->
                      <vs-avatar v-else-if="!!avatar" :src="`${dm}api/auth/me/photo/${avatar}`" size="80px"
                        class="mr-4" />
                    </div>

                    <div>
                      <input type="file" class="hidden" name="image" ref="update_avatar_input"
                        @change="update_avatar($event.target.files)" accept="image/png, image/jpg, image/jpeg" />
                      <vs-button color="#389a11" class="ml-4 button-rouner"
                        @click="$refs.update_avatar_input.click()">{{ $t('Profile_ChangePhoto') || "Change photo" }}</vs-button>
                    </div>
                  </div>
                </did>
              </div>
              <div class="row">
                <div class="col-md-6 col-lg-4">
                  <vs-input :label="this.$t('Profile_EmailAddress') || 'Email'" v-model="email" class="w-full mt-2" disabled />
                </div>
                <div class="col-md-6 col-lg-4">
                  <vs-input :label="this.$t('Profile_Nickname') || 'Nickname'" v-model="nickName" class="w-full mt-2" disabled />
                </div>
                
              </div>
              <div class="mt-2 row">
                <div class="col-md-6 col-lg-4">
                  <vs-input :label="this.$t('Profile_FirstName') || 'Email'" v-model="frist_n" class="w-full mt-2"  />
                </div>
                <div class="col-md-6 col-lg-4">
                  <vs-input :label="this.$t('Profile_LastName') || 'Email'" v-model="last_n" class="w-full mt-2"  />
                </div>
              </div>
              <div class="mt-2 row">
                <vs-button color="#389a11" style="max-width: 140px;" class="mt-2 mb-2 ml-4 button-rouner">{{ $t('Profile_ChangeInfo') || "Change password" }}</vs-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 vx-row">
        <div class="w-full ">
          <div class="panel">
            <div class="panel-header">
              <h3 class="colorWhite">
                {{ $t('Profile_AccountVerification') || "Account verification" }}
              </h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <did class="col-md-4 col-lg-4">
                  <span class="colorWhite">
                    {{ $t('Profile_IDVerification') || "ID verification" }}
                  </span>
                </did>
                <div class="flex col-md-8 col-lg-8">
                  <p class="colorWhite1 flex-fill">
                    {{ $t('Profile_IDVerificationContent') || "To secure your assets, we have to verify your identity.Please fill in correct information, it cannot be edited once verified." }}
                  </p>
                  <vs-button v-if="getDataJson.verify == 0" color="#389a11" class="mt-2 mb-2 ml-4 button-rouner button-vefiry"
                    @click.stop="showHoSoSetting()">{{ $t('Profile_VerifyNow') || "Verify now" }}</vs-button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 vx-row">
        <div class="w-full ">
          <div class="panel">
            <div class="panel-header">
              <h3 class="colorWhite ">
                {{ $t('Profile_Security') || "Security" }}
              </h3>
            </div>
            <div class="panel-body">
              <div class="row">
                <did class="col-md-4 col-lg-4">
                  <span class="colorWhite">
                    {{ $t('Profile_Password') || "Password" }}
                  </span>
                </did>
                <div class="flex col-md-8 col-lg-8">
                  <p class="colorWhite1 flex-fill">
                    {{ $t('Profile_PasswordContent') || "Would you like to change your password? Click the button below and change it." }}
                  </p>
                  <vs-button color="#389a11" class="mt-2 mb-2 ml-4 button-rouner"
                    @click="popupActiveChangePass = true">{{ $t('Profile_ChangePassword') || "Change password" }}</vs-button>


                </div>
              </div>
              <div class="row">
                <did class="col-md-4 col-lg-4">
                  <span class="colorWhite">
                    {{ $t('Profile_2FaCode') || "2FA code" }}
                  </span>
                </did>
                <div class="flex col-md-8 col-lg-8">
                  <p class="colorWhite1 flex-fill">
                    {{ $t('Profile_2FaCodeContent') || "2FA code" }}
                  </p>

                  <div v-if="!DISABLE_2FA" class="mt-2 mb-2 ml-4 info-switch">
                    <vs-switch color="success" v-model="swi2Fa" @change="on2FA">
                      <template #off>
                        Off
                      </template>
                      <template #on>
                        On
                      </template></vs-switch>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <vs-popup background-color="rgba(0,0,0,.6)" :background-color-popup="colorxChangePass" title="Đổi mật khẩu"
      :active.sync="popupActiveChangePass">
      <div class="vx-vx-row">
        <div class="w-full vx-col">
          <vs-input type="password" label="Mật khẩu cũ" maxlength="20" v-model="passOld" name="passOld"
            class="w-full mt-2" />
        </div>

        <div class="w-full vx-col">
          <vs-input type="password" label="Mật khẩu mới" maxlength="20" v-model="passNew" name="passNew"
            class="w-full mt-2" />
        </div>

        <div class="w-full vx-col">
          <vs-input type="password" label="Nhập lại mật khẩu mới" maxlength="20" v-model="passRenew" name="passReNew"
            class="w-full mt-2" />
        </div>
        <div class="w-full mt-5 vx-col">
          <small class="italic red" v-if="!getDataJson.c2fa && !DISABLE_2FA">* Bạn phải bật 2FA để điều chỉnh</small>
          <vs-button v-else color="success" type="border" :disabled="disableChangePass" @click="ChangeNewPass()">Đồng
            ý</vs-button>
        </div>
      </div>
    </vs-popup>
    <ho-so-setting :isSidebarActive="SidebarHSSetting" @closeSidebar="toggleDataSidebar" />

    <vs-prompt title="Xác thực Google" @close="closeGG2FA" :active.sync="popupActive2FA" :buttons-hidden="true">
      <VuePerfectScrollbar style="height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 10px)"
        class="scroll-area--data-list-add-new">
        <google-auth />
      </VuePerfectScrollbar>
    </vs-prompt>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import AuthenticationService from "@/services/AuthenticationService";
import HoSoSetting from "@/pages/trade/slidebar/HoSoSetting.vue";
import getData from "@/pages/trade/navbar/components/data.json";
import GoogleAuth from "@/pages/trade/slidebar/2FAGoogle";
import config from "@/config.json";

export default {
  props: {
    data: {
      type: Object,
      default: () => { },
    },
  },
  components: {
    VuePerfectScrollbar,
    HoSoSetting,
    GoogleAuth,
  },
  data() {
    return {
      getDataJson: getData,
      dm: config.domain,
      disableChangePass: false,
      passOld: "",
      passNew: "",
      passRenew: "",
      avatar: "df.jpg",
      url_avatar: "",
      nickName: "",
      email: "",
      frist_n: "",
      last_n: "",
      code_2fa:"",
      swi2Fa: false,
      num_secury: 0,
      colorxChangePass: "#def1d1",
      popupActiveChangePass: false,
      popupActive2FA: false,
      SidebarHSSetting: false,
      sidebarDataSetting: {},
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
      DISABLE_2FA: false
    };
  },
  methods: {
    update_avatar(file) {

      this.urlPassFront = URL.createObjectURL(file[0]);

      const formData = new FormData();
      formData.append("image", file[0]);
      formData.append("nick", getData.displayName);

      AuthenticationService.uploadAvatar(formData).then((res) => {
        if (res.data.success) {
          return this.$vs.notify({
            text: "Ảnh đại diện thay đổi thành công.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "success",
          });
        }
      });
    },
    setInfo() {
      this.nickName = this.getDataJson.displayName;
      this.avatar = this.getDataJson.profile_image;
      this.email = this.getDataJson.email;
      this.frist_n = this.getDataJson.first_name;
      this.last_n = this.getDataJson.last_name;
      this.swi2Fa = this.getDataJson.c2fa;
      this.code_2fa = this.getDataJson.secret_2fa;
      this.num_secury = this.getDataJson.num_secu;
    },
    showHoSoSetting() {
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.SidebarHSSetting = val;
    },
    on2FA() {
      this.swi2Fa ? (this.swi2Fa = false) : (this.swi2Fa = true);

      // bật 2Fa
      this.popupActive2FA = true;
    },
    closeGG2FA() {
      if (!getData.c2fa) {
        this.swi2Fa = false;
      } else {
        this.swi2Fa = true;
      }
    },
    ChangeNewPass() {
      this.disableChangePass = true;

      if (this.passOld == "" || this.passNew == "" || this.passRenew == "") {
        return this.$vs.notify({
          text: "Mật khẩu không được rỗng.",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
          position: "top-right",
        });
      }

      if (this.passNew != this.passRenew) {
        return this.$vs.notify({
          text: "Mật khẩu mới của bạn không khớp.",
          iconPack: "feather",
          icon: "icon-alert-circle",
          color: "warning",
          position: "top-right",
        });
      }

      let obj = {
        email: this.email,
        passOld: this.passOld,
        password: this.passNew,
        code_secure: this.num_secury,
      };

      AuthenticationService.changePassword2(obj).then((res) => {
        this.disableChangePass = false;
        if (res.data.success == 1) {
          return this.$vs.notify({
            text: "Mật khẩu đã được đổi thành công.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "success",
          });
        } else if (res.data.success == 0) {
          return this.$vs.notify({
            text: "Mật khẩu cũ không đúng.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        } else if (res.data.success == 3) {
          return this.$vs.notify({
            text: "Mật khẩu đổi thất bại.",
            iconPack: "feather",
            icon: "icon-check",
            position: "top-right",
            color: "danger",
          });
        }
      });
    },
  },

  created() {
    if (this.getDataJson.email) {
      this.setInfo();
    }
    else {
      const watch = this.$watch("getDataJson.email", () => {
        this.setInfo();
        watch();
      })
    }
  },
};
</script>

<style scoped src="bootstrap/dist/css/bootstrap.css"></style>

<style scoped src="bootstrap-vue/dist/bootstrap-vue.css"></style>

<style scoped lang="scss">
::v-deep .vdp-datepicker input[disabled] {
  opacity: 1;
}

.text-danger {
  color: #FA5F65 !important;
}

.text-success {
  color: #3BB5A0 !important;
}

.table> :not(caption)>*>*,
.table> :not(:first-child) {
  border: 1px solid #1f2f53 !important;
}

#tradeHisPage {
  padding: 25px 4rem;
}

.dateRange>span {
  flex: 0 0 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}

.dateRange .customeTradeHistory:first-child {
  padding-right: 20px;
}

.dateRange .customeTradeHistory:last-child {
  padding-right: 20px;
}

.dateRange {
  display: flex;
  max-width: 300px;
}

.wrap-chart {
  border-radius: 5px;
  position: relative;
}

.bostats {
  border: 1px solid #1f2f53 !important;
  overflow: hidden;
  background-color: #02142b !important;
  border-radius: 20px;
}

.bostats .chart-instance {
  background-color: #02142b !important;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-bottom: 5px;
}

.textTrade {
  padding-top: 1rem;
  padding-left: 3rem;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
}

.wrap-chart .chart-instance p.value {
  font-size: 20px;
  font-weight: 700;
}

.wrap-chart .chart-instance .label>span.round {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  margin-right: 5px;
}

.wrap-chart .chart-instance .label>span.round:after {
  position: absolute;
  content: "";
  display: block;
  overflow: hidden;
  width: 16px;
  height: 16px;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  background-color: #02142b;
}

.wrap-chart .chart-instance .label>span {
  vertical-align: middle;
}

@media screen and (max-width: 767.98px) {
  .wrap-chart .wrap {
    text-align: center;
  }
}

.borderRightColor {
  border-right: 1px solid hsla(0, 0%, 100%, 0.22);
}

.text-buy-sell {
  font-weight: 700;
  font-size: 17px;
  text-transform: uppercase;
}

.tradeHistory .userStat.revenue {
  background-color: #04c592;
}

.tradeHistory .userStat.profits {
  background: #389a11;
}

.tradeHistory .userStat {
  border-radius: 14px;
  padding-left: 30px;
  padding-right: 30px;
}

.tradeHistory .userStat .wrap {
  flex: 1;
  display: flex;
  max-width: 300px;
  align-items: center;
}

.tradeHistory .userStat .info {
  flex: 1;
}

.tradeHistory .userStat .icon {
  flex: 0 0 60px;
  max-width: 60px;
}

.tradeHistory .userStat .info .name {
  font-size: 20px;
  color: hsla(0, 0%, 100%, 0.67) !important;
}

.tradeHistory .userStat .info .value {
  font-size: 30px;
}

.stacked-bar-chart-title {
  color: hsla(0, 0%, 100%, 0.5) !important;
}

.icon {
  width: 24px;
  height: 50px;
  margin-right: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.borderTopColor {
  border-top: 1px solid rgba(255, 255, 255, 0.22);
}

.history .box-result-header {
  color: rgba(255, 255, 255, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  padding: 10px 5px;
  height: 50px;
}

.history .box-result .item {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  padding: 10px 5px;
  height: 50px;
}

.history .box-result .block-col.amount {
  flex: 0 0 85px;
  max-width: 85px;
}

.history .box-result .block-col.status {
  flex: 0 0 90px;
  max-width: 90px;
}

.history .box-result .block-col p>span {
  line-height: 30px;
}

.history .box-result .item svg {
  width: 14px;
  margin-right: 5px;
  vertical-align: middle;
}

.history .box-result .block-col.amount span {
  padding: 0 10px;
}

.history .box-result .item span {
  font-size: 14px;
}

.history .box-result .block-col>span {
  line-height: 30px;
}

.history .box-result .block-col.note span {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  width: 100%;
}

.history .item-txid-desc {
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
  white-space: nowrap;
  display: block !important;
}

.history-nav .nav-tabs {
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.history .box-result .block-col>span {
  line-height: 30px;
}

.history .box-result .block-col {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  padding-top: 0;
  padding-bottom: 0;
}

.history .box-result .block-col.time {
  flex: 0 0 110px;
  max-width: 110px;
}

.history-body {
  background: #02142b;
  border-radius: 5px;
  border: none;
  padding: 0 !important;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

#userInfoPage .container{
  padding-right: 0px !important;
}

</style>
<style>
.theme-dark .apexcharts-canvas .apexcharts-pie-series path {
  stroke: transparent !important;
}

.content .inputGroup input {
  background: #fff;
  color: #545454;
}

#content-area{
  overflow-x: hidden !important; 
}
</style>
