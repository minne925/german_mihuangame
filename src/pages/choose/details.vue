<script>
export default {
  data() {
    return {
      item: "",
      active: 0,
      swiperOption: {
        autoplay: 3500,
        setWrapperSize: true,
        pagination: ".swiper-pagination",
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
      },
      preImg: "",
    };
  },
  methods: {
    back() {
      return window.history.back();
    },
    getData(id) {
      this.$toast.loading({
        message:this.$t('加载中')+"...",
        forbidClick: true,
        duration: 0,
      });
      this.$http({
        method: "get",
        url: "xuanfeidata",
        data: {
          id,
        },
      }).then((res) => {
        this.item = res.data;
        this.preImg = res.data.img_url[0];
      }).finally(()=>{
        this.$toast.clear()
      });
    },
    toggele(index) {
      this.active = index;
      this.preImg = this.item.img_url[index];
    },
    // 点赞
    handleZan(id) {
      this.$toast.loading({
        message:this.$t('提交中')+ "...",
        forbidClick: true,
        duration: 0,
      });
      this.$http({
        method: "get",
        url: "xuanfeilike",
        data: {
          id,
        },
      }).then(() => {
        this.getData(this.$route.query.id)
        this.$toast(this.$t('提交成功'))
      }).finally(() => {
        this.$toast.clear();
      });
    },
  },
  created() {
    this.title = this.$route.query.name;
    this.getData(this.$route.query.id);
  },
};
</script>
<template>
  <div class="wrapper">
    <van-nav-bar class="nav-bar" :title="title" fixed>
      <template #left>
        <van-icon name="arrow-left" color="#fff" @click="back()" />
      </template>
    </van-nav-bar>
    <div class="header" style="margin-top: 50px;">
      <div class="header-left">
        <div class="name">{{ item.xuanfei_name }}</div>
        <div class="xw">{{ $t("胸围") }}：{{ item.bust }}</div>
        <div class="bq">
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
        <div class="dz">{{ $t("地域") }}：{{ item.address }}</div>
      </div>
      <div class="header-right">
        <div class="top" @click="handleZan(item.id)">
          <img src="@/assets/zan.png" alt="" />
          <span>{{ item.like }}</span>
        </div>
        <div
          class="btn"
          @click="
            () => {
              this.$toast($t('请联系管理员'));
            }
          "
        >
          {{ $t("现在就答应她") }}
        </div>
      </div>
    </div>
    <div class="tab">
      <div class="tab-list active">
        <span>{{$t('写真')}}</span>
      </div>
    </div>
    <!-- <swiper :options="swiperOption">
      <swiper-slide v-for="(slide, index) in item.img_url" :key="index">
        <img :src="slide" alt="" />
      </swiper-slide>
    </swiper> -->
    <div class="swiper">
      <div
        class="swiper-list"
        @click="toggele(index)"
        :class="{ active: active == index }"
        v-for="(slide, index) in item.img_url"
        :key="index"
      >
        <img :src="slide" alt="" />
      </div>
    </div>
    <div class="pre-view">
      <img :src="preImg" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  padding-bottom: 200px;
  .header {
    display: flex;
    justify-content: space-between;
    padding: 15px 20px;
    position: relative;
    border-bottom: 30px solid #f7f6f9;
    .header-left {
      .name {
        font-size: 36px;
        color: #6b22b3;
      }
      .xw {
        font-size: 24px;
        margin: 20px 0;
        color: #6b22b3;
      }
      .bq {
        background: linear-gradient(50deg, #9b54ca, #e6557f);
        color: #fff;
        display: inline-block;
        border-radius: 20px;
        margin-right: 30px;
        font-size: 24px;
        padding: 16px;
        margin-bottom: 30px;
      }
      .rate {
        color: #6b22b3;
        font-size: 28px;
      }
      .dz {
        color: #6b22b3;
        font-size: 28px;
        margin-top: 20px;
      }
    }
    .header-right {
      .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          width: 120px;
        }
        span {
          color: rgb(107, 34, 179);
        }
      }
      .btn {
        position: absolute;
        right: 4vw;
        bottom: 40px;
        color: #fff;
        padding: 20px 30px;
        background: linear-gradient(20deg, #e73266, #ee5380);
        border-radius: 7vw;
      }
    }
  }
  .tab {
    padding: 30px 40px;
    .tab-list {
      font-size: 28px;
      &.active {
        span {
          position: relative;
          color: rgb(202, 51, 88);
          &::before {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 40px;
            height: 4px;
            background: rgb(202, 51, 88);
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
  //   .swiper-container{
  //     .swiper-slide{
  //         img{
  //             width: 100%;
  //             height: 100%;
  //         }
  //     }
  //   }
  .swiper {
    display: flex;
    overflow: auto;
    padding: 0 20px;
    .swiper-list {
      margin-right: 20px;
      img {
        width: 200px;
        height: 200px;
      }
      &.active {
        border: 10px solid #e54878;
      }
    }
  }
  .pre-view {
    img {
      width: 100%;
    }
  }
}
</style>
