<template>
    <div class="container page">
        <div class="header">
            <van-nav-bar :title="this.notice.classname" class="nav-bar">
                <template #left>
                    <van-icon name="arrow-left" color="#fff" @click="back()" />
                </template>
            </van-nav-bar>
        </div>
        <div class="content">
            <div class="listItem">
                <div class="listTitle">{{ notice.title }}</div>
                <div
                    class="listContent html"
                    v-html="notice.text"
                    ref="contentContainer"
                ></div>
            </div>
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
        getNews() {
            this.$http({
                method: 'get',
                data: { id: this.$route.query.id },
                url: 'get_news'
            }).then((res) => {
                //  console.log(res)
                this.notice = res.data
                this.notice.text = this.addStyleToImages(this.notice.text)
            })
        },
        addStyleToImages(htmlContent) {
            // 创建一个虚拟的DOM元素以便操作
            const div = document.createElement('div')
            div.innerHTML = htmlContent

            // 获取所有图片元素
            const images = div.querySelectorAll('img')

            // 为每个图片添加样式
            images.forEach((image) => {
                image.style.maxWidth = '100%'
                image.style.height = 'auto'
                image.style.display = 'block'
                image.style.margin = '0 auto'
            })

            // 返回修改后的HTML内容
            return div.innerHTML
        }
    },
    created() {
        this.getNews()
    }
}
</script>

<style lang='less' scoped>
@import '../../assets/css/base.css';

.listContent {
    max-width: 100%;
    overflow: hidden; /* Hide any content that overflows the container */
}

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
