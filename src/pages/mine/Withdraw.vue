<template>
    <div class="container page">
        <van-nav-bar :title="$t('mine.Withdrawalcenter')" class="nav-bar">
            <template #left>
                <van-icon name="arrow-left" color="#fff" @click="back()" />
            </template>
            <template #right>
                <span
                    class="nav-right"
                    @click="$router.push({ path: '/WithdrawRecord' })"
                    >{{ $t('mine.Withdrawalsrecord') }}</span
                >
            </template>
        </van-nav-bar>
        <div class="main">
            <div class="withdrawMoney">
                <span>{{ $t('mine.withdrawMoney') }}</span>
                <div class="money">
                        <van-field style="width: 66%;" v-model="withdraw_money" type="number" />
                        <div class="moneyNumber">
                        <span class="moneyType">{{
                            $t('common.currency')
                        }}</span>

                    </div>
                    <span class="all" @click="allMoeny()">{{
                        $t('game.all')
                    }}</span>
                </div>
                <div class="information">
                    <div class="description">
                        <van-popover v-model="showPopover" trigger="click">
                            <div class="popover-body" style="padding: 10px">
                                <p>
                                    {{ $t('mine.withdrshowPopovermin')
                                    }}{{ this.withdrawRole.min
                                    }}{{ $t('common.currency') }}，{{
                                        $t('mine.withdrshowPopovermax')
                                    }}{{ this.withdrawRole.max
                                    }}{{ $t('common.currency') }}
                                </p>
                                <p>
                                    {{ $t('mine.widtdrnum')
                                    }}{{ this.withdrawRole.num }}
                                </p>
                                <p>
                                    {{ $t('mine.withdrsucces') }}
                                </p>
                            </div>
                            <template #reference @click="withdrawInfo()">
                                <van-icon name="info-o" />
                                {{ $t('mine.Limitdescription') }}
                            </template>
                        </van-popover>
                    </div>

                    <div class="balance">
                        <span>{{ $t('mine.balance') }}：</span>
                        <span class="number">{{ this.userInfo.money }}</span>
                    </div>
                </div>
            </div>
            <van-button
                class="withdraw_btn"
                type="default"
                :disabled="isSubmitting"
                @click="doWithdraw()"
                >{{ $t('mine.Withdrawimmediately') }}</van-button
            >
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPopover: false,
            withdraw_money: '',
            userInfo: {},
            withdrawRole: {},
            isSubmitting: false
        }
    },
    methods: {
        back() {
            return window.history.back()
        },
        getUserInfo() {
            this.$http({
                method: 'get',
                url: 'user_info'
            }).then((res) => {
                if (res.code === 200) {
                    this.userInfo = res.data
                    this.name = res.data.name
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        },
        getUserWithdrawRole() {
            this.$http({
                method: 'get',
                url: 'user_get_withdraw_role'
            }).then((res) => {
                if (res.code === 200) {
                    this.withdrawRole = res.data
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        },
        allMoeny() {
            this.withdraw_money = this.userInfo.money
        },
        doWithdraw() {
            if (this.withdraw_money <= 0) {
                this.$toast(this.$t('mine.correctamount'))
                return false
            } else {
                this.isSubmitting = true
                this.$http({
                    method: 'post',
                    data: { money: this.withdraw_money },
                    url: 'user_set_withdraw'
                })
                    .then((res) => {
                        if (res.code === 200) {
                            location.reload()
                            this.$toast(res.msg)
                            this.getUserInfo()
                            this.getUserWithdrawRole()
                        } else if (res.code === 401) {
                            this.$toast(res.msg)
                        }
                    })
                    .finally(() => {
                        this.isSubmitting = false
                    })
            }
        },
        withdrawInfo() {
            this.showPopover = true
        }
    },
    created() {
        if (!localStorage.getItem('token')) {
            this.$router.push({ path: '/Login' })
        } else {
            this.getUserInfo()
            this.getUserWithdrawRole()
        }
    }
}
</script>

<style lang='less' scoped>
@import '../../assets/css/base.css';
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
.container .main {
    display: flex;
    flex-direction: column;
    background-color: #f2f2f5;
    height: calc(100% - 50px);
    position: relative;
}
.container .main .withdrawMoney {
    display: flex;
    flex-direction: column;
    color: #000;
    padding: 0 20px;
    white-space: nowrap;
    font-size: 35px;
    background-color: #fff;
}
.container .main .withdrawMoney span {
    padding: 10px 0;
}
.container .main .withdrawMoney .money {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f5;
}
.container .main .withdrawMoney .money .moneyNumber {
    font-size: 50px;
    display: flex;
    flex-direction: row;
}
.container .main .withdrawMoney span {
    padding: 10px 0;
}
.container .main .withdrawMoney .money .all {
    color: #d10404;
}
.container .main .withdrawMoney .money .moneyNumber .van-cell {
    font-size: 50px;
    padding: 0 !important;
}
.container .main .withdrawMoney .information {
    padding-bottom: 30px;
}
.container .main .withdrawMoney .information .description {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px 0;
}
.container .main .withdrawMoney span {
    padding: 10px 0;
}
.container .main .withdrawMoney .information .balance .number {
    color: #d10404;
}
.withdraw_btn {
    margin: 20px 30px 0;
    height: 80px;
    line-height: 1.22667rem;
    border-radius: 50px;
    color: #fff;
    font-size: 30px;
    font-weight: bolder;
    border: none;
    background: @primary-bg;
}
</style>
