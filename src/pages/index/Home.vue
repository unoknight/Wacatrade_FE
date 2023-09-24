<template>
  <div class="home">
    <section class="sec--01">
      <header class="h-header-custom">
        <img width="80" :src="require('@/assets/images/logo/logo.png')" alt="BO" />
        <div class="header--btn">
          <div class="header--btn_login" @click="RegisterUrl">
            {{ $t("Landingpage_Register") }}
          </div>
          <div class="header--btn_register" @click="LoginUrl">
            {{ $t("Landingpage_Login") }}
          </div>
        </div>
      </header>
      <div class="content">
        <section class="sec-01">
          <div class="flex sec-01-content">
            <div class="xl:text-left sub_content">
              <div class="xl:text-left title">
                {{ $t("Landingpage_MainTitle") }}
              </div>
              <div class="xl:text-left des">
                {{ domain }} {{ $t("Landingpage_MainDescription") }}
              </div>
              <div class="my-10 btn" @click="LoginUrl">
                {{ $t("Landingpage_TitleButton") }}
              </div>
            </div>
            <div class="image-feature">
              <img class="home-image" :src="require('@/assets/images/landing_v2/main_banner_3.png')" />
            </div>

            <!-- <div class="main-banner-image"></div> -->
          </div>
        </section>
      </div>
    </section>

    <section class="sec--02">
      <div class="container">
        <div class="mb-2"></div>
        <img class="logo_image" width="200" :src="require('@/assets/images/logo/logo.png')" alt="BO" />
        <div class="mx-auto title">{{ $t("Landingpage_TitleSec02") }}</div>
        <div class="mx-auto des">
          {{ domain }} {{ $t("Landingpage_DescriptionSec02") }}
        </div>

        <img class="intro-image" :src="require('@/assets/images/landing_v2/Mockup-1.png')" />
      </div>
    </section>

    <section class="sec--03">
      <div class="container">
        <div class="row flex-container">
          <div class="text-center col-12 col-md-6 col-lg-6 trade-faster-img hidden-sm">
            <img class="intro-image" :src="require('@/assets/images/landing_v2/trade-faster-img.png')" />
          </div>
          <div class="text-center col-12 col-md-6 col-lg-6 trade-faster-text">
            <div class="pl-6">
              <h2 class="title">
                {{ $t("Landingpage_TitleSec03") }}
              </h2>
              <p class="description">
                {{ $t("Landingpage_Description1Sec03") }} {{ domain }}
                {{ $t("Landingpage_Description2Sec03") }}
              </p>
              <div class="btn" @click="LoginUrl">
                {{ $t("Landingpage_TitleButton") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sec--04">
      <div class="container">
        <div class="header">
          <h2 class="title">{{ $t("Landingpage_TitleSec04") }}</h2>
          <p class="description">
            {{ $t("Landingpage_DescriptionSec04") }}
          </p>
        </div>
        <div class="row">
          <div class="layer-col">
            <div class="sub-item">
              <div class="sub-content">
                <img class="intro-image" :src="require('@/assets/images/landing_v2/security_img_1.png')
                  " />
                <h3 class="mt-2 sub-title">
                  {{ $t("Landingpage_SubTitle1Sec04") }}

                </h3>
                <p class="sub-des">
                  {{ $t("Landingpage_SubDescription1Sec04") }}
                </p>
              </div>
            </div>
          </div>
          <div class="layer-col">
            <div class="sub-item">
              <div class="sub-content">
                <img class="intro-image" :src="require('@/assets/images/landing_v2/security_img_2.png')
                  " />
                <h3 class="mt-2 sub-title"> {{ $t("Landingpage_SubTitle2Sec03") }}</h3>
                <p class="sub-des">
                  {{ $t("Landingpage_SubDescription2Sec04") }}

                </p>
              </div>
            </div>
          </div>
          <div class="layer-col">
            <div class="sub-item">
              <div class="sub-content">
                <img class="intro-image" :src="require('@/assets/images/landing_v2/security_img_3.png')
                  " />
                <h3 class="mt-2 sub-title"> {{ $t("Landingpage_SubTitle3Sec03") }}
                </h3>
                <p class="sub-des">
                  {{ $t("Landingpage_SubDescription3Sec04") }}

                </p>
              </div>
            </div>
          </div>
          <div class="layer-col">
            <div class="sub-item">
              <div class="sub-content">
                <img class="intro-image" :src="require('@/assets/images/landing_v2/security_img_4.png')
                  " />
                <h3 class="mt-2 sub-title"> {{ $t("Landingpage_SubTitle4Sec03") }}</h3>
                <p class="sub-des">
                  {{ $t("Landingpage_SubDescription4Sec04Part1") }} {{ domain }} {{
                    $t("Landingpage_SubDescription4Sec04Part2") }}

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="sec--05">
      <div class="container">
        <div class="content">
          <img class="img" :src="require('@/assets/images/landing_v2/Mockup-1.png')" />
          <h2 class="title"> {{ $t("Landingpage_TitleSec05") }} {{ domain }}</h2>
          <p class="description">
            {{ $t("Landingpage_DescriptionSec05") }}
          </p>

          <div class="my-10 btn" @click="LoginUrl"> {{ $t("Landingpage_TitleButton") }}
          </div>
        </div>
      </div>
    </section>

    <section class="sec--02">
      <div class="container">
        <div class="mb-2"></div>
        <div class="mx-auto title">{{ $t("Landingpage_TitleSec06") }}</div>
       
        <img class="intro-image img-cerfiticate" :src="require('@/assets/images/landing_v2/file-copy.-01.png')" />
       <div >
          <a class="my-10 btn" href="https://find-and-update.company-information.service.gov.uk/company/14928820" target="_blank"> {{ $t("Landingpage_TitleSec06Button") }}
          </a>
       </div>
        
      </div>  
    </section>
    <section class="sec--08">
      <div class="footerFAQs">
        <div class="container position-relative">
          <div class="flex flex-col py-3 pb-0 py-sm-5 blockRow border-bottom md:flex-row">
            <div class="block logo">
              <p class="mb-1 mb-lg-2">
                <img width="236" height="73" :src="require('@/assets/images/logo/logo.png')" alt="" />
              </p>
              <div class="font-12 txtContent">
                © 2021
                <div class="text-domain d-inline-block">{{ domain }}</div>
                All rights reserved.
              </div>
              <p>
                Email:
                <a :href="`mailto:${mail}`" class="emailLink">{{ mail }}</a>
              </p>
            </div>
            <div class="block md:pl-6">
              <h4> {{ $t("Landingpage_AboutUs") }}
              </h4>
              <ul>
                <li>
                  <p></p>
                </li>
              </ul>
            </div>
            <div class="block md:pl-6 support" style="flex: 0.5 1 0%">
              <h4>{{ $t("Landingpage_Support") }}</h4>
              <ul>
                <li>
                  <p>
                    <a href="/KingBoEx_Agency Obligations_vi.pdf" target="_blank"> {{
                      $t("Landingpage_MemberObligations") }}
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div class="block md:pl-6"></div>
            <div class="block md:pl-6">
              <i18n />
            </div>
          </div>
          <div class="py-3 mb-0 py-sm-5 blockRow">
            <div class="block">
              <p class="txtContent fullText">
                {{ $t("Landingpage_FullContent") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <log-reg-for-get />
  </div>
</template>

<style scoped lang="scss">

.btn{
  background: #389a11;
    text-align: center;
    padding: 20px 30px;
    border-radius: 8px !important;
    -webkit-transition: all 0.3s ease;
    cursor: pointer;
    color: #fff;
    text-transform: uppercase;
    display: inline-block;
    transition: all 0.3s ease;
    font-weight: 700;
}

.img-cerfiticate{
  max-width: 400px;
}

.home {
  background: #080d1f;
}

.sec--01 {
  overflow: hidden;
  padding-bottom: 180px;

  header {
    padding: 32px 86px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.4s;
    z-index: 9;

    .header--btn {
      display: flex;

      &_login,
      &_register {
        border-radius: 10px;
        padding: 11px 20px;
        font-weight: 700;
        font-size: 13px;
        color: #fff;
        cursor: pointer;
      }

      &_login {
        background: #389a11;
        margin-right: 1rem;
        margin-left: 0.25rem;
      }

      &_register {
        background: #1d233b;
      }
    }
  }

  .sec-01 {
    display: flex;

    -webkit-box-align: center;
    align-items: center;

    .sec-01-content {
      width: 100%;
      padding-left: 8rem;
      padding-right: 8rem;
      padding-top: 2.5rem;
      margin-left: 8rem;

      .image-feature {
        position: relative;
        width: 50%;

        img {
          position: absolute;
          right: -40px;
          height: 100%;
        }
      }
    }

    .title {
      font-weight: 800;
      font-size: 44px;
      line-height: 58px;
      color: #fff;
      margin-bottom: 24px;
    }

    .des {
      font-size: 16px;
      line-height: 27px;
      color: hsla(0, 0%, 100%, 0.5);
      margin-bottom: 30px;
      word-wrap: break-word;
    }

    .btn {
      background: #389a11;
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      padding: 20px 30px;
      border-radius: 8px !important;
      display: inline-block;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      font-weight: 700;

      cursor: pointer;
    }
  }

  .sub_content {
    width: 50%;
    margin-top: 170px;
  }

  &:before {
    // content: "";
    // display: block;
    // width: 799px;
    // height: 637px;
    // background: url("~@/assets/images/landing_v2/mainBanner.png") 0 0 no-repeat;
    // background-size: cover;
    // position: absolute;
    // right: 0;
    // top: 0;
    // z-index: 1;
    // opacity: 0.3;
  }

  width: 100%;
  position: relative;

  .home-image {
    z-index: 2;
    max-height: 430px;
  }

  .content {
    text-align: center;

    .title {
      font-size: 46px;
      line-height: 54px;
      color: #fff;
      font-weight: 700;
      max-width: 762px;
      margin-bottom: 25px;
    }

    .des {
      font-size: 16px;
      color: hsla(0, 0%, 100%, 0.5);
      line-height: 19px;
      margin-bottom: 20px;
      max-width: 411px;
      word-wrap: break-word;
    }

    .btn {
      background: #389a11;
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      padding: 20px 30px;
      border-radius: 8px !important;
      display: inline-block;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
      font-weight: 700;

      cursor: pointer;
    }

    .main-banner-image {
      margin: auto;
      width: 561px;
      height: 381px;
      content: "";
      background: url("~@/assets/images/landing_v2/Mockup-1.png");
      background-position: 50%;
      background-size: cover;
      margin-top: 50px;
      // transform: translateY(-50%);
    }
  }

  footer {
    background: #090f3e;
    padding: 30px;

    .wraper {
      max-width: 1100px;
    }

    .item {
      flex-basis: 30%;
      margin-right: 20px;

      .title {
        font-size: 18px;
        font-weight: 700;
        color: white;
      }

      .desctiption {
        font-size: 16px;
      }
    }
  }
}

.sec--02 {
  background-size: cover !important;
  position: relative;
  padding: 100px 0 195px;
  background: url("~@/assets/images/landing_v2/introduce.png") 0 0 no-repeat;
  text-align: center;

  .intro-image {
    width: 100%;
  }

  .title {
    font-size: 37px;
    line-height: 50px;
    font-weight: 800;
    margin: 0 auto 25px;
    color: #fff;
  }

  .des {
    font-size: 16px;
    line-height: 27px;
    color: #8b8d96;
    max-width: 720px;
    margin: 0 auto 85px;
    word-wrap: break-word;
  }
}

.sec--03 {
  position: relative;
  overflow: hidden;
  padding-top: 270px;
  padding-bottom: 150px;

  .intro-image {
    width: 395px !important;
  }

  .row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .trade-faster-img {
    -webkit-box-flex: 0;
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%;
  }

  .trade-faster-text {
    -webkit-box-flex: 0;
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%;
  }

  .title {
    font-size: 36px;
    line-height: 48px;
    font-weight: 800;
    margin-bottom: 16px;
    color: #fff;
  }

  .description {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 55px;
    color: hsla(0, 0%, 100%, 0.5);
  }

  .btn {
    background: #389a11;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 20px 30px;
    border-radius: 8px !important;
    display: inline-block;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-weight: 700;

    cursor: pointer;
  }
}

.sec--04 {
  padding: 150px 0 470px;

  .intro-image {
    width: 132px !important;
    position: absolute;
    left: 30px;
    bottom: 0;
  }

  .title {
    font-size: 37px;
    line-height: 50px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 20px;
  }

  .description {
    font-size: 18px;
    line-height: 24px;
    color: hsla(0, 0%, 100%, 0.5);
    margin-bottom: 0;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .layer-col {
    -webkit-box-flex: 0;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .sub-item {
    margin-right: 25px;
    padding-top: 125px;
  }

  .sub-content {
    height: 100%;
    position: relative;
    padding: 30px 35px 30px 190px;
    background: hsla(0, 0%, 100%, 0.1);
    border-radius: 30px;
  }

  .sub-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: #fff;
    margin-bottom: 10px;
  }

  .sub-des {
    font-size: 18px;
    line-height: 22px;
    color: hsla(0, 0%, 100%, 0.5);
    margin-bottom: 0;
  }
}

.sec--05 {
  .content {
    padding-bottom: 110px;
    text-align: center;

    .img {
      width: 500px;
    }
  }

  .title {
    font-size: 37px;
    line-height: 50px;
    color: #fff;
    font-weight: 800;
    margin-bottom: 14px;
  }

  .description {
    color: hsla(0, 0%, 100%, 0.5);
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 60px;
  }

  .btn {
    background: #389a11;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 20px 30px;
    border-radius: 8px !important;
    display: inline-block;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    font-weight: 700;

    cursor: pointer;
  }

  .img {
    margin-bottom: 70px;
    margin-top: -175px;
  }
}

.sec--06 {
  background: #fff;
  padding-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    font-size: 40px;
    font-weight: 800;
    line-height: 47px;
    color: #000;
    margin-bottom: 72px;
  }

  .swiper-container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .swiper-pagination {
    position: unset;
    width: 100%;
    margin-top: 60px;
  }

  .clients-say-box {
    height: 300px;
    font-size: 14px;
    line-height: 27px;
    min-height: 243px;
    padding: 25px 21px;
    color: #000;
    margin: auto;
    cursor: pointer;
    overflow: hidden;
    text-align: center;
    background-color: #fff;
    border: 2px solid #0040b4;
    border-radius: 19px;
    display: flex;
    align-items: center;
    opacity: 0.7;
    margin-bottom: 40px;
  }

  .swiper-slide-active .clients-say-box {
    opacity: 1;
  }
}

.sec--07 {
  background: url("~@/assets/images/landing_v2/cryptocurrencies-BG.png");
  background-size: cover;
  position: relative;
  padding: 100px 20px;
  text-align: center;
  // &:after {
  //   background: url("~@/assets/images/landing_v2/MockupStart.png");
  //   height: 488px;
  //   position: absolute;
  //   bottom: 0;
  //   content: "";
  //   right: 56px;
  //   width: 481px;
  //   background-size: contain;
  //   background-repeat: no-repeat;
  // }

  h2 {
    font-size: 42px;
    line-height: 49px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #fff;
  }

  p {
    font-size: 18px;
    line-height: 21px;
    color: #8b8d96;
    margin-bottom: 34px;
  }

  a {
    background: #389a11;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    padding: 20px 30px !important;
    border-radius: 8px !important;
    display: inline-block;
    transition: all 0.3s ease;
    font-weight: 700;
  }
}

.sec--08 {
  padding: 40px;
  background: #02102c;

  .pl-sm-4 {
    padding-left: 1.5rem !important;
  }

  .blockRow {
    padding: 3rem 0 !important;

    .block {
      flex: 1;
    }

    .logo {
      img {
        width: 153px;
        object-fit: contain;
      }

      .txtContent {
        color: #fff;
        opacity: 0.6;

        display: flex;
      }

      .emailLink {
        color: #389a11;
      }
    }

    .support {
      p {
        margin-bottom: 10px;

        a {
          color: #fff !important;
          opacity: 0.6;
          line-height: 30px;
        }
      }
    }

    .language {
      button {
        min-width: 160px;
        min-height: 45px;
        font-size: 14px;
        text-align: left;
        background: #090f3e;
        cursor: pointer;

        display: flex;
        align-items: center;
        padding-left: 20px;

        border: none;
        outline: none !important;

        position: relative;

        // &:after {
        //   display: inline-block;
        //   margin-left: 0.255em;
        //   vertical-align: 0.255em;
        //   content: "";
        //   border-top: 0.3em solid #fff;
        //   border-right: 0.3em solid transparent;
        //   border-bottom: 0;
        //   border-left: 0.3em solid transparent;
        //   right: 10px;
        //   top: 45%;
        //   position: absolute;
        // }

        span {
          color: #fff;
        }
      }
    }

    h4 {
      font-size: 16px;
      margin-bottom: 20px;
      margin-top: 8px;
    }

    .fullText {
      padding-top: 20px !important;
    }
  }
}

@media only screen and (max-width: 1400px) {
  .sec--01 {
    .sec-01-content {
      flex-direction: column;
      padding-left: 4rem !important;
    }

    .sub_content {
      width: 100%;
      margin-top: 200px;
    }

    .image-feature {
      width: 100% !important;

      img {
        position: unset !important;
        width: 600px;
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  .sec--01 {
    width: 100%;

    .sec-01-content {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
      padding-top: 2.5rem !important;
      margin-left: 1rem !important;
      flex-direction: column;
    }

    .sub_content {
      width: 100% !important;
      text-align: center !important;
      margin-top: 140px !important;
    }

    header {
      padding: 10px 15px 10px 15px !important;

      img {
        max-width: 150px;
        font-style: italic;
        vertical-align: middle;
        object-fit: cover;
      }

      .header--btn {

        &_login,
        &_register {
          font-size: 12px !important;
          padding: 7px 10px !important;
          border-radius: 3px !important;
        }
      }
    }

    .content {
      padding: 0 21px;
      margin-top: 20px;
      z-index: 2;
      text-align: center;

      .title {
        font-size: 24px !important;
        line-height: 44px;
        color: #fff;
        text-align: center !important;
        max-width: unset;
        margin-bottom: 23px;
      }

      .des {
        font-size: 16px !important;
        color: hsla(0, 0%, 100%, 0.5);
        line-height: 16px;
        margin-bottom: 22px;
        max-width: unset;
        text-align: center !important;
        word-wrap: break-word;
      }

      .btn {
        text-align: center;
        padding: 15px 20px;
      }
    }
  }

  .sec--02 {
    width: 100%;
    padding: 0 31px;
    width: 100%;

    .title {
      font-size: 24px !important;
      line-height: 28px !important;
      margin-bottom: 22px !important;
      margin-top: 0px !important;
      text-align: center;
    }

    .description {
      text-align: center;
      width: unset !important;
      font-size: 14px;
      color: rgba(128, 157, 209, 0.5);
      line-height: 16px;
      max-width: 274px;
      max-width: 100%;
    }

    .wrapper-img {
      margin-left: auto;
      height: 535px;
      max-width: 450px;
      overflow-y: hidden;

      img {
        width: 100%;
      }
    }
  }

  .sec--03 {
    padding-top: 100px !important;
    padding-bottom: 50px !important;

    .container {
      justify-content: center;
      margin-right: auto;
      margin-left: auto;
      padding-right: 1rem;
      padding-left: 1rem;
      max-width: 1140px;
    }

    img:not(:first-child) {
      display: none;
    }

    .trade-faster-text {
      -webkit-box-flex: 0;
      flex: 0 0 100%;
      max-width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  .sec--04 {
    padding-top: 100px;
    padding-bottom: 200px;
    text-align: center;

    .header {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }

    .title {
      font-size: 24px;
      line-height: 28px;
      text-align: center;
    }

    .description {
      text-align: center;
    }

    .intro-image {
      padding: 0 !important;
    }

    .layer-col {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;

      .sub-content {
        //padding: 20px !important;

        .intro-image {
          padding-left: 7rem;
        }
      }
    }

    .wrapper {
      justify-content: center;
    }

    .btn {
      padding: 15px 20px;
    }
  }

  .sec--05 {
    .title {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 22px;
    }

    .des {
      color: #8b8d96;
      font-size: 14px;
      line-height: 16px;
      width: auto;
      padding-right: 38px;
      margin-bottom: 0;
      margin-bottom: 40px;
      word-wrap: break-word;
    }

    .btn {
      padding: 15px 20px;
    }

    .img {
      width: unset;
      height: unset;
      max-width: 100%;
    }

    .wrapper {
      flex-direction: column;

      .item {
        max-width: 100%;
        flex: 1;

        .contentBox {
          position: relative;
          margin-top: 0;
          margin-bottom: 97px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 0;
          max-width: 495px;
          height: unset;
          -webkit-box-shadow: unset;
          box-shadow: unset;
          padding-top: 190px;

          img {
            height: 157px;
            width: 104px;
            position: absolute;
            top: 0;
            bottom: unset;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          }

          .content {
            margin-left: 0;
            padding-top: 0;
            text-align: center;
            padding-left: 17px;
            padding-right: 17px;
            padding-bottom: 23px;
            box-shadow: 0 6px 31px -7px #0610580f;
            border-radius: 29px;

            h3 {
              color: #161a25;
              font-size: 16px;
              line-height: 19px;
              margin-bottom: 12px;
            }

            p {
              color: #8b8d96;
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 0;
              max-width: unset;
              width: 100%;
              padding-right: 0;
            }
          }
        }
      }
    }
  }

  .sec--06 {
    .title {
      font-size: 24px;
      font-weight: 800;
      line-height: 28px;
      color: #000;
      margin-bottom: 37px;
      text-align: center;
    }
  }

  .sec--07 {
    // background: url("~@/assets/images/landing_v2/Group23104@2x.png");
    // background-size: unset;
    background-position: 50%;
    position: relative;
    text-align: center;
    -webkit-clip-path: ellipse(360% 100% at 50% 100%);
    clip-path: ellipse(360% 100% at 50% 100%);

    h2 {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 15px;
      text-align: center;
    }

    p {
      font-size: 14px;
      line-height: 16px;
      padding: 0 36px;
      text-align: center;
      color: #8b8d96;
      margin-bottom: 37px;
    }

    // &:after {
    //   background: url("~@/assets/images/landing_v2/MockupStart.png");
    //   height: 362px;
    //   position: absolute;
    //   bottom: 0;
    //   content: "";
    //   right: unset;
    //   left: 50%;
    //   -webkit-transform: translateX(-50%);
    //   transform: translateX(-50%);
    //   width: 340px;
    //   background-size: contain;
    //   background-repeat: no-repeat;
    // }
  }

  .sec--08 {
    .blockRow {
      flex-direction: column;
    }

    .pl-sm-4 {
      padding-left: 0 !important;

      h4 {
        margin-top: 30px;
      }

      .language {
        margin-top: 30px;
      }
    }

    .border-bottom {
      border-bottom: none !important;
    }
  }
}

@media only screen and (max-width: 490px) {

  .img-cerfiticate{
 width: 100%;
}
  .sec--01 {
    width: 100%;
    padding-bottom: 60px !important;

    .sec-01-content {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
      padding-top: 80px !important;
      margin-left: 1rem !important;
      flex-direction: column;
    }

    .image-feature {
      img {
        width: 500px;
        margin-left: -75px;
        margin-top: 40px;
      }
    }

    .sub_content {
      max-width: fit-content;
      text-align: center;
      margin-top: 0px !important;
    }

    header {
      padding: 10px 15px 10px 15px !important;

      img {
        max-width: 150px;
        font-style: italic;
        vertical-align: middle;
        object-fit: cover;
      }

      .header--btn {

        &_login,
        &_register {
          font-size: 12px !important;
          padding: 7px 10px !important;
          border-radius: 3px !important;
        }
      }
    }

    .content {
      padding: 0 21px;
      margin-top: 100px;
      z-index: 2;
      text-align: center;

      .title {
        font-size: 24px !important;
        line-height: 44px;
        color: #fff;
        text-align: center;
        max-width: unset;
        margin-bottom: 23px;
      }

      .des {
        font-size: 16px !important;
        color: hsla(0, 0%, 100%, 0.5);
        line-height: 16px;
        margin-bottom: 22px;
        max-width: unset;
        text-align: center;
        word-wrap: break-word;
      }

      .btn {
        text-align: center;
        padding: 15px 20px;
      }
    }
  }

  .sec--02 {
    width: 100%;
    padding: 0 31px;
    width: 100%;

    .title {
      font-size: 24px !important;
      line-height: 28px !important;
      margin-bottom: 22px !important;
      margin-top: 0px !important;
      text-align: center;
    }

    .description {
      text-align: center;
      width: unset !important;
      font-size: 14px;
      color: rgba(128, 157, 209, 0.5);
      line-height: 16px;
      max-width: 274px;
      max-width: 100%;
    }

    .wrapper-img {
      margin-left: auto;
      height: 535px;
      max-width: 450px;
      overflow-y: hidden;

      img {
        width: 100%;
      }
    }
  }

  .sec--03 {
    padding-top: 100px !important;
    padding-bottom: 50px !important;

    .container {
      justify-content: center;
    }

    img:not(:first-child) {
      display: none;
    }

    .trade-faster-text {
      -webkit-box-flex: 0;
      flex: 0 0 100%;
      max-width: 100%;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }

  .sec--04 {
    padding-top: 100px;
    padding-bottom: 200px;
    text-align: center;

    .header {
      padding-left: 1rem !important;
      padding-right: 1rem !important;
    }

    .title {
      font-size: 24px;
      line-height: 28px;
      text-align: center;
    }

    .description {
      text-align: center;
    }

    .intro-image {
      padding: 0 !important;
    }

    .layer-col {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;

      .sub-content {
        //padding: 20px !important;

        .intro-image {
          padding-left: 7rem;
        }
      }
    }

    .wrapper {
      justify-content: center;
    }

    .btn {
      padding: 15px 20px;
    }
  }

  .sec--05 {
    .title {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 22px;
    }

    .des {
      color: #8b8d96;
      font-size: 14px;
      line-height: 16px;
      width: auto;
      padding-right: 38px;
      margin-bottom: 0;
      margin-bottom: 40px;
      word-wrap: break-word;
    }

    .btn {
      padding: 15px 20px;
    }

    .img {
      width: unset;
      height: unset;
      max-width: 100%;
    }

    .wrapper {
      flex-direction: column;

      .item {
        max-width: 100%;
        flex: 1;

        .contentBox {
          position: relative;
          margin-top: 0;
          margin-bottom: 97px;
          margin-left: auto;
          margin-right: auto;
          border-radius: 0;
          max-width: 495px;
          height: unset;
          -webkit-box-shadow: unset;
          box-shadow: unset;
          padding-top: 190px;

          img {
            height: 157px;
            width: 104px;
            position: absolute;
            top: 0;
            bottom: unset;
            left: 50%;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
          }

          .content {
            margin-left: 0;
            padding-top: 0;
            text-align: center;
            padding-left: 17px;
            padding-right: 17px;
            padding-bottom: 23px;
            box-shadow: 0 6px 31px -7px #0610580f;
            border-radius: 29px;

            h3 {
              color: #161a25;
              font-size: 16px;
              line-height: 19px;
              margin-bottom: 12px;
            }

            p {
              color: #8b8d96;
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 0;
              max-width: unset;
              width: 100%;
              padding-right: 0;
            }
          }
        }
      }
    }
  }

  .sec--06 {
    .title {
      font-size: 24px;
      font-weight: 800;
      line-height: 28px;
      color: #000;
      margin-bottom: 37px;
      text-align: center;
    }
  }

  .sec--07 {
    // background: url("~@/assets/images/landing_v2/Group23104@2x.png");
    // background-size: unset;
    background-position: 50%;
    position: relative;
    text-align: center;
    -webkit-clip-path: ellipse(360% 100% at 50% 100%);
    clip-path: ellipse(360% 100% at 50% 100%);

    h2 {
      font-size: 24px;
      line-height: 28px;
      margin-bottom: 15px;
      text-align: center;
    }

    p {
      font-size: 14px;
      line-height: 16px;
      padding: 0 36px;
      text-align: center;
      color: #8b8d96;
      margin-bottom: 37px;
    }

    // &:after {
    //   background: url("~@/assets/images/landing_v2/MockupStart.png");
    //   height: 362px;
    //   position: absolute;
    //   bottom: 0;
    //   content: "";
    //   right: unset;
    //   left: 50%;
    //   -webkit-transform: translateX(-50%);
    //   transform: translateX(-50%);
    //   width: 340px;
    //   background-size: contain;
    //   background-repeat: no-repeat;
    // }
  }

  .sec--08 {
    .blockRow {
      flex-direction: column;
    }

    .pl-sm-4 {
      padding-left: 0 !important;

      h4 {
        margin-top: 30px;
      }

      .language {
        margin-top: 30px;
      }
    }

    .border-bottom {
      border-bottom: none !important;
    }
  }
}

@media only screen and (max-width: 1023px) {
  .sec--04 .intro-image {
    width: 106px !important;

    left: 50%;
    margin-left: -53px;
    top: -70px;
    bottom: auto;
    position: absolute;
  }

  .sec--04 .sub-content {
    padding: 150px 15px 30px !important;
  }
}
</style>

<style lang="scss">
.swiper-pagination-bullet {
  background: unset !important;
  width: unset !important;
  height: unset !important;

  .clients-say-name {
    font-size: 20px;
    color: rgba(0, 0, 0, 0.5);
    margin: 48px 0;
    transform: translate(50%, -50%);
    white-space: nowrap;
    display: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -67px;
  }

  .blockRow {
    display: flex;
  }
}

.swiper-pagination-bullet-active .clients-say-name {
  display: block;
  margin: auto;
}

.c-active {
  background-color: #02102c !important;
  border-bottom: none !important;
  padding: 7px 90px !important;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
</style>

<script>
import "swiper/dist/css/swiper.min.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import config from "@/config.json";
import LogRegForGet from "@/pages/user/LogRegForGet";
import I18n from "./i18n";

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            if (index === 0) {
              return `<div class="wrapper ${className}" >
                                    <div  class="text-center clients-say-name">
                                    —Robert Carter—
                                    </div>
                                    <img src="/landing/img/client-1.png" alt="">
                                </div>`;
            }
            if (index === 1) {
              return `<div class="wrapper ${className}" >
                                    <div  class="text-center clients-say-name">
                                        —Britney Bradley—
                                    </div>
                                    <img src="/landing/img/client-2.png" alt="">
                                </div>`;
            }
            if (index === 2) {
              return `<div class="wrapper ${className}" >
                                    <div  class="text-center clients-say-name">
                                        —Clifford Mccarthy—
                                    </div>
                                    <img src="/landing/img/client-3.png" alt="">
                                </div>`;
            }
          },
        },
      },
      domain: config.domainRealName,
      mail: config.support.mail,
    };
  },
  methods: {
    LoginUrl() {
      this.$router.push({ path: "/login" });
    },
    RegisterUrl() {
      this.$router.push({ path: "/register" });
    },
    onWindowLoad() {
      let path = this.$router.currentRoute.path;
      let checkTK = localStorage.hasOwnProperty("tokenUser");
      this.$vs.loading.close();
      if (path == "/" && checkTK) {
        this.$router.push({ path: "/trading" });
      }
    },
  },
  components: {
    swiper,
    swiperSlide,
    LogRegForGet,
    I18n,
  },
  mounted() {
    this.$vs.loading({
      type: "radius",
      background: "#111",
      color: "#ffffff",
    });
  },
  created() {
    window.addEventListener("load", this.onWindowLoad);
    window.addEventListener("scroll", function () {
      if ($(this).scrollTop() !== 0) {
        $(".h-header-custom").addClass("c-active");
      } else {
        $(".h-header-custom").removeClass("c-active");
      }
    });
  },
};
</script>
