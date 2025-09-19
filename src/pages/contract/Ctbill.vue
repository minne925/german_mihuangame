<template>
    <div class="page">
        <!-- <van-nav-bar z-index="100" class="nav-bar" :title="$t('合约记录')" ref="navbarRef" :border="false" left-arrow
            safe-area-inset-top fixed placeholder @click-left="back">
        </van-nav-bar> -->
        <van-nav-bar safe-area-inset-top :title="$t('合约记录')" class="nav-bar">
            <template #left>
                <van-icon name="arrow-left" color="#fff" @click="back()" />
            </template>
        </van-nav-bar>
        <div class="wrap">
            <div class="wtlistbox">
                <Empty v-if="!list.length" style="margin-top: 100px"> </Empty>

                <div v-for="vo in list" :key="vo.id" class="listbox">
                    <div class="listbox_title clear">
                        <div class="listbox_title_l">
                            <span v-if="vo.hyzd == 1" class="fcc f14 "
                                style="font-size:14px;font-weight:500;color: #0ecb81 ">{{ $t('买涨') }}:</span>
                            <span v-else class="fcc f14 "
                                style="font-size:14px;font-weight:500;color: #f5465c ">{{ $t('买跌') }}:</span>

                            <span class="fcc f14 fe6im" style="font-size:14px;font-weight:500;">{{ cover(vo.coinname) }}</span>
                        </div>
                        <router-link class="clear" :to="{ path: '/Contract/cbillinfo', query: { bid: vo.id } }">
                            <div class="listbox_title_r">
                                <span v-if="vo.status == 2" class="fcc" style="font-size:12px;color:#A9AEB8">{{
                                    $t('结算成功') }}</span>
                                <span v-else-if="vo.status == 3" class="fcc" style="font-size:12px;color:#f5465c">{{
                                    $t('失效结算') }}</span>
                                <span v-else-if="vo.status == 1" class="fcc" style="font-size:12px;color:#f5465c">{{
                                    $t('未结算') }}</span>
                                <van-icon name="arrow" color="#e6e6e6"></van-icon>
                            </div>
                        </router-link>
                    </div>          
                    <div style="width:100%;height:60px; " class="clear">
                        <div style="width:33.33%;height:60px;float:left;">
                            <div style="width:100%;height:30px;line-height:40px;"><span class="f12"
                                    style="color:#6B7785;">{{ $t('投入金额') }} </span></div>
                            <div style="width:100%;height:30px;line-height:30px;"><span class=" f12 fce5">{{ vo.num
                                    }}</span>
                            </div>
                        </div>
                        <div style="width:33.33%;height:60px;float:left;">
                            <div style="width:100%;height:30px;line-height:40px;"><span class="f12"
                                    style="color:#6B7785;">{{ $t('建仓单价') }}</span></div>
                            <div style="width:100%;height:30px;line-height:30px;"><span class=" f12 fce5">{{ vo.buyprice
                                    }}</span></div>
                        </div>
                        <div style="width:33.33%;height:60px;float:left;">
                            <div style="width:100%;height:30px;line-height:40px;text-align:right;"><span class="f12"
                                    style="color:#6B7785;">{{ $t('建仓时间') }}</span></div>
                            <div style="width:100%;height:30px;line-height:30px;text-align:right;"><span
                                    class=" f12 fce5">{{ vo.buytime }}</span></div>
                        </div>
                    </div>
                    <van-progress v-if="vo.status == 1" :pivot-text="vo.t" stroke-width="10" :show-pivot="true"
                        track-color="#151515" color="linear-gradient(to right, #f77062, #fe5196)"
                        :percentage="100 - parseFloat(vo.bl ?? 0)" />
                </div>

            </div>


        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import { handleBack,covertCoin,getImg } from '@/utils/tools'
import { getContractOrder } from '@/api/contract'
import Empty from '@/pages/contract/Empty'
export default {
    components:{
        Empty
    },
    data() {
        return {
            timer:null,
            info: {},
            list:[]
        }
    },
    methods: {
        getImg,
        back(){
            handleBack();
        },
        cover(name){
           return covertCoin(name);
        },
        async getData() {
            let self = this;
            // this.timer = setInterval(() => {
                getContractOrder().then(res => {
                    self.list = res.data
                    // console.log(self.list, '列表数据')
                })
            // }, 1000)

        }
    },
    created() {

    },
    mounted() {
        this.getData()
    },
    onUnmounted() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }
}




</script>
<style lang="scss" scoped>
@import '../../assets/css/base.css';

::v-deep .nav-bar {
    // background: #121420 !important;
}
.page{
    // background: #121420 !important; 
    height: 100%;
}
.wrap {
    // margin-top: 100px;
    height: 100%;
    width: 100%;
    .fce5 {
        color: #A9AEB8;
    }

    .wtlistbox {
        padding: 0px 10px;

        .listbox {
            width: 100%;
            height: 240px;
            // background: #2C3445;
            padding: 10px 10px;
            margin-bottom: 10px;
            // border-radius: 20px;
            border-bottom: 2px solid #eee;
        }


        .listbox_title {
            width: 100%;
            min-height: 100px;
            // line-height: 60px;

        }

        .listbox_title_l {
            width:50%;
            min-height: 60px;
            float: left;
            text-align: left;
            display: flex;
            flex-direction: column;
        }

        .listbox_title_r {
            width: 50%;
            min-height: 60px;
            float: right;
            text-align: right;
        }

        .progress-bar {
            background-color: #eeb80d;
            height: 40px
        }
    }

    .fzmmm {
        font-size: 28px;
    }

    .fe6 {
        color: #e6e6e6
    }
}

.fcf {
    color: #fff;
}
.f12{
   font-size: 24px;
}
</style>
