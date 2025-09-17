<template>
    <div class="home-container px">
        <div class="wrap">

            <!-- 顶部导航栏 -->
            <div class="nav-bar newnavbar van-nav-bar van-hairline--bottom">
                <div class="van-nav-bar__content" style="background-color: black;">
                    <div class="van-nav-bar__title van-ellipsis" style="font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; 
            font-size: 20px; 
            font-weight: 600; 
            letter-spacing: 1px; 
            text-transform: uppercase; 
            color: #fff;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.5);">
                        HotelS
                    </div>
                    <div class="van-nav-bar__right">
                        <i class="van-icon van-icon-chat-o" style="color:#fff;"></i>
                    </div>
                </div>
            </div>

            <div style="position: relative; margin-top:50px;">
                <!-- 轮播 -->
                <van-swipe autoplay="3000" style="height:200px;">
                    <van-swipe-item v-for="(img, index) in images" :key="index">
                        <img :src="img" style="width:100%; height:200px; object-fit:cover;" />
                    </van-swipe-item>
                </van-swipe>

                <!-- 单独的文字块 -->
                <div style="position: absolute; bottom: 0; left: 0; width: 100%;
           background: rgba(0,0,0,0.4); color:#fff;
           font-size: 12px; padding: 12px;
           border-radius: 10px 10px 0 0; box-sizing:border-box">
                    Booking.com bietet mehr als 28 Millionen Unterkünfte, darunter über 6 Millionen
                    Ferienwohnungen, Apartments und andere einzigartige Unterkünfte.
                    Egal, wohin du reisen möchtest und was du tun möchtest, Booking.com bietet einen
                    rund um die Uhr verfügbaren Kundenservice, der alles einfach macht.
                </div>
            </div>


            <div data-v-3b3fbaa9="" class="shuadanBtm">
                <div data-v-3b3fbaa9="">Beliebte Hotels</div>
                <div data-v-3b3fbaa9="" class="Rechargelist">
                    <div data-v-3b3fbaa9="" class="item">
                        <div data-v-3b3fbaa9=""><img data-v-3b3fbaa9=""
                                src="https://admin.xianyuxx.motorcycles/upload/b41e05aba2905e8d/76900ad9488ebe24.jpg"
                                alt="" class="firstimg">
                            <div data-v-3b3fbaa9=""><img data-v-3b3fbaa9=""
                                    src="https://admin.xianyuxx.motorcycles/upload/f321d377807a32cc/afe421ea052bda7a.jpg"
                                    alt=""><img data-v-3b3fbaa9=""
                                    src="https://admin.xianyuxx.motorcycles/upload/d03479d2a6f1d6b9/90cb2339ccbbc472.jpg"
                                    alt=""></div><!---->
                        </div>
                    </div>
                    <div data-v-3b3fbaa9="" class="item">
                        <div data-v-3b3fbaa9=""><!---->
                            <div data-v-3b3fbaa9=""><img data-v-3b3fbaa9=""
                                    src="https://admin.xianyuxx.motorcycles/upload/3d7a69fe5611cdfd/0ee85052ab9292bb.jpg"
                                    alt=""><img data-v-3b3fbaa9=""
                                    src="https://admin.xianyuxx.motorcycles/upload/1819f8fb47f051d9/da0c28890367f40d.jpg"
                                    alt=""></div><img data-v-3b3fbaa9=""
                                src="https://admin.xianyuxx.motorcycles/upload/98918a9686b6d9e9/13c0bf45fd0ff39f.jpg"
                                alt="" class="firstimg">
                        </div>
                    </div>
                    <div data-v-3b3fbaa9="" class="item">
                        <div data-v-3b3fbaa9=""><img data-v-3b3fbaa9=""
                                src="https://admin.xianyuxx.motorcycles/upload/b975fe60de93127a/44d7bc2daac50937.jpg"
                                alt="" class="firstimg">
                            <div data-v-3b3fbaa9=""><img data-v-3b3fbaa9=""
                                    src="https://admin.xianyuxx.motorcycles/upload/341c65ef164da91a/a60b3e27ddb76eab.jpg"
                                    alt=""><img data-v-3b3fbaa9=""
                                    src="https://admin.xianyuxx.motorcycles/upload/2d6632edb4ed8d44/2beb2f51f208ba2e.jpg"
                                    alt=""></div><!---->
                        </div>
                    </div>
                    <div data-v-3b3fbaa9="" class="item">
                        <div data-v-3b3fbaa9=""><!---->
                            <div data-v-3b3fbaa9=""><img data-v-3b3fbaa9=""
                                    src="https://admin.xianyuxx.motorcycles/upload/1a9ee841c0f72a58/6df9b280af685b13.jpg"
                                    alt=""><img data-v-3b3fbaa9=""
                                    src="https://admin.xianyuxx.motorcycles/upload/73d4906673e53df2/625716368c9626a1.jpg"
                                    alt=""></div><img data-v-3b3fbaa9=""
                                src="https://admin.xianyuxx.motorcycles/upload/3ea26aad09e74709/07c6b46b91f2b959.jpg"
                                alt="" class="firstimg">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div style="height:80px;"></div>
    </div>
</template>

<script>
import { Toast } from 'vant'
// import Footer from '@/components/footer';
export default {
    data() {
        return {
            images: [
                "https://admin.xianyuxx.motorcycles/upload/b41e05aba2905e8d/76900ad9488ebe24.jpg",
                "https://admin.xianyuxx.motorcycles/upload/f321d377807a32cc/afe421ea052bda7a.jpg",
                "https://admin.xianyuxx.motorcycles/upload/d03479d2a6f1d6b9/90cb2339ccbbc472.jpg"
            ]
        }
    }
}
</script>

<style lang='less' scoped>
/* 置顶导航条 */
::v-deep(.nav-bar.newnavbar.van-nav-bar) {
    position: fixed;
    /* 固定在顶部 */
    top: 0;
    left: 0;
    width: 100%;
    /* 宽度占满屏幕 */
    z-index: 999;
    /* 确保在最上层 */
    background-color: #c01d1d !important;
    color: #fff !important;
}

.shuadanBtm {
    padding-bottom: 80px;
    /* 根据你 footer 的高度来调整 */
}

/* 标题文字 */
::v-deep(.nav-bar .van-nav-bar__title) {
    color: #fff !important;
}


.shuadanBtm[data-v-3b3fbaa9] {
    padding: 15px
}

.shuadanBtm>div[data-v-3b3fbaa9]:first-child {
    color: #000;
    text-align: center;
    font-weight: 700
}

.shuadanBtm .Rechargelist .item>div[data-v-3b3fbaa9] {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap
}

.shuadanBtm .Rechargelist .item>div>div[data-v-3b3fbaa9] {
    width: 49%
}

.shuadanBtm .Rechargelist .item>div img[data-v-3b3fbaa9] {
    width: 100%;
    height: 27vw;
    -o-object-fit: cover;
    object-fit: cover;
    margin-top: 10px;
    display: block;
    border-radius: 8px
}

.shuadanBtm .Rechargelist .item>div .firstimg[data-v-3b3fbaa9] {
    width: 49%;
    height: 56vw
}
</style>
