<template>
  <div class="convention-hall page">
    <van-nav-bar class="nav-bar" :title="$t('concubine.choosetitle')" />
    <div class="banner"></div>
    <van-tabs @click="change" title-active-color="#c571cf" title-inactive-color="#442889">
      <van-tab v-for="(item, index) in addlist" :title="item.name" :key="index">
        <!-- 内容 {{ item }} -->
      </van-tab>
    </van-tabs>
    <div class="content">
      <div class="list" v-for="(item, index) in datalist" :key="index">
        <div class="img">
          <img :src="item.img_url" />
          <!-- <img src="../../assets/p.jpg" /> -->
        </div>
        <div class="ct">
          <div class="tag">
            <span>
              <img src="@/assets/vip.png" />
              {{$t('认证')}}</span
            >
            <span>
              <img src="@/assets/vip.png" />
              {{$t('视频认证')}}</span
            >
          </div>
          <div class="name">
            {{ item.xuanfei_name }}
          </div>
          <div class="desc">
            <span>{{ item.introduce }}</span>
          </div>
          <div class="rate">
            <span>{{$t('评分')}}:</span>
            <van-rate
              v-model="item.praise"
              :size="15"
              color="#ffd21e"
              void-icon="star"
              void-color="#eee"
            />
          </div>
          <div class="xj">
            <span>{{$t('身高')}}：{{ item.height }}</span>
            <span>{{$t('地域')}}：{{ item.address }}</span>
          </div>
          <div class="kj">
            <span>{{$t('降落伞')}}:{{item.airborne?$t('是的'):$t('不是')}}</span>
          </div>
          <div class="btn" @click="toPage(item)">{{$t('现在就答应她')}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: [],
      addlist: [],
    };
  },
  methods: {
    
    toPage(item){
        console.log(item);
        this.$router.push({
            name: 'Details',
            query:{
                name:item.xuanfei_name,
                id:item.id
            }
        })
    },
    addgo(data) {
      if (!localStorage.getItem("token")) {
        this.$router.push({ path: "/Login" });
      } else {
        this.$router.push({
          path: "/list?id=" + data.id + "&name=" + data.name,
        });
      }
    },
    getAddress() {
      this.$http({
        method: "get",
        url: "address_list",
      }).then((res) => {
        this.addlist = res.data;
        this.getxuanfeilist(this.addlist[0].id);
      });
    },
    // 改变
    change(e) {
      console.log(this.addlist[e], e, "e");
      this.getxuanfeilist(this.addlist[e].id);
    },
    getxuanfeilist(id) {
      this.$http({
        method: "get",
        url: "xuanfeilist",
        data: { id: id },
      }).then((res) => {
        this.datalist = res.data;
      });
    },
  },
  created() {
    this.getAddress();
  },
};
</script>

<style lang="less" scoped>
.page {
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  background-color: #f2f2f5;
}
.nav-bar {
  background: @primary-bg;
  height: 88px;
}
.van-nav-bar {
  line-height: 44px;
}
::v-deep .van-nav-bar__title {
  max-width: 60%;
  margin: 0 auto;
  color: #ffffff;
  font-size: 35px;
}
::v-deep .van-nav-bar__content {
  height: 100px;
}
.van-sidebar {
  width: 180px;
}
.convention-hall {
  display: flex;
  flex-direction: column;
//   bottom: 20px;
  background: #f2f2f5;
  padding-bottom:100px;
}
::v-deep .van-tab {
  font-size: 30px;
  line-height: 100px;
  font-weight: bold;
}
::v-deep .van-tabs__line {
  background-color: #c571cf;
  height: 10px;
  width: 10%;
  border-radius: 0;
}
::v-deep .van-tabs--line .van-tabs__wrap {
  height: 100px;
}
::v-deep .van-tabs__wrap--scrollable .van-tab {
  padding: 0 23px;
}
.card {
  background-color: #8a637d;
  padding: 0.625rem;
  width: 95%;
  color: white;
  font-size: 0.8125rem;
  margin: 0.625rem auto;
  border-radius: 0.375rem;
}

.rig-box {
  width: 95%;
  margin: 0.625rem auto;
}
.rig-title {
  color: #0bdab0;
  font-size: 1.125rem;
}
.rig-content {
  font-size: 20px;
  // margin-top: 10px;
}
.address {
  width: 90%;
  margin: 0 auto;
}

.van-cell-group {
  width: 50%;
  display: flex;
  text-align: center;
  float: left;
  background-color: none;
  font-weight: 700;
}

.van-cell {
  font-size: 2.867vw;
  line-height: 3.467vw;
  background-color: #eee;
}

.van-cell__value {
  position: relative;
  overflow: hidden;
  color: #969799;
  text-align: right;
  vertical-align: middle;
  word-wrap: break-word;
}

.van-cell__value--alone {
  color: #c24491;
  text-align: center;
}
.van-row--flex {
  line-height: 10.667vw;
  display: flex;
  flex-wrap: wrap;
}
.van-row--justify-center {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}

.van-col--12 {
  width: 50%;
}
.van-col {
  float: left;
  box-sizing: border-box;
  min-height: 1px;
}

.linear-gradient {
  background: linear-gradient(270deg, #e6c3a1, #7e5678);
}
.mb-1 {
  margin-bottom: 1rem;
}
.color-white {
  color: #fff !important;
}
.text-center {
  text-align: center;
}
.border-15 {
  border-radius: 2vw;
}

.banner {
  width: 100%;
  height: 400px;
  background: url("../../assets/banner.png") no-repeat;
  background-size: 100% 100%;
  background-position: center;
}

.content {
  background-color: #fff;
  padding: 40px;
  .list {
    display: flex;
    // justify-content: sp
    margin-top: 40px;
    .img {
      width: 240px;
      height: 240px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .ct {
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
        background: @primary-bg;
        margin-top: 20px;
      }
    }
  }
}
</style>
