<template>
    <div class="container page">
        <van-nav-bar :title="$t('mine.rechargecenter')" class="nav-bar">
            <template #left>
                <van-icon name="arrow-left" color="#fff" @click="back()" />
            </template>
            <template #right>
                <span
                    class="nav-right"
                    @click="$router.push({ path: '/RechargeRecord' })"
                    >{{ $t('mine.rechargerecord') }}</span
                >
            </template>
        </van-nav-bar>
        <div class="main">
            <div class="user">
                <div class="user-info">
                    <div class="van-image avatar">
                        <van-image
                            round
                            class="user_img"
                            :src="this.userInfo.header_img"
                        >
                            <template v-slot:loading>
                                <van-loading type="spinner" />
                            </template>
                        </van-image>
                    </div>
                    <div class="info">
                        <p>{{ this.userInfo.name }}</p>
                        <p>{{ this.userInfo.money }}</p>
                    </div>
                </div>
                <div class="description"></div>
            </div>
            <div class="wrapper">
                <div
                    class="van-collapse van-hairline--top-bottom"
                    style="
                        margin-top: 10px;
                        border-radius: 10px;
                        overflow: hidden;
                    "
                >
                    <div
                        class="van-collapse-item"
                        @click="toPay(item.id)"
                        v-for="(item, index) in banklist"
                        :key="index"
                    >
                        <div class="van-collapse-item__wrapper">
                            <div class="van-collapse-item__content">
                                <div style="color: rgb(194, 68, 145)">
                                    <div
                                        style="
                                            margin-left: 10px;
                                            line-height: 20px;
                                            display: flex;
                                            align-items: flex-start;
                                        "
                                    >
                                        <img
                                            :src="
                                                '/img/mine/' + item.pic + '.png'
                                            "
                                            style="width: 32px; height: 32px"
                                        /><span
                                            style="
                                                font-size: 22px;
                                                padding-left: 10px;
                                                line-height: 32px;
                                            "
                                            >{{ item.classname }}</span
                                        >
                                    </div>
                                    <div
                                        style="
                                            font-size: 16px;
                                            margin-left: 40px;
                                            margin-top: 10px;
                                        "
                                    >
                                        {{ item.note }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            banklist: {}
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
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        },
        getBankList() {
            this.$http({
                method: 'get',
                url: 'sys_get_BeneficiaryBank'
            }).then((res) => {
                if (res.code === 200) {
                    this.banklist = res.data
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        },
        toPay(id) {
            if (!localStorage.getItem('token')) {
                this.$router.push({ path: '/Login' })
            } else {
                this.$router.push({ path: '/Pay?id=' + id })
            }
        }
    },
    created() {
        if (!localStorage.getItem('token')) {
            this.$router.push({ path: '/Login' })
        } else {
            this.getUserInfo()
            this.getBankList()
        }
    }
}
</script>

<style lang='less' scoped>
@import '../../assets/css/base.css';

.van-collapse {
    margin: auto;
}
.van-collapse-item {
    width: 98%;
    margin: auto;
    margin-top: 10px;
}
.user {
    width: 100%;
    background: linear-gradient(90deg, #7e5678, #e6c3a1);
    padding: 2.667vw 5.333vw;
}
.user .user-info {
    display: flex;
    flex-direction: row;
}

.user .user-info .info {
    display: flex;
    flex-direction: column;
    margin-left: 2.667vw;
    justify-content: space-around;
}

.user .user-info .info p {
    color: #fff;
    font-size: 4vw;
    line-height: 0;
}
.user .user-info .avatar {
    border-radius: 50%;
    width: 13.333vw;
    height: 13.333vw;
    overflow: hidden;
}

.van-image {
    position: relative;
    display: inline-block;
}
.van-cell {
    font-size: 35px;
    line-height: 80px;
    width: 98%;
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
    background: linear-gradient(90deg, #e6c3a1, #7e5678);
}
</style>
