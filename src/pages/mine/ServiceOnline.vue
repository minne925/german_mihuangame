<template>
    <div class="container page">
        <div class="header">
            <van-nav-bar :title="$t('mine.onlineservice')" class="nav-bar">
                <template #left>
                    <van-icon name="arrow-left" color="#fff" @click="back()" />
                </template>
            </van-nav-bar>
        </div>
        <div class="servicelistItem">
            <div class="servicelistItemTop">
                <img class="servicelistItemImage" src="img/mine/kefu.png" />
                <div class="servicelistItemText">
                    {{
                        this.$store.getters.getBaseInfo.name !== undefined
                            ? this.$store.getters.getBaseInfo.name
                            : 'holle'
                    }}
                </div>
                <div class="servicelistItemBtn" @click="toServicePage()">
                    <div class="servicelistItemBtnText">
                        {{ $t('mine.connect') }}
                    </div>
                </div>
            </div>
            <div class="servicelistItemBottom">
                <div class="servicelistItemInfoText">
                    {{ $t('mine.servicelistItemInfoText') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        back() {
            return window.history.back()
        },
        toServicePage() {
            this.$router.push('ServicePage')
        }
    }
}
</script>

<style lang='less' scoped>
@import '../../assets/css/base.css';
.servicelistItem {
    display: flex;
    flex-direction: column;
    height: 200px;
    padding: 30px 30px;
    margin: 30px 20px;
    border-radius: 20px;
    justify-content: space-between;
    background: #fff;
}
.servicelistItem .servicelistItemTop {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100px;
}
.servicelistItem .servicelistItemTop .servicelistItemImage {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.servicelistItem .servicelistItemTop .servicelistItemText {
    margin-left: 50px;
    font-size: 43px;
    font-weight: 700;
    color: #000;
    flex: 1;
}
.servicelistItem .servicelistItemTop .servicelistItemBtn {
    display: flex;
    width: 150px;
    height: 55px;
    border-radius: 30px;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg,#6529c9,#cc2996);
}
.servicelistItem
    .servicelistItemTop
    .servicelistItemBtn
    .servicelistItemBtnText {
    color: #fff;
    font-size: 25px;
}
.servicelistItem .servicelistItemBottom {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: #f2f2f5;
    border-radius: 10px;
    color: #979799;
}
.servicelistItem .servicelistItemBottom .servicelistItemInfoText {
    font-size: 30px;
}
</style>
