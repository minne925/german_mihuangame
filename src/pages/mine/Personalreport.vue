<template>
    <div class="container page">
        <div class="header">
            <van-nav-bar :title="$t('mine.personalreport')" class="nav-bar">
                <template #left>
                    <van-icon name="arrow-left" color="#fff" @click="back()" />
                </template>
            </van-nav-bar>
            <div class="info">
                <p class="tip">{{'Übersicht über die Informationsseite zum Mitgliedskonto' }}</p>
            </div>
            <div class="content">
                <div class="datalist">
                    <div class="datalistitem">
                        <div class="datalistitemValue">
                            {{ this.userInfo.point }}
                        </div>
                        <div class="datalistitemKey">
                            Kredit-Score                        
                        </div>
                        <div class="datalistitemRightLine"></div>
                    </div>
                    <div class="datalistitem">
                        <div class="datalistitemValue">
                           <span v-if="userInfo.level_new==0">Ordentliches Mitglied</span>
                           <span v-else-if="userInfo.level_new==1">Standardmitglied</span>
                           <span v-else>Premium-Mitglied</span>

                        </div>
                        <div class="datalistitemKey">
                            Mitgliedschaftsrang
                        </div>
                        <div class="datalistitemRightLine"></div>
                    </div>
                    <div class="datalistitem">
                        <div class="datalistitemValue">
                            <!-- {{ this.personalreport.withdrawal }} -->
                            <span style="color: red;" v-if="userInfo.is_rz == 1">
                                <span style="color: green;">Verifiziert</span>(Inaktiv)
                            </span>
                            <span v-else style="color: red;">
                                Nicht zertifiziert
                            </span>
                        </div>
                        <div class="datalistitemKey">
                            Kontostatus 
                        </div>
                        <div class="datalistitemRightLine"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            win_money: 0,
            personalreport: {},
            userInfo:{}
        }
    },
    methods: {
        getUserInfo() {
            this.$http({
                method: 'get',
                url: 'user_info'
            }).then((res) => {
                if (res.code === 200) {
                    this.userInfo = res.data
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
        back() {
            return window.history.back()
        },
        getPersonalreport() {
            this.$http({
                method: 'get',
                url: 'user_get_personalreport'
            }).then((res) => {
                if (res.code === 200) {
                    this.personalreport = res.data
                    this.win_money =
                        this.personalreport.win_money -
                        this.personalreport.play_money
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        }
    },
    created() {
        if (!localStorage.getItem('token')) {
            this.$router.push({ path: '/Login' })
        } else {

            this.getUserInfo()
            this.getPersonalreport()
        }
    }
}
</script>

<style lang='less' scoped>
@import '../../assets/css/base.css';
.container .header {
    // background: linear-gradient(270deg, #e6c3a1, #7e5678);
    // background: linear-gradient(90deg,#6529c9,#cc2996);
    // background: #a06098;
    background: @primary-color;
}
.container .header .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    padding-top: 10px;
    margin: auto;
}
.container .header .info .title {
    font-size: 25px;
    color: #e5e5e5;
}
.container .header .info .value {
    margin: 10px auto;
    color: #fff;
    font-size: 50px;
    border-bottom: 1px solid #fff;
}
.container .header .info .tip {
    font-size: 30px;
    color: #e5e5e5;
}
.container .content {
    flex: 1;
    background: #f2f2f5;
}
.container .content .datalist {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
}
.container .content .datalist .datalistitem {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
    width: 33.3%;
}
.container .content .datalist .datalistitem .datalistitemValue {
    color: #ff253f;
    font-size: 23px;
    margin-bottom: 10px;
    margin-top: 10px;
}
.container .content .datalist .datalistitem .datalistitemKey {
    color: #979799;
    font-size: 25px;
    margin-bottom: 10px;
    margin-top: 10px;
}
</style>
