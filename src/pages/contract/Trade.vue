<template>
    <div class="container-fluid">
        <div class="titlebox">
            <div style="width:100%;padding:0px 15px;">
                <span class="txt_style fzmmm fe6">{{ $t('USDT市场') }}</span>
            </div>
        </div>

        <div class="symboltitle">
            <div class="stitle_l">
                <span class="fcc fzmmm ">{{ $t('交易对') }}</span>
            </div>
            <div class="stitle_c">
                <span class="fcc fzmmm">{{ $t('最新价格') }}</span>
            </div>
            <div class="stitle_r">
                <span class="fcc fzmmm">{{ $t('24h涨跌') }}</span>
            </div>
        </div>

        <van-list class="listbox">
            <div v-for="vo in market" :key="vo.sid">
                <router-link
                    :to="vo.symbol == 'mbn' ? { path: '/Issue/details', query: { id: 3 } } : { path: '/Contract/index', query: { coin: vo['symbol'] } }">
                    <div style="width:100%;height:50px;">
                        <div class="list_cname">
                            <span class="fzmmm fw fe6 ">
                                {{ vo.cname }}
                            </span>
                        </div>
                        <div class="list_open ">
                            <span class='fzmmm fcc'>
                                <span class='f14 fgreen fw'
                                    v-if="curmarkets[vo.coinname]?.data?.tick?.close > curmarkets[vo.coinname]?.data?.tick?.open">
                                    {{ curmarkets[vo.coinname]?.data?.tick ? curmarkets[vo.coinname]?.data?.tick?.close :
                                        '--.--' }}
                                </span>
                                <span class='f14 fred fw' v-else>
                                    {{ curmarkets[vo.coinname]?.data?.tick ? curmarkets[vo.coinname]?.data?.tick?.close :
                                        '--.--' }}
                                </span>
                            </span>
                        </div>
                        <div class="list_change">
                            <span class='fzmm bgreen market-list-info'
                                v-if="curmarkets[vo.coinname]?.data?.tick?.close > curmarkets[vo.coinname]?.data?.tick?.open">
                                {{ fd(curmarkets[vo.coinname]?.data) }}</span>
                            <span class='fzmm bred market-list-info' v-else>
                                {{ fd(curmarkets[vo.coinname]?.data) }}
                            </span>
                            <!-- <span class='fzmm bgreen '
                                style='color:#3db485;border-radius: 2px;width:70px;height:35px;line-height:35px;text-align:center;display:inline-block;'>0%</span> -->
                        </div>
                    </div>
                </router-link>
            </div>
            <!-- <div style="width:100%;height:60px;"></div> -->
        </van-list>

    </div>
</template>

<script>
// import { onMounted, onUnmounted, ref } from 'vue'
// import $gt from '@/hooks/getI18nData'
// import { useAppStore } from '@/stores'
import { getallcoin } from '@/api/contract'
import { obtain_data } from "@/api/trade";
import { handleBack } from '@/utils/tools'
import emitter from '@/utils/emitter'
import { Socket } from "@/utils/socket";
import { isEmpty } from "@/utils/tools";
let coinInterval = null;
let socketK = null;
const hburl = "wss://api.huobi.pro/ws"; // 实时币种价格
let sublist = []
export default {
    data() {
        return {
            curmarkets: {},
            market: [],
            markets: {},
            options: {
                url: hburl,
                openCb: (data) => {
                    this.onOpen(data);
                },
                messageCb: (data) => {
                    this.handleData(data)
                }
            }
        }
    },
    methods: {
        back() {
            handleBack();
        },
        fd(data) {
            if (!data || !data.tick || !data.tick.close) {
                return ''
            }
            let fd = data.tick.close - data.tick.open;
            let fd2 = fd / data.tick.open * 100;
            if (fd > 0) {
                return '+' + fd2.toFixed(2) + "%";
            } else {
                return '' + fd2.toFixed(2) + "%";
            }
        },
        onMarket(data) {
            // console.log(data,'交易数据')
            this.curmarkets = data;
        },
        async getData() {
            emitter.on('market.usdt.kline.1day',this.onMarket);

            await this.getAllCoin().then(result => {
                this.market = Object.entries(result)
                    .map(([key, value]) => value)
                    .sort((a, b) => a.index - b.index);
            });
            this.startCheckMarket();
        },
        async startCheckMarket() {
            if (!isEmpty(this.markets)) {
                this.getMarket();
                return;
            }
            try {
                await this.getAllCoin();
                this.getMarket();
            } catch (error) {
                console.log(error, "获取市场出错");
            }
        },
        stopCheckMarket() {
            if (coinInterval) {
                clearInterval(coinInterval);
            }
            if (socketK) {
                socketK.destroy();
            }
        },
        getCoinData(coin) {
            return this.markets[coin].data;
        },

        async getAllCoin() {
            // if (!isEmpty(this.markets)) {
            //     return this.markets;
            // }
            let result = await getallcoin();

            // 使用 reduce() 方法将数组转换为对象
            this.markets = result.data.reduce((acc, curr, index) => {
                let obj = { ...curr };
                // 新增键值对
                obj.coinname = curr.symbol;
                obj.index = index;
                obj.data = {};
                // 将新对象合并到结果对象中
                acc[curr.symbol] = obj;
                return acc;
            }, {});
            // console.log(this.markets, "market====>");
            return this.markets;
        },

        async mbnMarket() {
            const result = await obtain_data({ coin: "mbn" });
            let data = {
                tick: {
                    open: 0,
                    close: 0,
                },
            };
            data.tick.open = result.data.open;
            data.tick.close = result.data.close;
            this.markets["mbn"]["data"] = data;
            emitter.emit('market.usdt.kline.1day', this.markets)
        },
        async getMarket() {
            sublist = [];
            let mbn = false;
            for (let index in this.markets) {
                //   console.log("bianl==========>", index);
                if (index == "mbn") {
                    mbn = true;
                } else {
                    let sub = "market." + index + "usdt.kline.1day";
                    sublist.push({
                        sub: sub,
                    });
                }
            }
            if (this.markets["mbn"]) {
                this.mbnMarket();
                if (coinInterval) {
                    clearInterval(coinInterval);
                }
                coinInterval = setInterval(function () {
                    this.mbnMarket();
                }, 2000);
            }

            socketK = new Socket(this.options)
        },
        onOpen(data) {
            for (let index in sublist) {
                this.sendMessage(JSON.stringify(sublist[index]))
            }
        },
        sendMessage(msg) {
            if (!socketK) {
                console.error('socket 为空')
                return;
            }
            socketK.send(msg)
        },
        handleData(data) {
            if (data.ch && data.ch.includes("market")) {
                let pattern = /market\.(.+?)usdt\.kline\.1day/;
                let match = data.ch.match(pattern);
                let currencyType = match[1];
                this.markets[currencyType].data = data;
                emitter.emit('market.usdt.kline.1day', this.markets)
            }
        }

    },
    created() {

    },
    mounted() {
        this.getData()
    },
    onUnmounted() {
        emitter.off('market.usdt.kline.1day', this.onMarket);
        this.stopCheckMarket();
    }
}



</script>
<style lang="scss" scoped>

.container-fluid {
    // display: flex;
    // flex-direction: column;
    // height: calc(100vh - 200px);
    background: #1b1d29;
    height: 100vh
    // bottom: 100px;
    // background: #f2f2f5;
}

::-webkit-input-placeholder {
    color: #b5b5b5;
    font-size: 12px;
}

::-moz-placeholder {
    color: #b5b5b5;
    font-size: 12px;
}

input:focus {
    background: #ebecf0;
    outline: 1px solid #ebecf0;
}

a:hover,
a:link,
a:visited,
a:active {
    color: #000000;
    text-decoration: none;
}

.no_header {
    position: fixed;
    z-index: 9999;
    padding: 0px 10px;
    top: 0px;
    background: #1b1d29;
}

.txtl {
    line-height: 50px;
    width: 10%;
}

.findbox {
    width: 90%;
    height: 40px;
    margin: 0px auto;
    background: #ebecf0;
    border-radius: 20px;
}

.findbox_l {
    width: 15%;
    height: 40px;
    line-height: 40px;
    float: left;
    text-align: center;
}

.findbox_r {
    width: 80%;
    height: 40px;
    line-height: 40px;
    float: right;
}

.symbol_t {
    height: 30px;
    border: none;
    background: #ebecf0;
}

.titlebox {
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 9999;
    top: 0px;
    background: #121420
}

.txt_style {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    border-bottom: 3px solid #3db485;
    color: #e6e6e6;
    font-size: 18px;
    font-weight: bold;
}

.symboltitle {
    width: 100%;
    height: 100px;
    background: #1b1d29;
    // border-top-right-radius: 20px;
    // border-top-left-radius: 20px;
    position: fixed;
    z-index: 9999;
    top: 80px;
    padding: 0px 30px;
}

.listbox {
    width: 100%;
    background: #1b1d29;
    margin-top: 180px;
    z-index: -9999;
    padding: 0px 20px;
    height: calc(100% - 160px);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    // height: 400px;
    // min-height: 100vh;
}

.stitle_l {
    width: 30%;
    height: 100px;
    line-height: 120px;
    float: left;
    text-align: left;
}

.stitle_c {
    width: 40%;
    height: 100px;
    line-height: 120px;
    float: left;
    text-align: center;
}

.stitle_r {
    width: 30%;
    height: 100px;
    line-height: 120px;
    float: left;
    text-align: right;
}

.emptybox {
    width: 100%;
    background: #272936;
    height: 11px;
}

.bgfcc {
    background: #f5f5f5;
}

.bgreen {
    background: #1e363a;
}

.bred {
    background: #3b2937;
    color: #f5465c !important;
}

.green {
    color: #0ecb81;
}

.red {
    color: #f5465c;
}

.list_open {
    width: 40%;
    height: 100px;
    line-height: 100px;
    float: left;
    text-align: center;
}

.list_cname {
    width: 30%;
    height: 100px;
    line-height: 100px;
    float: left;
}

.list_change {
    width: 30%;
    height: 100px;
    line-height: 100px;
    float: left;
    text-align: right;
}

.fzmmm {
    font-size: 24px;
}

.fe6 {
    color: #e6e6e6
}

.fcc {
    color: #707A8A;
}

/*灰色*/
.fw {
    font-weight: bold;
}

.fred {
    color: #CF304A
}

.fgreen {
    color: #03A66D;
}

.f14 {
    font-size: 28px !important;
}

.market-list-info {
    color: #3db485;
    border-radius: 10px;
    width: 140px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    display: inline-block;
    font-weight: bold;

}
</style>
