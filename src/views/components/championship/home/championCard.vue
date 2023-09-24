<template>
    <div class="wrapper" @click="clicked">
      <div class="content">
        <div class="title">
          <svg
            data-v-af39567a=""
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="22"
            viewBox="0 0 35.734 16.158"
          >
            <g
              data-v-af39567a=""
              id="_1246264"
              data-name="1246264"
              transform="translate(8.061 -0.001)"
            >
              <path
                data-v-af39567a=""
                id="Union_3"
                data-name="Union 3"
                d="M8270.137-6214.507c-1.338,0-2.43-.781-2.459-1.756h0a.26.26,0,0,1-.006-.039v-12.568c0-.992,1.1-1.794,2.465-1.794h30.8c1.363,0,2.466.8,2.466,1.794v12.568c0,.992-1.1,1.8-2.466,1.8Z"
                transform="translate(-8275.734 6230.666)"
                fill="#fd4764"
              ></path>
              <g
                data-v-af39567a=""
                id="Group_21085"
                data-name="Group 21085"
                transform="translate(1.945 4.364)"
              >
                <path
                  data-v-af39567a=""
                  id="Path_34926"
                  data-name="Path 34926"
                  d="M60.62,78.408H57.027V72.4A.529.529,0,0,0,56,72.4v6.408a.468.468,0,0,0,.513.4H60.62a.413.413,0,1,0,0-.8Zm0,0"
                  transform="translate(-56 -71.999)"
                  fill="#f1f2f2"
                  stroke="#fff"
                  stroke-width="0.2"
                ></path>
                <path
                  data-v-af39567a=""
                  id="Path_34927"
                  data-name="Path 34927"
                  d="M332.62,72.8a.413.413,0,1,0,0-.8h-4.106a.468.468,0,0,0-.513.4v6.408a.468.468,0,0,0,.513.4h4.106a.413.413,0,1,0,0-.8h-3.593v-2.4h2.567a.413.413,0,1,0,0-.8h-2.567V72.8Zm0,0"
                  transform="translate(-310.547 -71.999)"
                  fill="#f1f2f2"
                  stroke="#fff"
                  stroke-width="0.2"
                ></path>
                <path
                  data-v-af39567a=""
                  id="Path_34928"
                  data-name="Path 34928"
                  d="M160.513,72a.468.468,0,0,0-.513.4v6.408a.529.529,0,0,0,1.027,0V72.4A.468.468,0,0,0,160.513,72Zm0,0"
                  transform="translate(-153.327 -71.999)"
                  fill="#f1f2f2"
                  stroke="#fff"
                  stroke-width="0.2"
                ></path>
                <path
                  data-v-af39567a=""
                  id="Path_34929"
                  data-name="Path 34929"
                  d="M206.33,72.015a.648.648,0,0,0-.393.01.461.461,0,0,0-.268.224l-2.555,5.317-2.12-5.3a.552.552,0,0,0-.644-.262c-.271.066-.421.291-.336.5l2.567,6.408a.512.512,0,0,0,.476.28h.014a.525.525,0,0,0,.481-.26l3.08-6.408a.321.321,0,0,0-.013-.307A.483.483,0,0,0,206.33,72.015Zm0,0"
                  transform="translate(-190.751 -71.99)"
                  fill="#f1f2f2"
                  stroke="#fff"
                  stroke-width="0.2"
                ></path>
              </g>
              <circle
                data-v-af39567a=""
                id="Ellipse_2017"
                data-name="Ellipse 2017"
                cx="2.5"
                cy="2.5"
                r="2.5"
                transform="translate(-6.327 5.334)"
                fill="#fff"
              ></circle>
            </g>
          </svg>
  
          <div class="name">
            {{ data.name }}
          </div>
        </div>
    
        <ul class="top-champions">
          <li>
            <p class="user-name">
              {{ data.topUser[1] && data.topUser[1]['nick_name'] ? data.topUser[1]['nick_name'] : '' }}
            </p>
            <img :src="require('@/assets/images/sky/championship/2st.png')" alt="" class="img-top" />
            <p v-if="data.topUser && data.topUser[1]" class="volume-silver">
                ${{ data.topUser[1]['balance'] }}
            </p>
          </li>
          <li style="margin-top: -15px;">
            <p class="user-name">{{ data.topUser[0] && data.topUser[0]['nick_name'] ? data.topUser[0]['nick_name'] : '' }}</p>
            <img :src="require('@/assets/images/sky/championship/1st.png')" alt="" class="img-top"/>
            <p v-if="data.topUser && data.topUser[0]" class="volume-gold">
                ${{ data.topUser[0]['balance'] }}
            </p>
          </li>
          <li>
            <p class="user-name">
              {{ data.topUser[2] && data.topUser[2]['nick_name'] ? data.topUser[2]['nick_name'] : '' }}
            </p>
            <img :src="require('@/assets/images/sky/championship/3st.png')" alt="" class="img-top"/>
            <p v-if="data.topUser && data.topUser[2]" class="volume-bronze">
                ${{ data.topUser[2]['balance'] }}
            </p>
          </li>
        </ul>
  
        <div
          class="boxType"
          :style="{ background: data.type === 'volume' ? '#1894f0' : '#fd157d' }"
        >
          <span>{{ data.type === "volume" ? "trading" : "agency" }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import moment from 'moment';
  import config from '@/config.json';
  
  export default {
    props: {
      data: {},
    },
    data() {
      return {
        day: 0,
        hour: 0,
        min: 0,
        sec: 0,
        interval: null,
        dm: config.domain,
        isShowTime: true,
      }
    },
    methods: {
      clicked() {
        this.$emit("clicked");
      },
      formatPrice(value, minimum) {
        var formatter = new Intl.NumberFormat("en-US", {
          //style: 'currency',
          //currency: '',
          minimumFractionDigits: minimum
        });
        return formatter.format(value);
      },
    },
    filters: {
      getTypeChampion(val) {
        switch (val) {
          case 'volume':
            return 'KLGD';
  
          case 'hh':
            return 'HOA HỒNG';
          default:
            break;
        }
      }
    },
    computed: {
      bg() {
        return this.dm + 'img/' + this.data.background;
      }
    },
    mounted() {
      this.interval = setInterval(() => {
        const d = moment.duration(moment(this.data.dateEnd).diff(moment()));
        if (d.milliseconds() < 0) {
          this.isShowTime = false;
          clearInterval(this.interval);
        }
        this.day = d.days();
        this.hour = d.hours();
        this.min = d.minutes();
        this.sec = d.seconds();
      }, 1000);
    },
    beforeDestroy() {
      clearInterval(this.interval);
    }
  };
  </script>
  
  <style scoped lang="scss">

.champion-detail {
  display: flex;
  gap: 40px;
  padding-top: 35px;

}
  .wrapper {
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 1.5rem !important;
  }
  
  @media (min-width: 2061px) {
    .wrapper {
      flex: 0 0 20%;
      max-width: 20%;
    }
  }
  
  @media (min-width: 1601px) and (max-width: 2060px) {
    .wrapper {
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
  
  @media (min-width: 1301px) and (max-width: 1600px) {
    .wrapper {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }
  }
  
  @media (min-width: 1024px) and (max-width: 1300px) {
    .wrapper {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }
  
  .content {
    background: url("~@/assets/images/sky/championship/crypto-cup.png");
    margin-bottom: 0 !important;
    padding: 15px 20px;
    width: auto;
    height: 225px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 40%;
    border-radius: 20px;
    overflow: hidden;
    margin-bottom: 30px;
    cursor: pointer;
    text-align: left !important;
    position: relative !important;
  }
  
  .title {
    display: flex;
    align-items: center;
    svg {
      margin-right: 1rem;
    }
    .name {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      text-transform: capitalize;
    }
  }
  
  .boxType {
    background: #1894f0;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    font-weight: 700;
    padding: 1px 25px;
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.5);
    transform: translateX(23%) translateY(68%) rotate(45deg);
    span {
      font-size: 13px;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase !important;
    }
  }
  
  .title-top-champions {
    width: 100%;
    text-align: center;
    font-size: 16px;
    display: inline-block;
    margin-bottom: 15px;
    margin-top: 5px;
  }
  
  .top-champions {
    display: flex;
    justify-content: center;
    border-radius: 5px;
    padding: 4px 0;
    max-width: 375px;
    margin: 20px auto;
    list-style: none;
    li {
      margin-left: 0;
      &:not(:last-child) {
        margin-right: 30px;
      }
      display: inline-block;
      margin: 0 8px;
      text-align: center;
      position: relative;
      p {
        &:first-child {
          font-size: 15px;
          font-weight: bold;
          color: #fff;
          line-height: 1.4;
          margin: 10px;
        }
  
        &:last-child {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
  }

  .img-top {
    border-radius: 30px;
    width: 40px;
    height: 40px;
  }

  .volume-gold {
    font-weight: bold;
    color: yellow;
    margin-bottom: 10px;
  }

  .volume-silver {
    font-weight: bold;
    color: silver;
    margin-bottom: 10px;
  }

  .volume-bronze {
    font-weight: bold;
    color:#c9651d;
    margin-bottom: 10px;
  }
  
  .disabled-time li {
    color: white;
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  
  .prize {
    margin-top: 20px;
    width: 100%;
    display: flex;
  
    .left,
    .right {
      width: 45%;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      display: flex;
    }
  
    .left {
      .title {
        font-size: 21px;
        font-weight: 700;
        color: #31baa0;
      }
  
      .des {
        font-size: 14px;
      }
    }
  
    .right {
      text-align: right;
      .title {
        font-size: 20px;
        color: #fff;
      }
  
      .des {
        font-size: 11px;
        color: #848382;
      }
    }
  }
  </style>
  