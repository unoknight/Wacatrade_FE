<template>
  <div>
    <div v-show="isShowDetail === -1">
      <section class="banner">
        <div class="content-left">
          <div class="content-img">
            <img src="@/assets/images/sky/championship/cup.png" />
          </div>

          <div class="title-championship">
            <div class="title">{{ $t("Championship")}}</div>
            <div class="description">{{ $t("Championship_Join")}}.</div>
          </div>
        </div>

        <div class="content-right">
          <div v-for="(item, index) in champions" :key="index" class="list-champion" @click="clickedChampion(item)">
            <div class="champion">
              <div class="champion-content">
              <p class="champion-name">{{ item.name }}</p>

                <div class="img-cup">
                  <div class="info-user">
                    <p class="user-name">{{ item.topUser[1] && item.topUser[1]['nick_name'] ? item.topUser[1]['nick_name'] : '' }}</p>
                      <img :src="require('@/assets/images/sky/championship/2st.png')" alt="" style="border-radius: 30px; width: 40px; height: 40px;" />
                    <p v-if="item.topUser && item.topUser[1]" class="volume-silver">
                      ${{ item.topUser[1]['balance'] }}
                    </p>
                  </div>
                
                  <div class="img-s1" style="margin-top: -15px;">
                    <p class="user-name">{{ item.topUser[0] && item.topUser[0]['nick_name'] ? item.topUser[0]['nick_name'] : '' }}</p>
                    <img :src="require('@/assets/images/sky/championship/1st.png')" alt=""  style="border-radius: 30px; width: 40px; height: 40px;"/>
                    <p v-if="item.topUser && item.topUser[0]" class="volume-gold">
                      ${{ item.topUser[0]['balance'] }}
                    </p>
                  </div>

                  <div class="img-s1">
                    <p class="user-name">{{ item.topUser[2] && item.topUser[2]['nick_name'] ? item.topUser[2]['nick_name'] : '' }}</p>
                    <img :src="require('@/assets/images/sky/championship/3st.png')" alt=""  style="border-radius: 30px; width: 40px; height: 40px;"/>
                    <p v-if="item.topUser && item.topUser[2]" class="volume-bronze">
                      ${{ item.topUser[2]['balance'] }}
                    </p>
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="wrapper-list-championship champions-mobile">
        <div class="list-championship" style="margin: 20px;">
          <div class="title">
            <img src="@/assets/images/sky/championship/fire.png" />
            <div class="breakcrumb">
              <span> {{ $t("Champions_Top")}} </span>
            </div>
            </div>

          <div class="cards-list">
            <ChampionCard v-for="(champion) in champions" :key="champion.id" @clicked="clickedChampion(champion)" :data="champion" />
          </div>
        </div>
      </section>

      <section class="wrapper-list-championship">
        <div class="list-championship">
          <div class="title">
            <img src="@/assets/images/sky/championship/fire.png" />
            <div class="breakcrumb">
              <span> {{ $t("Champions_List_Info")}} </span>
            </div>
            </div>

          <div class="cards-list">
            <Card v-for="(champion, ind) in champions" :key="champion.id" @clicked="openDetail(ind)" :data="champion" />
          </div>
        </div>
      </section>
    </div>
    <section v-if="isShowDetail !== -1">
      <Detail
        @goBack="toggleShowDetail(-1)"
        @update="updateChampions"
        :champion="champions[isShowDetail]"
      />
    </section>
  </div>
</template>

<script>
import Card from "@/views/components/championship/home/list.vue";
import ChampionCard from "@/views/components/championship/home/championCard.vue";
import Detail from "@/views/components/championship/home/detail.vue";
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      isShowDetail: -1,
      champions: [],
    };
  },
  methods: {
    toggleShowDetail(indDetail) {
      this.isShowDetail = indDetail;
    },
    openDetail(ind) {
      console.log("🚀 ~ file: Championship.vue:114 ~ openDetail ~ ind:", ind)
      // this.toggleShowDetail(ind);
      window.scrollTo(0, 0);
    },
    updateChampions() {
      AuthenticationService.getTopChampions().then(resp => {
        this.champions = resp.data.data;
      });
    },
    formatPrice(value, minimum) {
      var formatter = new Intl.NumberFormat("en-US", {
        //style: 'currency',
        //currency: '',
        minimumFractionDigits: minimum
      });
      return formatter.format(value);
    },
    clickedChampion(data){
      window.open('https://wacaglobal.net/champion?id='+data.id, '_blank');
    }
  },
  components: {
    Card,
    Detail,
    ChampionCard
  },
  created() {
    AuthenticationService.getTopChampions().then(resp => {
      this.champions = resp.data.data;
    });
  }
};
</script>

<style scoped lang="scss">
.banner {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("~@/assets/images/sky/championship/crypto-bg-1.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 484px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px 0 30px 40px;
  position: relative;
  transition: all 0.3s linear 0s;
  display: flex;
  gap: 30px;

  img {
    width: 55px;
    height: 59px;
    margin-bottom: 10px;
  }

  .title {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.3;
    color: #23d1b0;
  }

  .description {
    font-size: 25px;
    color: #fff;
    max-width: 480px;
    line-height: normal;
  }
}

.wrapper-list-championship {
  width: 100%;
  height: auto;
  min-height: calc(100vh - 546px);
  padding: 62px 93px 0;
}

.champions-mobile {
  display: none;
}

.list-championship {
  .title {
    margin-bottom: 44px;
    align-items: center !important;
    display: flex;
    img {
      margin-right: 1rem !important;
    }

    .breakcrumb {
      font-size: 28px;
      color: #fff;
      font-weight: 700;
      span {
        font-size: 24px;
        color: #fff;
      }
    }
  }
}

.cards-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.list-champion {
  width: 275px;
  height: 190px;
  border-radius: 20px;
  padding: 5px 20px 10px 20px;
  background-image: url("~@/assets/images/sky/championship/cup-crypto.png");
  background-size: 155%;
  cursor: pointer;
}

.user-name {
  font-size: 15px;
  margin: 10px;
  font-weight: bold;
}

.champion-name {
  color: #23d1b0;
  font-size: 20px;
  font-weight: bold;
}

.img-cup {
  display: flex;
  gap: 30px;
  padding-top: 15px;
}

.img-champion {
  height: 160px !important;
}

.volume-gold {
  font-size: 12px;
  font-weight: bold;
  color: yellow;
  margin-bottom: 10px;
}

.volume-silver {
  font-size: 12px;
  font-weight: bold;
  color: silver;
  margin-bottom: 10px;
}

.volume-bronze {
  font-size: 12px;
  font-weight: bold;
  color:#c9651d;
  margin-bottom: 10px;
}

.content-right {
  padding-top: 50px;
  display: flex;
  gap: 30px;
}

.content-left {
  width: 30%;
  padding-top: 50px;
  gap: 30px;
}

@media screen and (max-width: 1300px) {
  .banner {
    display: block;
  }

  .content-left {
    width: 100%;
    display: flex;
    padding-top: 20px;
  }

  .content-img {
    padding-top: 20px;
  }
}

@media screen and (max-width: 968px) {
  .list-champion {
    float: left;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .content-right {
    display: none;
  }

  .champions-mobile {
    display: inline;
  }

  .content-left {
    padding-top: 0;
  }

  .banner {
    padding-top: 15px;
    width: auto;
    height: auto;
  }

  .wrapper-list-championship {
    padding: 20px 20px;
  }
}

</style>
