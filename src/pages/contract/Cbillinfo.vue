<template>
    <div class="page">
        <!-- <van-nav-bar z-index="100" class="nav-black" :title="$t('交割合约')" ref="navbarRef" :border="false" left-arrow
            safe-area-inset-top fixed placeholder @click-left="back">
        </van-nav-bar> -->

        <van-nav-bar fixed :title="$t('交割合约')" class="nav-bar">
            <template #left>
                <van-icon name="arrow-left" color="#fff" @click="back()" />
            </template>
        </van-nav-bar>

        <div class="wrap">
            <div class="infobox">


                <div class="lbox">
                    <div class="lbox_l">
                        <span class="fe6im fzmm">{{ $t('合约金额') }}</span>
                    </div>
                    <div class="lbox_r">
                        <span class="fe6im fzmmm">{{ info.num }}</span>
                    </div>
                </div>

                <div class="lbox">
                    <div class="lbox_l">
                        <span class="fe6im fzmm">{{ $t('合约时长') }}</span>
                    </div>
                    <div class="lbox_r">
                        <span class="fe6im fzmmm">{{ fTime(info?.time) }}</span>
                    </div>
                </div>

                <div class="lbox">
                    <div class="lbox_l">
                        <span class="fe6im fzmm">{{ $t('合约类型') }}</span>
                    </div>
                    <div class="lbox_r">
                        <span v-if="info.hyzd == 1" class="fzmmm" style="color:#0ecb81;">{{ $t('买涨') }}</span>
                        <span v-else-if="info.hyzd == 2" class="fzmmm" style="color:#f5465c;">{{ $t('买跌') }}</span>
                    </div>
                </div>
                <div class="lbox">
                    <div class="lbox_l">
                        <span class="fe6im fzmm">{{ $t('合约状态') }}</span>
                    </div>
                    <div class="lbox_r">
                        <span v-if="info.status == 2" class="fe6im fzmm">{{ $t('结算成功') }}</span>
                        <span v-else-if="info.status == 3" class="fe6im fzmm">{{ $t('失效结算') }}</span>
                        <span v-else-if="info.status == 1" class="fe6im fzmm">{{ $t('未结算') }}</span>
                    </div>
                </div>
                <div class="lbox">
                    <div class="lbox_l">
                        <span class="fe6im fzmm">{{ $t('建仓单价') }}</span>
                    </div>
                    <div class="lbox_r">
                        <span class="fe6im fzmm">{{ info.buyprice }}</span>
                    </div>
                </div>
                <div class="lbox">
                    <div class="lbox_l">
                        <span class="fe6im fzmm">{{ $t('建仓时间') }}</span>
                    </div>
                    <div class="lbox_r">
                        <span class="fe6im fzmm"> {{ info.buytime }}</span>
                    </div>
                </div>

                <div class="lbox" v-if="info.status == 2">
                    <div class="lbox_l">
                        <span class="fe6im fzmm">{{ $t('平仓单价') }}</span>
                    </div>
                    <div class="lbox_r">
                        <span class="fe6im fzmm">{{ info.sellprice }}</span>
                    </div>
                </div>
                <div class="lbox" v-if="info.status == 2">
                    <div class="lbox_l">
                        <span class="fe6im fzmm">{{ $t('平仓时间') }}</span>
                    </div>
                    <div class="lbox_r">
                        <span class="fe6im fzmm">{{ info.selltime }}</span>
                    </div>
                </div>
                <div class="lbox" v-if="info.status == 2">
                    <div class="lbox_l">
                        <span class="fe6im fzmm">{{ $t('盈亏金额') }}</span>
                    </div>
                    <div class="lbox_r">
                        <span style="color:#f5465c;">{{ info.is_win == '2' ? '-' : '+' }}{{ info.ploss }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getContractOrderInfo } from '@/api/contract'
import { handleBack, fContractTime } from '@/utils/tools'
export default {
    data() {
        return {
            info: {}
        }
    },
    methods: {
        back(){
            handleBack();
        },
        fTime(s){
            return fContractTime(s);
        },
        async getData() {
            let id = this.$route.query?.bid
            if (!id) {
                return
            }
            const result = await getContractOrderInfo({ bid: id });
            this.info = result.data;

        }

    },
    created() {

    },
    mounted() {
        this.getData()
    }
}

</script>
<style lang="scss" scoped>
@import '../../assets/css/base.css';

::v-deep .nav-bar {
    // background: #121420 !important;
}
.page{
    // background: #121420
}
.wrap {
    margin-top: 100px;
    width: 100%;
    height: 100vh;
    // background: #121420
    
}

.lbox {
    width: 100%;
    height: 100px;
    margin: 20px 0px;
    background: #b7bdc6;
    border-radius: 20px;
    padding: 0px 20px;
}

.lbox_l {
    width: 50%;
    height: 100px;
    line-height: 100px;
    float: left;
    text-align: left;
}

.lbox_r {
    width: 50%;
    height: 100px;
    line-height: 100px;
    float: right;
    text-align: right;
}

.infobox {
    width: 100%;
    padding: 10px 40px;
    margin-top: 20px;
}

.infotbox {
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
}
.fe6im { color: #e6e6e6 !important;}
.fzmm{font-size:28px;}
</style>