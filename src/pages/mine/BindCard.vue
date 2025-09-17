<template>
  <div class="container page">
    <van-nav-bar :title="$t('mine.cardtitle')" class="nav-bar">
      <template #left>
        <van-icon name="arrow-left" color="#fff" @click="back()" />
      </template>
    </van-nav-bar>
    <div class="main-box">
      <div class="label">{{ $t("mine.inp_cardtitle") }}</div>

      <!-- name - 姓名
bank_name - 银行名
branch_name - 支店名
branch_code - 支店番号
transaction_type - 取引種類
account_number - 口座番号
account_holder_name - 口座名義
account_holder_name_katakana - 口座名義 (カタ) -->

      <van-cell-group>
        <!-- <van-field
          v-model="name"
          :label="$t('mine.actualname')"
          :placeholder="$t('mine.inp_name')"
          label-width="125px"
        /> -->
        <van-field v-model="bank_name" :label="$t('mine.bank_name')" type="text" :placeholder="$t('mine.bank_name')"
          label-width="125px" />
        <!-- <van-field v-model="branch_name" :label="$t('mine.branch_name')" type="text"
          :placeholder="$t('mine.branch_name')" label-width="125px" /> -->
        <!-- <van-field v-model="branch_code" :label="$t('mine.branch_code')" type="text"
          :placeholder="$t('mine.branch_code')" label-width="125px" /> -->
        <!-- <van-field
          v-model="transaction_type"
          :label="$t('mine.transaction_type')"
          type="text"
          :placeholder="$t('mine.transaction_type')"
          label-width="125px"
        /> -->
        <van-field v-model="account_number" :label="$t('mine.account_number')" type="text" maxlength="22"
          :placeholder="$t('mine.account_number')" label-width="125px" />
        <van-field v-model="account_holder_name" :label="$t('mine.account_holder_name')" type="text"
          :placeholder="$t('mine.account_holder_name')" label-width="125px" />
        <!-- <van-field v-model="account_holder_name_katakana" :label="$t('mine.account_holder_name_katakana')" type="text"
          :placeholder="$t('mine.account_holder_name_katakana')" label-width="125px" /> -->
        <!-- <van-field
                    v-model="bank"
                    :label="$t('mine.inp_bank')"
                    readonly
                    :placeholder="$t('mine.select_bank')"
                    @click="showSelectBanks()"
                    label-width="125px"
                /> -->
      </van-cell-group>
      <p>
        {{ $t("mine.bindCardnote") }}
      </p>
    </div>
    <van-button class="bindCard" type="default" @click="bindCard()">{{
      $t("mine.bindCard")
    }}</van-button>
    <van-popup v-model="showBank" round position="bottom" :style="{ height: '35%' }">
      <van-picker show-toolbar :columns="banks" :confirm-button-text="$t('common.Sure')"
        :cancel-button-text="$t('common.Cancel')" @confirm="onConfirm" @cancel="onCancel" />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banks: [],
      showBank: false,
      userInfo: {},
      bankid: "",
      bank: "",
      name: "",
      bank_name: "",
      branch_name: "",
      branch_code: "",
      transaction_type: "",
      account_number: "",
      account_holder_name: "",
      account_holder_name_katakana: "",
    };
  },
  methods: {
    back() {
      return window.history.back();
    },
    bindCard() {
      //   if (this.name == "") {
      //     this.$toast(this.$t("mine.inp_name"));
      //     return true;
      //   }
      // bank_name:"",
      //   branch_name:"",
      //   branch_code:"",
      //   transaction_type:"",
      //   account_number:"",
      //   account_holder_name:"",
      //   account_holder_name_katakana:"",
      console.log(this.branch_name, 'bank_name')
      if (!this.bank_name) {
        this.$toast(this.$t("请输入银行名"));
        return true;
      }
      // if (!this.branch_name) {
      //   this.$toast(this.$t("请输入支店名称"));
      //   return true;
      // }
      // if (!this.branch_code) {
      //   this.$toast(this.$t("请输入支店号码"));
      //   return true;
      // }

      // if (!this.transaction_type) {
      //   this.$toast(this.$t("请输入交易类型"));
      //   return true;
      // }
      if (!this.account_number) {
        this.$toast(this.$t("请输入账户号码"));
        return true;
      }

      if (!this.account_holder_name) {
        this.$toast(this.$t("请输入账户名义"));
        return true;
      }

      // if (!this.account_holder_name_katakana) {
      //   this.$toast(this.$t("请输入账户名义（片假名）"));
      //   return true;
      // }

      this.$http({
        method: "post",
        data: {
          bank_name: this.bank_name,
          branch_name: this.branch_name,
          branch_code: this.branch_code,
          transaction_type: this.transaction_type,
          account_number: this.account_number,
          account_holder_name: this.account_holder_name,
          account_holder_name_katakana: this.account_holder_name_katakana,
        },
        url: "user_set_bank",
      }).then((res) => {
        if (res.code === 200) {
          // this.$router.push({ path: "/Mine" });
          // this.$router.push({ path: "/withdraw" });
          this.$router.go(-1)

          this.$toast(res.msg);
        } else if (res.code === 401) {
          this.$toast(res.msg);
        }
      });
    },
    showSelectBanks() {
      this.showBank = true;
    },
    getUserInfo() {
      this.$http({
        method: "get",
        url: "user_info",
      }).then((res) => {
        if (res.code === 200) {
          this.userInfo = res.data;
          //  this.name = res.data.name
        } else if (res.code === 401) {
          this.$toast(res.msg);
        }
      });
    },
    getBankList() {
      this.$http({
        method: "get",
        url: "sys_get_banks",
      }).then((res) => {
        if (res.code === 200) {
          this.banks = res.data;
        } else if (res.code === 401) {
          this.$toast(res.msg);
        }
      });
    },
    onConfirm(value) {
      this.bank = value.text;
      this.showBank = false;
    },
    onCancel() {
      this.showBank = false;
    },
    getUserBankInfo() {
      this.$http({
        method: "get",
        url: "user_get_bank",
      }).then((res) => {
        if (res.code === 200) {
          if (res.data.is_bank) {
            this.is_bind = true;
          } else {
            this.is_bind = false;
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
      this.getBankList();
      this.getUserBankInfo();
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/base.css";

.van-cell {
  font-size: 32px;
  line-height: 80px;
}

.van-hairline--bottom::after {
  border-bottom-width: 3px;
}

.bankbox {
  padding: 15px;
  color: #000;
  background-color: #fff;
}

.bankbox .title {
  padding: 8px 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 28px;
}

.main-box {
  background: #fff;
}

.main-box .label {
  padding: 20px;
  font-size: 35px;
  color: #797878;
}

::v-deep .van-picker__toolbar {
  height: 50px;
}

::v-deep .van-picker__cancel,
::v-deep .van-picker__confirm {
  padding: 0 20px;
  font-size: 24px;
}

::v-deep .van-picker-column {
  font-size: 40px;
}

.main-box p {
  padding: 0 20px;
  font-size: 30px;
  color: #ee0a24;
  line-height: 150%;
}

.bindCard {
  margin: 20px 30px 0;
  height: 80px;
  line-height: 1.22667rem;
  border-radius: 50px;
  color: #fff;
  font-size: 30px;
  font-weight: bolder;
  border: none;
  background: linear-gradient(90deg, #6529c9, #cc2996);

}
</style>
