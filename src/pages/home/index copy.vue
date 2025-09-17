<template>
  <div class="home-container">
    <div class="linear-bg"></div>
    <div class="home-scroll">
      <div class="home-top-bar">
        <div class="logo-div">
          <img src="/img/homenavlogo.png" class="logo-img1" />
        </div>
      </div>
      <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="#000000" :height="150">
          <van-swipe-item v-for="(v, key) in banners" :key="key">
            <van-image class="banner_img" :src="v.url">
              <template v-slot:loading>
                <van-loading type="circular" />
              </template>
            </van-image>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="notice-bar">
        <van-notice-bar
          class="notice-swipe"
          left-icon="bullhorn-o"
          background="#fff9ea"
          color="#ffab61"
          scrollable
          :text="this.notice"
        />
      </div>
      <!-- <div class="hot-game">
        <div class="hot-title-div">
          <div>
            <span>{{ $t("home.rec_tasks") }}</span>
          </div>
          <div @click="gotoMenu('/Game')">
            <span>{{ $t("common.view_more") }}</span>
            <van-icon name="arrow" color="#979799" />
          </div>
        </div>
        <div class="hot-items-div">
          <van-grid :border="false" :column-num="4" :icon-size="20">
            <van-grid-item
              @click="toLottery(v.key, v.id)"
              v-for="(v, key) in gameitem"
              :key="key"
            >
              <van-image class="game_item_img" :src="v.ico">
                <template v-slot:loading>
                  <van-loading type="circular" />
                </template>
              </van-image>
              <span>{{ v.name }}</span>
            </van-grid-item>
          </van-grid>
        </div>
      </div> -->
      <TradeList></TradeList>
      <div class="content-title">
        {{ $t("顶部") }}
      </div>
      <div class="content">
        <div class="list" v-for="(item, index) in datalist" :key="index">
          <div class="img">
            <img :src="item.img_url" />
            <span><div class="van-image" style="width: 30px; height: 30px;"><img src="/img/icon_gaoduan.png" class="van-image__img"></div></span>
            <!-- <img class="vip" src="/img/vip.jpg" /> -->
            <!-- <img src="../../assets/p.jpg" /> -->
          </div>
          <div class="ct">
            <div class="tag">
              <span>
                <img src="@/assets/vip.png" />
                {{ $t("认证") }}</span
              >
              <span>
                <img src="@/assets/vip.png" />
                {{ $t("视频认证") }}</span
              >
            </div>
            <div class="name">
              {{ item.xuanfei_name }}
            </div>
            <div class="desc">
              <span>{{ item.introduce }}</span>
            </div>
            <div class="rate">
              <span>{{ $t("评分") }}:</span>
              <van-rate
                v-model="item.praise"
                :size="15"
                color="#ffd21e"
                void-icon="star"
                void-color="#eee"
              />
            </div>
            <div class="xj">
              <span>{{ $t("身高") }}：{{ item.height }}</span>
              <span>{{ $t("地域") }}：{{ item.address }}</span>
            </div>
            <div class="kj">
              <span
                >{{ $t("降落伞") }}:{{
                  item.airborne ? $t("是的") : $t("不是")
                }}</span
              >
            </div>
            <div class="btn" @click="toPage(item)">
              {{ $t("现在就答应她") }}
            </div>
          </div>
        </div>
      </div>

      <div class="lb-box">
        <div class="title">Aktuell {{currentNumber}} Personen werden online gematcht</div>

        <div class="content">
          <div v-for="(item, index) in lbData" :key="index">
            {{ item }} Erfolgreiche Kontoregistrierung
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TradeList from '@/pages/contract/TradeList.vue'
let currentNumber = 2000;
export default {
  components:{
		TradeList
	},
  data() {
    return {
      active: 0,
      notice: "",
      news: [{}],
      banners: [{}],
      basicData: [],
      gameitem: [{}, {}, {}, {}],
      movielist_0: [{}, {}, {}, {}],
      movielist_1: [{}, {}, {}, {}, {}, {}, {}, {}],
      isLoading: false,
      movielistSwiperOption: {
        slidesPerView: "auto",
        spaceBetween: 0,
        slidesPerGroup: 1,
      },
      bannerSwiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 800,
        autoplay: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 10,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      },
      datalist: [],
      lbData: [],
      timeName: "",
      currentNumber: "",
    };
  },
  methods: {
    toPage(item) {
      console.log(item);
      this.$router.push({
        name: "Details",
        query: {
          name: item.xuanfei_name,
          id: item.id,
        },
      });
    },
    redirectToCustomerService() {
      this.$router.push({ path: "/ServicePage" });
    },
    changeTab(index) {
      this.active = index;
    },
    gotoMenu(router) {
      this.$router.replace(router);
    },
    toLottery(key, id) {
      //  if (!localStorage.getItem('token')) {
      //      this.$router.push({ path: '/Login' })
      //  } else {
      this.$router.push({ path: "/Lottery?key=" + key + "&id=" + id });
      //  }
    },
    toPlayVideo(id) {
      //    if (!localStorage.getItem('token')) {
      //        this.$router.push({ path: '/Login' })
      //  } else {
      this.$router.push({ path: "/PlayVideo?id=" + id });
      //   }
    },
    onRefresh() {
      this.getBasicConfig();
      this.isLoading = false;
      this.$toast(this.$t("refresh_successful"));
    },
    getBasicConfig() {
      this.$http({
        method: "get",
        url: "sys_config",
      }).then((res) => {
        this.basicData = res.data;
        console.log("====================================");
        console.log(res.data);
        console.log("====================================");
        this.getNotice(this.basicData); //获取公告
        this.getBanner(this.basicData); //获取banner
        this.getGameItem(); //获取首页游戏列表
        this.getMovieList_0(this.basicData); //获取首页视频0
        this.getMovieList_1(this.basicData); //获取首页视频1
        this.getNews(this.basicData);
      });
    },
    getNotice(data) {
      // console.log(data)
      this.notice = data.notice;
    },
    getNews(data) {
      this.news = data.news;
    },
    getGameItem() {
      this.$http({
        method: "get",
        url: "lottery_hot",
      }).then((res) => {
        this.gameitem = res.data;
      });
    },
    getMovieList_0(data) {
      this.movielist_0 = data.movielist_0;
    },
    getMovieList_1(data) {
      this.movielist_1 = data.movielist_1;
    },
    getBanner(data) {
      this.banners = data.banners;
    },
    getTopList() {
      this.$http({
        method: "get",
        url: "getTopList",
      }).then((res) => {
        this.datalist = res.data;
      });
    },

    redom() {
      const chars =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let result = "";

      // Get 2 random characters
      for (let i = 0; i < 2; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      result += "****"; // Add the ****

      // Get 4 random characters
      for (let i = 0; i < 4; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }

      return result;
    },
    // 得到登录人员
    getLbData() {
      let lbData = [];
      for (let i = 0; i < 4; i++) {
        lbData.push(this.redom());
      }
      return lbData;
    },
    getRandomNumber() {
      // 随机变化范围
      const change = Math.floor(Math.random() * 401) - 200; // -200 到 200
      let newNumber = currentNumber + change;

      // 限制在1500到3500之间
      if (newNumber < 1500) {
        newNumber = 1500;
      } else if (newNumber > 3500) {
        newNumber = 3500;
      }

      currentNumber = newNumber;
      return currentNumber;
    },
  },
  mounted() {},
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push({
        name: "login",
      });
      return;
    }

    this.timeName = setInterval(() => {
      this.lbData = this.getLbData();
      this.currentNumber = this.getRandomNumber();
      //   console.log(this.getRandomNumber(), "getRandomNumber");
    }, 1000);

    this.getBasicConfig();
    this.getTopList();
  },
  destroyed() {
    clearInterval(this.timeName);
  },
};
</script>

<style lang="less" scoped>
@notice-bar-size: 30px;
@movie-list-item-bottom-size: 25px;
.tab-header {
  display: flex;
  justify-content: space-around;
  padding: 15px;
  background-color: #eee;
}

.tab-header > div {
  cursor: pointer;
  position: relative;
}

.tab-header > div.active {
  font-weight: bold;
}

.tab-header > div.active::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px; /* 添加的底部边框的高度 */
  background-color: #de0707; /* 底部边框的颜色 */
}

.tab-content > div {
  padding: 10px;
}

.tab-content > div.show {
  display: block;
}
.image-container {
  position: relative;
}

.title-background {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* 透明背景颜色 */
  padding: 10px; /* 透明背景上下间距 */
}

.title-text {
  color: white; /* 标题文本颜色 */
  font-size: 3.4vw; /* 字体大小 */
  line-height: 1.5; /* 行高，可根据需要调整 */
}
.image-link {
  display: block;
  position: relative;
  text-decoration: none; /* 取消下划线样式 */
}

.image-link img {
  width: 100%; /* 让图片宽度充满整个链接区域 */
}
.linear-bg {
  height: 200px;
  background: linear-gradient(30deg, #7d76ef, #d63f8c);
}
.home-container {
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
}
.linear-gradient {
  width: 100%;
  height: 2px;
  background: linear-gradient(
    to right,
    rgba(126, 86, 120, 0),
    rgb(230, 195, 161),
    rgba(126, 86, 120, 0)
  );
}
::v-deep .van-notice-bar__left-icon,
.van-notice-bar__right-icon {
  min-width: 40px;
}
.notice-bar {
  padding: 16px;
  background-color: #f3f3f5;
  .notice-swipe {
    // width: calc(100% - 50px);
    height: 85px;
    font-size: @notice-bar-size;
  }
}

::v-deep .van-icon-bullhorn-o::before {
  transform: scale(2.5);
}
.banner {
  width: 100%;
  margin-top: -23%;
}
.banner_swiper {
  height: 100%;
  width: 100%;

  .swiper-slide {
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 620px;
    height: 300px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    background-color: #ffffff;
    background-position: center;
    background-size: cover;
    color: #ffffff;
  }
}
::v-deep .swiper-container-3d .swiper-slide-shadow-left {
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
}
::v-deep .swiper-container-3d .swiper-slide-shadow-right {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0)
  );
}
::v-deep .van-swipe__indicator {
  width: 16px;
  height: 16px;
}
.banner_img {
  border-radius: 0;
  width: 100%;
  height: 100%;
}
.hot-game {
  width: 100%;
  height: 100%;
}
.hot-title-div {
  width: calc(100% - 50px);
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hot-title-div div {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.hot-title-div > div:nth-child(2) span {
  font-size: 20px;
  color: #979799;
}
.hot-title-div > div:first-child span {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 10px;
  font-weight: 700;
  color: #000;
}

.hot-title-div > div:first-child span {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 28px;
  font-weight: 700;
  color: #000;
}
.hot-title-div > div:nth-child(2) span {
  font-size: 25px;
  color: #979799;
}
.hot-title-div > div:first-child span:before {
  content: "";
  display: block;
  width: 5px;
  height: 30px;
  background-color: #7e5678;
  border-radius: 1px;
  margin-right: 5px;
}
.hot-game .hot-items-div {
  margin-top: -3px;
}
.hot-game .hot-items-div span {
  margin-top: 10px;
  font-size: 4vw;
  color: #7e5678;
}
.hot-recommend {
  width: 100%;
  flex: 1;
  background-color: #f2f2f5;
}
.movie_swiper {
  .swiper-slide {
    width: 80%;
  }
}
.movie_list_0 {
  width: calc(100% - 50px);
  margin: 0 auto;
}
.movie_cover {
  border-radius: 10px;
  width: 550px;
  height: 330px;
}
.movie_list_0 .movie-list-item-bottom {
  position: relative;
  width: 550px;
  bottom: 43px;
}
.movie_list_0 .movie-list-item-bottom .movie-time-div {
  background-color: rgba(0, 0, 0, 0.4);
}
.movie_list_0 .movie-list-item-bottom > div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.movie_list_0 .movie-list-item-bottom .movie-time-div .van-count-down {
  font-size: 28px;
  color: #fff;
}
.movie_list_0 .movie-time-div {
  color: #fff;
  border-radius: 0 0 10px 10px;
}
.movie_list_0 .movie_swiper .hot {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 80px;
}
.movie_list_0 span {
  font-size: 30px;
}
.movie_list_1 {
  display: flex;
  width: calc(100% - 50px);
  margin: 0 auto;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.movie_list_1 .movie-list-item .cover_img {
  border-radius: 10px;
  width: 335px;
  height: 290px;
}
.home-scroll {
  padding-bottom: 110px;
}
.movie_list_1 .movie-list-item {
  margin-bottom: -10px;
}

.movie_list_1 .movie-list-item-bottom {
  position: relative;
  width: 335px;
  bottom: 42px;
}
.movie_list_1 .movie-list-item:nth-child(odd) {
  margin-right: 25px;
}
.movie_list_1 .movie-list-item-bottom .movie-time-div {
  background-color: rgba(0, 0, 0, 0.4);
}
.movie_list_1 .movie-list-item-bottom > div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.movie_list_1 .movie-list-item-bottom .movie-time-div .van-count-down {
  color: #fff;
}
.movie_list_1 .movie-time-div {
  color: #fff;
  border-radius: 0 0 10px 10px;
  height: 35px;
}
.movie_list_1 .movie_swiper .hot {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 5px;
}

.movie_list_1 .movie-list-item .movie-time-div span:first-child {
  overflow: hidden;
  white-space: nowrap;
  width: 180px;
  padding-left: 8px;
  font-size: 25px;
}
.movie_list_1 .movie-list-item .movie-time-div span:last-child {
  overflow: hidden;
  white-space: nowrap;
  width: 0px;
  padding-right: 110px;
  font-size: 22px;
}
.movie_list_0 .movie-time-div span:first-child {
  overflow: hidden;
  white-space: nowrap;
  width: 350px;
  padding-left: 10px;
  font-size: 25px;
}

.hot-recommend-more {
  width: 100%;
  padding-bottom: 20px;
  text-align: center;
  color: #979799;
  font-size: 30px;
}
.hot-items-div .game_item_img {
  width: 20vw;
  height: 20vw;
}
::v-deep .hot-items-div .game_item_img .van-image__img {
  border-radius: 20px;
}

::v-deep .van-pull-refresh__track .van-pull-refresh__head * {
  color: #000000;
  font-size: 35px;
}
.customer-service {
  position: fixed;
  top: 100px;
  right: 0px;
  cursor: pointer;
  z-index: 9999;
}

.customer-service img {
  width: 100px;
  height: 100px;
}

.logo {
  position: fixed;
  top: 10px;
  left: 10px;
  cursor: pointer;
  z-index: 2;
}
.logo img {
  width: 220px;
}

.home-top-bar {
  //  position: absolute;
  top: 0;
  width: 100%;
  height: 2rem !important;
  padding: 0 3.333vw;
  justify-content: space-between;
  margin: 0.13333rem auto;
}
.logo-div {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.server-msg-div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.53333rem;
}
.logo-img1 {
  position: absolute;
  top:10px;
  height: 81px;
  object-fit: cover;
  transform: scale(2);
}

.content {
  padding: 40px;
  z-index: -1;
  .list {
    display: flex;
    // justify-content: sp
    margin-top: 40px;


    .img {
      z-index: 0;
      width: 240px;
      height: 240px;
      position: relative;
      background-color: white;

      img {
        width: 100%;
        height: 100%;
      }

      span {
        position: absolute;
        z-index: 1;
        color: #8d684b;
        transform: rotate(45deg);
        width: 20vw;
        height: 20vw;
        top: -11vw;
        right: -11vw;
        background-color: #fff;

        .van-image {
          position: absolute;
          bottom: 0;
          left: 56px;
          .van-image__img {
            width: 100%;
            height: 100%
          }
        }
      }


    }
    .ct {
      z-index: 2;
      // display: flex;
      flex-grow: 1;
      padding-left: 20px;
      .tag {
        span {
          font-size: 24px;
          background: linear-gradient(180deg, #e7caaf, #fff7ed);
          color: #a4826b;
          margin-right: 10px;
          padding: 5px;
          img {
            width: 26px;
            height: 26px;
          }
        }
      }
      .name {
        margin: 20px 0;
      }
      .desc {
        margin-bottom: 20px;
        span {
          background-color: #1989fa;
          padding: 10px;
          color: #fff;
          font-size: 24px;
          border-radius: 10px;
        }
      }
      .rate {
        font-size: 24px;
        display: flex;
        align-items: center;
        .van-rate {
          margin-left: 10px;
        }
      }
      .xj {
        color: #999;
        font-size: 24px;
        margin: 20px 0;
        span {
          margin-right: 20px;
          &::last-child {
            margin-right: 0;
          }
        }
      }
      .kj {
        color: #999;
        font-size: 24px;
      }
      .btn {
        width: 100%;
        border-radius: 10px;
        padding: 20px 0;
        color: #fff;
        text-align: center;
        font-size: 24px;
        background: linear-gradient(90deg, #df35ad, #4f1db5);
        margin-top: 20px;
      }
    }
  }
}

.content-title {
  padding: 20px 40px 0 40px;
  border-top: 30px solid #f7f6f9;
  font-size: 40px;
  font-weight: bold;
}

.lb-box {
  background: linear-gradient(#fe5986, #ff848b);
  margin: 0 auto 30px;
  width: 96%;
  border-radius: 10px;
  .title {
    font-size: 30px;
    color: #ffe869;
    padding: 20px 0;
    text-align: center;
  }
  .content {
    font-size: 28px;
    color: #fff;
    text-align: center;
    > div {
      margin-top: 20px;
      &:first-child {
        margin-top: 0px;
      }
    }
  }
}
</style>
