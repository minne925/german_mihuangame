<template>
    <div id="app">
        <router-view></router-view>
        <Footer v-if="footerShow"/>
    </div>
</template>

<script>
import Footer from './common/Footer'
export default {
    name: 'app',
    components: {
        Footer
    },
    data() {
        return {
            status: 0,
            // footerPaths:['/Mine','/guide3','/Home','/guide1','/Choose'],
            footerPaths:['/Mine','/guide3','/Home','/guide1','/Contract/index'],
            footerShow:false
        }
    },
    methods: {
        getBaseInfo() {
            this.$http({
                method: 'get',
                url: 'base_info'
            }).then((res) => {
                // if (!localStorage.getItem('token')) {
                //     this.$router.push({ path: '/Login' })
                //  }
                this.$store.commit('setBaseInfoValue', res.data)
            })
        },
        getRouter(){
            if (this.footerPaths.includes(this.$route.path)) {
                this.footerShow = true
            } else {
                this.footerShow = false
            }

        }
    },
    created() {
        // document.title = ''
        this.getBaseInfo()

        this.getRouter();
    },
    watch:{
        '$route' (to, from) {
            this.getRouter();
        }
    }
}
</script>

<style>
body .van-toast {
    font-size: 1rem;
    padding: 4vw;
    line-height: 1.3rem;
    width: 70%;
}
body .van-toast .van-toast__icon {
    font-size: 6.667vw;
}
*,
:after,
:before {
    box-sizing: border-box;
}
</style>
