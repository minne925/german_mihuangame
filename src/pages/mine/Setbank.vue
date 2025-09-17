<template>
    <div class="container page">
        <van-nav-bar :title="$t('mine.Accountdetails')" class="nav-bar">
            <template #left>
                <van-icon name="arrow-left" color="#fff" @click="back()" />
            </template>
            <template #right>
                <van-icon v-if="editing" name="success" color="#fff" @click="edCard()" />
            </template>
        </van-nav-bar>
        <div class="wrapper">
            <div class="add-card" @click="toBindCard()" v-if="!is_bind">
                <van-icon name="plus" />
                <span>{{ $t('mine.addpaymentcard') }}</span>
            </div>
            <div class="bank" v-else>
                <div class="bank-cell">
                    <!-- <span>{{ $t('mine.bank_name') }}:</span>

                    <span>{{ this.bankInfo.bank_name }}</span> -->
                    <van-field :disabled="forbidEdit" v-model="bankInfo.bank_name" :label="$t('mine.bank_name')"
                        type="text" :placeholder="$t('mine.bank_name')" label-width="125px" />
                </div>
                <!-- <div class="bank-cell">
                    <van-field :disabled="forbidEdit" v-model="bankInfo.branch_name" :label="$t('mine.branch_name')"
                        type="text" :placeholder="$t('mine.branch_name')" label-width="125px" />
                </div> -->
                <!-- <div class="bank-cell">


                    <van-field :disabled="forbidEdit" v-model="bankInfo.branch_code" :label="$t('mine.branch_code')"
                        type="text" :placeholder="$t('mine.branch_code')" label-width="125px" />
                </div> -->
                <!-- <div class="bank-cell">


                    <van-field disabled v-model="bankInfo.transaction_type" :label="$t('mine.transaction_type')" type="text"
                        :placeholder="$t('mine.transaction_type')" label-width="125px" />
                </div> -->
                <div class="bank-cell">
                    <!-- <span>{{ $t('mine.account_number') }}:</span>
                    <span>{{ this.bankInfo.account_number }}</span> -->

                    <van-field :disabled="forbidEdit" v-model="bankInfo.account_number" type="text" maxlength="22"
                        :label="$t('mine.account_number')" :placeholder="$t('mine.account_number')"
                        label-width="115px" />
                </div>
                <div class="bank-cell">
                    <!-- <span>{{ $t('mine.account_holder_name') }}:</span>
                    <span>{{ this.bankInfo.account_holder_name }}</span> -->
                    <van-field :disabled="forbidEdit" v-model="bankInfo.account_holder_name"
                        :label="$t('mine.account_holder_name')" type="text"
                        :placeholder="$t('mine.account_holder_name')" label-width="120px" />
                </div>
                <!-- <div class="bank-cell">
                    <van-field :disabled="forbidEdit" v-model="bankInfo.account_holder_name_katakana"
                        :label="$t('mine.account_holder_name_katakana')" type="text"
                        :placeholder="$t('mine.account_holder_name_katakana')" label-width="125px" />
                </div> -->
            </div>
            <!-- <div class="tips">{{ $t('mine.cardtips') }}</div> -->
        </div>
    </div>
</template>

<script>
import BindCard from './BindCard.vue';

export default {
    data() {
        return {
            is_bind: false,
            bankInfo: {},
            old_bankInfo: {},
            userInfo: {},
            editing: false,
            forbidEdit: true,
        }
    },
    watch: {
        bankInfo: {
            handler(newVal, oldVal) {
                let ed = JSON.stringify(this.bankInfo)
                let old = JSON.stringify(this.old_bankInfo)
                this.editing = ed != old ? true : false
            },
            deep: true, // 启用深度监听
        },
    },
    methods: {
        back() {
            return window.history.back()
        },
        getUserBankInfo() {
            this.$http({
                method: 'get',
                url: 'user_get_bank'
            }).then((res) => {
                if (res.code === 200) {
                    if (res.data.is_bank) {
                        this.is_bind = true
                        this.bankInfo = res.data.info
                        this.old_bankInfo = JSON.parse(JSON.stringify(res.data.info));
                    } else {
                        this.is_bind = false
                    }
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        },
        getUserInfo() {
            this.$http({
                method: 'get',
                url: 'user_info'
            }).then((res) => {
                if (res.code === 200) {
                    this.userInfo = res.data
                    this.name = res.data.name
                    this.forbidEdit = res.data.is_bank == 1 ? false : true;
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        },
        toBindCard() {
            if (!this.userInfo.name) {
                this.$router.push('Setname')
                this.$toast(this.$t('mine.Setname'))
                return true
            } else if (!this.userInfo.paypassword) {
                this.$router.push('SetPayPassword')
                this.$toast(this.$t('mine.SetPayPassword'))
                return true
            } else {
                this.$router.push({ path: '/BindCard' })
            }
        },
        edCard() {
            // console.log(this.bankInfo.branch_name, 'bank_name')
            if (!this.bankInfo.bank_name) {
                this.$toast(this.$t("请输入银行名"));
                return true;
            }
            // if (!this.bankInfo.branch_name) {
            //     this.$toast(this.$t("请输入支店名称"));
            //     return true;
            // }
            // if (!this.bankInfo.branch_code) {
            //     this.$toast(this.$t("请输入支店号码"));
            //     return true;
            // }

            // if (!this.bankInfo.transaction_type) {
            //     this.$toast(this.$t("请输入交易类型"));
            //     return true;
            // }
            if (!this.bankInfo.account_number) {
                this.$toast(this.$t("请输入账户号码"));
                return true;
            }

            if (!this.bankInfo.account_holder_name) {
                this.$toast(this.$t("请输入账户名义"));
                return true;
            }

            // if (!this.bankInfo.account_holder_name_katakana) {
            //     this.$toast(this.$t("请输入账户名义（片假名）"));
            //     return true;
            // }

            this.$toast.loading({
                message: "loading...",
                forbidClick: true,
                duration: 0,
            });
            this.$http({
                method: "post",
                data: {
                    id: this.bankInfo.id,
                    bank_name: this.bankInfo.bank_name,
                    branch_name: this.bankInfo.branch_name,
                    branch_code: this.bankInfo.branch_code,
                    transaction_type: this.bankInfo.transaction_type,
                    account_number: this.bankInfo.account_number,
                    account_holder_name: this.bankInfo.account_holder_name,
                    account_holder_name_katakana: this.bankInfo.account_holder_name_katakana,
                },
                url: "user_set_bank1",
            }).then((res) => {
                this.$toast.clear();
                if (res.code === 200) {
                    // this.$router.push({ path: "/Mine" });
                    //   this.$router.push({ path: "/withdraw" });
                    this.getUserBankInfo()
                    this.$toast(res.msg);
                } else if (res.code === 401) {
                    this.$toast(res.msg);
                }
            }).catch(e => {
                this.$toast.clear();
                if (e && e.message) {
                    this.$toast(e.message);
                }

            })
        },
    },
    created() {
        if (!localStorage.getItem('token')) {
            this.$router.push({ path: '/Login' })
        } else {
            this.getUserInfo()
            this.getUserBankInfo()
        }
    },

}
</script>

<style lang='less' scoped>
@import '../../assets/css/base.css';

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
    width: 98%;
    margin: auto;
}

.wrapper .bank .bank-cell {
    line-height: 40px;
    font-size: 3vw;
    padding: 0vw 1vw;
    background: #fff;
    margin: 4vw 0 0 0;

    span {
        margin-right: 5px;
    }

    .van-field {
        // background-color: red;
    }
}
</style>
