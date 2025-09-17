<template>
  <div class="container page">
    <van-nav-bar title="Passwort" class="nav-bar">
      <template #left>
        <van-icon name="arrow-left" color="#fff" @click="back()" />
      </template>
      <!-- <template #right>
        <van-icon v-if="editing" name="success" color="#fff" @click="edCard()" />
      </template> -->
    </van-nav-bar>
    <div class="wrapper">
      <div class="bank" style="margin-top: 20px">
        <div>Bitte geben Sie Ihr Passwort ein.</div>
        <div class="bank-cell" style="background: transparent;">
          <!-- <van-field v-model="paypassword" type="password" /> -->

          <!-- <van-password-input :value="paypassword" :focused="showKeyboard" :gutter="10" :length="6" -->
          <!-- @focus="showKeyboard = true" /> -->
          <!-- 数字键盘 -->
          <!-- <van-number-keyboard v-model="paypassword" :show="showKeyboard" @blur="showKeyboard = false" /> -->

          <van-field v-model="paypassword" :placeholder="$t('mine.enterthefundpassword')" :maxLength="6"
            type="password" />
        </div>
      </div>

      <div class="bank">
        <van-button class="sign-out" :loading="loading" type="primary" size="normal" @click="onSubmit()">{{
          $t("common.logout") }}</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paypassword: "",
      loading: false,
      showKeyboard: true,
    };
  },
  methods: {
    back() {
      return window.history.back();
    },
    onSubmit() {
      this.loading = true;
      this.$http({
        method: "post",
        url: "member_passpay",
        data: {
          paypassword: this.paypassword,
        },
      })
        .then((res) => {
          if (res.code == 200) {
            // console.log(res)

            this.$http({
              method: "get",
              url: "user_get_bank",
            })
              .then((res) => {
                if (res.data.is_bank) {
                  this.$router.push("withdraw");
                } else {
                  this.$router.push("Setbank");
                  this.$toast(this.$t("mine.cardtitle"));
                }
              })
              .finally(() => {
                this.loading = false;
              });
          } else {
            this.loading = false;
            this.$toast(res.msg);
          }
        })
        .catch((err) => {
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/base.css";

.van-password-input__security {
  height: 12vw;
}

.van-number-keyboard {
  ::v-deep .van-key {
    height: 12vw;
  }
}


.wrapper .add-card {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c24491;
  background-color: #fff;
  height: 13.333vw;
}

.wrapper .add-card span {
  margin-left: 1.333vw;
  font-size: 5.333vw;
}

.van-cell {
  font-size: 35px;
  line-height: 80px;
}

.container p {
  padding: 0 15px;
  margin-top: 15px;
  font-size: 30px;
  color: #dc2037;
}

.manage-card .wrapper {
  height: calc(100% - 10px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.wrapper .tips {
  margin: 30px 30px;
  font-size: 25px;
  color: #979799;
}

.wrapper .bank .info {
  margin-left: 20px;
  flex: 1;
  color: #000;
}

.wrapper .bank .info .row-content {
  margin: 30px 0;
  line-height: 20px;
  font-size: 30px;
}

.wrapper .bank {
  width: 90%;
  margin: auto;
}

.wrapper .bank .bank-cell {
  line-height: 40px;
  font-size: 4.5vw;
  padding: 0vw 4vw;
  background: #fff;
  margin: 4vw 0 0 0;

  span {
    margin-right: 5px;
  }

  .van-field {
    // background-color: red;
  }
}

.sign-out {
  // margin: 500px 20px 0;
  margin-top: 40px;
  width: 100%;
  height: 100px;
  line-height: 100px;
  border-radius: 50px;
  color: #fff;
  font-size: 40px;
  font-weight: bolder;
  border: none;
  display: block;
  background: linear-gradient(90deg, #6529c9, #cc2996);
}
</style>
