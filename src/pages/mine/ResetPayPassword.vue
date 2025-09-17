<template>
    <div class="container page">
        <van-nav-bar :title="$t('mine.fundpassword')" class="nav-bar">
            <template #left>
                <van-icon name="arrow-left" color="#fff" @click="back()" />
            </template>
            <template #right>
                <span class="nav-right" @click="save()">{{
                    $t('common.save')
                }}</span>
            </template>
        </van-nav-bar>
        <van-cell-group>
            <!-- <van-field
                v-model="old_password"
                :label="$t('mine.OldPassword')"
                :placeholder="$t('mine.inp_OldPassword')"
                :maxLength="6"
                type="number"
            /> -->
            <van-field v-model="o_new_password" :label="$t('mine.newpassword')"
                :placeholder="$t('mine.inp_newpassword')" :maxLength="6" type="number" />
            <van-field v-model="t_new_password" :label="$t('mine.newpassword')"
                :placeholder="$t('mine.inp_newpassword1')" :maxLength="6" type="number" />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            o_new_password: '',
            t_new_password: '',
            old_password: '',
            userInfo: {}
        }
    },
    methods: {
        back() {
            return window.history.back()
        },
        save() {
            if (
                this.o_new_password === '' ||
                this.o_new_password === null ||
                this.o_new_password === undefined
            ) {
                this.$toast(this.$t('mine.Pleasefillinthecomplete'))
                return false
            }
            if (
                this.t_new_password === '' ||
                this.t_new_password === null ||
                this.t_new_password === undefined
            ) {
                this.$toast.fail(this.$t('mine.Pleasefillinthecomplete'))
                return false
            }
            // if (
            //     this.old_password === '' ||
            //     this.old_password === null ||
            //     this.old_password === undefined
            // ) {
            //     this.$toast.fail(this.$t('mine.Pleasefillinthecomplete'))
            //     return false
            // }
            if (this.o_new_password !== this.t_new_password) {
                this.$toast(this.$t('mine.twicepassword'))
                return false
            }
            this.$http({
                method: 'post',
                url: 'resetPayPassword',
                data: {
                    // old_paypassword: this.old_password,
                    new_paypassword: this.o_new_password
                },
            }).then((res) => {
                if (res.code === 200) {
                    this.$toast(res.msg)
                    this.$router.back();
                } else if (res.code === 401) {
                    this.$toast(res.msg)
                }
            })
        },
        getUserInfo() {
            this.$http({
                method: 'get',
                url: 'user_info'
            }).then((res) => {
                if (res.code === 200) {
                    this.userInfo = res.data
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
        }
    }
}
</script>

<style lang='less' scoped>
@import '../../assets/css/base.css';

.van-cell {
    font-size: 35px;
    line-height: 80px;
}
</style>
