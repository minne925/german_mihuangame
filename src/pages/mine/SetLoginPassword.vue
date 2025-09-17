<template>
    <div class="container page">
        <van-nav-bar :title="$t('mine.Changeloginpassword')" class="nav-bar">
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
            <van-field
                v-model="old_password"
                :label="$t('mine.OldPassword')"
                :placeholder="$t('mine.inp_OldPassword')"
            />
            <van-field
                v-model="o_new_password"
                :label="$t('mine.newpassword')"
                :placeholder="$t('mine.inp_newpassword')"
            />
            <van-field
                v-model="t_new_password"
                :label="$t('mine.newpassword')"
                :placeholder="$t('mine.inp_newpassword1')"
            />
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
            if (
                this.old_password === '' ||
                this.old_password === null ||
                this.old_password === undefined
            ) {
                this.$toast.fail(this.$t('mine.Pleasefillinthecomplete'))
                return false
            }
            if (this.o_new_password !== this.t_new_password) {
                this.$toast(this.$t('mine.twicepassword'))
                return false
            }
            this.$http({
                method: 'get',
                data: {
                    old_password: this.old_password,
                    new_password: this.o_new_password
                },
                url: 'user_set_loginpw'
            }).then((res) => {
                if (res.code === 200) {
                    this.$toast(res.msg)
                    setTimeout(() => {
                        localStorage.clear()
                        this.$router.push('Login')
                    }, 500)
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
