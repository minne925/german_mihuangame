<template>
    <div class="mine page">
        <div class="page-bg"></div>
        <div class="wrapper">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="header">
                    <van-nav-bar class="nav-bar">
                        <template #right>
                            <van-icon
                                name="setting-o"
                                @click="showSetting()"
                                color="#fff"
                            />
                        </template>
                    </van-nav-bar>
                    <div class="user-wrapper" @click="doLogin()">
                        <van-image
                            round
                            class="user_img"
                            :src="this.userInfo.header_img"
                        >
                            <template v-slot:loading>
                                <van-loading type="spinner" />
                            </template>
                        </van-image>
                        <div class="user-content">
                            <div class="name">
                                <!-- <div class="img-1">
                                    <img
                                        v-if="this.userInfo.level"
                                        :src="
                                            '/img/mine/' +
                                            this.userInfo.level +
                                            '.png'
                                        "
                                        class="van-image__img"
                                    />
                                </div> -->
                                <span class="textasdasssda">
                                    {{ this.userInfo.username }}
                                </span>
                            </div>
                            <div class="point">
                                クレジット: 100
                            </div>
                        </div>

                        <!-- <div class="qiandao" @click.stop="checkIn">
                            <img src="/img/mine/qiandao.png" alt="" />
                            <p>{{ $t('mine.check_in') }}</p>
                        </div> -->
                    </div>
                </div>
                <div class="content">
                    <div class="finance">
                        <div class="finance-item" @click="doPay()">
                            <!-- <van-icon class="icon" style="" name="peer-pay" /> -->
                            <img class="icon" src="img/mine/peer-pay.png"/>
                            <span class="text">{{ $t('mine.Recharge') }}</span>
                        </div>
                        <div class="line"></div>
                        <div class="finance-item" @click="doWithdrawal()">
                            <!-- <van-icon class="icon" name="idcard" /> -->
                            <img  class="icon" src="img/mine/idcard.png"/>
                            <span class="text">{{ $t('mine.withdraw') }}</span>
                        </div>
                    </div>
                    <div v-if="this.userInfo.money" class="wallet">
                        <div class="part-1 van-hairline--bottom">
                            <p class="flex-1 font-28 font-primary-color">
                                {{ $t('mine.Mypurse') }}
                            </p>
                            <span
                                class="font-28 font-gray"
                                style="display: none"
                                >{{ $t('common.Details') }}</span
                            >
                            <van-icon
                                class="font-gray"
                                style="font-size: 28px; display: none"
                                name="arrow"
                            />
                        </div>
                        <div class="part-2">
                            <p class="balance van-ellipsis">
                                {{ this.userInfo.money }}
                            </p>
                            <span class="font-28 font-gray">{{
                                $t('mine.balance')
                            }}</span>
                            <div class="refresh-btn" @click="refresh()">
                                <van-icon name="replay" />
                            </div>
                        </div>
                    </div>
                    <div :style="{ marginTop: menu_top + 'px' }" class="menu">
                        <div
                            class="menu-item"
                            @click="$router.push({ path: '/Personalreport' })"
                        >
                            <van-image
                                class="menu-item-icon"
                                src="img/mine/baobiao.svg"
                            >
                                <template v-slot:loading>
                                    <van-loading type="spinner" />
                                </template>
                            </van-image>
                            <span class="menu-item-label">{{
                                $t('mine.personalreport')
                            }}</span>
                        </div>
                        <div class="menu-item" @click="setbank()">
                            <van-image
                                class="menu-item-icon"
                                src="img/mine/mingxi.svg"
                            >
                                <template v-slot:loading>
                                    <van-loading type="spinner" />
                                </template>
                            </van-image>
                            <span class="menu-item-label">{{
                                $t('mine.Accountdetails')
                            }}</span>
                        </div>
                        <div
                            class="menu-item"
                            @click="$router.push({ path: '/GameRecord' })"
                        >
                            <van-image
                                class="menu-item-icon"
                                src="img/mine/youxi.svg"
                            >
                                <template v-slot:loading>
                                    <van-loading type="spinner" />
                                </template>
                            </van-image>
                            <span class="menu-item-label">{{
                                $t('mine.gamerecord')
                            }}</span>
                        </div>
                        <div
                            class="menu-item"
                            @click="$router.push({ path: '/Infomation' })"
                        >
                            <van-image
                                class="menu-item-icon"
                                src="img/mine/user.svg"
                            >
                                <template v-slot:loading>
                                    <van-loading type="spinner" />
                                </template>
                            </van-image>
                            <span class="menu-item-label">{{
                                $t('mine.PersonalCenter')
                            }}</span>
                        </div>
                        <div class="menu-item" @click="toNotice()">
                            <van-image
                                class="menu-item-icon"
                                src="img/mine/gonggao.svg"
                            >
                                <template v-slot:loading>
                                    <van-loading type="spinner" />
                                </template>
                            </van-image>
                            <span class="menu-item-label">{{
                                $t('mine.announcement')
                            }}</span
                            ><span style="color: red"
                                >({{ this.notecount }})</span
                            >
                        </div>
                        <!-- <div class="menu-item" @click="toService()">
                            <van-image
                                class="menu-item-icon"
                                src="img/mine/kefu_1.svg"
                            >
                                <template v-slot:loading>
                                    <van-loading type="spinner" />
                                </template>
                            </van-image>
                            <span class="menu-item-label">{{
                                $t('mine.onlineservice')
                            }}</span>
                        </div> -->
                        <!-- <div class="menu-item" @click="showLangSelector">
                            <van-image
                                class="menu-item-icon"
                                src="img/mine/lang.png"
                            >
                                <template v-slot:loading>
                                    <van-loading type="spinner" />
                                </template>
                            </van-image>
                            <span class="menu-item-label">{{
                                $t('mine.setlang')
                            }}</span>
                        </div> -->
                    </div>
                </div>
            </van-pull-refresh>
        </div>
        <!-- 语言选择弹窗 -->
        <van-popup
            v-model="langSelectorVisible"
            position="bottom"
            :style="{ height: 'auto' }"
        >
            <van-picker
                show-toolbar
                :columns="langOptions"
                @confirm="onLangConfirm"
                @cancel="onLangCancel"
                :confirm-button-text="$t('common.Sure')"
                :cancel-button-text="$t('common.Cancel')"
            />
        </van-popup>

        <van-popup
            v-model="showCheckIn"
            class="check-in-box"
            :close-on-click-overlay="false"
            closeable
            lazy-render
            round
        >
            <div class="check-in-wrap">
                <div class="title">
                    {{ $t('mine.check_in_box_title', { dayNum: signscount }) }}
                </div>
                <div class="content">
                    <van-calendar
                        v-if="defaultDate.length"
                        type="multiple"
                        color="#1989fa"
                        :min-date="minDate"
                        :max-date="maxDate"
                        :poppable="false"
                        :show-title="false"
                        :show-subtitle="false"
                        :show-confirm="false"
                        :default-date="defaultDate"
                        readonly
                    />
                    <van-loading
                        v-else
                        type="spinner"
                        color="#1989fa"
                        vertical
                    />
                </div>
                <div class="tips">
                    <h3>{{ $t('mine.check_in_tips_title') }}</h3>
                    <p>{{ $t('mine.check_in_tips_1') }}</p>
                    <p>{{ $t('mine.check_in_tips_2') }}</p>
                    <p>{{ $t('mine.check_in_tips_3') }}</p>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {},
            menu_top: 40,
            isLoading: false,
            showCheckIn: false,
            minDate: null,
            maxDate: null,
            defaultDate: [],
            signscount: 0,
            notecount: 0,
            langSelectorVisible: false,
            langOptions: []
        }
    },
    methods: {
        showLangSelector() {
            this.getLang()
            this.langSelectorVisible = true
        },
        onLangConfirm(value) {
            this.$i18n.locale = value.value
            localStorage.setItem('Lang', value.value)
            this.langSelectorVisible = false
            window.location.reload()
        },
        onLangCancel() {
            this.langSelectorVisible = false
        },
        checkIn() {
            this.showCheckIn = true

            this.$http({
                method: 'get',
                url: 'check_in'
            }).then((res) => {
                // console.log(res, 'checkIn--')
                this.defaultDate = res.data.signdata.map(
                    (item) => new Date(item * 1000)
                )
                this.signscount = res.data.signcount

                //  console.log(this.defaultDate, "checkIn-this.defaultDate-");
                this.$toast(res.msg)

                this.$nextTick(() => {
                    const headerNodes = document.getElementsByClassName(
                        'van-calendar__header'
                    )
                    if (headerNodes.length) {
                        headerNodes[0].style.display = 'none'
                    }
                    const nodes = document.getElementsByClassName(
                        'van-calendar__month-title'
                    )
                    if (nodes.length) {
                        const _date = nodes[0].innerText
                        nodes[0].innerText = _date
                            .replace('年', '-')
                            .replace('月', '')
                    }
                })
            })
        },
        refresh() {
            this.isLoading = true
            setTimeout(() => {
                this.isLoading = false
                if (localStorage.getItem('token')) {
                    this.$toast(this.$t('home.refresh_successful'))
                } else {
                    this.$router.push({ path: '/Login' })
                }
            }, 500)
        },
        setbank() {
            this.$router.push('Setbank')
            //  this.$toast(this.$t('mine.enter'))
        },
        showSetting() {
            if (localStorage.getItem('token')) {
                this.$router.push({ path: '/Setting' })
            } else {
                this.$router.push({ path: '/Login' })
            }
        },
        toNotice() {
            if (localStorage.getItem('token')) {
                this.$router.push({ path: '/Notice' })
            } else {
                this.$router.push({ path: '/Login' })
            }
        },
        onRefresh() {
            setTimeout(() => {
                this.isLoading = false
                if (localStorage.getItem('token')) {
                    this.getUserInfo()
                    this.$toast(this.$t('home.refresh_successful'))
                } else {
                    this.$router.push({ path: '/Login' })
                }
            }, 500)
        },
        doLogin() {
            if (localStorage.getItem('token')) {
                this.$router.push({ path: '/Infomation' })
            } else {
                this.$router.push({ path: '/Login' })
            }
        },
        doPay() {
            this.$router.push({ path: '/Recharge' })
            //  this.$toast(this.$t('mine.servicerecharge'))
            return false
        },
        doWithdrawal() {
            this.$http({
                method: 'get',
                url: 'user_get_bank'
            }).then((res) => {
                if (res.data.is_bank) {
                    this.$router.push('withdraw')
                } else {
                    this.$router.push('Setbank')
                    this.$toast(this.$t('mine.cardtitle'))
                }
            })
        },
        toService() {
            if (this.$store.getters.getBaseInfo.iskefu == 1) {
                this.$router.push('ServiceOnline')
            } else {
                this.$toast(this.$t('common.disabled'))
            }
        },
        getUserInfo() {
            this.$http({
                method: 'get',
                url: 'user_info'
            }).then((res) => {
                if (res.code === 200) {
                    this.userInfo = res.data
                    this.menu_top = 15
                    if (this.userInfo.status !== 1) {
                        this.$toast(this.$t('common.offline'))
                        this.$router.push({ path: '/Login' })
                    }
                } else if (res.code === 401) {
                    //  this.$toast(res.msg)
                    this.$router.push({ path: '/Login' })
                }
            })
        },
        getUserNote() {
            this.$http({
                method: 'get',
                url: 'sys_get_notice_num'
            }).then((res) => {
                if (res.code === 200) {
                    this.notecount = res.data
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        },
        getLang() {
            this.$http({
                method: 'get',
                url: 'sys_get_lang'
            }).then((res) => {
                if (res.code === 200) {
                    this.langOptions = res.data
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        },
        getLastDay(year, month) {
            const date1 = new Date(year, month, 0)
            return date1.getDate()
        }
    },
    created() {
        if (localStorage.getItem('token')) {
            this.getUserNote()
        } else {
            this.userInfo.username = this.$t('mine.loginRegister')
            // this.userInfo.ip = this.$t('mine.logintip')
            this.userInfo.header_img = 'img/mine/avatar.png'
        }
        this.getUserInfo()
        const year = new Date().getFullYear()
        const month = new Date().getMonth()
        const lastDay = this.getLastDay(year, month + 1)
        this.minDate = new Date(year, month, 1)
        this.maxDate = new Date(year, month, lastDay)
    }
}
</script>

<style lang="less" scoped>
.page {
    position: absolute !important;
    top: 0;
    left: 0;
    right: 0;
    background-color: #f2f2f5;
}
.textasdasssda {
    font-size: 5vw;
    font-weight: 500;
    color: #fff;
}

.user-content {
    flex: 1;
    margin-left: 4vw;
    display: flex;
    flex-direction: column;
    .name {
        font-size: 5vw;
        color: #fff;
    }
    .point {
        color: rgba(255, 255, 255, 0.6);
        margin-top: 30px;

    }
}

.img-1 {
    width: 6.13333rem;
    -o-object-fit: contain;
    object-fit: contain;
    position: relative;
    display: inline-block;
}

.name {
    align-items: center;
}

.name {
    font-size: 1.125rem;
}

.mine {
    position: relative;
    bottom: 10px;
    /* background: #f2f2f5; */
    /* background-color: red */
}
.mine .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
}
.nav-bar {
    background: @primary-bg;
}
.mine .header {
    /* background: linear-gradient(90deg, #7e5678, #e6c3a1); */
    /* padding-bottom: 100px; */
    bottom: 10px;
    background: url(/img/mine/usertop.png) no-repeat top -16vw center;
    background-size: cover;
    padding-bottom: 7vw;
    height: 44vw;
    display: flex;
    align-items: center;
}
::v-deep .van-nav-bar__content {
    height: 100px;
}
::v-deep .van-hairline--bottom::after {
    border-bottom-width: 0px;
}
.mine .header .van-nav-bar .van-icon {
    font-size: 45px;
}
.mine .header .user-wrapper {
    display: flex;
    align-items: center;
    /* margin: 0px 40px 0px 40px; */
    margin: 0 5vw 0 5vw;
}
.mine .user_img {
    height: 16vw;
    width: 16vw;
}
::v-deep .van-loading__spinner {
    height: 50px;
    width: 50px;
}
::v-deep .van-image__error-icon {
    font-size: 70px;
}
.mine .header .user-wrapper .login-content {
    flex: 1;
    margin-left: 30px;
}
.mine .header .user-wrapper .login-content .login-btn {
    display: inline-block;
    font-size: 40px;
    line-height: 0px;
    color: #fff;
}
.mine .header .user-wrapper .login-content .login-label {
    margin-top: -13px;
    font-size: 28px;
    color: hsla(0, 0%, 100%, 0.6);
}

.qiandao {
    text-align: center;
}
.qiandao img {
    width: 92px;
    height: 84px;
}
.qiandao p {
    color: #ffffff;
    font-size: 26px;
    margin: 0;
    padding: 0;
}
.mine .page-bg {
    /* height: 500px; */
    /* background: linear-gradient(90deg, #7e5678, #e6c3a1); */
    /* background-color: red; */
}
.mine .content {
    position: relative;
    padding: 10px 30px 30px;
    min-height: 500px;
    background-color: #f2f2f5;
}

::v-deep .van-pull-refresh__track .van-pull-refresh__head * {
    color: #ffffff;
    font-size: 35px;
}

.mine .wrapper .content .finance {
    position: absolute;
    display: flex;
    align-items: center;
    top: -55px;
    left: 30px;
    right: 30px;
    height: 120px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 1.5px 1px 0 #e4e4e7;
}
.mine .wrapper .content .finance .line {
    width: 3px;
    height: 40px;
    background-color: #ccc;
}
.mine .wrapper .content .finance .finance-item {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.mine .wrapper .content .finance .finance-item .text {
    margin-left: 30px;
    font-size: 30px;
    color: #000;
    font-weight: 500;
}
.mine .wrapper .content .finance .finance-item .icon {
    /* font-size: 50px; */
    width: 58px;
    height: 58px;
}
.mine .wrapper .content .menu {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 1.5px 1px 0 #e4e4e7;
}
.mine .wrapper .content .menu .menu-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    height: 130px;
}
.mine .wrapper .content .menu .menu-item .menu-item-label {
    font-size: 30px;
    color: #868686;
    font-weight: 500;
}
.mine .wrapper .content .menu .menu-item .menu-item-icon {
    margin: 25px;
    width: 60px;
    height: 60px;
    -o-object-fit: contain;
    object-fit: contain;
}
.mine .wrapper .content .wallet {
    margin-top: 80px;
    padding: 0 30px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 1.5px 1px 0 #e4e4e7;
}
.mine .wrapper .content .wallet .part-1 {
    display: flex;
    align-items: center;
    height: 100px;
}
.mine .wrapper .content .wallet .font-primary-color {
    color: #000;
}
.font-gray {
    color: #868686;
}
.mine .wrapper .content .wallet .part-2 {
    display: flex;
    align-items: center;
    height: 150px;
}
.mine .wrapper .content .wallet .part-2 .balance {
    flex: 1;
    font-size: 60px;
    color: #7e5678;
    font-weight: 700;
}
.mine .wrapper .content .wallet .van-hairline--bottom::after {
    border-bottom-width: 3px;
}
.mine .wrapper .content .wallet .part-2 .refresh-btn {
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    font-size: 30px;
    border-radius: 50%;
    color: #ffffff;
    background-color: #e6c3a1;
}
</style>

<style lang="scss" scoped>
.check-in-box {
    width: 90%;
    ::v-deep .van-popup__close-icon {
        font-size: 40px;
    }
}
.check-in-wrap {
    padding: 32px;

    .title {
        padding: 40px 0;
        font-size: 36px;
        font-weight: 500;
        text-align: center;
    }

    .content {
        padding: 30px 20px;
        // padding-top: 40px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;

        .van-calendar {
            background-color: transparent;

            ::v-deep .van-calendar__header {
                box-shadow: none;
            }

            ::v-deep .van-calendar__weekday {
                font-size: 24px;
            }

            ::v-deep .van-calendar__month-title {
                height: auto;
                // padding: 20px 0;
                font-size: 32px;
            }

            ::v-deep .van-calendar__day {
                font-size: 28px;
                height: 80px;
            }
        }
    }

    .tips {
        margin-top: 40px;
        h3 {
            padding: 0;
            margin: 0;
            font-size: 28px;
            font-weight: 500;
        }

        p {
            padding: 0;
            margin: 10px 0;
            font-size: 28px;
        }
    }
}
</style>
