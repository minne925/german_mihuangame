<template>
    <div class="container page">
        <div class="header">
            <van-nav-bar :title="this.$t('mine.announcement')" class="nav-bar">
                <template #left>
                    <van-icon name="arrow-left" color="#fff" @click="back()" />
                </template>
            </van-nav-bar>
        </div>
        <div class="content">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="listItem" v-for="(v, key) in notice" :key="key">
                    <div class="listTitle">{{ v.name }}</div>
                    <div class="listContent html">
                        <p>{{ v.text }}<br /></p>
                    </div>
                    <div class="listTime">
                        <div class="listTimeText">{{ v.create_time }}</div>
                    </div>
                </div>
            </van-pull-refresh>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLoading: false,
            notice: {},
            loading: false,
            finished: false
        }
    },
    methods: {
        back() {
            return window.history.back()
        },
        getNoticeList() {
            this.$http({
                method: 'get',
                url: 'sys_get_notice_list'
            }).then((res) => {
                //       console.log(res)
                this.notice = res.data
            })
        },
        onRefresh() {
            setTimeout(() => {
                this.$toast(this.$t('home.refresh_successful'))
                this.isLoading = false
                this.getNoticeList()
            }, 500)
        }
    },
    created() {
        this.getNoticeList()
    }
}
</script>

<style lang='less' scoped>
@import '../../assets/css/base.css';
::v-deep .van-pull-refresh__track .van-pull-refresh__head * {
    color: #000000;
    font-size: 35px;
}

::v-deep .van-loading__text {
    color: #000000;
    font-size: 35px;
}
.container .content {
    height: calc(100% - 20px);
    overflow: auto;
}
.container .content .listItem {
    margin-bottom: 20px;
    padding: 20px 20px 0;
    position: relative;
    color: #000;
    background-color: #fff;
}
.container .content .listItem .listTitle {
    font-size: 38px;
}
.container .content .listItem .listContent {
    border-bottom: 2px solid #f2f2f5;
    padding: 5px 0;
    font-size: 25px;
}
.container .content .listItem .listTime {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 70px;
}
.container .content .listItem .listTime .listTimeText {
    color: #656566;
    font-size: 30px;
}
</style>
