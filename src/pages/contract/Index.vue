<template>
    <div class="page">
        <van-nav-bar :title="$t('交割合约')" class="nav-bar">
            <template #left>
                <van-icon v-if="showBack" name="arrow-left" color="#fff" @click="back()" />
            </template>
            <template #right>
                <van-icon name="orders-o" color="#fff" @click="$router.push('/Contract/ctbill')" />
            </template>
        </van-nav-bar>

        <div class="banner">
            <van-swipe :autoplay="3000" indicator-color="#000000">
                <van-swipe-item v-for="(v, key) in banners" :key="key">
                    <van-image class="banner_img" :src="v.url">
                    </van-image>
                </van-swipe-item>
            </van-swipe>
        </div>

        <div class="wrap">
            <div class="btnbox">
                <div class="btnbox_l" @click="showBuy(1)">
                    <span class="fzmm fe6" style="color:#fff;">{{ $t('买涨') }}</span>
                </div>
                <div class="btnbox_r" @click="showBuy(2)">
                    <span class="fzmm fe6" style="color:#fff;">{{ $t('买跌') }}</span>
                </div>
            </div>
        </div>
        <van-popup class="dialog_order_bg" position="bottom" v-model="show">
            <img class="close" src="@/assets/img/close.png" width="18" height="18" @click="onClickBuy" />
            <div class="content">
                <div class="dong_order_title">
                    <span style="font-size:16px;font-weight:500;color: #000;">{{ coin.toUpperCase() }}/{{ $t('认证')
                        }}</span>
                </div>
                <p class="label">{{ $t('选择周期') }}</p>
                <div class="order_option">
                    <div v-for="(vo, index) in contract.hy_new_conf" :key="index">
                        <div class="item" :class='periodIndex == index ? "select" : ""' @click="onPeroidClick(index)">
                            <span>{{ fTime(vo.hyconf_time) }}</span>
                            <span>{{ vo.hyconf_bili }}%</span>
                        </div>
                    </div>


                </div>
                <p class="label">{{ $t('自定义金额') }}</p>
                <van-field v-model="form.ctzed" type="number" class="edit" :placeholder="$t('请输入金额')"></van-field>
                <div class="dong_order_title label" style="margin-top: 20px;">
                    <span>{{ $t('账户余额') }}：{{ contract?.eusdt_blan }}</span>
                </div>
                <div class="optitle">
                    <div class="item">
                        <span>{{ $t('交易对') }}</span>
                        <span>{{ cover(contract?.upmarket?.toUpperCase()) }}</span>
                    </div>
                    <div class="item">
                        <span>{{ $t('方向') }}</span>
                        <span :class='orderType == 1 ? "green" : "red "'>{{ orderType == 1 ? $t('买涨') : $t('买跌')
                        }}</span>
                    </div>
                    <div class="item">
                        <span>{{ $t('现价') }}</span>
                        <span class="red" style="font-size: 16px;font-weight: bold;">{{ close }}</span>
                    </div>
                    <div class="item">
                        <span>{{ $t('金额') }}</span>
                        <span> {{ form.ctzed != '' ? form.ctzed : 0 }}</span>
                    </div>
                    <div class="item">
                        <span>{{ $t('预计盈利') }}</span>
                        <span :class='orderType == 1 ? "green" : "red "'>{{ profit() }}</span>
                    </div>

                </div>
                <van-button @click="submit" :loading="loading" color="#3db485"
                    style="width:100%;height:40px;line-height:40px;text-align:center;margin-top:30px;background: #3db485;border-radius:10px;float:left;color: #fff">
                    <span class="fzmm" style="font-size: 18px;height: 40px;line-height: 40px">{{ $t('确认下单') }}</span>
                </van-button>
            </div>
        </van-popup>

        <van-popup class="dialog_order_bg" position="bottom" v-model="showConfirm" beforeClose
            :closeOnClickOverlay="isCloseBuyPoup()">
            <div class="content">
                <div class="dong_order_title">
                </div>

                <div v-if='orderInfo?.code && orderInfo?.code != 1' class="wait_box_info">
                    <span style="font-size:24px;font-weight:bold;"
                        :class='orderInfo?.statusstr == 1 ? "green" : "red"'>{{
                            settle() }}</span>
                </div>
                <div v-else style="width:100%;display: flex;justify-content: center;margin-top: 20px;">
                    <van-circle layer-color="#eee" :text="`${orderInfo?.time ?? ''}`" class="circle" :size="150"
                        :rate="orderCurrentRate" :stroke-width="60" v-model="orderCurrentRate" color="#f5465c" />
                </div>

                <van-button v-if='orderInfo?.code && orderInfo?.code != 1' @click="toMin" color="#3db485"
                    style="width:100%;height:40px;line-height:40px;text-align:center;margin-top:30px;background: #3db485;border-radius:10px;float:left;color: #fff">
                    <span class="fzmm f12">{{ $t('完成下单') }}</span>
                </van-button>
                <van-button v-else @click="closeBuyPoup" :color="forceConter ? '#eaecef' : '#3db485'"
                    style="width:100%;height:40px;line-height:40px;text-align:center;margin-top:30px;border-radius:10px;float:left;color: #000">
                    <span class="fzmm f12" style="color: #000;">{{ $t('继续下单') }}</span>
                </van-button>
            </div>
        </van-popup>
    </div>
</template>
<script>


// import { reactive, onMounted, ref, onUnmounted } from 'vue'
import { Toast } from 'vant'
import storage from '@/utils/storage'
import Ordinary from '@/pages/contract/Ordinary'
import { getallcoin, getContract, creatContractOrder, refeshContractOrderInfo, getContractOrderInfo, getContractTimer } from '@/api/contract'
import emitter from '@/utils/emitter'
import { fContractTime, handleBack, covertCoin } from '@/utils/tools'
import Empty from '@/pages/contract/Empty'
// import { useAppStore } from '@/stores'
// const appStore = useAppStore()

// const form = reactive({
//     ctime: '',//结算时间
//     ctzed: '',//投资额度
//     ccoinname: '',//交易对
//     ctzfx: 1,//合约涨跌1买涨2买跌
//     cykbl: '',//盈亏比例
// })


let timer = null

export default {
    // components: { Ordinary,Empty },
    data() {
        return {
            info: {},
            showBack: true,
            show: false,
            showConfirm: false,
            loading: false,
            list: [],
            contract: {},
            periodIndex: 0,
            orderType: 1,//1买涨2买跌
            close: '',
            orderInfo: null,
            orderTimer: null,
            orderCurrentRate: 0,
            market: [],
            coin: '',
            form: {
                ctime: '',//结算时间
                ctzed: '',//投资额度
                ccoinname: '',//交易对
                ctzfx: 1,//合约涨跌1买涨2买跌
                cykbl: '',//盈亏比例
            },
            forceConter: true,//强制观看倒计时
            banners: [
                {
                    url: "/img/c_bg1.jpg",
                },
                {
                    url: "/img/c_bg2.jpg",
                },
                {
                    url: "/img/c_bg3.jpg",
                }
            ],
        }
    },
    methods: {
        back() {
            // handleBack();
            this.$router.push({ path: '/Home' })
        },
        fTime(s) {
            return fContractTime(s);
        },
        cover(name) {
            return covertCoin(name)
        },
        async getData() {
            // console.log(this.coin, 'coin.valuecoin.value')

            // 获取下拉列表 
            getallcoin().then(result => {
                this.market = Object.entries(result.data)
                    .map(([key, value]) => value)
                    .sort((a, b) => a.index - b.index);
                // console.log(this.market,'market')
            });
            refeshContractOrderInfo().then(res => {
                // for(let i=0 ;i<10;i++){
                //     this.list.push(res.data[0])  
                // }
                this.list = res.data
                // console.log(this.list, '列表数据')
            })
            const result = await getContract({ coin: this.coin });
            // console.log(result,'xxx')
            result.data.hy_new_conf = JSON.parse(result.data.hy_new_conf)
            this.contract = result.data;
            // console.log(this.contract, 'contact')
            emitter.on(`${this.coin}usdt`, this.onCurrentData);
        },
        fDate(dateTimeString) {
            const formattedDateTime = dateTimeString.split(" ")[0].slice(5) + " " + dateTimeString.split(" ")[1];
            return formattedDateTime
        },
        onCurrentData(data) {
            this.close = data.close;
        },
        profit() {
            let amount = parseFloat(this.form.ctzed)
            if (isNaN(amount) || amount <= 0) {
                return '0'
            }
            let select = this.contract.hy_new_conf[this.periodIndex]
            let p = (select.hyconf_bili * amount / 100).toFixed(2);
            return parseFloat(p) + '';
        },
        settle() {
            let txt = '';
            switch (this.orderInfo?.statusstr) {
                case 1:
                    txt = '+' + this.orderInfo?.ploss + ''
                    break;
                case 2:
                    txt = '-' + this.orderInfo?.ploss + ''
                    break;
                default:
                    txt = this.$t('正在结算中')
                    break;
            }
            return txt;
        },
        onPeroidClick(index) {
            this.periodIndex = index;

        },
        showBuy(type) {
            this.orderType = type
            this.show = true;
        },
        onClickBuy() {
            this.show = false;
        },
        //能否关闭弹窗
        isCloseBuyPoup() {
            if (this.forceConter && this.orderInfo && this.orderInfo.code == 1) {
                return false;
            }
            return true;

        },
        closeBuyPoup() {
            if (!this.isCloseBuyPoup()) {
                return;
            }
            this.showConfirm = false;
            this.orderInfo = null
            this.orderCurrentRate = 0;
            if (this.orderTimer) {
                clearInterval(this.orderTimer)
            }
        },
        toMin() {
            this.$router.push({ path: '/Mine' })
        },
        beforeClose(action, done) {
            if (!this.isCloseBuyPoup()) {
                done(false)
                return;
            }
            done();
        },

        async submit() {
            let amount = parseFloat(this.form.ctzed)
            if (!amount || isNaN(amount) || amount <= 0) {
                Toast(this.$t('请输入金额'))
                return
            }
            let select = this.contract.hy_new_conf[this.periodIndex]
            this.form.ccoinname = this.contract.upmarket;
            this.form.ctime = select.hyconf_time;
            this.form.ctzfx = this.orderType;
            this.form.cykbl = select.hyconf_bili;
            this.loading = true
            try {
                const result = await creatContractOrder(this.form)
                this.loading = false
                // console.log('下单数据', result)
                if (result.code == 200) {
                    Toast(this.$t('建仓成功'))
                    this.show = false
                    this.orderCurrentRate = 0
                    // this.showConfirm = true;
                    if (this.orderTimer) {
                        clearInterval(this.orderTimer)
                    }
                    this.orderInfo = {}
                    this.orderTimer = setInterval(() => {
                        getContractTimer({ oid: result.data.id }).then(res => {
                            // console.log('时间', res)
                            this.orderInfo = res.data;
                            this.orderCurrentRate = 100 * (1 - (res.data.time / res.data.ajax.time))
                            if (res.data.code == 2) {//已经结算
                                if (res.data.statusstr != 3) {
                                    clearInterval(this.orderTimer)
                                }
                            }
                        });

                    }, 1000)
                }
            } catch (e) {
                this.loading = false
            }
        }

    },
    created() {
        this.coin = this.$route.query?.coin ?? 'btc';
        this.showBack = this.$route.query.showBack !== 'false';
    },
    mounted() {
        this.getData()
    },
    onUnmounted() {
        if (timer) {
            clearInterval(timer)
        }
        if (this.orderTimer) {
            clearInterval(this.orderTimer)
        }
        emitter.off(`${this.coin}usdt`, this.onCurrentData);
    }
}

</script>
<style lang="scss" scoped>
@import '../../assets/css/base.css';


::v-deep .nav-bar {
    // background: #121420 !important;
}

.banner {
    height: 100vh;
    width: 100%;
    position: absolute;

    .banner_img {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* 不重复显示图片 */
        height: 100vh;
        /* 设置页面高度为视口高度 */
        width: 100%;
    }
}

.wrap {
    height: 100%;

    .klinebox {
        visibility: hidden;
        height: 100%;
        // background-color: #121420
    }

    // .klinetitle {
    //     width: 100%;
    //     height: 80px;
    //     background: #1b1d29;
    //     padding: 20px 20px;
    //     box-shadow: 0 2px 10px 0 rgb(0 0 0 / 5%);
    // }

    // .klinetitle_l {
    //     width: 45%;
    //     height: 80px;
    //     float: left;
    // }

    // .klinetitle_r {
    //     width: 55%;
    //     height: 80px;
    //     float: left;
    // }

    .btnbox {
        width: 100%;
        height: 120px;
       padding: 10px 25px 10px 25px;
        position: fixed;
        z-index: 100;
        bottom: 300px;
        // background: #222430;
        border-radius: 20px 20px 0px 0px;
    }

    .btnbox_l {
        width: 100%;
        height: 80px;
        line-height: 80px;
        float: left;
        text-align: center;
        border-radius: 20px;
        background: #0ecb81;
    }

     .btnbox_r {
        width: 100%;
        height: 80px;
        line-height: 80px;
        float: right;
        text-align: center;
        border-radius: 20px;
        background: #f5465c;
        margin-top: 20px;

    }

    .o_title_box {
        padding: 0 25px;
        width: 100%;
        height: 80px;
        line-height: 80px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .fce5 {
        color: #A9AEB8;
    }

    .wtlistbox {
        padding: 0 0px;
        margin-top: 10px;
        background: #fff;

        .listbox {
            width: 100%;
            height: 240px;
            // background: #2C3445;
            padding: 10px 30px;
            margin-bottom: 10px;
            border-radius: 20px;
        }


        .listbox_title {
            width: 100%;
            height: 60px;
            line-height: 60px;
        }

        .listbox_title_l {
            width: 50%;
            height: 60px;
            float: left;
            text-align: left;
        }

        .listbox_title_r {
            width: 50%;
            height: 60px;
            float: right;
            text-align: right;
        }

        .progress-bar {
            background-color: #eeb80d;
            height: 28px;
            font-size: 24px;
            line-height: 28px;
        }
    }

    .fzmmm {
        font-size: 32px;
    }

    .fe6 {
        color: #e6e6e6
    }
}

.fcf {
    color: #fff;
}

.dialog_order_bg {
    width: 100%;
    height: auto;
    // background: #2a405c;
    margin: 0px auto;
    border-radius: 20px 20px 0 0;
    padding: 10px;
    position: fixed;
    bottom: 0px;

    .close {
        margin-left: calc(100% - 60px)
    }

    .label {
        width: 100%;
        margin-bottom: 0.5rem;
        margin-top: 10px;
        padding-left: 5px;
        // color: #768da9;
        color: #000
    }

    .order_option {
        display: flex;
        /* 启用flex布局 */
        flex-wrap: wrap;
        /* 允许子元素换行 */
        align-items: flex-start;
        /* 对齐子元素到容器的顶部 */
        justify-content: flex-start;
        /* 从容器的起始位置开始排列子元素 */
        width: 100%;
        height: auto;
        /* 高度自适应 */
        overflow: visible;
        /* 不需要滚动条 */
        margin-top: 5px;

        .item {
            width: 20%;
            min-width: 110px;
            max-width: 166px;
            height: 116px;
            background: #1eb585;
            float: left;
            margin-right: 10px;
            margin-left: 10px;
            border-radius: 20px;
            padding: 10px;
            margin-bottom: 20px;
            color: #fff;
            display: flex;
            flex-direction: column;
            text-align: center;
            font-weight: 500;

            &>span:first-child {
                font-size: 28px;
                margin-top: 10px;

            }

            &>span:last-child {
                font-size: 24px;
                margin-top: 10px;
            }

        }

        .select {
            background: #f5465c !important;
        }
    }

    .edit {
        height: 70px;
        border-radius: 10px;
        background: #e6e6e6;
        text-align: center;
        padding: 20px 20px;
        font-size: 1em;
    }

    .optitle {
        margin-top: 30px;
        display: flex;
        // padding: 0px 20px;
        color: #768da9;
        font-size: 24px;
        height: 100px;
        gap: 5px;
        .item {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            &>span:first-child {
                height: 60px;
                text-align: center;
                width: 100%;
            }

            &>span:last-child {
                height: 40px;
                // line-height: 40px;
                text-align: center;
            }
        }


    }

    .timer_t_box {
        width: 100%;
        min-height: 160px;
        margin: 40px 0;
        border-radius: 10px;
        border: 1px solid #1eb585;
        color: #000;
        font-size: 28px;

        .item {
            width: 90%;
            margin: 20px auto;
            height: 60px;
            line-height: 60px;
            display: flex;
            justify-content: space-between;
        }
    }

    .wait_box_info {
        width: 100%;
        height: 280px;
        line-height: 280px;
        text-align: center;
        /* background: #2c2d2e; */
        margin: 0 auto;
        margin-top: 40px;
        border-radius: 20px;
        border: 1px solid #1eb585;
    }

    .circle {

        // --van-circle-text-color: #fff  !important;
        // --van-circle-text-font-size: 44px !important;
        // --van-circle-text-font-weight: bold;
        ::v-deep .van-circle__text {
            font-size: 44px;
            color: #000;
            font-weight: bold
        }
    }
}



.dong_order_x {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: right;
}

.dong_order_title {
    width: 100%;
    height: 60px;
    line-height: 40px;
    border-bottom: 1px solid #d6d6d9;
    margin-top: 20px;
}

.order_option {
    display: flex;
    /* 启用flex布局 */
    flex-wrap: wrap;
    /* 允许子元素换行 */
    align-items: flex-start;
    /* 对齐子元素到容器的顶部 */
    justify-content: flex-start;
    /* 从容器的起始位置开始排列子元素 */
    width: 100%;
    height: auto;
    /* 高度自适应 */
    overflow: visible;
    /* 不需要滚动条 */
    margin-top: 10px;
}


.dong_order_option_list {
    width: 20%;
    min-width: 126px;
    max-width: 166px;
    height: 130%;
    background: #6d8b82;
    float: left;
    margin-right: 10px;
    margin-left: 10px;
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 20px;
}

.option_list_active {
    border: 1px solid #FCD535;
}

.dong_order_p {
    width: 100%;
    margin-bottom: 0.5rem;
    margin-top: 20px;
    padding-left: 10px;
}

.dong_money_list {
    width: 100%;
    height: 80px;
}

.dong_money_list_box {
    width: 70%;
    height: 130px !important;
    float: left;
    overflow: hidden;
    overflow-x: scroll;
    height: 100px;
}

.dong_money_list_box_l {
    width: 2000px;
    height: 100px;
}

.dong_money_list_box_option {
    width: 136px;
    height: 100px;
    line-height: 80px;
    background: #1eb585;
    float: left;
    margin-right: 10px;
    border-radius: 10px;
    text-align: center;
}

.green {
    color: #0ecb81;
}

.red {
    color: #f5465c;
}

.circle_box {
    position: relative;
    left: 0;
    right: 0;
    top: 5px;
    bottom: 120px;
    margin: auto;
    width: 110px;
    height: 127px;
    box-sizing: content-box;
}

/*倒计时圆形进度条*/
.circle_wrapper {
    /*position: relative;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 5px;*/
    /*bottom: 120px;*/
    margin: auto;
    width: 150px;
    height: 150px;
    box-sizing: content-box;
}

.bi-x::before {
    color: #707a8a;
}

.right_circle,
.left_circle {
    position: absolute;
    width: 110px;
    height: 110px;
    overflow: hidden;
    top: 8px;
}

.right_circle {
    right: -50%;
}

.left_circle {
    left: -50%;
}

.f12 {
    font-size: 24px;
}
</style>
