<template>
  <div class="container page">
    <van-nav-bar :title="$t('mine.setup')" class="nav-bar">
      <template #left>
        <van-icon name="arrow-left" color="#fff" @click="back()" />
      </template>
    </van-nav-bar>
    <div class="items">
      <div class="item van-hairline--bottom" @click="toInfomation()">
        <div class="left">{{ $t("mine.Basicinformation") }}</div>
        <van-icon name="arrow" />
      </div>
      <div class="item van-hairline--bottom" @click="toLoginPassword()">
        <div class="left">{{ $t("mine.loginpassword") }}</div>
        <van-icon name="arrow" />
      </div>
      <div class="item van-hairline--bottom" @click="toPayPassword()">
        <div class="left">{{ $t("mine.fundpassword") }}</div>
        <div class="right">
          <span class="desc">{{ this.userInfo.paypassword }}</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <van-button
      class="sign-out"
      type="primary"
      size="normal"
      @click="loginout()"
      >{{ $t("common.logout") }}</van-button
    >
  </div>
</template>

<script>
import emitter from '@/utils/emitter'
export default {
  data() {
    return {
      userInfo: {},
    };
  },
  methods: {
    back() {
      return window.history.back();
    },
    toPayPassword() {
      if (this.userInfo.paypassword !== "") {
        // this.$toast(this.$t('mine.withdrawalpassword'))
        if (this.userInfo.is_pass_pay) {
          this.$router.push({ path: "/resetPayPassword" });
        } else {
          this.$toast(this.$t("mine.withdrawalpassword"));
        }
      } else {
        this.$router.push({ path: "/SetPayPassword" });
      }
    },
    toLoginPassword() {
      this.$router.push({ path: "/SetLoginPassword" });
    },
    toInfomation() {
      this.$router.push({ path: "/Infomation" });
    },
    loginout() {
      // localStorage.clear()
      localStorage.removeItem("token");
      emitter.emit('token-update');
      this.$router.push({ path: "/Mine" });
    },
    toServicePage() {
      this.$router.push("ServicePage");
    },
    getUserInfo() {
      this.$http({
        method: "get",
        url: "user_info",
      }).then((res) => {
        if (res.code === 200) {
          this.userInfo = res.data;
          if (res.data.paypassword) {
            this.userInfo.paypassword = this.$t("common.Hasbeenset");
          } else {
            this.userInfo.paypassword = this.$t("common.notset");
          }
        } else if (res.code === 401) {
          this.$toast(res.msg);
        }
      });
    },
  },
  created() {
    if (!localStorage.getItem("token")) {
      this.$router.push({ path: "/Login" });
    } else {
      this.getUserInfo();
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/base.css";
.container .items {
  background-color: #fff;
  font-size: 30px;
  color: #000;
  padding: 0 25px;
}
.container .items .item {
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 10px;
}
.container .items .van-hairline--bottom::after {
  border-bottom-width: 3px;
}
.container .sign-out {
  margin: 500px 20px 0;
  height: 100px;
  line-height: 100px;
  border-radius: 50px;
  color: #fff;
  font-size: 40px;
  font-weight: bolder;
  border: none;
  background: @primary-bg;
}
.container .item .desc {
  font-size: 30px;
  font-weight: 700;
  color: #979799;
}
.container .item .right {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
